// task 1
// У нас есть массив с самыми популярными вкусами чипсов.
// И каждый месяц у нас производится новый вкус. Закончи код до конца так,
// чтобы он определял и возвращал сорт, созданный последним.
// Важно: исходный массив не должен изменяться.

var flavor = [
	"Krab",
	"Smetana i zelen",
	"Molosolnie ogur4iki",
	"Klassi4eskiy",
	"S sirom",
	"Paprika"	
];

console.log(flavor.at(-1));

// task 2
// У нас есть массив [1,2,3,4,5]. Необходимо развернуть этот массив БЕЗ СОЗДАНИЯ нового
// В итоге должно получиться: [5,4,3,2,1];
// Используйте только те конструкции, которые мы проходили на уроке.

var number = [1, 2, 3, 4, 5];
number.reverse();
console.log(number);

// task 3
// Есть список слов : [‘радар’,’вор’,’букет’,’доход’,’казак’,’варяг’,’потом’].
// Найти среди них палиндромы.
// Палиндро́м — число (например, 404), буквосочетание, слово или текст, одинаково читающееся в обоих направлениях.
// Иногда палиндромом называют любой симметричный относительно своей середины набор символов.

// для начало, попробуй написать функцию, что будет определять, слово полифил или нет
//потом как ты научишся определять полифилы, прикрути это к массиву
// тоесть делай цикл и каждую итерацию используй ранее написанный код
var words = ["radar", "vor", "buket", "dohod", "kazak", "varjag", "potom"];
function palindrome(str) {
	const strArray = str.split("");
	strArray.reverse();
	const newStr = strArray.join("");

	if(str == newStr) {
		console.log(str + " - is Polindrome");
	} else {
		console.log(str + " - is Not Polindrome");
	};
};

const Arr = ["radar", "vor", "buket", "dohod", "kazak", "varjag", "potom"];

for(let u = 0; u < Arr.length; u++) {
	palindrome(Arr[u]);
};

// task 4
// Есть массив чисел : [444,123,-114,231,775,221,766,-557,0]. 
// Необходимо найти максимальное число и вывести его в консоль

var numberRandom = [444,123,-114,231,775,221,766,-557,0];
numberRandom = Math.max(444,123,-114,231,775,221,766,-557,0);
console.log(numberRandom);

// task 5
// Пользователь вводит многозначное число. 
// Напишите функцию, которая принимает число в качестве аргумента
// и вставляет двоеточие (:) между двумя нечетными числами. 
// Например, если вводится число 55639217, то на выходе должно быть 5:563:921:7.

function insertNumber() {
const number = 55639217;
const numberString = number.toString();
const numberArray = numberString.split("");
const newNumberArray = [];

for(let n = 0; n < numberArray.length; n++) {
	newNumberArray.push(numberArray[n]);

	if(numberArray[n] % 2 === 0) {
		if(numberArray[n+1] % 2 === 0) {
			newNumberArray.push(":");
		};
	};
};
console.log(`newNumberArray ---`, newNumberArray);
}

insertNumber();