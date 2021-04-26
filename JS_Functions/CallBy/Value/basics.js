var quidditchWinner = "harry Potter"
function changeWinner(winner){
    console.log('winner is ', winner);
    winner='Darco';
    console.log('Changed Winner is ', winner)
}
changeWinner(quidditchWinner);
//vaue won't change outside the function
console.log("quidditchwinner is ", quidditchWinner);