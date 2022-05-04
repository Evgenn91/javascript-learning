//Основы ООП, прототипно-ориентированное программирование
//prototype - это как класс в java

"use strict";



"abc"; //это примитив
"abc".toUpperCase(); // это уже объект 

let str = "some";
let strObj = new String(str);

console.log(typeof(str)); //string
console.log(typeof(strObj)); //object


//Наследование
const Soldier = {
    health: 400,
    armor:100,
    sayHello:function(){console.log("hello");}
};

const John = {
    health:100
};

//1. устаревший формат наследования john от soldier
John._proto_= Soldier;

//2.
Object.setPrototypeOf(John, Soldier);

//3. на этапе создания объекта
//soldier создан и теперрь создаем john
const John1 = Object.create(Soldier);