document.getElementById("sum").value = null; // Initialises the text box value

let sum = []; // Initialises sum array (stores 55 + 2 as [5,5,+,2])

function getSum(val) // Gets button value and adds it to sum
{
    sum.push(val); // Pushes button value to end of array
    document.getElementById("sum").value = sum.join(''); // Updates text box
}

function calculate() // Calculates sum
{

    // Calls try statement to check for errors (for instance, if user inputted only operators)
    try {
        if (sum.length != 0) // Checks sum array has entries
        {
            let sumstr = sum.join(''); // Turns [5,5,+,2] into "55+2"
            let result = Function("return " + sumstr)(); // result variable which = function that returns 55+2
            document.getElementById("sum").value = result; // Updates text box with result
            sum = [result] // Updates sum with result for further calculations
        }
    }

    // In the event of errors, removes content in text box and reloads the page
    catch(err) {
        document.getElementById("sum").value = ('');
        window.location.reload(true);
    }
}

function backspace()
{
    sum.pop(); // Removes last entry in array ([5,5,+])
    document.getElementById("sum").value = sum.join(''); // Updates text box
}

