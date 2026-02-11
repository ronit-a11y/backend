let pr= new Promise ((resolve,reject)=>{
    setTimeout(()=>{
        resolve("promise resolved data");
    },10000) 

    // setTimeout(()=>{
    //     reject("promise rejected");
    // },3000)



})
console.log(pr);
let x= fetch('URL');
console.log(x);
pr
  .then((x)=>{
    console.log(x);
  })
  .catch((x)=>{
    console.log(x);
  })
  
console.log(pr);

