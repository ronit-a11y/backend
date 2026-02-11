// let marks =[85,45,35,25,45,65];
// let sum =0;
// for(let val of marks){
//     sum += val;
// }
// let avg = sum/marks.length;
// console.log(sum);

// let items =[250,645,300,900,50];
// let i = 0;
// for(let val of items){
//     let offer = val/10;
//     items[i] = val-offer;
//     i++;
    
// }

// console.log(items);

// function myFunction() {
//     console.log("hiiii");
//     console.log("hello");
// }
// myFunction();


// let arr =[1,2,3,4,5,6,7];

// let evenArr = arr.filter((val) =>{
//     return val %2 === 0;
// });
// console.log(evenArr);


// let arr =[5,6,3,101,4];

// const output = arr.reduce((res,curr) =>{
//     return res > curr ? res : curr;
// });
// console.log(output);


let n = prompt("enter a number : ");
let arr = [];
for(let i=0;i<n;i++){
    arr[i-1]=i;
}
console.log(arr);

let sum = arr.reduce((res,curr) => {
    return res + curr;
});
console.log("sum = ",sum);

let factorial = arr.reduce((res,curr) => {
    return res * curr;
});
console.log("factorial = ",factorial);

