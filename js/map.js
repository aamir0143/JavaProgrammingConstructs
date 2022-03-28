//map
console.log("1.Mapping Methods:===>");
const numbers = [40, 16, 50, 12];
const newArr = numbers.map(myFunction);
function myFunction(num)
{
    return num * 10;
}
console.log("New Array: ", newArr);
//Filter Example:
console.log("2.Filtering Methods:===>");
const greaterThan16 = numbers.filter(n => n >= 16);
console.log("Filter Array: ", greaterThan16);
//Filter Example in strings
let words = ['Javascript', 'Python', 'Java', 'Html'];
let result = words.filter(word => word.length < 8);
console.log("Less than 8 Char:", result);
let result1 = words.filter(word => word.length > 8);
console.log("Greater than 8 Char:", result1);
//Reduce Method:
console.log("3.Reducing Methods:===>");
const numbers1 = [1, 2, 3, 4, 5];
const sum = numbers1.reduce(function (accumulator, currentValue)
{
    return accumulator + currentValue;
});
console.log("Sum of: ", sum);
const multiply = numbers1.reduce(function (accumulator, currentValue)
{
    return accumulator * currentValue;
});
console.log("Multiply of: ", multiply);
const subtract = numbers1.reduce(function (accumulator, currentValue)
{
    return accumulator - currentValue;
});
console.log("Subtract of: ", subtract);
const divide = numbers1.reduce(function (accumulator, currentValue)
{
    return accumulator / currentValue;
});
console.log("Divided of: ", divide);
//Finding average / mean using reducing method
let mean = numbers1.reduce(function (accumulator, currentValue)
{
    return accumulator + currentValue;
});
mean = mean / numbers1.length;
console.log("Mean of: ", mean);
//forEach Method
console.log("forEach Methods:===>");
const fruits = ["apple", "mango", "orange"];
fruits.forEach(myFunction);
console.log(fruits);