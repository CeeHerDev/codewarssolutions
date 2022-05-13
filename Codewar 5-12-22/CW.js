// Take an array and remove every second element from the array. 
// Always keep the first element and start removing with the next element.

// Example:

// ["Keep", "Remove", "Keep", "Remove", "Keep", ...] --> ["Keep", "Keep", "Keep", ...]

// None of the arrays will be empty, so you don't have to worry about that!


// Parameters : No arrays will be empty. Doesn't matter if they are special characters
// Result : Return every other element
// Example: [1,2,3,4,5] => [1,3,5]
//          ["blue","yellow","red", "green","black"] => ["blue", "red","black"]
//          [3,5,2,4,2,5,3] => [3,2,2,3]    
// PsuedoCode : make a function that gives an array

function removeEveryOther(arr) {
    //your code here

    let newArr = []

    for (i = 0; i < arr.length; i++) {
        if (i % 2 == 0) {
            newArr.push(arr[i])
        }
    }

    return newArr
}