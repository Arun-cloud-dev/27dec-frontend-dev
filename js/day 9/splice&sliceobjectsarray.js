const  arrayOfObjects= [
    {name: 'alice', age:30},
    {name: 'blice', age:20},
    {name: 'clice', age:60},

];



// const extractedObjects = arrayOfObjects.slice(1, 3);

// console.log(arrayOfObjects);




// remove 
// const removeObjects = arrayOfObjects.splice(1, 1);
// console.log(arrayOfObjects);

//add object 

// arrayOfObjects.splice(1,0, {name:"David",age:40});
// console.log(arrayOfObjects);


//extract obj at index 1 

const extracteObjects = arrayOfObjects.slice(1,2);
console.log(extracteObjects);

console.log(arrayOfObjects);