// const { EventEmitter } = require('events');
// import {EventEmitter} from 'events';

// -------kodingan dibawah ini untuk membuat satu fungsi khusus untuk menangani event---------
// fungsi ini memiliki nama 'handler' atau 'listener' pada akhir penamaannya 

// const myEventEmitter = new EventEmitter; 

// const makeCoffee = (name) => {
//     console.log(`Kopi ${name} telah dibuat!`);
// }

// const makeBill = (price) => {
//     console.log(`Bill sebesar ${price} telah dibuat!`);
// }

// const onCoffeeOrderedListener = ({ name, price }) => {
//     makeCoffee(name);
//     makeBill(price);
// }

// myEventEmitter.on('coffee-order', onCoffeeOrderedListener);
// myEventEmitter.emit('coffee-order', {name: 'Tubruk', price: 15000});


// --------output dari kodingan dibawah ini adalah------------
// [Kopi Tubruk telah dibuat!], [Bill sebesar 15000 telah dibuat!]

// const myEventEmitter = new EventEmitter();
 
// const makeCoffee = ({ name }) => {
//     console.log(`Kopi ${name} telah dibuat!`);
// };
 
// const makeBill = ({ price }) => {
//     console.log(`Bill sebesar ${price} telah dibuat!`);
// } 


// myEventEmitter.on('coffee-order', makeCoffee);
// myEventEmitter.on('coffee-order', makeBill);
// myEventEmitter.on('coffee-order', lastBill);
 
// myEventEmitter.emit('coffee-order', { name: 'Tubruk', price: 15000});
 