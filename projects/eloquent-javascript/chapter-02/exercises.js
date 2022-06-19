
////////////////////////////////////////////////////////////////////////////////
// triangles ///////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function triangles(number) {
//Write a loop that makes seven calls to console.log to output the following triangle:
 //should log each level of triangle separately & should work for any input number

//Create a string literal output
 let string = "";
//While the length of the string output is less than the input number parameter,
 while(string.length < number){
//Add a #, and reassign the string 
   string += "#";
//Print the reassignment  
  console.log(string);
 }

}
////////////////////////////////////////////////////////////////////////////////
// fizzBuzz ////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function fizzBuzz() {
//should print numbers 1 to 15 with fizz/buzz in appropriate places

//Print every number within the range of 1 to 15; use a for loop
  for(var i = 1; i < 16; i++){
    //Make a conditional statement that says for any numbers that are multiples of both 3 & 5, print "FizzBuzz" instead of the number; use remainder operator 
         if(i % 3 === 0 && i % 5 === 0){
             console.log("fizzbuzz");
 //Conditional also says if a multiple of 5, print "Buzz", & 
         }else if(i % 5 === 0){
             console.log("buzz");
 //If a multiple of 3, print "Fizz" 
         }else if(i % 3 === 0){
             console.log("fizz");
         }else{
           console.log(i);
         }
}
}

////////////////////////////////////////////////////////////////////////////////
// drawChessboard //////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function drawChessboard(number) {
//should draw a chessboard with as many rows as the input number parameter 
 //Write a program that creates a string that represents an 8×8 grid, using newline characters to separate lines. 
  //At each position of the grid there is either a space or a "#" character. 
   //You’ll need two binding size variables to track your progress. To know whether to put a space or a hash sign  
   //at a given position, you could test whether the sum of the two counters is even (% 2).
    // Terminating a line by adding a newline character must happen after the line has been built up, 
    //so do this after the inner loop but inside the outer loop.

//Create a string literal output
 let string = "";


}

////////////////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

if ((typeof process !== 'undefined') &&
  (typeof process.versions.node !== 'undefined')) {
  module.exports = {
    triangles,
    fizzBuzz,
    drawChessboard,
  };
}
