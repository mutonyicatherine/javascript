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
// //guess numbers
// let targetNums=Math.floor(Math.random() *10);
// let guess =Math.floor(Math.random() * 10);

// //condition
// while(guess !== targetNums){
//     console.log(`guessed ${guess}...NOT CORRECT`);
//     guess =Math.floor(Math.random() *10);
// }
// console.log(`guessed : ${guess} &targetNum: ${targetNums}...CORRECT GUESS`);


// BREAK KEY WORD
let targetNum = Math.floor(Math.random() *10);
let guess = Math.floor(Math.random() * 10);
while (true){
    guess = Math.floor(Math.random() * 10);
    if(guess === targetNum){
        console.log( `Guessed ${guess} & targetNum: ${targetNum} ...CORRECT`);
        break;
    }
}
//for...of
const soccerTeams = [ 'Manu', 'Chelsea', 'Arsenal', 'Liverpool', 'Tottenhum'];
for (let team of soccerTeams){
    console.log(` ${team}- www.eplteams.com/${team}`);
}
let str = 'femidevs';
for (let s of str){
    console.log(s);
}
let str2 = 'catherine';
for (let s of str2){
    console.log(`${s}- i am an iterable`);
}
//nested for...of loop
const magicSquare = [
    [2, 7,6, ],
    [9, 5, 1,],
    [4, 3, 8]
];
for (let row of magicSquare){
   // console.log(row);
   let total = 0;
   for (let num of row) {
    total += num;
   }
   console.log(`row of ${row} totals to ${total}`);
}
//objects of for...of loop
const movieReviews = {
    Amadeus : 10,
    Arrivals : 9.5,
    Allien: 9,
    Amelie : 8 
};
for (let movie of Object.keys( movieReviews )){
    // console.log(movie);// returns only keys of movieReview
    let score = movieReviews[movie];
// console.log(score);// returns ratings of movieReviews
console.log(`i rated ${movie} ${score}`);
}
//shopping list
const shoppingList = {
    Bread : 120,
    Milk : 80,
    Blueband : 170,
    Coffee : 250,
    Eggs : 430,
    Sugar : 140,

}
//console .log(shoppingList);
//console.log(shoppingList[`coffee`]);
//const eggs = shoppingList. Eggs;
//console.log(eggs);
//const bread = shoppingList.bread;
//console.log(bread);//120
//const list = Object.keys(shoppingList);//returns arrays of keys
//console.log(`${list[0]}) : ${bread}`);
for (let list of Object.keys(shoppingList)){
    console.log(list);//returns keys
    let price = shoppingList[list];
    //console.log(price);//returns price of items
    console.log(`i bought ${list} @ $ ${price}!!`);

}
listTotal = `the total of my shopping list is ${shoppingList.Bread + shoppingList.Milk + shoppingList.Coffee + shoppingList.Eggs + shoppingList.Blueband + shoppingList.Sugar}`
console.log(listTotal);
// let score = movieReviews[movie];
// console.log(score);
// let score = movieReviews[movie];
// console.log(score);
let Sum = 0;
for  (let shop in shoppingList){
   // console.log(shop);
   
   let newPrice = shoppingList[shop];
   console.log(newPrice);
   Sum += shoppingList[shop];
   console.log(Sum);// prints Sum of each iteration/cycle
   

}
console.log(Sum);

