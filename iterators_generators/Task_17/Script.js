

let body = document.querySelector('body');
let ul = document.createElement('ul');

let string = 'stroka';

for (let symbol of string){
	let li = document.createElement('li');
	li.innerHTML = symbol;
	ul.appendChild(li);
}
body.appendChild(ul);