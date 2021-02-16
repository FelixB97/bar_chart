"use strict";
window.addEventListener("DOMContentLoaded", start);

const queArray = [];
let randomnumber;

function getNumberOfCustomers() {
    randomnumber = Math.floor(Math.random()*32);
}

function start() {
    console.log("DOM loaded");
    startArray();
}

function startArray() {
    getNumberOfCustomers();
    createQueBars();
    beginArrayLoop();
}

function createQueBars() {
    console.log("createQueBars");
    document.querySelector("#container").innerHTML = "";
    
        for (let i = 0; i <= 40; i++) {
            const bar = document.createElement("div");
            bar.classList.add("bar");
            document.querySelector("#container").append(bar);
        }
    }

    function beginArrayLoop() {
    // console.log(randomnumber)
   queArray.unshift(randomnumber);
    // console.log(queArray);
    for(let i = 0; i <= 40; i++) {
        getNumberOfCustomers();
        const bars = document.querySelectorAll("#container .bar");
        const bar = bars[i];
        bar.style.height = queArray[i]/32*100 + "px";
        bar.style.background = "red";
    }
   
    setTimeout(beginArrayLoop, 1000);
}

