function printArray() {
    let arr = [1, 2, 3, 4, 5];
    for (let i = 0; i < arr.length; i++) {
        console.log(arr[i]);
    }
}

printArray()

const arr = [1, 2, 3, 4, 5];

arr.splice(2, 0, 6, 7, 8, 9);
console.log(arr)


const array = [1, 2, 3, 4, 5];

const newArray = array.filter((num) => num % 2 === 0);
console.log(newArray)


const newArray2 = array.reduce((acc, curr) => {
    return acc * curr;
} , 1);
console.log(newArray2)