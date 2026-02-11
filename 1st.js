// function fun(){
//     //var x= 20;
//     var x= ()=>{
//         console.log('inside x function');
//     }
//     return x;
// }

// var p = fun;
// var a = fun();
// console.log(a);

// let cb= ()=>{
//     console.log('inside cb function');
// }
// function outer(y){
//     console.log(y);
// }

// outer(cb);

// function outer(){
//     var a= 10;
//     function inner(){
//         console.log(a);
//     }
//     return inner;
// }   
// var x = outer();    
// x()

let arr=[23,34,45,67,89];

let filterArr= arr.filter((item,ind,arr)=>{
     if(ind%2==0){
        return true
     }
})
console.log(filterArr)