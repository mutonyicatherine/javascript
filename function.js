function grumpus(){
    console.log( 'ugh...you again...');
    console.log('for the last time...');
    console.log('LEAVE ME ALONE!!!');
}
grumpus();//to call a function
grumpus();
grumpus();
function greet(names){
    console.log(`Hello,${names}`);
}
greet(`catherine`);

function avg(arrays){
    let sum = 0;
    for(let n of arrays){
        sum += n;//35

    }
    let average = sum/arrays.length;
    console.log(average);
}
avg([5,6,7,8,9]);
let str2 = 'hello';
console.log(str2.toUpperCase())
//find largest
function findLargest(x,y) {
    if (x > y){
        console.log(`${x} is larger!`);
    }
    else if (x < y){
        console.log(`${y} is larger`);
    }
    else{
        console.log(`${x} and ${y} are equal!`);
    }
}
findLargest(6,6)
//return in function
function sum (arr){
    let sum = 0;
    for (let n of arr){
        sum +=n;
    }
    console.log(sum);

}
sum([6,7])
function subtract (x,y){
    console.log(x-y);
    
}
subtract(9,3);
function multiply (x,y){
    console.log(x*y);
}
multiply(3,4);
function division (x,y){
    console.log(x/y)

    }
    division(9,3);
    function twoReturns(x,y){
        return [x,y];//return more than one value
    };
    let stored = twoReturns(2,3);{
        console.log(stored);  
    }
    //newSquare(4);
    function sqrt(sq){
        return sq * sq;
        console.log('HELLO WORLD');

    }
    let square2 = sqrt(4);
    console.log(square2);
    function addNext (x,y){
        console.log(x+y);// 5
    }
    const next = addNext(2,3);
    console.log(next);//undefined
    function isPurple(color){
        if(color === "purple" ) {
            return true;
        }
        else {
            return false;
        }

    }
    let newColor = isPurple("purple")
    console.log(newColor);



//is purple ('purple','red','pink');
//when working with simple situations like YES OR NO
function green(colors){
    if(colors === "green" && colors === "white"){
        return true;
    }
    else{
        return false;
    }
}
green(["green","yellow"]);
let kate =green(["green","yellow"])
console.log(kate);
// for loop
function containsGreen(arr){
    for(let color of arr){
        if(color === "green" || color === "beige"){
            return true
        }
    {
        elseif
        { return false}
    }
    }
}
let container = containsGreen(["green","mustrad","brown"]);
console.log(container);
//function declaration
//generating a random dice roll or asingle die roll
function rollDie(){
    let roll = Math.floor(Math.rondom()*6) + 1;//print
    console.log(`rolled : ${roll}`)
}