function addNumbers(num1, num2){
    
    let result = 0;
    for(const num of arguments){
        result = result + num
    }

    return result;
}
const sum = addNumbers(23, 13, 100, 200)

console.log(sum);



// arguments is a key word here you cna sue it every wehre 
function getFullName(){
    let fullNmae = [];
    for(const part of arguments){
    fullNmae = fullNmae + part + " ";
    }
    return fullNmae;
}

const nameK = getFullName('Opu', 'Hanif','been', 'Songket')

console.log(nameK)