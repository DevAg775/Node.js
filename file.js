const fs = require("fs");


//Sync  = Blocking Request
//by the writeFileSync it will add only one file of single line to add multiple files we have to use appendz
// fs.writeFileSync("./test.txt","Hey World")
// fs.writeFileSync("./contact.txt","Jhon +910000000000 , Tom +912222222222")



//Async = Non blocking Request
// fs.writeFile("./test.txt","HEy world",(error)=>{});


//Sync Read file this always returns something we can handle error here by throw catch cause it returns
// const result = fs.readFileSync("./contact.txt","utf-8")
// console.log(result)

//ASync, this doesnt return something it expects you to give callback function in which it will give error or result 
// fs.readFile("./contact.txt","utf-8",(error,result)=>{
//     if(error){
//         console.log("Error",error)
//     }else{
//         console.log(result)
//     }
// });



//to append file by blocking way
// fs.appendFileSync("./test.txt", `${Date.now()} Hey There\n`);
// console.log("Append successful!");


//tocpy files
fs.cpSync("./test.txt","./copy.txt")

//to delte files
fs.unlinkSync("./copy.txt")

//to get status of file
console.log(fs.statSync("./test.txt"))
