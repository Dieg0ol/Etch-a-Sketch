const containerDiv = document.querySelector("#container");

function makeRows(rows, columns) {
    containerDiv.style.setProperty("--grid-rows", rows);
    containerDiv.style.setProperty("--grid-Columns", columns);
    console.log(containerDiv);
    console.log(rows);
    console.log(columns);
    for (i = 0; i < (rows * columns); i++) {
        let square = document.createElement("div");
        square.innerHTML = (i + 1);
        containerDiv.appendChild(square).clssName = "grid-items";
    }
}

makeRows(16, 16);




























/*
const containerDiv = document.querySelector("#container") // armazena o container do html no containerDiv.
let gridCount = 0; // inicia a variavél gridCount com o valor 0.

while (gridCount < 32) {
    const gridDivs = document.createElement("div") // variavel gridDivs cria o elemento div.
    gridDivs.classList.add("content"); // adiciona as divs criada por gridDivs a classe "content".
    gridDivs.textContent = "HELLO!"; // escreve dentro dessas divs a  palavra "hello".
    containerDiv.appendChild(gridDivs); // adiciona gridDivs(filho) dentro do containerDiv(pai).
    gridCount++; // enquanto for menor que 32 ele adiciona + 1.
    console.log(gridCount); // mostra a contagem dos gridCount.
}
*/


