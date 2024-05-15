// МАССИВЫ.
// Массив - это обьект или является разновидностью обьектов, а есть у массива определенные методы.
var student1 = "Aleksey Ivanov";
		student2 = "Maria Ivanova";
		student3 = "Denis Matvejev"
// переменная students во множ. числе (так как много значений) [скобки] и все;
var students = ["Aleksey Ivanov", "Maria Ivanova", "Denis Matvejev"];

// Массивы нужно чтобы группировать какие то данные
// (например: список учеников, название городов, ответы на тест).
var colors = ["green", "red", "blue", "black"];
var numbers = [245, 554, 139, 101];
var answers = [true, false, true, false];

// Массивы в основном начинают нумерацию с 0 (начинает счет с 0).
var colors = ["green", "red", "blue", "black"];
// green - 0 элемент массива colors, red - 1 элемент массива colors, и так далее.

// Обращение к элементу массива (console.log(cities[2]) и выводится "narva").
var cities = ["moscow", "tallinn", "narva", "praga", "sochi"];
console.log(
	cities[2]
);

// Индекс - так еще называют элементы значений в массиве.
// Чтобы перезаписать значение в ( вместо города "Казань" он по счету номер 2),
// пишем console.log(2) = "Нижний Новгород".
var cities = ["moscow", "tallinn", "narva", "praga", "sochi"];
cities[1] = "Phuket";
cities[2] = "Nizniy Novgorod";
cities[5] = "Warsawa";
console.log(cities);
// Для добавление индекса в список так как было 0-4 значений.
// Пишем cities(5) = "Warsawa" - тем самым length стал 6.

// ОБЬЯВЛЕНИЕ ПУСТОГО МАССИВА.

// 1 пример
var arr = [];
console.log(arr);

// 2 пример

var arr1 = [];
var arr2 = new Array();
console.log(arr1);
console.log(arr2);

// 3 пример (создали изначально пустой массив, а затем добавили значения).

var arr3 = [];
arr3[0] = "Burger King";
arr3[1] = "Nike";
arr3[2] = "Adidas";
console.log(arr3);

// Можно писать значения переменных в массиве списке.

var firm1 = "Armani";
var firm2 = "Polo";
var firm3 = "Ralph";

var firms = [firm1, firm2, firm3];
console.log(firms);

// ПОСЧИТАТЬ КОЛИЧЕСТВО ЗНАЧЕНИЙ В СПИСКЕ.
var students = ["Korneev", "Milova", "Demila", "Petrov", "Timofeev", "Vaslaev"];
var result = students.length
console.log(result);
// обращаемся к нашему массиву (students), сначала обращаемся по названию массива.
// затем пишем свойство length,
// если после length стоят скобки () - то это уже готовый метод массива, и они уже написаны где то в ядре JavaScript.
// МЕТОД - ЭТО УЖЕ КАКАЯ ТО ГОТОВАЯ ФУНКЦИЯ, КОТОРАЯ ВЫПОЛНЯЕТ ОПРЕДЕЛЕННЫЕ ЛОГИЧЕСКИЕ ОПЕРАЦИИ.

// ГЕНЕРАТОР ПОЗДРАВЛЕНИЙ.(список учителей, их качества).
// ЗАДАНИЕ, ПЕРЕМЕШИВАТЬ РАНДОМНО 1 МАССИВ ВО 2 И СОСТАВЛЯТЬ В 1 СТРОКУ.
// Если в массиве длинный список, то вот пример написания кода.(в 1 строку не четабельно).
var teachers = ["Elena Ivanonv",
                "Zanna Valerievna",
								"Inna Debjuk",
								"Anastasia Debaeva",
								"Oksana Fjedorovna",
								"Svetlana Andreevna",
								"Margarita Stepanovna"
							];

var quality = ["Krasivaja",
							 "Umnaja",
							 "Virazitenlnaja",
							 "Otzivjevaja",
							 "Dobraja",
							 "Grubaja",
						   "Smewnaja"
							];

// math - обьект, random - метод, (с помощью него можно найти какое то рандомное число).
// Функция FLOOR. MATH округляет число в меньшую сторону до ближайшего целого значения или кратного указанной точности.
// до ( ) скобок это метод а length, уже свойство.
// Math.floor - округляет число.
function makePhrases () {
	var rand1 = Math.floor(Math.random() * teachers.length);
	var rand2 = Math.floor(Math.random() * quality.length);
	var phrase = teachers[rand1] + " Samaja " + quality[rand2];
	console.log(phrase);
};

makePhrases();
// Программу надо вызывать чтобы код заработал.

