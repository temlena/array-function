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