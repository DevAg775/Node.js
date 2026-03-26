//M1
// function add(a,b){
//     return a+b
// }

// function sub(a,b){
//     return a-b
// }

// module.exports = {
//     add,
//     sub,
// }

//module.exports can be used only one time 

//M2 to export

//expots. can be used many times
//anonymous function
//.add,.sub is property not funciton
exports.add = (a,b) => a+b;

exports.sub = (a,b) => a-b;