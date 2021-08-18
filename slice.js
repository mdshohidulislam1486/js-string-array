const anthem = "Amar Sonar Bangla Ami Toami Valibashi";

const words = anthem.split(' ');
const withoutA = anthem.split('a');


// slice where start and where end
const smallSlice = anthem.slice(5, 13);


// substr  meaning I need 7 word after 5
const  anotherPart = anthem.substr(5, 7)


// substring
const  anotherAnotherPart = anthem.substring(11, 15);


// make to string clicked 
const first = "Amar ";
const Second = "City";

// const fullString  = first + Second;
const fullString = first.concat(Second).concat('abc').concat('RJ Kibria')


const lineofString = ["a", 'b', 'c', 'd'];
const lineSting  = ['Alim', 'Badho', 'David', 'Cameron']
// const allJoined = lineSting.join(' ')
 const allJoined = lineSting.join(', ')

console.log(allJoined)
