// #!/usr/bin/env node

'use strict';

/**
 * 4: Contact List
 * 
 *  a. Create a factory Function called makeContact(id, nameFirst, nameLast) 
 *     that returns a contact object.
 *     
 *          ex: makeContact(1, 'Max', 'Gaudin'); // => {id: 1, nameFirst: 'Max', nameLast: 'Gaudin'}
 *     
 *  b. Create a factory Function called makeContactList that returns an Object 
 *     that manages contacts. The contact-list object should have the following methods:
 *       
 *      1. length(): returns the number of contacts within the list.
 *      2. addContact(contact): takes a contact object to be added to the 
 *         contact-list.
 *      3. findContact(fullName): takes a full-name String, like 'Max Gaudin', and 
 *         returns the contact object if found in the contacts-list, or, 
 *         undefined if the fullName does not match any contacts in the list.
 *      4. removeContact(contact): takes a contact object to be removed from 
 *         the contact-list.
 *      5. add a printAllContactNames() Function to your makeContactList() factory. The printAllContactNames() Function should 
 *         return a String formated with all the full-names of the separated 
 *         with a line-break, like so:
 *          
 *         myContacts.printAllContactNames(); // => Max Gaudin
 *                                                  John Fraboni
 *                                                  Kaelyn Chresfield
 *          
 *          WARNING: To pass this test, the LAST full name should have NO
 *          new-line character added after it!
 */
 
// YOUR CODE GOES BELOW HERE //


function makeContact(id, nameFirst, nameLast) {
//This factory f(x) returns a contact, as an object with 2 key/value pairs
//Create an output object literal to return later
var contact = {};
//Assign the input parameters to key/value pairs inside the object - use dot notation & the assignment operator
contact.id = id;
contact.nameFirst = nameFirst;
contact.nameLast = nameLast;
//Return object
return contact;

} 


function makeContactList() {
//This factory f(x) returns an object with methods attached; it has 5 key/value pairs

    /*
     * You need something here to hold contacts. See length api for a hint:
     */
    let contacts = []; //Assume contacts is an array from looking at .json file
    
    return {
        // we implemented the length api for you //
        length: function() {
            return contacts.length;
        },
//Create a 2nd key/value pair.  The pair should work as a function to add a contact object to the contacts array.
        addContact: function(contact){
            contacts.push(contact);
        },
//Create a 3rd key/value pair. The pair should work as a function to,    
        findContact: function(fullName){
        
//Since fullName is not a key in the contact object, split it into the keys available (nameFirst & nameLast) - create an array
        var array = fullName.split(" ");
//Iterate through contacts array,
            for(var i = 0; i < contacts.length; i++){
//If contact exists in contacts array, return the contact object
                if(contacts[i].nameFirst === array[0] && contacts[i].nameLast === array[1]){
                    return contacts[i];
//else, return undefined if the fullName does not match any contacts in the list   
                }else{
                    return undefined;
                }
            }
        },
//Create a 4th key/value pair. The pair should work as a function to remove the input parameter from the contacts array
        removeContact: function(contact){
//Remove an item from the contacts array - use splice method
            contacts.splice(contact, 1);
        }, 
//Create a 5th key/value pair. The pair should work as a function to return a string of every full name of every contact,
 // seperated by a new line break, with no spaces before or after the names
        printAllContactNames: function(){
//Create a string literal
        let output = "";
//Iterate through the array
            for(var i = 0; i < contacts.length; i++){
//Pull out the values of the nameFirst & nameLasts keys,
 //& put them into a new string with a space between each first & last name,
  // & a new line special character between each full name
   //the last full name entry shouldn't have a \n - use conditional chain
                if(i === contacts.length - 1){   
                    output += contacts[i].nameFirst + " " + contacts[i].nameLast;
                }else{
                    output += contacts[i].nameFirst + " " + contacts[i].nameLast + "\n";
                }
            }
//Return the string output 
        return output;
        }
    }
}





// YOUR CODE GOES ABOVE HERE //




// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
(typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.makeContact = makeContact;
    module.exports.makeContactList = makeContactList;
}
