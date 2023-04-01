//This is sample number 1

console.log('Hello World');

let firstName = ('First Name: John');
    console.log(firstName);
let lastName = ('Last Name: Smith');
    console.log(lastName);
let age = ('Age: 30');
    console.log(age);
let hobbies = 
    {
    Hobbies:
    [
    'Biking',
    'Mountain Climbing',
    'Swimming'
    ]
    }
    console.log(hobbies.Hobbies);
const place1 = 'city: Lincoln';
    console.log(place1);
const place2 = 'house number: 32';
    console.log(place2);
const place3 = 'state: Nebraska';
    console.log(place3);
const place4 = 'Street: Washington';
    console.log(place4);

function personInf0(name, age)
    {
        console.log(`${name} is ${age} years of age`);
    }
    personInf0('John Smith','30');

function hisHobby(hobby1,hobby2,hobby3)
    {
        console.log(`His hobbies are: ${hobby1}, ${hobby2} ${hobby3}`)
    }
    hisHobby('eating','sleeping','bingwatching');

function relationshpStatus(married)
    {
       
        console.log(`The value of isMaried is: ${married}`);
        
    }
    relationshpStatus('True');

/*
2. Instructions

Set two variables equal to two different numbers.
  Use a comparison operator to compare these two variables.
  Change one of their values by using the +=, -=, *=, or /= operator. 
  Then, compare their values again.
Try out the <= and >= operators.
Try to use the !== operator.
*/

let num1 = 50;
let num2 = 25;

let num = num1 >= num2;//true
console.log(num);

let numSecond = num1 /= num2;//2
console.log(numSecond);

let numThree = num1 !== num2;//true
console.log(numThree);


/*
Instructions

Put the conditional statement inside the function.
Ensure that the proper NAMING STANDARD is followed.
Create a Switch Statement that accepts the colors: Black, Violet, and Pink.
Lowercase and Uppercase letters must be accepted
*/
/*
let Colors = prompt('Type the First Letter of your pickColor (Black,Violet,Pink):' );

    function colorPick(Colors)
    {
        switch(Colors)
        {
            case(Colors = 'B'):
            case(Colors = 'b'):
                console.log('Black');
                break;
            case(Colors = 'V'):
            case(Colors = 'v'):
                console.log('Violet');
                break;
            case(Colors = 'P'):
            case(Colors = 'p'):
                console.log('Pink');
                break;
        }
    }
    colorPick(Colors);
*/
/*
Instructions

Create a function that will accept a number, if the number given by the user is an odd number, display "odd number". If even number, display "even number".
Before logging an odd or even number, check the input of the user. If the user input is a string such as "one", "two", "or three", display unexpected input.
Try these arguments
5
10
"8"
"20"
"seven"
"Fifteen"
true
null
undefined
NaN
 */
   
let number = '2';

let remainder = number % 2;

if (number == '' )
{
    console.log('wrong input');
}

else if (remainder == 0)
{
    console.log(number);
    console.log('Even number');
}
else 
{
    console.log('Odd number');
} 
