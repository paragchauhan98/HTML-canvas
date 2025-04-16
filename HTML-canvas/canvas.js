let canvas = document.querySelector("canvas");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let context = canvas.getContext("2d");

context.fillRect(100,100,100,100);
context.fillRect(200,200,100,100);
context.fillRect(600,900,100,100);
context.fillRect(200,600,100,100);
context.fillRect(500,600,100,100);