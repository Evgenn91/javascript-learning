// CallBack функции
"use strict";

//если функция идет 1 за другой(их вызов), это не значит, 
//что в коде они будут выполняться последовательно

//пример(нюанс в этом примере если заменить на callback функцию, все равно не робит как нужно)
function first(){
    setTimeout(function(){console.log(1);},500);
}
function second(){
    console.log(2);
}
first();
second();
//вывод 2 потом 1 !!!!



//callback функция - это ф-ция, которая должна выполнится после определенной
//(идея в том, что ее вызов переносится в первую функцию)
function learnJS(simpleArgum, callBackFunctin){
    console.log(`Я учу: ${simpleArgum}`);
    callBackFunctin();
}

function callBackFunct(){
    console.log('Я прошел урок');
}

learnJS('язык Java',callBackFunct);