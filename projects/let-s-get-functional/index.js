// #!/usr/bin/env node

'use strict';

var customers = require('./data/customers.json');
var _ = require('underbar');

/**
 * 1. Import your lodown module using the require() method,
 *    using the string 'underbar', or whatever
 *    name with which you published your npm lodown project.
 * 
 * 2. Solve all problems as outlined in the README; save your work in your regular repository!!!
 *
 * 3. We started the first one for you as an example! Make the rest in that style.
 *
 * 4. To test your work:
 *  USE OS TEST INSTEAD!!!!!
 *      A) cd into workspace (type cd .. in terminal until terminal reads /workspace)
 *      B) Copy & paste the following code into the terminal:
 *              npm start --prefix ./gabrielle.jones.JuneBC.github.io/projects/let-s-get-functional
 *      C) DON'T FORGET TO save your work in your regular repository!!!
 */


var maleCount = function(customers) {
 /**Objective**: Find the number of male customers
 - **Input**: `Array`
 - **Output**: `Number`
 - **Constraints**: use `filter`
 */
//Use filter method to return new array with only objects with a gendered prop of male
    var males = customers.filter(function(customer){
        return customer.gender === "male";
    }); 
return males.length;
    //return males.length; //return "a number" of male customers
};


/*
- **Objective**: Find the number of female customers
- **Input**: `Array`
- **Output**: `Number`
- **Constraints**: use `reduce`
*/
var femaleCount = function(customers){

    var females = customers.reduce(function(count, customer){
        if(customer.gender === "female"){
            count++;
        }
    return count;
    }, 0);
return females;
}


var oldestCustomer = function(customers){
//Need to get the highest value number out of the array - use Math.max()
 //Need to iterate over array & return that age for later use - use .map()
let oldestResult = Math.max(...customers.map(function(customer){
    return customer.age;
}));
//Need to retrieve the name of the customer who === the oldest age found earlier - use filter & map
let name = customers.filter(function(customer){
    return customer.age === oldestResult; //return customer's age that matches the result of the oldest variable
}).map(function(customer){
    return customer.name;
});

//Need to return a string of the oldest customer's name - use toString()
return name.toString();
}

/*
- **Objective**: Find the oldest customer's name
- **Input**: `Array`
- **Output**: `String`
- **Constraints**:
*/

var youngestCustomer  = function(customers){
    //Need to get the lowest value number out of the array - use Math.min()
     //Need to iterate over array & return that age for later use - use .map()
    let youngestResult = Math.min(...customers.map(function(customer){
        return customer.age;
    }));
    //Need to retrieve the name of the customer who === the oldest age found earlier - use filter & map
    let name = customers.filter(function(customer){
        return customer.age === youngestResult; //return customer's age that matches the result of the youngest variable
    }).map(function(customer){
        return customer.name;
    });
    
    //Need to return a string of the youngest customer's name - use toString()
    return name.toString();
    }
/*
- **Objective**: Find the youngest customer's name
- **Input**: `Array`
- **Output**: `String`
- **Constraints**:
*/

var averageBalance = function(customers){
    let total = 0;

    let tallyOfCustomers = customers.filter(function(customer){
        return customer.balance;
    });
    
    let average = tallyOfCustomers.reduce(function(total, eachCustomer){
        total + eachCustomer.balance;
    }, 0) / tallyOfCustomers.length;

    return Number(average);
}
/*
- **Objective**: Find the average balance of all customers
- **Input**: `Array`
- **Output**: `Number`
- **Constraints**:
*/

console.log(average);

var firstLetterCount;
/*
- **Objective**: Find how many customer's names begin with a given letter
 - **Input**: `Array`, `Letter`
 - **Output**: `Number`
 - **Constraints**:
 */

var friendFirstLetterCount;
/*
- **Objective**: Find how many friends of a given customer have names that start with a given letter
- **Input**: `Array`, `Customer`, `Letter`
- **Output**: `Number`
- **Constraints**:
*/

var friendsCount;
/*
- **Objective**: Find the customers' names that have a given customer's name in their friends list
 - **Input**: `Array`, `Name`
 - **Output**: `Array`
 - **Constraints**:
*/

var topThreeTags;
/*
- **Objective**: Find the three most common tags among all customers' associated tags
- **Input**: `Array`
- **Output**: `Array`
- **Constraints**:
*/

var genderCount;
/*- **Objective**: Create a summary of genders, the output should be:
```javascript
{
    male: 3,
    female: 4,
    non-binary: 1
}
```
 - **Input**: `Array`
 - **Output**: `Object`
 - **Constraints**: Use `reduce`
 */

//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

// here, export any references you need for tests //
module.exports.maleCount = maleCount;
module.exports.femaleCount = femaleCount;
module.exports.oldestCustomer = oldestCustomer;
module.exports.youngestCustomer = youngestCustomer;
module.exports.averageBalance = averageBalance;
module.exports.firstLetterCount = firstLetterCount;
module.exports.friendFirstLetterCount = friendFirstLetterCount;
module.exports.friendsCount = friendsCount;
module.exports.topThreeTags = topThreeTags;
module.exports.genderCount = genderCount;
