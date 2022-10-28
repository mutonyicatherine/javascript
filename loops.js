//...loop
for(let i= 1;  i<= 10; i++){
    console.log(i);
}
let i =1;
if (i <= 10)
{i++
    console.log(i)

}
let i1 = 1;
if( i1 <=10)
{i1++
console.log(i1)
}
for (let i= 10;i >= 0; i--){
    console.log(i)
};
const animals = ['cow','dogs','cats','goats','sheep'];
//console.log(animals);
for( let i = 0; i < animals.length; i++){
    console.log(`animal at index ${i} is ${animals[i]}`);
    let str = "LOL;"
for(let i =0; i <= 4; i++){
    console.log(`outer :${i}`)
};
for(let j = 0; j < str.length; j++){
    console.log( `inner: ${str[j]}`);
}
}
//animal at index x is y
//while loop
let num = 0;
while (num < 10){
    console.log(num);
    num++;
}
//guess numbers
let targetNums=Math.floor(Math.random() *10);
let guess =Math.floor(Math.random() * 10);

//condition
while(guess !== targetNums){
    console.log(`guessed ${guess}...NOT CORRECT`);
    guess =Math.floor(Math.random() *10);
}
console.log(`guessed : ${guess} &targetNum: ${targetNums}...CORRECT GUESS`);


