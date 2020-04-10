
let obj = {'chislo1': 5, 'chislo2': 7, 'chislo3': 3}
let keys_summ = Symbol();

obj[keys_summ] = function(){ 
	let sum = 0;
	for (let key in this){
		sum+= this[key];
	}
	document.write('Сумма элементов объекта: ' + sum);
}

obj[keys_summ]();