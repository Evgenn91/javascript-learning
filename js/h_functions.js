//функции
"use strict";

//тут поидее любая фция что то возвращает(когда не ставим return то возвращает undefined)

//создание
function myFunc(){
    console.log("Hello world");
}
//вызов функции
myFunc();

//функция с аргументами
function myFuncWithArgs(text){
    console.log(text);
}
//вызов функции
myFuncWithArgs("Hello world");

console.log('--------------');

//замыкание функции(идея в том, 
//что сначала переменная ищет переменную у себя, а потом уже за пределами своей функции)
let num = 20;
function showMethod(text){
    console.log(text);
    let num = 10;
    console.log(num); //вывод 10
}
showMethod("Hello");
console.log(num); //вывод 20

//слово return в функции
function cale(a,b){
    return (a+b);
}
console.log(cale(4,2)); //вывод 6
//или так
const resulttt = cale(7,8);

//ВИДЫ ФУНКЦИЙ (их 3 вида)
//1. деклоративные(объявляются в потоке кода)(можно вызвать до объявления)(разобрали сверху)
myFunc();//особенность(существует до того, как мы ее записали, поэтому так можно вызвать ее)
function myFunc(){
    console.log("Hello world");
}
//это связано с тем как работает код: сначала формируется html, 
//потом в js пробегается по коду и находит все переменные и функции, 
//а потом уже начинается выполнение

//2. функциональные выражения(нельзя вызвать до объявления)
let logg = function(){
    console.log("Something do");
}; //есть точка с запятой в конце!!!
logg();

//3. стрелочные функции(не имеет своего контекста)(появилась с ES6)
//если функция в 1 строку
const callll = (a,b)=> a+b;
//та же ф-ция в классическом виде(когда в ф-ции больше чем 1 строчка)
const callllClassic = (a,b)=> {return a+b;};

