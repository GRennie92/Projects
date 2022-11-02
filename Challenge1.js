console.log("hello world");

// Task 1
let reverseString = (name) =>{
    var splitString = name.split("");
    var reverseArray = splitString.reverse();
    var joinArray = reverseArray.join("");
    return joinArray;
}
console.log(reverseString("Geronimo!"));

// Jorge's Solution
const reverseString2 = (str) => str.split("").reverse().join("");
console.log(reverseString("Geronimo!"));


//-----------------------------------------------------------------------------------------------------
// Task 2
let reverseArray = (input) =>{
    var reverse = new Array;
    for(var i = input.length-1; i >= 0; i--){
        reverse.push(input[i]);
    }
    return reverse;
}
var a = [1, 2, 3, 4, 5 ,6 ,7 ,8 ,9]
console.log(reverseArray(a))
console.log(reverseArray("I", "like", "Javascript"));

// Jorge's Solution
const reverseArray2 = (array) => array.reverse();
console.log(reverseArray2([1, 2, 3, 4, 5,]));
console.log(reverseArray2(["I", "like", "Javascript"]));

// Jorge's Solution2
const reverseArray3 = (array) => {
    const newArray = [];
    for(let i = array.length -1; i >= 0; i--){
        newArray.push(array[i]);
    }
    return newArray;
}
console.log(reverseArray3([1, 2, 3, 4, 5,]));
console.log(reverseArray3(["I", "like", "Javascript"]));

// Jorge's Solution3
const reverseArray4 = (array) => {
    const newArray = [];
    for(let i = 0; i < array.length; i++){
        newArray.unshift(array[i]);
    }
    return newArray;
}
console.log(reverseArray4([1, 2, 3, 4, 5,]));
console.log(reverseArray4(["I", "like", "Javascript"]));


//------------------------------------------------------------------------------------------------------------
// Task 3
let mostExpensiveItem = (input) =>{
    const items = input;
    let highestPrice = 0.0;
    let itemNum = 0;
    const len = items.length;
    for (var i = 0; i < len; i++)
     {
        if((items[i].stock * items[i].price) > highestPrice){
            highestPrice = (items[i].stock * items[i].price);
            itemNum = i;
        }
     }
     return items[itemNum];
    
}

var b = [
    {name:"Irn Bru", cost:3.25, stock:50}, 
    {name:"Fanta", cost:3.98, stock:45}, 
    {name:"Diet Coke", cost:4.40, stock:38}, 
    {name:"7UP", cost:3.99, stock:42}
];

console.log(b);
console.log(mostExpensiveItem(b));


// Jorge's Solution
const items2 = [
    {name:"Irn Bru", cost:3.25, stock:50}, 
    {name:"Fanta", cost:3.98, stock:45}, 
    {name:"Diet Coke", cost:4.40, stock:38}, 
    {name:"7UP", cost:3.99, stock:42}
];

const mostExpensiveItem2 = (array) =>{
    let mostExpensiveItemObj = {};
    let mostExpensiveItemCost = 0;
    for(let i=0; i<array.length; i++){
        const costTiedUpSingleItem = array[i].price*array[i].stock;
        if(costTiedUpSingleItem > mostExpensiveItemCost){
            mostExpensiveItemCost = costTiedUpSingleItem;
            mostExpensiveItemObj = array[i];
        }
    }
    return mostExpensiveItemObj;
    
}
console.log(mostExpensiveItem2(items2));



