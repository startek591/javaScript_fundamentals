'use strict';

// Using Google, StackOverflow and MDN

// Problem 1:
// We work for a company building a smart home thermometer. Our most recent task is this: "Given an array of temperatures of one day, calculate the temperature amplitude. Keep in mind that sometimes there might be a sensor error."

// const temperature = [3, -2, -6, -1, 'error', 9, 13, 17, 15, 14, 9, 5];

// 1) Understanding the problem
// - What is temp amplitude ? Answer: difference between highest and lowest temp
// - How to compute max and min temperatures?
// - What's a sensor error ? And what to do?

// 2) Breaking up into sub-problems
// - How to ignore errors ?
// - Find max value in temp array
// - Find min value in temp array
// - Subtract min from max (amplitude) and return it

// const calcTempAmplitude = function (temps) {
//   let max = temps[0];
//   let min = temps[0];

//   for (let i = 0; i < temps.length; i++) {
//     const curTemp = temps[i];
//     if (typeof curTemp !== 'number') continue;

//     if (curTemp > max) max = curTemp;
//     if (curTemp < min) min = curTemp;
//   }
//   return max - min;
// };
// const amplitudeNew = calcTempAmplitude([3, 5, 1], [9, 0, 5]);
// console.log(amplitudeNew);

// Debugging with the Console and Breakpoints
// const measureKelvin = function () {
//   const measurement = {
//     type: 'temp',
//     unit: 'celsius',
//     value: 10,
//   };

//   console.table(measurement);

//   console.log(measurement.value);
//   console.warn(measurement.value);
//   console.error(measurement.value);

//   const kelvin = measurement.value + 273;
//   return kelvin;
// };

// console.log(measureKelvin());

// Using a debugger
// const calcTempAmplitudeBug = function (t1, t2) {
//   const temps = t1.concat(t2);
//   console.log(temps);

//   let max = 0;
//   let min = 0;

//   for (let i = 0; i < temps.length; i++) {
//     const curTemp = temps[i];
//     if (typeof curTemp !== 'number') continue;

//     if (curTemp > max) max = curTemp;
//     if (curTemp < min) min = curTemp;
//   }
//   console.log(max, min);
//   return max - min;
// };
// const amplitudeBug = calcTempAmplitude([3, 5, 1], [9, 4, 5]);
// console.log(amplitudeBug);
