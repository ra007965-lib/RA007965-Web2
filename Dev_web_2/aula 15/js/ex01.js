const frm=document.querySelector("form")
const respNome = document.querySelector("span")
const respLista = document.querySelector("pre")

const pacientes = []
frm.addEventListener("submit", (e)=>{
    e.preventDefault();
    const nome = frm.inPaciente.value
    pacientes.push(nome)
    let listas = ""
    pacientes.forEach((paciente,i)=>{
        listas += `${i+1}. ${paciente}\n`
    })
    respLista.innerText = listas
    frm.inPaciente.value = ""
    frm.inPaciente.focus();
})

frm.btUrgencia.addEventListener("click", ()=>{
    if (!frm.checkValidity){
        alert("Informe o nome do paciente a ser atendido em carater de urgencia")
        frm.inPaciente.focus()
        return
    }
    const nome = frm.inPaciente.value
    pacientes.unshift(nome)
    let.listas = ""
    pacientes.forEach((paciente,i) ()=>{
        listas += `${i+1}${paciente}\n`
        respLista.innertext= Listas
        frm.inPaciente.value=""
        frm.inPaciente.focus()
    })
})

frm.btAtender.addEventListener("click" ()=>{
    if (paciente.lenght==0){
        alert("Não há Pacientes na lista de Espera")
        frm.inPaciente.focus()
        return
    }
    const atender = paciente.shift()
    respNome.innerText = atender
    let Listas=""
    pacientes.forEach((paciente,i)=>(listas+))
})