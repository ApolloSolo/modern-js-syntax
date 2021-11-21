// spread is three dots ...
const nums = [5, 8, 10, 58, 12];

//Math.max(nums); would result in NaN
//spread seperated each element in the array (or any iterable) 
//into a list of arguments

Math.max(...nums); //Result: 58
//Same as
Math.max(5, 8, 10, 58, 12);

//******* spread with array literals ********
//combine arrays

const dogs = ["Bo", "Kona", "Sky"];
const cats = ["Ash", "Ryder"];
//combine two arrays into one and add on to the new as well. 
const allPets = [...dogs, ...cats, "speedy"];

//******* spread with Objects ********
// spread can be used to copy properties from one object to another object literal

const feline = { legs: 4, family: "Felidae", furry: true}
const canine = { legs: 4, family: "Caninae", furry: true}

const dog = {...canine, isPet: true}

const lion = {...feline, isPet: false, genus: "Panthera"}

//Another example: user data to make profile
//I want to add an id and isAdmin property

const dataFromForm = {
    email: "apollosolo@gmail.com",
    password: "wordPass!@12",
    username: "ApolloSolo"
}

const newUser = {...dataFromForm, id: 1223, isAdmin: false}
