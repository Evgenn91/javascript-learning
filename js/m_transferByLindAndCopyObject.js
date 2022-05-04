//Передача по ссылке или по значению(Spread оператор)
//клонирование объектов, массивов

//пример ссылочного типа данных
const obj = {
    a: 5,
    b: 1
};
const copy = obj;
copy.a = 10;
console.log(copy);
console.log(obj);
//выведет одно и тоже

//Примеры создания копий объектов и массивов
//1. создание функции копирования на основе цикла
//это поверхностное копирование(если внутри есть объекты они не копируются уже)
function copppy(mainObj) {
    let objCopy = {};
    let key;
    for (key in mainObj) {
        objCopy[key] = mainObj[key];
    }
    return objCopy;
}

//2. помещение в объект другой объект (не ссылкой его копирует а создает новый)
const members = {
    a: 2,
    b: 5,
    c: {
        x: 7,
        y: 4
    }
};

const add = {
    d: 17,
    e: 20
};

Object.assign(members, add); // объект, который хотим поместить пишем на втором месте
//можно таким образом скопировать объект
Object.assign({}, add);

//3. копия массива
const oldArr = ['a', 'b', 'c'];
const copyArr = oldArr.slice();

//4. оператор разворота(превращает структуры в набор данных)
//таким обрахом можем 2 массива соединить
const video = ['youtube', 'vedeo', 'rutube'],
    blogs = ['wordpress', 'livejournal', 'blogger'];
const mixArr = [...video, ...blogs, 'myznacheniekakoeto'];
