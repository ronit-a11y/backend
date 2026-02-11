//    Array
const myArr =[0,1,2,3,4,5];
console.log(myArr[0]);


// Array methods


// myArr.push(6);
// myArr.pop();
// console.log(myArr);

myArr.unshift(9);
console.log(myArr);

// console.log(myArr.includes(9));
// console.log(myArr.indexOf(9));

// const newArr = myArr.join();
// console.log(myArr);
// console.log( newArr);



// slice,splice

console.log("A", myArr);
const myn1 = myArr.slice(1,3);
console.log(myn1);
const myn2 = myArr.splice(1,3);
console.log(myn2);

const marvel_heros = ["thor","ironman","spiderman"];
const dc_heros =["superman","flash"];
marvel_heros.push(dc_heros);
console.log(marvel_heros);




