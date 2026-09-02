const frm = document.querySelector("form");
const resp1 = document.querySelector("#outresp1");
const resp2 = document.querySelector("#outresp2");
const resp3 = document.querySelector("#outresp3");

frm.addEventListener("submit", (e)=>{
    e.preventDefault();
    const saque = Number(frm.saque.value)
    if (saque % 10 != 0){
        alert("Valor Invalido para Notas Disponiveis (R$10,R$50,R$100)")
        frm.inSaque.focus();
        return;
    } 
    const notasCem = Math.floor(saque/100);
    let resto = saque % 100;
    const notasCinquenta = Math.floor(saque/50);
    resto = saque % 50;
    const notasDez = Math.floor(saque/10);

    if (notasCem > 0){
        resp1.innerText = `Notas de R$100: ${notasCem}`
    }
    if (notasCinquenta > 0){
        resp2.innerText = `Notas de R$50: ${notasCinquenta}`
    }
    if (notasDez > 0){
        resp3.innerText = `Notas de R$10: ${notasDez}`
    }

})