var fName = "Mary";
var num;
const arr = [1, 21, 3, 3, 7, 11, 5, 6, 9, 27];
var largest;

function firstLetterName(string) {
    alert("The name " + string + " starts with the letter " + string[0] + ".")
}

function divisibleByTwo(num) {
    if (num % 2 == 0) {
        console.log("true");
    } else {
        console.log("false");
    }
}

function largestNum(array) {
    for (let i = 0; i < array.length; i++) {
        for (let j = i + 1; j < array.length; j++) {
            if (array[i] > array[j]) {
                largest = array[i]
                array[i] = array[j]
                array[j] = largest
            }
        }
    }
    console.log(array)
}

firstLetterName(fName);
divisibleByTwo(3);
divisibleByTwo(6);
largestNum(arr);