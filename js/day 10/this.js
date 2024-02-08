// const person = {
//     name :"raj",
//     age:22,
//     greet: function (){
//         return `Hello ${this.name}, you are ${this.age}years old `
//     }
// }
// console.log(person.greet());

// const obj1 = {
//     firstName: "first_Name",
//     lastName: "Last_Name",
// };
// const obj2 = {
//     firstName: "Arun",
//     lastName: "raj",
// };

// function printName(profession, Country){
//     console.log(this.firstName+ " "
//     +this.lastName+" "+profession+" "+ Country);
// }


// printName.call(obj2,"Developer ", "india" )


// object.objectMethord.apply(objectInstance,arrayOfArguments)
// const obj1 = {
//     firstName: "first_Name",
//     lastName: "Last_Name",
// };
// const obj2 = {
//     firstName: "Arun",
//     lastName: "raj",
// };

// function printName(){
// console.log(this.firstName+" "+this.lastName);

// }
// printName.apply(obj2)


// const age = 22;
// function verifyAge(){
//     return this.age
// }


// console.log(verifyAge);


// constructor fucnton 


function person (name, age ){
//properties

this.name = name;
this.age = age;
//method 
this.sayHello= function(){
    console.log("hello my name is "+ this.name+ "and i am "+ this.age+"years of age" );
}}









