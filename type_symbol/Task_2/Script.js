
let obj = {a: 1, b: 2, c: 3}
let myFunc = Symbol();
obj[myFunc] = function(){ alert('!'); }

for (let key in obj){
	document.write(obj[key] + " ");
}

