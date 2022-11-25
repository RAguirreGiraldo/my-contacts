'use strict';

function onEvent(event, selector, callback) {
  return selector.addEventListener(event, callback);
}

function getElement(selector, parent = document) {
  return parent.getElementById(selector);
}

function select(selector, parent = document) {
  return parent.querySelector(selector);
}


const height_canvas = 600,
width_canvas = 600;

const canvas = document.querySelector("#canvas");
canvas.width = width_canvas;
canvas.height = height_canvas;

const contexto = canvas.getContext("2d");
contexto.lineWidth = 5;
contexto.strokeStyle = "#212121";
contexto.fillStyle = "#FFCC80";
let x = 100,
	y = 100,
	radio = 50,
	anguloInicio = 0,
	anguloFin = Math.PI * 2;
contexto.arc(x, y, radio, anguloInicio, anguloFin);
// Make a draw
contexto.stroke();
// Make a fill
contexto.fill();


