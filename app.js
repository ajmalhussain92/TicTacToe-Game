function showTime(){
    document.getElementById("currentTime").innerHTML=new Date().toUTCString();
}
showTime();

setInterval(function(){
    showTime();
});

let boxes = document.querySelectorAll(".box");
let newBtn = document.querySelector("#new-btn");
let resetBtn = document.querySelector("#reset-btn");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");

let gmBx = document.querySelector(".game");

let turnO = true;

const winPatterns = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8]
];

boxes.forEach((box) => {
    box.addEventListener('click',()=>{
        if(turnO){
            box.textContent = "O";  //setting value
            box.disabled = true;
            turnO = false;
        }else{
            box.textContent = "X";
            box.disabled = true;
            turnO = true;
        }
        checkWinner();
    })
})

const enableBoxes = () => {
    for(let box of boxes){
        box.disabled = false;
        box.innerText = "";
        msgContainer.classList.add("hide");
    }
}

const disableBoxes = () => {
    for(let box of boxes){
        box.disabled = true;
    }
}

const showWinner = (winner) => {
    msg.innerText = `Congrats! Wniner is ${winner}`;
    msgContainer.classList.remove("hide");
    newBtn.classList.remove("hide");
    gmBx.classList.add("hide");
}

const checkWinner = () => {
    for(pattern of winPatterns){
        console.log(pattern[0], pattern[1], pattern[2]);
        console.log(
            boxes[pattern[0]].innerText,
            boxes[pattern[1]].innerText,
            boxes[pattern[2]].innerText
        );
        let pos1Val = boxes[pattern[0]].innerText;
        let pos2Val = boxes[pattern[1]].innerText;
        let pos3Val = boxes[pattern[2]].innerText;

        if(pos1Val != "" && pos2Val != "" && pos3Val != ""){
            if(pos1Val === pos2Val && pos2Val === pos3Val){
                showWinner(pos1Val);
                box.disabled = true;
            }
        }
    }
}

resetBtn.addEventListener('click', () => {
    enableBoxes();
    gmBx.classList.remove("hide");
})

newBtn.addEventListener('click', () => {
    gmBx.classList.remove("hide");
    newBtn.classList.add("hide");
    enableBoxes();
})

// let color = "maroon";
let bg_btn = document.querySelector(".bg-btn");

bg_btn.addEventListener('click', ()=> {
    body.classList.add("#them1");
});
