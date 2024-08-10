let boxes=document.querySelectorAll(".box")
const winPatterns=[[0,1,2],[0,4,8],[0,3,6],[1,4,7],[2,5,8],[2,4,6],[3,4,5],[6,7,8]]
let turn=true;
let msgcontainer=document.querySelector('.msg-container')
let game=document.querySelector(".game")
let newgame=document.querySelector(".btn")
let reset=document.querySelector(".reset")


const resetGame=()=>{
    turn=true;
    enableBtn();
    msgcontainer.classList.add('hide')
}
const NewGame=()=>{
    turn=true;
    enableBtn();
    msgcontainer.classList.add('hide')
    game.classList.remove('hide')
    reset.classList.remove('hide')
}


newgame.addEventListener("click",()=>{
    NewGame();
})

reset.addEventListener("click",()=>{
    resetGame();
})




let disableBtn=()=>{
    for(let box of boxes){
        box.disabled=true
    }
}
let enableBtn=()=>{
    for(let box of boxes){
        box.disabled=false
        box.innerText=""
    }
}

let winner=(posVal)=>{
   
    msgcontainer.classList.remove('hide')
    let msg=document.querySelector('.msg')
    msg.innerText=`Winner is ${posVal}`
    game.classList.add('hide')
    reset.classList.add('hide')
    
    
}




const checkWinner=()=>{
for(let pattern of winPatterns){
    // console.log(boxes[pattern[0].innerText],boxes[pattern[1]],boxes[pattern[2]])
    let posVal1=boxes[pattern[0]].innerText
    let posVal2=boxes[pattern[1]].innerText
    let posVal3=boxes[pattern[2]].innerText
   if(posVal1 != "" && posVal2 != "" && posVal3 != ""){
    if(posVal1 === posVal2 && posVal2 ===posVal3)
    {
       winner(posVal1)
       disableBtn();
       
    
    }
   }
 }
}


boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        // console.log("I was clicked")
        if(turn){
          box.innerText="X";
          turn= false;
        //   console.log(turn)
        }
        else{
           box.innerText="O";
           turn= true;
         }

         box.disabled=true
         checkWinner()
        
    })


})
    

