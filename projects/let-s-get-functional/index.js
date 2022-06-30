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
 * 
 *      A) cd into workspace (type cd .. in terminal until terminal reads /workspace)
 *      B) Copy & paste the following code into the terminal:
 *              npm start --prefix ./gabrielle.jones.JuneBC.github.io/projects/let-s-get-functional
 *      C) DON'T FORGET TO save your work in your regular repository!!!
 */


var maleCount = function(array) {
 /**Objective**: Find the number of male customers
 - **Input**: `Array`
 - **Output**: `Number`
 - **Constraints**: use `filter`
 */
//Use filter method to return new array with only objects with a gendered prop of male
    var males = _.filter(array, function(customer){
        return customer.gender === "male";
    }); 
return males.length;
    //return males.length; //return "a number" of male customers
};

var femaleCount;
/*
- **Objective**: Find the number of female customers
- **Input**: `Array`
- **Output**: `Number`
- **Constraints**: use `reduce`
*/


var oldestCustomer;
/*
- **Objective**: Find the oldest customer's name
- **Input**: `Array`
- **Output**: `String`
- **Constraints**:
*/

//filter.map
var youngestCustomer;
/*
- **Objective**: Find the youngest customer's name
- **Input**: `Array`
- **Output**: `String`
- **Constraints**:
*/

var averageBalance;
/*
- **Objective**: Find the average balance of all customers
- **Input**: `Array`
- **Output**: `Number`
- **Constraints**:
*/

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
