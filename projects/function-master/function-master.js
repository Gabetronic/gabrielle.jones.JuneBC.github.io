//////////////////////////////////////////////////////////////////////
// Function 1 - Object Values ////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function objectValues(object) {
// Should take an object and return its values in an array

//Create an output array literal
let output = [];
//Iterate through input object,
    for(var key in object){
//Put object's values into output array
        output.push(object[key]);
    }
//Return output array
return output;
} 

//////////////////////////////////////////////////////////////////////
// Function 2 - Keys to String ///////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function keysToString(object) {
//Should take an object and return all its keys in a string each separated with a space

//Used object.keys method + join method, with space inbetween 
return Object.keys(object).join(" ");

}

//////////////////////////////////////////////////////////////////////
// Function 3 - Values to String /////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function valuesToString(object) {
//Should take an object and return all its string values in a string each separated with a space

//Create an output string literal
var output = "";

//Iterate through input object,
    for(var key in object){
//If object's value is a string,
if(typeof object[key] === "string" && object[key].length > 0){
//Put object's values into output string with a space added
            output += object[key] + " ";
        }
    }
//Return output string
return output.trim();
} 


//////////////////////////////////////////////////////////////////////
// Function 4 - Array or Object //////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function arrayOrObject(collection) {
//Should take one argument and return 'array' if its an array and 'object' if its an object"

//Determine if input parameter is array or object
 //return string value definition of parameter
    if(Array.isArray(collection) === true){
        return "array";
    }
return "object";
}

//////////////////////////////////////////////////////////////////////
// Function 5 - Capitalize Word //////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function capitalizeWord(string) {
//Should take a string of one word, and return the word with its first letter capitalized    

//Create an output string
var stringNew = "";
//Add to output string a capitalized first value - use toUpperCase(),
 //Also add the rest of the input string's values - use slice method
stringNew += string[0].toUpperCase() +  string.slice(1);
//Return output string
return stringNew;
}

//////////////////////////////////////////////////////////////////////
// Function 6 - Capitalize All Words /////////////////////////////////
//////////////////////////////////////////////////////////////////////
function capitalizeAllWords(string) {
    //Should take a string of words and return a string with all the words capitalized    
    
    //Split the string into an array
    var array = string.split(" ");
      let output = "";
    //Iterate over the array,
      for(var i = 0; i < array.length; i++){
    //For each first letter, capitalize it,
      //Add the new values to the output string 
        output += array[i][0].toUpperCase() + array[i].slice(1) + " ";
      }
    return output.trim();
    }
    

//////////////////////////////////////////////////////////////////////
// Function 7 - Welcome Message //////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function welcomeMessage(object) {
//Should take an object with a name property and return 'Welcome <Name>!

//Iterate through input object 
    for(var key in object){
//Check if object has a key of "name", 
        if(key === "name"){
//Return object's name prop(the value), along with rest of return statement string 
            return "Welcome" + " " + object[key].charAt(0).toUpperCase() +  object[key].slice(1) + "!";
        }
    }
   //return output;
}

//////////////////////////////////////////////////////////////////////
// Function 8 - Profile Info /////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function profileInfo(object) {

}

//////////////////////////////////////////////////////////////////////
// Function 9 - Maybe Noises /////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function maybeNoises(object) {
//Should take an object, if this object has a noises array return them as a string separated by a space, 
  //if there are no noises return 'there are no noises'"
    
//Iterate through input object
    for(var key in object){
/*Check if object has a key of "noises", & that the noises array has values inside of itself - use length property*/
        if(key === "noises" && object[key].length > 0){
//Return noises array as a string seperated by a space
          return object[key].join(" ");
        }
    }
//Else, return the provided string statement
return 'there are no noises';
}
//////////////////////////////////////////////////////////////////////
// Function 10 - Has Words ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function hasWord(string, word) {

}

//////////////////////////////////////////////////////////////////////
// Function 11 - Add Friend //////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function addFriend (name, object) {
//Should take a name and an object and add the name to the object's friends array then return the object

//Add the name input to the input object's friends array
object.friends.push(name);
return object;

}

//////////////////////////////////////////////////////////////////////
// Function 12 - Is Friend ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function isFriend(name, object) {

}

//////////////////////////////////////////////////////////////////////
// Function 13 - Non-Friends /////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function nonFriends(name, array) {
//Should take a name and a list of people, and return a list of all the names that <name> is not friends with

//Create an output array literal
var output = [];
//Iterate over the input array
    for(var i = 0; i < array.length; i++){
//If the array's name value !== the input name, &
  //the array's friends value doesn't have the input name in it, 
    //place the array's name value in the output array
        if(array[i].name !== name && array[i].friends.includes(name) === false){
            output.push(array[i].name);
        }
    }
return output;
}

//////////////////////////////////////////////////////////////////////
// Function 14 - Update Object ///////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function updateObject(object, key, value) {

}

//////////////////////////////////////////////////////////////////////
// Function 15 - Remove Properties ///////////////////////////////////
//////////////////////////////////////////////////////////////////////

function removeProperties(object, array) {
//Should take an object and an array of strings. Should remove any properties on <object> that are listed in <array>
    
//Iterate through input object      
    for(var key in object){
//Iterate through input array
        for(var i = 0; i < array.length; i++){
//If any of the object's keys match the input array's values,
            if(array[i] === key){
//Remove that key/value pair from the input object
            delete object[key];
            }
        }
    }
    return object;
}

//////////////////////////////////////////////////////////////////////
// Function 16 - Dedup ///////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function dedup(array) {

}

//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.objectValues = objectValues;
    module.exports.keysToString = keysToString;
    module.exports.valuesToString = valuesToString;
    module.exports.arrayOrObject = arrayOrObject;
    module.exports.capitalizeWord = capitalizeWord;
    module.exports.capitalizeAllWords = capitalizeAllWords;
    module.exports.welcomeMessage = welcomeMessage;
    module.exports.profileInfo = profileInfo;
    module.exports.maybeNoises = maybeNoises;
    module.exports.hasWord = hasWord;
    module.exports.addFriend = addFriend;
    module.exports.isFriend = isFriend;
    module.exports.nonFriends = nonFriends;
    module.exports.updateObject = updateObject;
    module.exports.removeProperties = removeProperties;
    module.exports.dedup = dedup;
}