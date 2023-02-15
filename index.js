let playertext = document.getElementById('playerText');
const O_text = "O";
const X_text = "X";
let boxes = Array.from(document.getElementsByClassName('box'));
let currentPlayer = X_text;
let restartButn = document.getElementById('restartButn');
let spaces = Array(9).fill(null);

console.log(spaces);

const startGame = () => {
    boxes.forEach(box => box.addEventListener('click' , boxclicked))
}



function boxclicked(e){
  
    const id = e.target.id;

    if(!spaces[id]){
        spaces[id] = currentPlayer;
        e.target.innerText = currentPlayer;

        if(playerHasWon() != false){

            playertext.innerHTML = currentPlayer + " has won!";
            console.log(playertext);

            let winning_block = playerHasWon();
           
           winning_block.map(box => boxes[box].style.backgroundColor='RGB(101 150 152)');
           winning_block.map(box => boxes[box].style.color='white');

           return;
            
        }
        // if(playerHasWon() == false ){
        //    spaces.forEach(id => {
        //     console.log(id);
        //    });
        //     playertext.innerHTML = "Match Draw!!"
        // }

        currentPlayer = currentPlayer== O_text ? X_text : O_text;
    }
}

const winningCombo = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6],

];

function playerHasWon (){

    for(const condition of winningCombo){

        let [a,b,c] = condition;

        if(spaces[a] && spaces[a] == spaces[b] && spaces[a] == spaces[c]){
            return [a,b,c];
        }
    }
    return false;
    
}

restartButn.addEventListener('click',restart);

function restart(){
    
    spaces.fill(null);

    boxes.forEach(box => {
        box.innerText = "";
        box.style.backgroundColor = '';
        box.style.color = '';
    });
    playertext.innerHTML = "Tic-Tac-Toe"
    currentPlayer = X_text;

}

startGame();