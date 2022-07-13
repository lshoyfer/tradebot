"use strict";

const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const renders = new Image()

renders.onload = () => {
    ctx.drawImage(renders, canvas.width/8, 10);
}

canvas.addEventListener("scroll")

renders.src = "./data/renders.png";

class Sprite {
    constructor()
}