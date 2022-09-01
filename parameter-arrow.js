//arrow function to return divide result after 5

const divResult = num => num/5 ;

const res = divResult(125);

// console.log(res);

/*arrow function thet will take two parameter and add two with each parameter and then multiply both and return.*/

const muliplyResult = (x,y) => (x+2)*(y+2);
const result = muliplyResult(5,5);
// console.log(result);


//three parameter arrow function that will multiply all three parameter

const multiplyAll = (x,y,z) => x*y*z;
const myRes = multiplyAll(4,6,2);
// console.log(myRes);

//multiline arrow function

const multiArrow = (x,y) => {
    const res = x+2;
    const res2 = y+2;
    return res*res2;
}

const finalRes = multiArrow(4,8);
console.log(finalRes);

