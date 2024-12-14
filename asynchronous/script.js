// function getName(callback){
//     console.log("Your Name is")

//     callback()
// }

// function giveName(){
//     console.log("Aviral")
// }

// getName(giveName)

//Promise is js feature that allows us to write asynchronous 
// code in an organized way


// let promise = new Promise((resolve, reject) => {
//     var x = true

//     if(x){
//         resolve("Success");    
//     }
//     else{
//         reject("Failure");
//     }
// })

// promise.then((res) => {
//     console.log("1st " +res);
//     return res;
// })

// .then((res) => {
//     console.log("2nd " +res);
// })
// .catch((err) => {
//     console.log(err);
// })

const jsonString = '{"name": "John", "age": 30}';
// to convert JSON to object 
const obj = JSON.parse(jsonString);
console.log(obj.name);
console.log(obj.age);


const obj2 = {
    name : "Aviral",
    age : 21}

// to convert object to JSON

const jsonString2 = JSON.stringify(obj2);
console.log("Objet Format =",obj2)
console.log("JSON Format =", jsonString2)