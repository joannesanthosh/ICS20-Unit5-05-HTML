/* Created by: Joanne Santhosh
 * Created on: Apr 2022
 * This file contains the JS functions for index.html
 */

"use strict"

/**
 * Check servie worker.
 */
if (navigator.serviceWorker) {
  navigator.serviceWorker.register("/ICS20-Unit5-05-HTML/sw.js", {
    scope: "/ICS20-Unit5-05-HTML/",
  })
}

/**
 * Input
 */
function convert() {
  var sideA = document.getElementById("side-a").value
  var sideB = document.getElementById("side-b").value
  var sideC = document.getElementById("side-c").value

  // process
  if (sideA == sideB == sideC) {
    document.getElementById("answer").innerHTML = "The triangle is equilateral."
  } else (sideA == sideB) || (sideA == sideC) || (sideB == sideC) {
    document.getElementById("answer").innerHTML = "The triangle is isosceles."
  } else (sideA <> sideB <> sideC) {
    document.getElementById("answer").innerHTML = "The triangle is scalene."
  }
  