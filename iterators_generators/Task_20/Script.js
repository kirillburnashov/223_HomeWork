
let object = {'key1': 'value1', 'key2': 'value2', 'key3': 'value3', 'key4': 'value4',
	*[Symbol.iterator](){
		for (let key in this){
		yield this[key];	
		}
	}
};

console.log(...object); 