const products = [
    'Dell Hardcore i29 200GB Laptop', 
    'Iphone 2TB camera flashlight Phone', 
    'Yellow laptop with black camera', 
    '1X59 lenovo commercial yoga laptop', 
    'Dell Supernova laptop',
    'HTC low price phone', 
    'Purple color phone with Laptop'
];

const searching = 'dell';

// index off
const output = []
for (const product of products){
    if(product.toLocaleLowerCase().indexOf(searching.toLocaleLowerCase()) != -1){
        // output.push(product)
    }
}
console.log(output)

// include method 
for(const product of products){
    if(product.toLocaleLowerCase().includes(searching.toLocaleLowerCase())){
        // output.push(product)
    }
}
console.log(output)

// start with

for(const product of products){
    if(product.toLocaleLowerCase().startsWith(searching.toLocaleLowerCase())){
        output.push(product)
    }
}

console.log(output)

// You can alsow use end with 

// always make ti lower case when you are searching for something maket both seach and searching to lwoer case 

