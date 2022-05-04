//циклы
"use strict";

let num = 50;

//1. While
while(num < 55){
    console.log(num);
    num++;
}

//2. do-while
do{
    console.log(num);
    num++;
} while (num < 55);

//3. for
for(let i = 1; i < 8; i++){
    console.log(i);
}

//break - выход из цикла
//continue - пропуск одного хода цикла

//метки в циклах
firr:for(let i = 1; i < 8; i++){
    console.log(i);
    for(let k = 1; k < 8; k++){
        console.log(k);
        for(let y = 1; y < 8; y++){
            if(y == 4) {continue firr;} //переброс на тот цикл, который помечен таким названием
            console.log(k);
        }
    }
} 