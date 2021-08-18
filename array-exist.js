function megaFriends(friends){
    let mega = friends[0];
    if(Array.isArray(friends) == false){
        return "Please enter a valid array"
    }
    for(const friend of friends){
        if(friend.length > mega.length){
          mega = friend  
        }
    }
    return mega;
}

const friends = ["kutub", "Lion", "Shamol", "Sabbir", ]
const  myBigBuddy = megaFriends(333)


if(friends.indexOf('Lion') != -1){
    // console.log("Lion Exist")
}

// you need to use true but for false you must have to use false 
if(friends.includes('Lion') ==true ){
    console.log("Lion exist using includes")
}
