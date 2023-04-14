let restart_game = document.querySelector(".restart_game")
// let status = document.querySelector(".status")
let Mystatus = document.getElementById("status")
// let boxes = document.querySelector(".boxes")
let boxes = Array.from(document.getElementsByClassName("box"))

const X_text = "X"
const O_text = "O"
let current_player = X_text
let spaces = Array(9).fill(null)
 
const start_game = ()=>{
    for(let i = 0; i < boxes.length; i++){
        boxes[i].addEventListener('click', boxClicked)
    }
    // restart_game.addEventListener("click", boxClicked)
}

function boxClicked(e){
    // console.log(e.target)
    const id = e.target.id
    if(!spaces[id]){
        spaces[id] = current_player
        e.target.innerText = current_player

        current_player = current_player == X_text ? O_text : X_text
    }

    if(playerWins() !==false ){
        for(let i = 0; i < new_conditon.length; i++){
             let winnning_combo = playerWins()
            // console.log(new_conditon[i])
        Mystatus.innerText = "X player has won"
        restart_game.style.backgroundColor = "green" 
        boxes[new_conditon[i]].style.backgroundColor = 'green'
        }
       
        

}
}

let winners = [
    [0,1,2],
    [3,4,5],
    [2,4,6],
    [6,7,8],
    [2,5,8],
    [0,4,8],
    [0,3,6],
    [1,4,7]
]
function playerWins(){
    for (new_conditon of winners){
        let [a,b,c] = new_conditon

            if(spaces[a]  && (spaces[a] == spaces[b] && spaces[a] == spaces[c]))
                return[a,b,c]
    }
    return false


}


restart_game.addEventListener('click',clear)
function clear (){
    spaces.fill(null)
    for(let i = 0; i < boxes.length; i++){
        boxes[i].innerText = ""
        boxes[i].style.backgroundColor = ''
    }
    current_player = X_text
    Mystatus.innerText = "TicTacToe"
    // boxes[new_conditon[i]].style.backgroundColor = 'blue'
    restart_game.style.backgroundColor = "brown" 
}
clear()


start_game()