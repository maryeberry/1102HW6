var fName = "Mary";
var num;
const arr = [1, 21, 3, 3, 7, 11, 5, 6, 9, 27];
var largest;

function firstLetterName() {
    let name = fName;
    alert("The name " + name + " starts with the letter " + name[0] + ".")
}

function divisibleByTwo(num) {
    if (num % 2 == 0) {
        console.log("true");
    } else {
        console.log("false");
    }
}

function largestNum() {
    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i] > arr[j]) {
                largest = arr[i]
                arr[i] = arr[j]
                arr[j] = largest
            }
        }
    }
    console.log(arr)
}

firstLetterName();
divisibleByTwo(3);
divisibleByTwo(6);
largestNum();