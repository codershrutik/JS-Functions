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

// function callTwice(func){
//     func();
//     func();
// }
// function rollDie(){
//     const roll = Math.floor(Math.random() * 6)+1;
//     console.log(roll);
// }
// callTwice(rollDie);

// function makeMysteryFunc(){
//     const rand = Math.random();
//     if(rand>0.5){
//         return function(){
//             console.log("You won the lottery");
//         }
//     } else{
//         return function(){
//             alert("YOU HAVE A COMPUTER VIRUS");
//             alert("STOP TRYING TO CLOSE THIS WINDOW");
//             alert("STOP TRYING TO CLOSE THIS WINDOW");
//             alert("STOP TRYING TO CLOSE THIS WINDOW");
//             alert("STOP TRYING TO CLOSE THIS WINDOW");
//             alert("STOP TRYING TO CLOSE THIS WINDOW");
//         }
//     }
// }

// function isBetween(num){
//     return num>=50 && num<=100
// }
// function isBetween2(num){
//     return num>=1 && num<=10
// }

function makeBetween(min, max){
    return function(num){
        return num>= min && num<=max;
    }
}

const myMath = {
    PI: 3.14159,
    square: function(num){
        return num * num;
    },
    cube: function(num){
        return num * num * num;
    }
}