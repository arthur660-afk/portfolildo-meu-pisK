const tnome = document.getElementById("aut-name");//pegar o nome do usuario
let nome = window.prompt("Qual é o seu nome?");
if  (nome === null || nome === "") {
    nome = "Visitante";
};
tnome.innerHTML = `Seja bem-vindo ao meu site, ${nome}! 😇😊😊`;//msg com o nome

const navlateral = document.getElementById("nav-lateral");//id da div da navbar lateral

navlateral.addEventListener("mouseleave", sumir );

function sumir() {//função para sumir a navbar
    navlateral.style.opacity = "0";
    navlateral.style.transition = "all 0.5s";
};


const butão = document.getElementById("navblat");//pegar o botao
butão.addEventListener("click", navlat);//adicionar o evento de click

function navlat() {//função para aparecer a navbar
    
    navlateral.style.opacity = "1";
    navlateral.style.transition = "all 0.5s";
}
