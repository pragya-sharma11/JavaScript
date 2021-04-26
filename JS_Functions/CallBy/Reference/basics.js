//objects always follow call by rference!!!
var quidditchWinners =[
    "harry", "Ron", "Hermoine"
];

function changeWinners(winners){
    winners[0]="Darco";
    winners[1]="Crabbe";
    winners[2]="Pansy";
}

console.log("Winners are " + quidditchWinners)

changeWinners(quidditchWinners)
console.log("Now thw winners are " + quidditchWinners)