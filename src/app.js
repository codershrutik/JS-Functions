// function collectEggs(){
//     let totalEggs = 6;
//     console.log(totalEggs);
// }

// console.log(totalEggs);
// collectEggs();
// console.log(totalEggs);

// let bird = 'Parrot';
// function birdWatch(){
//     let bird = 'Pigeon';
//     console.log(bird);
// }

// let radius = 8;
// if(radius>0){
//     const PI = 3.14159;
//     let msg = 'HIII';
// }

// console.log(radius);
// console.log(PI);

// for(let i=0; i<5;i++){
//     var msg = "akdhakjdb";
//     console.log(msg);
// }
// console.log(msg);
// console.log(i);

// function bankRobbery(){
//     const heroes = ['Spierman','Batman','Black Panther'];
//     function cryForHelp(){
//         for(let heroes of heroes){
//             console.log(`Please help me, ${hero.toUpperCase()}`);
//         }
//     }
//     cryForHelp();
// }

// function add(x,y){
//     return x+y;
// }

// const add = function(x,y){
//     return x+y;
// }

function callTwice(func){
    func();
    func();
}
function rollDie(){
    const roll = Math.floor(Math.random() * 6)+1;
    console.log(roll);
}
callTwice(rollDie);