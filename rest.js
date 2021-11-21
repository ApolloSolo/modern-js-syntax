//Collects all remaining arguments and places them into an array using ...

const sumAll = (...nums) =>{
    let total = 0;
    for(let n of nums){
        total += n;
    }
    return total;
}

//Another Ex:

const winnerMsg = (gold, silver, ...everyoneElse) =>{
    console.log(`Gold metalist ${gold}`);
    console.log(`Silver metalist ${silver}`);
    console.log(`Thanks everyone else ${everyoneElse}`);
}
winnerMsg("ApolloSolo", "Mom", "Tom", "Philly", "TopGuy");
