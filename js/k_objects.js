//Объекты, деструктуризауия объектов(ES6)
"use strict";

//создание объекта
const options = {
    name:'test',
    width:1024,
    height:1024,
    colors:{
        border:'black',
        bg:'red'
    },
    //создадим функцию
    makeTestt:function(){
        console.log("lala");
    }
};

//удаление свойства у объекта
delete options.height;
//пример обращения к полю внутреннего объекта
console.log(options["colors"]["border"]);

//если есть функции у бъекта, то все сразу неправильно работает(я имею ввиду переборы)
//перебор всех свойств объекта (for in)
//помимо (for in) есть еще (for of) но с его помощью нельзя перебрать объекты(он нужен для перебора массивов)
for(let key in options){
    console.log(`Свойство ${key} имеет значение ${options[key]}`);
}
//Значение color выведится плохо(тк этот метод выводит строки(JS не может преобразовать в строку))

console.log(`-----------`);

//решение проблемы с перебором поля объекта(только с одной вложенностью)
for(let key in options){
    if(typeof(options[key]) === 'object'){
        for(let i in options[key]){
            console.log(`Свойство ${i} имеет значение ${options[key][i]}`);
        }
    } else {
        console.log(`Свойство ${key} имеет значение ${options[key]}`);
    }
}

//узнать колличество параметров у объекта
let counter = 0;
for(let key in options){
    counter++;
}
//или с помощью метода keys(дает массив со всеми ключами)
let lengttt = Object.keys(options).length;

//вызов функции у объекта
options.makeTestt();

//деструктуризация объекта(вытаскивание переменных у вложенного объекта)
const{border, bg} = options.colors;
console.log(border);
console.log(bg);


