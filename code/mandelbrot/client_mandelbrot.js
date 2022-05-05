/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas
 *
 * @author Roberto Carrazana Pernía
 * @since May 03 2022
 * @desc Client program for class Mandelbrot
*/

'use strict';

import { Mandelbrot } from './mandelbrot.js';

const MAX_NUMBER_ITERATIONS = 50;
const ITERATIONS_SEGMENTS =  5;

/** @desc Función main para probar el funcionamiento de la clase Mandelbrot*/
function main() {
/*
  let mandelbrot = new Mandelbrot(MAX_NUMBER_ITERATIONS / 4);
  mandelbrot.draw();
  mandelbrot = new Mandelbrot(MAX_NUMBER_ITERATIONS / 2);
  mandelbrot.draw();
  mandelbrot = new Mandelbrot(MAX_NUMBER_ITERATIONS * (3 / 4));
  mandelbrot.draw();
*/
  let mandelbrot = new Mandelbrot(MAX_NUMBER_ITERATIONS);
  mandelbrot.draw();
/*
  let iterations = MAX_NUMBER_ITERATIONS / ITERATIONS_SEGMENTS;
  while (iterations < MAX_NUMBER_ITERATIONS) {
    let mandelbrot = new Mandelbrot(iterations);
    mandelbrot.draw();
    iterations = (iterations + ITERATIONS_SEGMENTS < MAX_NUMBER_ITERATIONS) ? iterations + iterations : MAX_NUMBER_ITERATIONS;
  }
*/  
}
main(); 