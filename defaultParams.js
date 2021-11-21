//If we have a function with params, we may want to add default values set param with =
//in this ex, our role the die function defaults to 6 sides
const roleDie = (sides = 6) =>{
    return Math.floor(Math.random() * sides) + 1;
}

//order matters

const multiply = (a, b = 1) => {
    return a * b;
}