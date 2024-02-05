// resusing function 



function calculateRectangleArea(width,height){
    return width * height;
}


const rectangleWidth=5;
const rectangleHeight=10;
const rectangle2Width=5;
const rectangle2Height=100;

const area1 = calculateRectangleArea(rectangleWidth, rectangleHeight);
const area2 = calculateRectangleArea(rectangle2Width, rectangle2Height);

console.log(`Area fo rectangle: ${area1}`);
console.log(`Area fo rectangle: ${area2}`);
