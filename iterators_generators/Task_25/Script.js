
function button_click(){
let ps = document.querySelectorAll('.task');
let entries = ps.entries();
for (let [number, p] of entries){

	p.innerHTML = 'Абзац ' + Number(number+1); 
}
}