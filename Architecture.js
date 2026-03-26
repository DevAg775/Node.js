const fs= require("fs")
const os= require('os')

console.log(os.cpus().length);
//gives the no of threads availble on this device

// //Sync... Blocking Operations
// fs.writeFileSync("./test.txt","hello world");

// //Async... Non Blocking Operations
// fs.writeFile("./test.txt","Helow world Async", (err)=> {})


    // console.log("1");
    // //Blocking... Normally in Blocking a thread is assigned to operation from the thread pool and only 4 threads are available normally in the server 
    // const result = fs.readFileSync("contact.txt","utf-8");
    // console.log(result);
    // console.log("2");


    // console.log("1");
    // //Non Blocking...
    // fs.readFile("contact.txt","utf-8",(error,result) => {
    // console.log(result);   
    // });
    // console.log("2");
    // console.log("3");
    // console.log("4");
    // console.log("5");

    