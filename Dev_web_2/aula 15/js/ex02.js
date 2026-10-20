const frm=document.querySelector("form")
const respDica=document.querySelector("#outDica")
const respErros=document.querySelector("#outErros")
const respChances=document.querySelector("#out")
const erros =[]
const sorteado = Math.floor(Math.random()*100)+1;
const CHANCES = 6;
frm.addEventListener("submit"(e)=>{
    e.preventDefault();
    const numero = Number(frm.inNumero.value);
    if(numero==sorteado){
        respDica.innerText=`Parabens!! Numero Sorteado: ${sorteado}`
        frm.btSubmit.disabled = true;
        frm.btNovo.className = 'Exibe';
    } else{
        if (erros.includes(numero)){
            alert("Você já apostou esse numero!")
        } else {
            erros.push(numero)
            const numErros = erros.length
            const numChances = CHANCES - numErros
            respErros.innerText=`${numErros} (${erros.join("")})`
        }
        respChances.innerText=numChances
        if (numChances==0){
            alert("Suas Chances Acabaram...")
            frm.btSubmit.disabled=true
            frm.btNovo.className="exibe"
            respDica.innerText=`Game Over!! PERDEU TODO O SEU DINHEIRO OTARIO O NUMERO ERA ${sorteado}`
        } else {
            const dica = numero <sorteado?"maior": "menor";
            respDica.innerText=`Dica: tente um numero ${dica} que o numero ${numero}`
        }
    }
})

frm.btNovo.addEventListener("click", ()=>{
    location.reload()
})