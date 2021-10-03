// if..else

/*
1. Write a program that asks the user for a number and check the following conditions:

  - `if` the number is even print the message " number is even"
  - `if` the number is odd print the message "number is odd"
*/

let num = Number(prompt('Enter the number'));
if(num%2 == 0)
  alert('Number is even');
else 
  alert('Number is odd');

// 2. Write a program to accept two numbers from user using`prompt` and alert the max value.

let num1= Number(prompt('Enter number 1'));
let num2= Number(prompt('Enter number 2'));
if(num1>num2)
  alert(num1);
else
  alert(num2);

// 3. Convert the above code using`?` terniary operator

let num1= Number(prompt('Enter number 1'));
let num2= Number(prompt('Enter number 2'));
num1>2 ?  alert(num1) :   alert(num2);

/*
4. Write a program that asks the user for the house name and check the following conditions:

  - `if` house name is "stark" then print the message " Winter is coming"
  - `if` house name is "lannister" then print the message " A lannister always pays his debt"
  - `else` print the message " All men must die"
*/

let houseName = prompt('Enter house name');
if(houseName == 'stark')
  alert( " Winter is coming");
else if(houseName == 'lannister')
  alert(" A lannister always pays his debt");
else 
  alert(" All men must die");

// 5. Convert the above code using`?` terniary operator

let houseName = prompt('Enter house name');
houseName == 'stark' ? alert( " Winter is coming") 
: houseName == 'lannister' ?  alert(" A lannister always pays his debt") 
  : alert(" All men must die");

// Switch

// 6. Write a program that takes the number of the month(1 - 12) and alert number of days in the month.

let month = Number(prompt('Enter number of month'));
switch(month) {
  case 2 : alert(28);
           break;
  case 4 :
  case 6 :
  case 9 :
  case 11 : alert(30);
            break;
  case 1 :
  case 3 :
  case 5 :
  case 7 :
  case 8 :
  case 10 :
  case 12 : alert(31);
  break
  default : alert('Enter valid month');
}

/* 7.
- Write a program that take the salery of the user using prompt and alert the in -hand amount.You will find out the in -hand amount by deducting the tax amoun from salery.Conditions are given below.
  - `Salary <= 20000` tax is 10 %
  - `Salary <= 40000` tax is 20 %
  - `Salary > 50000` tax is 30 %

*/

let salary = Number(prompt('Enter salary'));
if(salary <= 20000)
  alert(salary - (salary*0.1));
else if(salary <= 40000)
  alert(salary - (salary*0.2));
else 
  alert(salary - (salary*0.5));


//  if..else vs switch

/* 8.
Implement the condition give below using`if..else` and`switch` statement.

  - `marks > 100` alert`"Marks can't be greater than 100"`
  - `marks > 80 && marks < 100` alert`"Grade A"`
  - `marks > 50 && marks < 80` alert`"Grade B"`
  - `marks > 30 && marks < 50` alert`"Grade C"`
  - `marks > 0` alert`"Grade D"`

*/

/*If else*/

let marks = Number(prompt('Enter marks'));
if(marks > 100)
alert("Marks can't be greater than 100");
else if(marks > 80 && marks < 100)
alert("Grade A");
else if(marks > 50 && marks < 80)
alert("Grade B");
else if(marks > 30 && marks < 50) 
alert("Grade C");
else if(marks > 0)
alert("Grade D")
else
alert('Invalid marks');

/*Switch*/
//We cannot use relational expressions in switch case.



/* 9. Weather app

  - Ask user to provide the condition of the weather outside by asking `What is the weather like outside?`
  - If user says`sunny` alert`Wear a T-shirt`
  - If`rainy` alert`Don't forget to take your raincoat`
  - If`hot` alert`Get a hanky`
  - If`freezing` alert`Get your sweeter on`
  - Anything else should alert`Not a valid input`
*/

let weather = prompt('What is the weather like outside?');
switch(weather){
  case 'sunny' : alert('Wear a T-shirt');
  break;
  case 'rainy' : alert(`Don't forget to take your raincoat`);
  break;
  case 'hot' : alert('Get a hanky');
  break;
  case 'freezing' : alert('Get your sweeter on');
  break;
  default : alert('Not a valid input');
}
