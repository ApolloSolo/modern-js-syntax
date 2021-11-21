//A short way to unpack values from arrays and properties form objects 
//into distinct variables

const scores = [99589, 82569, 66969, 4178, 236, 5, 1]

//    scores[0], scores[1]
//copies values at the index to save value into variables.
const [gold, silver, ...everyoneElse] = scores;

//...everyoneElse creates an array of the rest

/******** Destructuring Objects ********/
//in this ex: I have to access properties offten, lets save as variable

const user = {
    email: "apollo@gmail.com",
    password: "passWord1234",
    firstName: "Apollo",
    lastName: "Solo",
    age: 100000,
    bio: "My name is ApolloSolo and I am old.",
    city: "Charlotte",
    state: "North Carolina"
}

//order does not matter. Name here must exist as a property in the object
const { email, firstName, lastName, city, bio } = user;

//change the property name to your given name
const {age: yearsAlive} = user;

//can assign new param
const user2 = {
    email: "theNew@gmail.com",
    password: "wordThatWorks223",
    firstName: "Philly",
    lastName: "ToTo",
    state: "California"
}

const {age = 56} = user2

/******** Destructuring PARAMS ********/
//pass in our object, destructure, then return

function fullName(userHere){
    const { firstName, lastName} = userHere;
    return `${firstName} ${lastName}`
}

//We can make this simpler by destructering the object param on the way in

function fullName2({firstName, lastName}){
    return `${firstName} ${lastName}`
}

//** Map and Filter **/
const movies = [
    {
        title: "Amadeus",
        score: 85
    },
    {
        title: "Stand By Me",
        score: 99
    },
    {
        title: "Parasite",
        score: 95
    },
    {
        title: "Alien",
        score: 90
    }
]

const topMovies = movies.filter((movie) => movie.score >= 90);
console.log(topMovies);
//Another way with destructuring as params
const topMovies2 = movies.filter(({score}) => score >= 90);
console.log(topMovies2);

const movieMsg = movies.map((movie) =>{
    return `${movie.title} is rated ${movie.score/10}/10`
});
console.log(movieMsg);
//Another way with destructuring as params
const movieMsg2 = movies.map(({title, score}) => {
    return `${title} is rated ${score/10}/10`
})
console.log(movieMsg2);
