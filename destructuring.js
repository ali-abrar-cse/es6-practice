//destructuring for an object

const student = {
    student1: {
        name: 'Akash',
        level: 9,
        roll: 12,
        result: 4.75
    },
    student2: {
        name: 'soma',
        level: 10,
        roll: 3,
        result: 5
    },
    student3: {
        name: 'sohag',
        level: 8,
        roll: 25,
        result: 4
    }
}


const { name,level,roll,result } = student.student2;

// console.log(name,level,roll,result);



//destructuring an array create a single variable to get the third varible
const numbers = [20, 21, 51, 33, 12];

const [ , , three ] = numbers;
// console.log(three);