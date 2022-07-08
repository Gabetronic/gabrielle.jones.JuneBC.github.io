// const dogs = require('./dogData');
let dogs = [
    {
        "name": "Doggo-co-WOOF",
        "age": 3,
        "species": "dog",
        "weight": 45,
        "votes": 22
    }, {
        "name": "Space CATdet",
        "age": 4,
        "species": "cat",
        "weight": 20,
        "votes": 5
    }, {
        "name": "Solar Squirrel",
        "age": 1,
        "species": "squirrel",
        "weight": 0.5,
        "votes": 13
    }, {
        "name": "Bark Hole",
        "age": 20,
        "species": "dog",
        "weight": 19,
        "votes": 20
    }, {
        "name": "Howlling Winds",
        "age": 55,
        "species": "dog",
        "weight": 90,
        "votes": 200
    }, {
        "name": "Electron Nutria",
        "age": 7,
        "species": "nutria",
        "weight": 3,
        "votes": 0
    }, {
        "name": "Howlling Winds Sr.",
        "age": 59,
        "species": "dog",
        "weight": 101,
        "votes": 201
    }, {
        "name": "Tycho Brahe",
        "age": 35,
        "species": "moose",
        "weight": 500,
        "votes": 123
    }, {
        "name": "Johannes Kepler",
        "age": 9,
        "species": "dog",
        "weight": 5,
        "votes": 55
    }, {
        "name": "Pluto",
        "age": 89,
        "species": "dog",
        "weight": 10,
        "votes": 190
    }, {
        "name": "Quark",
        "age": 20,
        "species": "dog",
        "weight": 1,
        "votes": 45
    }, {
        "name": "Higgs",
        "age": 26,
        "species": "dog",
        "weight": 0.00001,
        "votes": 200
    }, {
        "name": "Lepton",
        "age": 12,
        "species": "dog",
        "weight": 15,
        "votes": 175
    }, {
        "name": "Boson",
        "age": 9,
        "species": "dog",
        "weight": 8,
        "votes": 141
    }
]

// 1.
var greeting = function(greeting, location, time){
//Concatenate parameters together with a space between each
    console.log(greeting + " " + location + " " + time);
};



// 2.
var contestants = function(dogs){
//return the length of the dogs array
    return dogs.length;
};


// 3.
var filterSpecies = dogs.filter(function(dog){
//if an element of the dogs array is a dog, return it to this variable
        if(dog.species === "dog"){
            return dog.species;
        } 
    });


// 4. 
var dogContestants = [...filterSpecies]; // use spread operator to make a copy of filterSpecies array


// 5. 

var dogsWithClasses = dogContestants.map(function(dog){

    if (dog.weight >= 0 && dog.weight <= 10){  // DON'T FORGET THE COMPARISON OPERATORS NEED TO INCLUDE THE NUMBERS GIVEN, i.e. >= not >
        dog.class = "red";
    }else if(dog.weight >= 11 && dog.weight <= 20){
        dog.class = "yellow";
    }else if(dog.weight > 21){
        dog.class = "green";
    }
return dog;
});
    
/*
5. Now that we have our `dogContestants` array, we need to add a `class` property to each dog object.
    Using the native map method, add a key of `class` with the value:
        - "red" if the dog's weight is between 0 and 10.
        - "yellow" if the dog's weight is between 11 and 20.
        - "green" if the dog's weight is 21 or over.
*/

// 6.
var firstInClass = function(topDogs, output = {}){
/*
Using recursion, copy all of the properties into one object and return that object. If you'd like an idea of our data 
structure, look in the dogData.js file. => HERE IS DOESN'T SPECIFY using DogsWithContestants, topDogs, etc. but it is referring to TopDogs.  Should be pure, so better to just say array instead of the variable name
*/

//base - when initial object is empty, stop
if(topDogs.length === 0)
return output;


//recursion - copy all props into new obj
output = {...output, ...topDogs[0]};
return firstInClass(topDogs.slice(1), output);
/*
OR --
for(var key in array[0]{
    object[key] = array[0][key];
}
Then, the return statement from above.

OR --
Object.assign(array, output);
})
*/
}




// 7.
var votes;