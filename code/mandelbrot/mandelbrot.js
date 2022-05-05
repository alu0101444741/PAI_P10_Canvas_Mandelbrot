/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas
 *
 * @author Roberto Carrazana Pernía
 * @since May 3 2022
 * @desc Clase Mandelbrot
 * @module mandelbrot
 */

 'use static';

import { Complejo } from "../class-complejo/complejo.js";

const WIDTH = 1280;
const HEIGHT = 720;

const START_POINT_REAL = -2;
const END_POINT_REAL = 1;
const START_POINT_IMAGINARY = -1;
const END_POINT_IMAGINARY = 1;

/** @desc Clase Mandelbrot */
export class Mandelbrot {
  #mandelbrotSet;
  #maxIterations;
  /**
   * @desc Constructor de la clase Mandelbrot
   * @param 
  */
  constructor(maxIterations) { 
    this.#mandelbrotSet = new Set();
    this.#maxIterations = maxIterations;
  }
  /**
   * @desc Método privado para comprobar que un punto pertenece al conjunto
   * de Mandelbrot.
   * @param {Complejo} complexNumber - número a comprobar
   * @return {Number} En caso de no pertenecer devolverá -1. En otro caso,
   * el número de iteraciones necesarias para alcanzar un valor umbral.
  */
   #iterationsNeeded(complexNumber) {
    let newComplexNumber = new Complejo(complexNumber.real, complexNumber.imaginary);
    let iterations = 0;
    for (let i = 0; ((i < this.#maxIterations) && (newComplexNumber.abs() <= 2.0)); ++i) {
      newComplexNumber = newComplexNumber.multiply(newComplexNumber);
      newComplexNumber = newComplexNumber.add(complexNumber);      
      iterations = iterations + 1;
    }
    //if (iterations === this.#maxIterations) this.#mandelbrotSet.add(complexNumber);    
    return(iterations);
  }

  /**
   * @desc Método privado para conseguir un color según un valor determinado.
   * Dado que son 7 colores distintos, el valor con el que se determina el color
   * será el módulo 7 del número pasado como parámetro. 
   * @param {Number} number - número a comprobar
   * @return {String} cadena en formato 'rgb(A,B,C)' donde A, B y C son números entre 0 y 255.
  */
  #getColor(number) {
    if (number === this.#maxIterations) {
      return('rgb(0,0,0)');
    }
    else if (number < this.#maxIterations / 2) {
      return(`rgb(${255 - number * (this.#maxIterations/2)},0,0)`);
    }
    let color = number % 7;
    switch(color) {
      case 0: return('rgb(44,255,44)');
      case 1: return('rgb(88,235,88)');
      case 2: return('rgb(120,215,120)');
      case 3: return('rgb(164,195,164)');
      case 4: return('rgb(200,175,200)');
      case 5: return('rgb(230,155,230)');
      case 6: return('rgb(255,135,255)');
    }
  }

  /** @desc Método para dibujar el conjunto de Mandelbrot en un canvas. */
  draw() {
    const CANVAS = document.getElementById('mandelbrot');
    let newNumber;
    let color;
    if (CANVAS.getContext) {
      let context = CANVAS.getContext('2d');
      for (let width = 0; width < WIDTH; ++width) {
        for (let height = 0; height < HEIGHT; ++height) {
          newNumber = new Complejo( START_POINT_REAL + (width / WIDTH) * (END_POINT_REAL - START_POINT_REAL),
                                    START_POINT_IMAGINARY + (height / HEIGHT) * (END_POINT_IMAGINARY - START_POINT_IMAGINARY));
          
          color = this.#getColor(this.#iterationsNeeded(newNumber));
          context.fillStyle = color;
          context.fillRect(width, height, 1, 1);
        }
      }
    }    
  }
}