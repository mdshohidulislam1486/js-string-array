const numbers = [3, 6, 5, 2, 1, 9, 16, 45, 89 ]

const numberSliced  = numbers.slice(4, 8);

// console.log(numberSliced)
// when you are  slicing you are not changin the original file 
// console.log(numbers)

// to change the orginal you can splice remove the element form an array 
// const numberSpliced = numbers.splice(4, 3);
// console.log(numberSpliced);
// console.log(numbers)


// you can also add elements after slicing it 
// below array will remove 3 elemenst from the index of 4 and rest of the numbers  (first two number is splice perameter and rest just added to the array)
// you can add as much as you want 
const numberSplice2 = numbers.splice(4, 3, 99, 111, 889, 777);
// you can add from any index without deleting 
const numberSplice3 = numbers.splice(4, 0, 99, 111, 889, 777);
console.log(numberSplice2)
console.log(numbers)