"use strict";

// const { localPrebuild } = require("prebuild-install/util");

const render = new Image();
render.src = "./data/renders.png";
let grid = document.getElementById("Grid");
let precounter = 0;
let counter = 0;
let id = 0;
let bool = false;


let images = ["G1","G2","G3","G4","GLIFE","GMANA","L1","L2","L3","L4","O1","O2","O3","O4"];
let imageObjs = [];
// hard coded as test

function appendChild(bool) {
    if (!bool) {
        grid.appendChild(imageObjs[counter]);
    } else {
        grid.appendChild(imageObjs[counter].cloneNode());
    }
}

function load() {
    console.log('heretoo')
    let intervalID = setInterval(() => {
        if (counter < 13) {
            imageObjs[counter].id = id;
            appendChild(bool);
            counter++;
        // } else clearInterval(intervalID);
        } else {
            counter = 0;
            bool = true;
        }
    }, 1);
}

function preload() {
    if (precounter < 13) precounter++;
    else load();
}   


for (const imgName of images) {
    imageObjs.push(new Image());
    imageObjs.at(-1).onload = preload;
    imageObjs.at(-1).src = `./data/o3/${imgName}.png`;
}



