//вставка значений в строку
"use strict";

//1. С помощью конкатенации
let category = "toys";
console.log('http://someurl.com/' + category);// кавычки можно и такие "" и такие '' и такие ``

//2. С помощью интерполяции
console.log(`http://someurl11.com/${category}`);
//работает со всеми каквчками, но он говорит использовать с такими `` (где буква ё)

console.log(`http://someurl11.com/${category}/5`);