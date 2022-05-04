//условия
"use strict";


if (4 == 9) { console.log('ok'); }

if (4) { console.log('ok'); } // выполнится как true(тоесть наличие содержимого)

if (4 == 9) { console.log('no good'); }
else if (4 == 4) { console.log('ok'); }
else { console.log('somthing wrong'); }

//тернарный оператор(в его работе участвуют 3 аргумента)
(4 == 9) ? console.log('ok') : console.log('not');

//еще есть бинарный оператор(2 аргумента): --4
//унарный оператор(1 аргумент): -4


//оператор switch
const num = 50;
switch (num) {
    case 49:
        console.log('False');
        break;
    case 100:
        console.log('Too big');
        break;
    case 50:
        console.log('True');
        break;
    default:
        console.log('Somthing wrong');
        break;
}
