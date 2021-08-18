
// it will make random to increasing nubmer 
const numbers = [4, 7, 1, 3, 9, 2, 5, 8];
const sortedNumbers = numbers.sort();

// console.log(sortedNumbers)

const friends = ['Jakir', "Abul", 'Tamim', 'Joshim', 'Mamun', 'Cute']

// remember you can make sort and reverse or jsut reverse  
// const sortedFriends = friends.sort().reverse();
const reveseFriends = friends.reverse();
// console.log(sortedFriends)
// console.log(reveseFriends)


// number sorting fun 

const bigNumbers = [66, 33, 44, 00, 32, 54, 22, 3, 9, 98]
const sortBigNumbers = bigNumbers.sort(function(a,b){
    return a - b;
});
console.log(sortBigNumbers)
