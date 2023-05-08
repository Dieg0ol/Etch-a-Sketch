let color = "black";
let click = true;


function populateBoard(size) {
    let board = document.querySelector(".board"); // seleciona o item board no html
    let squares = board.querySelectorAll("div");
    squares.forEach((div) => div.remove());
    board.style.gridTemplateColumns = `repeat(${size} , 1fr)`; // define o numero de colunas como 16
    board.style.gridTemplateRows = `repeat(${size} , 1fr)`;   // define o numero de linhas como 16

    let amount = size * size;
for (let i = 0; i < amount; i++){
    let square = document.createElement("div");
    square.addEventListener("mouseover", colorSquare);
    square.style.backgroundColor = "white";
    board.insertAdjacentElement("beforeend", square);
    }
}

populateBoard(16);

function changeSize(input) {
    if (input >= 2 && input <= 100) { // verifica se tem mais de 2 e menos que 100
        document.querySelector('.error').style.display = 'none';
        populateBoard(input);
    }else {
        document.querySelector('.error').style.display = 'flex';

    }
}

function colorSquare(){
    if(click) {
        if (color === "random"){
            this.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`;
        }else {
            this.style.backgroundColor = color;
        }

    }
}
 
function changeColor(choice) {
    color = choice;
}



function resetBoard() {
    let board = document.querySelector(".board"); // seleciona o item board no html
    let squares = board.querySelectorAll("div");
    squares.forEach((div) => div.style.backgroundColor = "white");

}
document.querySelector("body").addEventListener("click", (e)=>{
    if(e.target.tagName != "BUTTON") {
        click = !click;
        if(click) {
            document.querySelector(".mode").textContent = "Mode: Coloring";
        }else {
            document.querySelector(".mode").textContent = "Mode: Not Coloring";
        }
    }
})

/* revisar depois*/















