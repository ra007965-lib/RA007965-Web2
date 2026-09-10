const frm = document.querySelector("form");
const tempo = document.querySelector("#outTempo");
const troco = document.querySelector("#outTroco");
frm.addEventListener("submit", (e) => {
    e.preventDefault();
    const valor = Number(frm.inValor.value);
    if (valor < 1) {
        tempo.innerText = "Valor Insuficiente";
        troco.innerText = "";
        return;
    }
    let tempoEstacionamento;
    let valorPago;
    if (valor < 1.75) {
        tempoEstacionamento = 30;
        valorPago = 1;
    } else if (valor < 3) {
        tempoEstacionamento = 60;
        valorPago = 1.75;
    } else {
        tempoEstacionamento = 120;
        valorPago = 3;
    }
    const valorTroco = valor - valorPago;
    tempo.innerText = `Tempo: ${tempoEstacionamento} min`;
    troco.innerText = `Troco R$: ${valorTroco.toFixed(2)}`;
});