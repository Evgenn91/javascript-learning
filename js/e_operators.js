//операторы в js (/,*,-,+)
"use strict";

//1. Конкатенация
console.log(4 + "5"); //вывод 45
console.log(4 + +"5"); //вывод 9(тк +строка это преобразование из стринг в число)


//2. Инкремент и дикремент
let incr = 10,
    decr = 10;
incr++; //сначала возвращает старое значение а потом уже увеличивает
decr--;
console.log(incr);
console.log(decr);
console.log("--------------");
//примера разницы
let incr1 = 10,
    decr1 = 10;
// console.log(incr1++);//вывод: 10
// console.log(decr1--);//вывод: 10
console.log(++incr1);//вывод: 11
console.log(--decr1);//вывод: 9



//3. Остаток от деления
console.log(5%2); //вывод: 1

//4. Равенство
//равенство только по содержанию(без типа переменной)
console.log(2*4 == 8); //true
console.log(2*4 == "8"); //true

//равенство по содержанию и по типу(строгое равенство)
console.log(2*4 === 8); //true
console.log(2*4 === "8"); //false

//также работают операторы !=  и !== 