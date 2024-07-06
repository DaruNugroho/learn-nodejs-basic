const {EventEmitter} = require('events');
const eventEmitter = new EventEmitter();

const birthdayEventListener = (name) => {
    console.log(`Happy Birthday, ${name}`);
}

eventEmitter.on('birthday', birthdayEventListener);


eventEmitter.emit('birthday', 'Daru Nugroho')
