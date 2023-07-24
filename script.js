
function swap(a, i, j) {
	let temp = a[i]
	a[i] = a[j]
	a[j] = temp
}
let arrayRandom = []
for (let i = 0; i < 30; i++) {
	let randomResults = (max, min) => min + Math.floor(Math.random() * max);

	arrayRandom.push(randomResults(30, 1))
}
document.write(`${arrayRandom}<br>`)

/* let arrayRandom = [10, 18, 5, 1, 4, 28, 78, 65, 90, 1, 55, 0] */


//Задача 1.Задача 2. Дано масив 30 випадкових цілих чисел. Підрахувати скільки було обмінів під час сортування змішуванням.

/* let leftIndex = 0
let counter
let rightIndex = arrayRandom.length - 1
while (leftIndex < rightIndex) {
	for (let indx = leftIndex; indx < rightIndex; indx++) {
		if (arrayRandom[indx] > arrayRandom[indx + 1]) {
			swap(arrayRandom, indx, indx + 1)
		}
	}
	rightIndex--

	for (let indx = rightIndex; indx > leftIndex; indx--) {
		if (arrayRandom[indx] < arrayRandom[indx - 1]) {
			swap(arrayRandom, indx, indx - 1)
		}

	}
	leftIndex++
}

console.log(arrayRandom);
 */


//Задача 3. Дано масив 30 випадкових цілих чисел. Підрахувати скільки було обмінів під час сортування включеннями.


/* document.write(names)
const prevLastIndexNames = names.length - 2
let counterNames = 0
for (let i = 0; i < prevLastIndexNames; i++) {
	let minIndexNames = i
	for (let j = i + 1; j < names.length; j++) {
		if (names[j] < names[minIndexNames]) {
			minIndexNames = j
		}
	}
	if (i !== minIndexNames) {

		let tmp = names[i]
		names[i] = names[minIndexNames]
		names[minIndexNames] = tmp

		counter++
	}

}
console.log(names);
console.log(counter); */



//Задача 5. Дано масив імен. Застосовуючи відповідне сортування та бінарний пошук визначити, чи є у масиві ім’я «Olga» і під яким індексом.
/* let names = ['John', 'Paul', 'Olga', 'Andrew', 'Abrams', 'Abba', 'Peter', 'Tina', 'Olga', 'Jack', 'Peter',]

let prevLastName = names.length - 2
for (let i = 0; i < names.length; i++) {
	let minIndex = i;
	for (let j = i + 1; j < names.length; j++) {
		if (names[j] < names[minIndex]) {
			minIndex = j
		}
	}
	if (i !== minIndex) {
		let tmp = names[i]
		names[i] = names[minIndex]
		names[minIndex] = tmp
	}
}
console.log(names); */

//Задача 5. Дано масив імен. Застосовуючи відповідне сортування та бінарний пошук визначити, чи є у масиві ім’я «Olga» і під яким індексом.

/* function includes_binarySearch(arr, searchElement) {
	let start = 0;
	let end = arr.length - 1
	while (start <= end) {
		const middle = Math.floor(start + end) / 2
		if (names[middle] === searchElement) return true
		if (names[middle] < searchElement) start = middle + 1
		if (names[middle] > searchElement) start = middle - 1
	}
	return false
}
if (includes_binarySearch(names, 'Olga')) {
	document.write('Olga входить у массив')
}
 */
/* function includes_binarySearch(arr, searchElement) {
	let start = 0;
	let end = arr.length - 1
	while (start <= end) {
		const middle = Math.floor(start + end) / 2
		if (names[middle] === searchElement) return true
		if (names[middle] < searchElement) start = middle + 1
		if (names[middle] > searchElement) start = middle - 1
	}
	return false
}
if (includes_binarySearch(names, 'Olga')) {
	document.write(`елемент 'Olga'  присутній`)
} */