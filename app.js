let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset-btn");
let newGame = document.querySelector("#new-btn");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");


let turnO = true;//player X, player O

const winpatterns = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8]
];

boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        
       if(turnO){
         box.innerText = "O";
         turnO = false;
         box.style.color = "white";
         box.style.backgroundColor = "red"
       }else{
        box.innerText = "X";
        turnO = true;
        box.style.color = "white";
         box.style.backgroundColor = "blue"
       }
       box.disabled = true;

       checkwinner();
    });
});

const disableBoxes =()=>{
    for(let box of boxes){
        box.disabled = true;
    }
}

const enableBoxes =()=>{
    for(let box of boxes){
        box.disabled = false;
        box.innerText="";
        box.style.backgroundColor="white";
    }
}

const resetGame =() => {
    turnO = true;
    enableBoxes();
    msgContainer.classList.add("hide");
}


const showWinner = (winner) => {
  msg.innerText = `Congratulation, Winner is "${winner}" `;
  msgContainer.classList.remove("hide");
  disableBoxes();
}

const showDraw = (winner) => {
  msg.innerText = `Congratulation, Winner is "${winner}" `;
  msgContainer.classList.remove("hide");
  disableBoxes();
}

const Draw = () => {
   for ( let pattern of winpatterns){

     let pos1val = boxes[pattern[0]].innerText;
    let pos2val = boxes[pattern[1]].innerText;
    let pos3val = boxes[pattern[2]].innerText;
  
     if(pos1val != "" && pos2val !="" && pos3val != ""){
        if(pos1val !== pos2val && pos2val !== pos3val){
            showDraw(pos1val);
        }
    }
}
}

const checkwinner = () => {
    for ( let pattern of winpatterns){

     let pos1val = boxes[pattern[0]].innerText;
    let pos2val = boxes[pattern[1]].innerText;
    let pos3val = boxes[pattern[2]].innerText;

    if(pos1val != "" && pos2val !="" && pos3val != ""){
        if(pos1val === pos2val && pos2val== pos3val){
            showWinner(pos1val);
        }
    }
    }
}

newGame.addEventListener("click",resetGame);
resetBtn.addEventListener("click",resetGame);
