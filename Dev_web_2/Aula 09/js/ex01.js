const frm = document.querySelector("form");
const resp1 = document.querySelector("h3");
const resp2 = document.querySelector("h4");

frm.addEventListener("submit", (e)=>{
    e.preventDefault();
    const nome = frm.inNome.value;
    const nota1 = frm.inNota1.value;
    const nota2 = frm.inNota2.value;
    const media = (nota1 + nota2)/2;
    resp1.innerText = `Media das notas é: ${media.toFixed(2)}`
    if(media >= 7){
        resp2.innerText = `${nome} você foi aprovado`
        resp2.style.color="orange";
    } else if (media < 7 || media >= 4) {
        resp2.innerText = `${nome} você esta de recuperação`
        resp2.style.color="pink";
    } else {
        resp2.innerText = `${nome} você esta reprovado`
        resp2.style.color="red";
    }
})