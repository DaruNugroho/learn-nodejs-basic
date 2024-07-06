const {EventEmitter } = require('events');

const myEventEmitter = new EventEmitter();

const makeCoffee = ({ name }) => {
    console.log(`Kopi ${name} dibuat`);
}

const makeBill = ({ price }) => {
    console.log(`Tagihan sebesar ${price} telah dibuat`);
}

myEventEmitter.on('coffee-order', makeCoffee);
myEventEmitter.on('coffee-order', makeBill);

myEventEmitter.emit('coffee-order', { name: "Kopi Itam Atu", price: 2000});