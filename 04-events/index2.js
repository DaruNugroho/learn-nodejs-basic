const {EventEmitter } = require('events');

const myEventEmitter = new EventEmitter();

const makeCoffee = (name ) => {
    console.log(`Kopi ${name} dibuat`);
}

const makeBill = ( price ) => {
    console.log(`Tagihan sebesar ${price} telah dibuat`);
}

const onCoffeeOrderedListerner = ({name, price}) => {
    makeCoffee(name);
    makeBill(price);
}

myEventEmitter.on('coffee-order', onCoffeeOrderedListerner);

myEventEmitter.emit('coffee-order', {name:"Kopi Itam Atu", price: 2000});