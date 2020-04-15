
let object = {'key1': 'value1','key2': 'value2','key3': 'value3',
	*[Symbol.iterator]() {
		for (let key in this){
			yield this[key];
		}
	}
};

for (let elem of object){
	console.log(elem);
}
