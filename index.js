// Code your solutions in this file
const names = ["Guadalupe", "Ollie", "Aki"]

function writeCards(names, event) 
{
   return  names.map(name=> `Thank you, ${name}, for the wonderful ${event} gift!`)
}

console.log(writeCards(names, "surpise"))

function countDown(number) 
{
    while (number > 0)
    {
        console.log(number);
        number -= 1;
    }
    console.log(number);
 }