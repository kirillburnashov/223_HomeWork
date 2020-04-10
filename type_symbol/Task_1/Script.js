
let obj = {a: 1, b: 2, c: 3}
let symbol = Symbol();
obj[symbol] = "yes, it's symbol"

for (let key in obj){
	document.write(obj[key] + " ");
}