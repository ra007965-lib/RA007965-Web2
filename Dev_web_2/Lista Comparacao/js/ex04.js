const frm = document.querySelector("form");
const resp = document.querySelector("#outResp");
frm.addEventListener("submit", (e) => {
    e.preventDefault();
    const ladoA = Number(frm.inLadoA.value);
    const ladoB = Number(frm.inLadoB.value);
    const ladoC = Number(frm.inLadoC.value);
    if (ladoA + ladoB > ladoC && ladoA + ladoC > ladoB && ladoB + ladoC > ladoA) {
        if (ladoA == ladoB && ladoB == ladoC) {
            resp.innerText = "Os lados formam um triângulo Equilátero";
        } else if (ladoA == ladoB || ladoA == ladoC || ladoB == ladoC) {
            resp.innerText = "Os lados formam um triângulo Isósceles";
        } else {
            resp.innerText = "Os lados formam um triângulo Escaleno";
        }
    } else {
        resp.innerText = "Os lados não podem formar um triângulo";
    }
});