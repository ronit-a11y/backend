// let arr = [1, 2, 3, 4, 5];
// arr.reduce((acc, curr, ind, arr) => {
//     console.log(acc);
//     return ind*10;
// },5)
// console.log(arr)

// let arr =[
//     {firstname:'rahul',lastname:'jha',age:25},
//     {firstname:'donald',lastname:'trump',age:76},
//     {firstname:'vimpol',lastname:'potter',age:20},
//     {firstname:'ron',lastname:'weasley',age:25},
// ];
// // op[25:2,76:1,20:1]
// let res= arr.reduce((acc,curr,ind,arr)=>{
//     if(acc[curr.age]){
//         acc[curr.age] +=1;
//     }else{
//         acc[curr.age]=1;
//     }
//     return acc;
// }, {})
// console.log(res);

let student =[
    {name:"smith",rollNumber:31,marks:80},
    {name:"jenny",rollNumber:15,marks:69},
    {name:"john",rollNumber:16,marks:35},    
    {name:"tiger",rollNumber:7,marks:55},
 ];
 // print total marks of all students with marks greater than 60 after 20 marks have been
 // added to those who scored less than 60
 let total= student.map((item)=>{
    if(item.marks<60){
        item.marks +=20;
    }
    return item;
},)
 .filter((item)=>{
    if(item.marks>60){
        return true
     }
 })
 .reduce((acc,curr)=>{
    acc += curr.marks;
    return acc;
 },0)
    console.log(total);