// ПЕРЕБОР МАССИВА.
var playlist1 = [
	"timati",
	"miyagi",
	"madona",
	"lady gaga",
	"elvis presley",
	"linkin park",
	"egor krid"
];

var playlist2 = [
	"Basta",
	"miyagi",
	"madona",
	"lady gaga",
	"Kasta",
	"Kaspiskiy Gruz",
	"egor krid"
];
// Когда в условие написано: найдите это или то, сопоставьте.
// То сразу надо продумывать алгоритм и в чем мы будем хранить в переменных или массивах.
// Любой код удобнее писать через функцию, потому что этот код будем использовать сейчас или менять что то потом.
// Для цикла нужно понимать 3 вещи.
// 1. С чего стартуем.
// 2. Условие выхода из цикла.
// 3. Какой шаг будет на каждой итерации.
var message;
function makeMessage(Array){
	var i = 0;
	while(i < Array.length) {
		message = " Track nomer " + (i + 1) + ", " + " Ispolnitel " + Array[i];
		console.log(message);
		i++;
	};

	// for(var i = 0; i < Array.length; i++){
	// 	message = " Track nomer " + (i + 1) + ", " + " Ispolnitel " + Array[i];
	// 	console.log(message);
	// };

};

makeMessage(playlist1);
console.log("-----");
makeMessage(playlist2);
console.log("-----");

// МЕТОДЫ МАССИВОВ.
// 1. МЕТОД PUSH.
// Принимает параметры, а передаем ему аргументы в скобках.
var numbers = [2,3,4];
numbers.push(5);
console.log(numbers);

// 2. МЕТОД POP.
var cars = ["toyota", "audi", "bmw", "lada"];
// Метод POP удаляет с конца (вывод без "lada").
console.log(cars);
cars.pop();
console.log(cars);

// 3. МЕТОД SHIFT.
// Все элементы массива сдвигаются влево, и занимают освободившееся места.
var boats = ["toyota", "audi", "bmw", "lada"];
console.log(boats);
boats.shift();
console.log(boats);

// 3. МЕТОД UNSHIFT.
var style = ["egyptian", "home", "bulgarian", "russian"];
console.log(style);
style.unshift();
console.log(style);

// 4. МЕТОД SPLIT.
// Позволяет превратить строку в массив(внизу строка).
var student = "Oksana, Marina, Lena, Ekaterina";
// В качестве параметра split принимает тот самый разделитесь, который может превратить нашу строку в массив.
// Разделитель значений в данном случае (запятая), и в аргументы split мы указываем на тот самый разделитель.
var studentArray = student.split(',');
console.log(student);
console.log(studentArray);

// 4. МЕТОД JOIN.
// Если задание превратите массив в строку или обратно, примеры дальше.
// Берет наш разделитель и превращает массив в строку.
var number = [25, 15, 44, 67];
// Разделитель значений в данном случае (запятая и пробел), и в аргументы split мы указываем на тот самый разделитель.
var str = number.join(", ");
console.log(number);
console.log(str);

// 5. МЕТОД SLICE.
// Метод slice создает новый массив, копируя значения из другого.
var city = ["Kazan", "Moskva", "Stalingrad", "Tallinn", "Narva"];
// !Как понять буквально, начиная с элемента под номером 1 буквально, и заканчивая элементом под номером 3!.
// Если 2 аргумент не указан он возьмет все элементы вплоть до конца.
// Метод slice возвращает именно новое значение в массиве.(Но тот массив к которому мы применяем он не изменяется).
var newArr = city.slice(1);
var newArr = city.slice(1,3);
console.log(newArr);
console.log(city);

// 5. МЕТОД SPLICE.
// массив.splice(откуда удаляем, сколько удаляем, [вставить], [вставить]...);
// Метод splice добавляет, удаляет, заменяет элементы массива.
var arr = [1, 2, 3, 4, 5];
// Синтаксис метода.
// 1 аргумент является идексом массива.
// 2 аргументы это сколько элемнтов удалить(можем удалить несколько элементов).
// Сейчас мы взяли с 1-2 удалили 2 первых элемента в массиве.
arr.splice(0,2);
console.log(arr);

// 5. МЕТОД SPLICE (замена и добавление).
var color = ["green", "orange", "black", "white", "blue"];
// Синтаксис метода.
// 1 аргумент берется от "green".
// 2 аргументы это сколько элемнтов заменить или добавить ("pink", "gold").
// Тоесть мы заменяем элемент ("green", "orange" на "pink", "gold).
color.splice(0, 2, "pink", "gold");
console.log(color);

// 5. МЕТОД SPLICE (как узнать что мы удалили сейчас).
var clr = ["green", "orange", "black", "white", "blue"];
var removed = clr.splice(0, 2);
console.log(removed);

