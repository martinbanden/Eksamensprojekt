'use strict';
import {$} from './nQuery.js';
/*
 * nmlCanvas0.js
 * function drawing a polygon
 */
let threeShapes = function () {
    let canvas = $('Mycanvas');
    if (canvas.getContext) {
        var ctx = canvas.getContext('2d');

        ctx.fillStyle = "#088";         // fill color
        ctx.fillRect(20, 70, 80, 80);  // fill rectangle

        ctx.fillStyle = "#566";         // fill color
        ctx.fillRect(20, 150, 160, 50);  // fill rectangle


        ctx.beginPath();                // begin new path
        ctx.arc(150, 150, 50, 0, Math.PI * 1, true);
                                        // describe arc
       // set fill color cirkel
        ctx.fillStyle = 'red';   
        ctx.fill();
 
        ctx.fillStyle = "#7078"
        ctx.fillRect(180, 150, 40, 80); // draw rectangle


        ctx.fillStyle = "#3906";   
        ctx.fillRect(150, 60, 40, 40); // draw rectangle
    }
}


window.addEventListener('load', threeShapes);


