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

};

var femaleCount;

var oldestCustomer;

var youngestCustomer;

var averageBalance;

var firstLetterCount;

var friendFirstLetterCount;

var friendsCount;

var topThreeTags;

var genderCount;

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
