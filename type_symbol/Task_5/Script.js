
let array = [2,4,8,10];
let elems_summ = Symbol.for('elems_summ'); 

array[elems_summ] = function(){

	let sum = 0;
	for (let elem of this){
		sum+= elem;
	}
	document.write('Сумма элементов массива: ' + sum);
}

array[elems_summ]();
