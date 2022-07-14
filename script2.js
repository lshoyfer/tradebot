"use strict";

// const { localPrebuild } = require("prebuild-install/util");

const render = new Image();

const canvas = document.createElement("canvas");
const ctx = canvas.getContext("2d");
canvas.width = 1000;
canvas.height = 5600;


render.onload = () => {
    // const renderData = new ImageData(1000, 5600);
    // console.log(renderBitMap);
    ctx.drawImage(render, 0, 0);
    const renderData = ctx.getImageData(0, 0, canvas.width, canvas.height);
    console.log(renderData);
}
render.crossOrigin = "Anonymous";
render.src = "./data/renders.png";

// console.log(renderData);

