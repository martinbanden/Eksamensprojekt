'use strict';
import {$} from './nQuery.js';
/*
 * script.js
 * function drawing a polygon
 */
let threeShapes = function () {
    let canvas = $('Mycanvas');
    let canvas2 = $('myCanvas', 'transparent');// bruge Context til at få dem over i de andet
    if (canvas.getContext) {
        var ctx = canvas.getContext('2d');

        ctx.fillStyle = "#088";         // fill color
        ctx.fillRect(20, 10, 120, 80);  // fill rectangle

        ctx.fillStyle = "#566";         // fill color
        ctx.fillRect(20, 200, 160, 50);  // fill rectangle



        ctx.beginPath();                // begin new path
        ctx.arc(150, 150, 50, 0, Math.PI * 1, true);
                                        // describe arc
        ctx.fillStyle = '#cc0';         // set fill color
        ctx.fill();                     // fill the path
        ctx.stroke();                   // draw circumference


        ctx.lineWidth = 2;              // stroke weight
        ctx.strokeStyle = 'blue';    // stroke color
        ctx.fillStyle = 'red';   
        ctx.fill();
        ctx.strokeRect(250, 250, 40, 10); // draw rectangle


        ctx.fillStyle = "#976";   
        ctx.strokeRect(250, 50, 40, 40); // rectangle
    }
}


window.addEventListener('load', threeShapes);
