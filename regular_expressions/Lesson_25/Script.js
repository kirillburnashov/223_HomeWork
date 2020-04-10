// Тема 25
document.write("Тема 25<br>");

// Задача 2
document.write("Задача 2: <br>");
let string = "<a href='' class='eee' id='zzz' data-test='test'>"
let attributes = string.match(/\w+?(?==)/g); 
document.write("Атрибуты: " + attributes);

