// function

/**
 *  // code-reuse
 *  // compact
 *  A function in javascript allows us 
 *  to re-use code any time we need it.
 */

// write once use anytime

function nameOfTheFunction(parameters){
    // contain the code that you want
}

// parameters: input of the function, requirement
// return: output of the function 
/**
 * all functions must return something
 * return explicity 
 * implicit returning
 */

// function declaration
function addition(a, b){
    const c = a + b;
    return c;
}

// arrow function / lambda
const add = (a,b) => {
    const c = a + b;
    return c;
}

function sub(e, f){
    const g = e - f;
    return g;
}

const theQuadraticFormula = (a,b,c) => {
   const numerator =  -b + Math.sqrt( (Math.pow(b,2) - 4 * a * c) );
   const denominator = 2 * a;

   const x = numerator / denominator
   return x.toFixed(2);
}

const heronScaleneEquation = ( a, b, c) => {
    const s = ( a + b + c ) / 2;
    const z = Math.sqrt( s * (s - a) * (s - b) * (s - c) );

    return z
}

const area = heronScaleneEquation(4, 5, 3);

console.log("The area of the Scalene triagle is: " + area);
console.log(`The area of the Scalene triagle is ${area}`); // string literals

console.log( theQuadraticFormula(2, -3, -4) );

const subAnswer = sub(6, 44);
const addAnswer = addition(11, 55)
console.log( {subAnswer}, {addAnswer}, addition(subAnswer, addAnswer) )

console.log(addition(77, 99));
console.log(sub(33, 55));

