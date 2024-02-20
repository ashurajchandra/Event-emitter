

class Emitter {
    constructor(){
        this.observers = []
    }
    on(eventName, listener){
        this.observers.push({eventName, listener})
    }

    off(eventName, listener){
     this.observers.filter(element=>element.eventName !=eventName && element.listener !=listener)
    }

    emit(eventName, ...args){
        this.observers.forEach(item=>item.eventName==eventName && item.listener(...args))
    }
}

const emitter = new Emitter();

function addTwoNumbers(a, b) {
  console.log(`The sum is ${a + b}`);
}
emitter.on('foo', addTwoNumbers);
emitter.emit('foo', 2, 5);

emitter.on('foo', (a, b) => console.log(`The product is ${a * b}`));
emitter.emit('foo', 4, 5);

emitter.off('foo', addTwoNumbers);
emitter.emit('foo', -3, 9);