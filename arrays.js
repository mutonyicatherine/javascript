//creating in arrays
console.log('catherine');
let students=[];
console.log(students);
let colors=['red','orange','yellow' ,'blues']
console.log(colors[0]);
//console.log(colors);
colors[0]='pink';
console.log(colors);

let fruits = ['orange', 'mangoes', 'bananas'];
fruits.push('apples');// adding an array to the end of an arry
fruits.pop();//removing an item to the end of an array
fruits.shift();//remove an item from the start of an array
fruits.unshift('watermelon');//add an item to the start of an array
console.log(fruits);
//concatenating arrays
let cohortOne=[true, false, 15];
let cohortTwo=[false, true, 19];
let femidevs=cohortOne.concat(cohortTwo);
console.log(femidevs.includes(19));
console.log(femidevs.includes(15));
console.log(femidevs.includes(90));
console.log(femidevs.indexOf(15));
console.log(cohortOne.join('.'));
console.log(femidevs.reverse());
console.log(femidevs.slice(1,4));
let femidevsTwo = femidevs.slice();
console.log(femidevsTwo);
console.log(femidevs.splice(2, 1, 20));
console.log(femidevs);
console.log(femidevs.splice(2, 3, 2, 20, 20));
console.log(femidevs);
const month =['jan','march','april','june'];
month.splice(1,0,'feb');
//insert at index 1
// console.log(month);
// expected output:Array ["jan","feb","march","april"]
month.splice(1, 1, "october");
console.log(month);
const color = ['brown','green','yellow', "blue"];
console.log(color.sort());
const student = [8,2,6,4];
console.log(student.sort());
//nesting of array
const animals = [  
    ['man','monkey','bat','cows'],
    ['lizard','crocodile','chameleon','turtle'],
    ['frog','newt','salamander','toads']
];
//mammals =man, monkey, bat, cows
//reptiles = lizard, crocodile, chameleon, turtle
//amphibians = frogs, newt, salamander,toads
const mammals=animals[0];
console.log(mammals);
console.log(`mammals : ${mammals}`);



const reptiles = (animals[1]);
console.log(reptiles);
console.log(`reptiles: ${reptiles}`);
const amphibians =(animals[2]);
console.log(amphibians);
console.log(`amphibians: ${amphibians


