// const a = 10;
// const b = 20;
// // let result;
// // if (a > b) {
// //   result = 'Good';
// // } else {
// //   result = 'Bad';
// // }
// const result = a > b ? 'Good' : 'Bad';
// console.log(result);

// const mark = parseInt(prompt('Enter mark'));
// let result;
// switch (mark) {
//     case 5: 
//         result = 'Excellent';
//         break;
//     case 4: 
//         result = 'Good';
//         break;
//     case 3: 
//         result = 'Satisfactory';
//         break;
//     case 2: 
//         result = 'Bad';
//         break;
//     default: 
//         result = 'Wrong mark';
//         break;
// }
// console.log(result);

// for (let i = 2; i <= 10; i++) {
//     if (i % 2) {
//         continue;   
//     }
//     console.log(i);
// }

// let correctInput = false;
// let a;
// while (!correctInput) {
//     a = Number(prompt('Input A'));
//     if (!isNaN(a) && a !== 0) {
//         correctInput = true;
//     } else {
//         alert('You entered incorrect value, please try again')
//     }
// }

// let cars = [];
// cars.push('Tesla Model X');
// cars.push('Volkswagen Terramont');
// console.log(cars.length);
// console.log(cars[0]);
// cars[2] = 'Ferrari LaFerrari';
// console.log(cars.length);
// cars[10] = 'Agera R';
// console.log(cars.length);
// console.log(cars);

// let counter = 0;
// // for (let i = 0; i < cars.length; i++) {
// //     if (cars[i] !== undefined) {
// //         counter++;
// //     }
// // }
// cars.forEach( el => {
//     counter++;
//     console.log(el);
// } );
// console.log('Actual count', counter);

let favCars = {};
favCars['fastest'] = 'Agera R';
favCars['mostExpensive'] = 'Bugatti Chiron';
favCars['mostComfortable'] = 'Rollc-Royce Phantom';

//console.log(favCars['mostComfortable']);

for (let key in favCars) {
    console.log(favCars[key]);
}