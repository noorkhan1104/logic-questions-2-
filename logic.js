 //question 1
 let car = {
   make : 'bmw',
   model : 4042,
   year:2010,
}
console.log(car.model);

//question 2
const myArr = [0, 20, 30, 40, 50];

for (let i = 0; i < numbers.length; i++) {
    console.log(numbers[i]);
}

//question 3
function sumofArr(numbers) {
    let sum = 0; 

    for (let i = 0; i < numbers.length; i++) {
        sum += numbers[i]; 
    }
    return sum; 
}
//const result = sumofArr([10, 20, 30, 40, 50]);
console.log(result); //150

//question 4
 const currentDate =new Date();
 const currentYear =currentDate.getFullYear();
 console.log(currentYear);

//question 5 
function elseStatment(){
    let i = 4
    if(i>0){
        return "positive"
    }
    else if (i<0){
        return "negative"
    }
    if(i= 0){
        return 'xero'
    }
}
let answer = elseStatment()
console.log(answer);

//6
let num=1;
while (num<=5){
    console.log(num);
    num++
}

//7
function calculateSquareRoot(num) {
    if (num< 0) {
        return "Invalid input.";
    }
    return Math.sqrt(num); 
}
const result = calculateSquareRoot(25);
console.log(result); // 5

//8
function filterEvenNumbers(numbers) {
    return numbers.filter(num => num % 2 === 0); 
}
const evenNumbers = filterEvenNumbers([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
console.log(evenNumbers); // [2, 4, 6, 8, 10]

//9
function multiplyNumbers(a, b = 10) {
    return a * b; 
}
console.log(multiplyNumbers(5, 3)); 
console.log(multiplyNumbers(2));   //2 multiply by 10
 
//10

const calculator = {
    add: function(a, b) {
        return a + b;
    },
    subtract: function(a, b) {
        return a - b;
    },
    multiply: function(a, b) {
        return a * b;
    },
    divide: function(a, b) {
        if (b === 0) {
            return " Division by zero is not allowed.";
        }
        return a / b;
    }
};
console.log(calculator.add(5, 3));      
console.log(calculator.subtract(5, 3)); 
console.log(calculator.multiply(5, 3)); 
console.log(calculator.divide(5, 0));    
console.log(calculator.divide(5, 2));    

//11
function getGrade(marks) {
    if (marks > 90) {
        return "A";
    } else if (marks >= 80) {
        return "B";
    } else if (marks >= 70) {
        return "C";
    } else {
        return "F";
    }
}

console.log(getGrade(91)); 
console.log(getGrade(81)); 
console.log(getGrade(71)); 
console.log(getGrade(61)); 

//12
let findArr=[1,2,3,4,5,6]
let find = findArr.length
console.log(find); //6

13
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] === 5) {
        break; 
    }
    console.log(numbers[i]);
}

//15
function getDayName(dayNumber) {
    switch (dayNumber) {
        case 1:
            return "Monday";
        case 2:
            return "Tuesday";
        case 3:
            return "Wednesday";
        case 4:
            return "Thursday";
        case 5:
            return "Friday";
        case 6:
            return "Saturday";
        case 7:
            return "Sunday";
        default:
            return "Invalid day number"; 
    }
}

console.log(getDayName(1));
console.log(getDayName(10));


