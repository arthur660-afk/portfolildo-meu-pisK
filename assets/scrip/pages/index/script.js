const navlateral = document.getElementById("nav-lateral");//id da div da navbar lateral
const tnome = document.getElementById("aut-name");//pegar o nome do usuario

let nome = window.prompt("Qual é o seu nome?");
const funcao = {//função para aparecer a navbar
    navlat: () => {
        if (navlateral.style.opacity === "1") {
            navlateral.style.opacity = "0";
            navlateral.style.transition = "all 0.7s";
        } else {
            navlateral.style.opacity = "1";
            navlateral.style.transition = "all 0.4s";
        }
    },
};

let anonimo = nome ?? "visitante"

tnome.innerHTML = `Seja bem-vindo ao meu site, ${anonimo}! 😇😊😊`;//msg com o nome


navlateral.addEventListener("mouseleave", funcao.sumir);

const butão = document.getElementById("navblat");//pegar o botao
butão.addEventListener("click", funcao.navlat);//adicionar o evento de click


