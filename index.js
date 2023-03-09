/**
 * Question 1
 * 
 * Mutating array methods modify the original array directly. E.g: push(), pop(), splice(), sort(), reverse().
  * Non-mutating array methods do not modify the original array but instead return a new array. E.g: splice(),concat(), filter(),reduce(), map().
  * /** */


 //QUESTION 2
const languages = (items) => {
    items.push('Kotlin');
    items.splice(3, 0, 'Java');
    items.shift();
    items.unshift('Scala', 'Swift');
    items.splice(5, 1, 'Go', 'Rust');

    return items;
}

const result = languages(['C#', 'JavaScript', 'Ruby', 'PHP', 'Python']);
console.log(result);

//question 3

let fruit = ['apple', 'mango', 'banana'];
function changeFruit(fruit) {
    fruit[2] = 'orange';
    return fruit;
}

console.log(changeFruit(fruit));

//question 4

function maxNumber(array) {
    return Math.max(...array);
}

const answer = maxNumber([2, -10, 4, -20]);
console.log(`Maximum value is ${answer}`);

//question 5

const valTimesIndex = (items) => {
    return (
        items.map((item, index) => {
            return item * index;
        })
    )
}
const valTimes = valTimesIndex([3, 4, 2]);
console.log(valTimes);