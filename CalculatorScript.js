//So the first version of the code freaking sucks. I will now try another approach, which will hopefully turn out to be successful.
//Also from now on I will try to add comments

var commaCheck = false;
var equalCheck = false;
var number = "";
var operator = "+";
var result = "";

//Function which takes the digits as strings (or comma as an empty string) and concats them to the number;
function numberConstructor(digit)
{
    //The first digit after the equal button was pressed resets the display;
    if(equalCheck == true)
    {
        clearUpperDisplay();

        equalCheck = false;
    }

    //The function clears the lower display whenever a new number must be introduced;
    if(number == "")
        clearLowerDisplay();

    if(digit == "" && commaCheck == false)
    {
        number += "." + digit;

        commaCheck = true;
    }
    else
        number += digit;

    clearLowerDisplay();
    addLowerDisplay(number);

    return false;
}

//Function which cuts the last character from the "number" string;
function makeDelete()
{
    if(number[number.length - 1] == ".")
        commaCheck = false;

    number = number.slice(0, number.length - 1);

    clearLowerDisplay();
    addLowerDisplay(number);

    return false;
}

//Function which handles all the calculations
//Takes as parameter the next operator, but the function uses the previous one in the calculations
//This is because the first number doesn't have a sign in front of it, so it defaults to "+" and because the user inputs the sign before the actual number;
function makeCalculation(nextOperator)
{
    if(number == "")
        return false;

    const calcNumber = Number(number);
    result = Number(result);

    switch(operator)
    {
        case "+":
            result += calcNumber;
            //result = result.toPrecision(8);
            break;
        
        case "-":
            result -= calcNumber;
            //result = result.toPrecision(8);
            break;

        case "*":
            result *= calcNumber;
            //result = result.toPrecision(8);
            break;

        case "/":        
            result /= calcNumber;
            //result = result.toPrecision(8);
            break;
    }

    addUpperDisplay(number + " " + nextOperator + " ");

    clearLowerDisplay();

    addLowerDisplay(result);

    operator = nextOperator;

    resetNumber();

    return false;
}

//Function which displays the result of all the previous calculations
//Also resets everything in the background
function makeEqual()
{
    makeCalculation("");

    clearLowerDisplay();

    addLowerDisplay(result);

    resetResult();

    equalCheck = true;

    return false;
}

//Clears everything
function makeClear()
{
    resetResult();

    resetNumber();

    clearUpperDisplay();

    clearLowerDisplay();

    return false;
}

//Resets the number related variables
function resetNumber()
{
    number = "";
    commaCheck = false;
}

//Resets the result related variables
function resetResult()
{
    result = "";
    operator = "+";
}

//Clears the entire lower display
function clearLowerDisplay()
{
    let obj = document.getElementById("lowerDisplay");

    obj.innerHTML = "";
}

//Concats the parameter to the contents of the lower display
function addLowerDisplay(string)
{
    let obj = document.getElementById("lowerDisplay");

    obj.innerHTML += string;
}

//Clears the entire upper display
function clearUpperDisplay()
{
    let obj = document.getElementById("upperDisplay");

    obj.innerHTML = "";
}

//Concats the parameter to the contents of the upper display
function addUpperDisplay(string)
{
    let obj = document.getElementById("upperDisplay");

    obj.innerHTML += string;
}
