/* JAVASCRIPT ARRAY METHODS */

//.push(element) -> adds an element to the end of the array. 
//.shift() -> removes a first-index element of the array. 
//.unshift(element) -> adds an element to the beginning of the array.
//.pop() -> removes a last-index element of the array. 
//.forEach() -> iterates over each element of the array. 
//.splice() -> add/remove selected elements from the array.
//.slice() -> create a new one with selected elements. 

//.map() -> creates a new array with every element from the original one changed. 

const numsArr = [1,2,3];

const newArr = numsArr.map((num)=>{
    return num * 2;
})

// console.log(newArr);

const cities = ["Lisbon", "Barcelona", "Porto", "Beja"];

const newCities = cities.map((city)=>{
    return city.toUpperCase();
})

// console.log(newCities);

// .reduce() -> reduces the array into either a number or a string. 

let total = 0;

const numbers = [4,6,2,1];

/* 
same as: 
numbers.forEach((number)=>{
    total += number;
})
}) */

total = numbers.reduce((accumulator, value)=>{
    return accumulator + value;
});

// console.log(total);

/* EXERCISE */
const lyrics = ["You", "are", "my", "fire", "the", "one", "desire"];

// I want you to use reduce, in order to create a string with these words combined. Of course, i want a space between them.

let stringLyrics = lyrics.reduce((accumulator, lyric)=>{
    return accumulator + " " + lyric;
})

/* // How to convert the stringLyrics into an array of words, again.
let arrLyrics = stringLyrics.split(" ");
console.log(arrLyrics);
*/

// console.log(stringLyrics);

/* SECOND EXERCISE */

const people = [
    {name: 'Candice', age:25, drinks: 2},
    {name: 'Tammy', age: 30, drinks: 2}, 
    {name: 'Jose', age: 17, drinks: 2}, 
    {name: 'Nettie', age:16, drinks: 2}
]

// How many drinks should I have prepared for these persons

let drinksTotal = 0; 

drinksTotal = people.reduce((sum,person)=>{
    return sum + person.drinks;
},0)

//console.log(drinksTotal); // Output: 8 -> I should have 8 drinks prepared. 

// I want to know who can drink alcohol (people who have the age greater or equal than 18)

const peopleCanDrink = people.filter((person)=>{
    return person.age >= 18;
})

//console.log(peopleCanDrink);

// Sort Strings
const words = ['marcelo', 'sousa', 'rebelo'];

words.sort();

// console.log(words);

// Sort Numbers
const numbersToSort = [6,1, 2,3,4,5];

numbersToSort.sort((a,b)=>{
    return b - a;
})

console.log(numbersToSort);










