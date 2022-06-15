/**
 * Part 2
 *
 * In this file, we're going to create some
 * Functions to work with our data created in
 * data.js.
 *
 * See the README for detailed instructions,
 * and read every instruction carefully.
 */

//////////////////////////////////////////////////////////////////////
// Step 1 - Search ///////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
function search(array, string){
//Iterate through array,
    for(var i = 0; i < array.length; i++){
//If the indexed value matches the string input,
        if(string.toUpperCase() === array[i].name.toUpperCase()){
//Return indexed value
        return array[i];
        }
    }
//If no matches, return null
    return null;
}


//////////////////////////////////////////////////////////////////////
// Step 2 - Replace //////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
function replace(array, string, object){
//Iterate through array,
    for(var i = 0; i < array.length; i++){
//If the indexed value matches the string input,
        if(string.toUpperCase() === array[i].name.toUpperCase()){
//Splice to replace array value with new array value 
        return array.splice(array[i], 1, object);
        }
    }
}

//////////////////////////////////////////////////////////////////////
// Step 3 - Remove ///////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
function remove(array, string){
//Iterate through array,
    for(var i = 0; i < array.length; i++){
//If the indexed value matches the string input,
        if(string.toUpperCase() === array[i].name.toUpperCase()){
//Splice to remove the array value  
            return array.splice(array[i], 1);
        }
    }
}


//////////////////////////////////////////////////////////////////////
// Step 4 - Add ///////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
function add(array, object){

//If object has a name prop (length must be > 0), &
  //If object has a species prop (length must be > 0), &
    if(object.name.length > 0 && object.species.length > 0){
//Iterate through array
        for(var i = 0; i < array.length; i++){
//If object's name != any other object.name in the animals array,
            if(object.name !== array[i].name){
//Add object parameter to array parameter.
                array.push(object);
//If conditions aren't met, return original array
            }else{
                return array;
            }
        }
    }



}




/**
 * You did it! You're all done with Matchy!
 */



//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
var search, replace, remove, add;
if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
    module.exports.search = search || null;
    module.exports.replace = replace || null;
    module.exports.remove = remove || null;
    module.exports.add = add || null;
}
