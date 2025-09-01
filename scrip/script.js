const tnome = document.getElementById("aut-name");
let nome = "Visitante";
nome = window.prompt("Qual é o seu nome?");
if  (nome === null || nome === "") {
    nome = "Visitante";
}
tnome.innerHTML = `Seja bem-vindo ao meu site, ${nome}! 😇😊😊😓`;

