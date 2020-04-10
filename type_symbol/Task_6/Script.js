
let elems_sum = Symbol.for('elems_sum');


function returnRandomArray(){
	let array = [];

	for (let i = 0; i < 10; i++){
		array[i] = Math.floor(Math.random() * 10 + 1);
	}
	array[elems_sum] = function(){
		let sum = 0;
		for (let elem of this){
			sum+=elem;
		}
		return sum;
	} 
	return array;
}


function matchElemsInTwoArrays(array1,array2){
	let matchElements = [];
	for (let elem1 of array1){
		for (let elem2 of array2){

			if (elem1 == elem2 && matchElements.indexOf(elem1) == -1) matchElements.push(elem1);
		}
	}
	matchElements[elems_sum] = function(){
		let sum = 0;
		for (let elem of this){
			sum+=elem;
		}
		return sum;
	} 
	return matchElements;
}


let array1 = returnRandomArray();
let array2 = returnRandomArray();
let result = matchElemsInTwoArrays(array1,array2);


document.write('Первый случайный массив: [' + array1 + ']<br>');
document.write('Второй случайный массив: [' + array2 + ']<br>');
document.write('Элементы, которые есть в обоих массивах: [' + result + ']<br>');


document.write('Сумма элементов первого массива: ' + array1[elems_sum]() + '<br>');
document.write('Сумма элементов второго массива: ' + array2[elems_sum]() + '<br>');
document.write('Сумма элементов которые есть в обоих массивах: ' + result[elems_sum]());
