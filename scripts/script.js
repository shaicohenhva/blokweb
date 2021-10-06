// JavaScript Document
console.log("hooi")

// plusbutton opslaan uit de DOM:
var plusButtonOne = document.querySelector(".plus-Btn-One");
var plusButtonTwo = document.querySelector(".plus-Btn-Two");
var plusButtonThree = document.querySelector(".plus-Btn-Three");
var plusButtonFour = document.querySelector(".plus-Btn-Four");

var listItemOne = document.querySelector(".itemOne");
var listItemTwo = document.querySelector(".itemTwo");
var listItemThree = document.querySelector(".itemThree");
var listItemFour = document.querySelector(".itemFour");

function showText(){
    listItemOne.classList.toggle("showTextOne");
    console.log('deze function werkt 1');
}

plusButtonOne.addEventListener("click", showText);


function showTextTwo(){
    listItemTwo.classList.toggle("showTextTwo");
    console.log('deze function werkt 2');
}

plusButtonTwo.addEventListener("click", showTextTwo);


function showTextThree(){
    listItemThree.classList.toggle("showTextThree");
    console.log('deze function werkt 3');
}

plusButtonThree.addEventListener("click", showTextThree);

function showTextFour(){
    listItemFour.classList.toggle("showTextFour");
    console.log('deze function werkt 4');
}

plusButtonFour.addEventListener("click", showTextFour);

// Bron: https://www.youtube.com/watch?v=TvVY8c1uvG8&ab_channel=WEBCIFAR
// Voor de display: none en display: inline block

// Bron: https://codepen.io/shooft/pen/RwgGdvr