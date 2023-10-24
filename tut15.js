// console.log("this is firsr fun")

let a = 10;
let b = 0;
let waitdata = new Promise ((res,rej)=>{
    setTimeout(()=>{
        res(20);
},2000)
})
waitdata.then((data)=>{
   b = data;
   console.log(a+b)
})
