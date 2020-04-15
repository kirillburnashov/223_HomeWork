

let array = ['Too', 'Much', 'Homework'];

console.log(array[Symbol.iterator]);

console.log(array[Symbol.iterator]());

let iterator = array[Symbol.iterator]();
console.log(iterator.next());