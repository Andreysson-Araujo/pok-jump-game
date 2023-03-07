const pok = document.querySelector(".pok");
const obj = document.querySelector(".obj")
let score = 0

const jump = () => {
  pok.classList.add("jump");
  pok.src = "./img/spritelag_7.png"

  setTimeout(() =>{
    pok.classList.remove("jump");
    pok.src="./img/pok.webp"

  }, 500);
};

// vai ser criado um loop para fazera verificação infinita se o jogador 
//continua jogando ou se o mesmo perdeu
const loop = setInterval(() => {
  const objPosition = obj.offsetLeft;
  
  const pokPosition = + window.getComputedStyle(pok).bottom.replace("px","");
  
  if (objPosition < 80 && objPosition > 0 && pokPosition < 35) {

    obj.style.animation = "none";
    obj.style.left = `${objPosition + 87}px`;
  
    clearInterval(loop);
  
    // ajusta a posição da "pok" para que pare na colisão
    pok.style.bottom = `${-47}px`;
    pok.style.left = `${objPosition}px`;

    
  
    // remove o evento de salto
    document.removeEventListener("keydown", jump);
    document.removeEventListener("click", jump);
  
    // exibe uma mensagem de perda para o jogador
    window.alert(`Você perdeu!!\nVocê fez ${score} pontos`)
  } else{
    score++;
    document.getElementById("score").textContent = score;
    setInterval(() => {
      document.getElementById("score").textContent = score;
    }, 100);
    

  }
}, 80)


//adicionando no nosso documento um adicionador de eventos com a função jump
document.addEventListener("keydown", jump);
document.addEventListener("click", jump)

