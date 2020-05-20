const container=document.querySelector("#container");

function makeRows(rows,cols){
    container.style.setProperty('--grid-rows',rows);
    container.style.setProperty('--grid-cols',cols);
    for (let i=0;i<(rows*cols);i++){
        let cell=document.createElement("div");
        container.appendChild(cell).className="grid-item";
    };
};
function getRandomColor(){
    return "#"+((1<<24)*Math.random()|0).toString(16);
}
function colorItWhite(e){
    e.target.style.background="black";
}
function colorItBlack(e){
    e.target.style.background=getRandomColor();
}
function erase(){
    const cells=Array.from(document.querySelectorAll(".grid-item"));
    cells.forEach(g => g.addEventListener("mousedown",colorItWhite));
}
function activate(){
    const cells=Array.from(document.querySelectorAll(".grid-item"));
    cells.forEach(g => g.addEventListener("mouseover",colorItBlack));
}

function sizeDraw(){
    let len=window.prompt("How many pixels do you want per side?");
    //set up grid and draw
    makeRows(len,len);
    activate()
    // const header=document.querySelector("#header");
    // const eraser=document.createElement("button");
    // eraser.textContent="Eraser Mode";
    // header.appendChild(eraser)
    // eraser.addEventListener('click',erase);
}
document.querySelector('#start').addEventListener('click',sizeDraw);

