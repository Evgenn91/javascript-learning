//Замыкание и лексическое окружение
"use strict";

//лексическое окружение: это понятие скрытого объекта(который есть у кажлой функции)
//оно есть внутренне и внешнее

let number = 5;

function logNumber(){
    let number = 4;
    console.log(number);
}
number = 6;
logNumber();
//вывод будет 4
//в какой то момент будет 2 переменные number(внутренняя(локальная) и внешняя)

//замыкание функции: когда функция ищет сначала у себя внутри, а потом только снаружи
//каждый вызов функции создает свое новое лексическое оружение

//Примеры
let numberr = 5;
function logNumberr(){
    console.log(number);
}
numberr = 6;
logNumberr();
numberr = 8;
logNumberr();


function createCount(){
    let counter = 0;
    const myFunction = function(){
        counter = counter + 1;
        return counter; 
    };
    return myFunction;
}
const increment = createCount();
const c1 = increment();
const c2 = increment();
const c3 = increment();
console.log(c1,c2,c3);