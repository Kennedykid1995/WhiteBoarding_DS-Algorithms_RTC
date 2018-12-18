//MaxChars returns the letter in the string that occurs the most.
//Off the bat we will need a new array that holds the letters of the str.
//for that to happen you must loop through the str, to gather each letter.
//another object we need is a counter that counts each of the letters occurences.
//the last object that we need is a empty str so that the letter that occurs the 
//most will be returned by the end.
//based off of the functionality of the function we will need to loop twice over the course of this
//function. once to gather the letters from the string and count the amount of thimes it occurs, 
//then a second to find the one letter that occurs most through out the array.
function maxChars(str){
    //define the objects
    let newArr = {}; //string will be placed into newArr
    let counter = 0; //counter is helping with finding the maxChar
    let max = ""; // max is the char that occurs the most

    //Get the string into newArr
    for(let char of str){
    //once the chars of str are in newArr
    //find out how many times they occur through the loop.
        if(newArr[char]){
            //if multiple increment up
            newArr[char] ++; 
        }else{
            //else then char is occurs once
            newArr[char] = 1;
        }
    }
    //after you have gotten the amounts and letters
    //loop through the newArr and find out which one is the 
    //most occuring char
    for (let char in newArr){
        //compare the amount of occurences with the counters set amount.
        //if the char occurs more than the counter then the counter will equal that amount
        //newArr[char] = 3 counter = 0, counter will now be set at 3. 
        //and it will continue to do that for each char until the counter is not beat out by a chars occurence.
        //then max will equal the char that holds the most occurences.
        if(newArr[char] > counter); 
        counter = newArr[char]; 
        max = char
    }
    return max; 
}
//in balancedBrackets we want to return true or false if the string passed in has balanced brackets
//meaning "{" will have its corresponding "}" and the same for the [] and (). 
//we will have to make an object that holds all of the brackets in their full formation.
//another object that is an empty arr to store the brackets in just incase there are other 
//characters placed in the string. 
//and the last object will help with avoid all other characters, by using the brackets object to find 
//all of the brackets with in the string. 
//inorder to complete this function we will have to loop through the string and find all of the indexes of the 
//brackets within the string.  
//also the distance between each of the corresponding brackets will have to be put into consideration
//when dealing with whether the string put in would be true or false when considering if they are
//corresponding brackets.
function balancedBrackets(str){
    //define the objects needed for this function
    let brackets = "{}[]()";
    let arr = []; 
    //before defining the object that avoids characters that are not brackets. 
    //loop through to recieve all of the characters in str.
    for(let i = 0; i < str.length; i++){
        //create a object that find the position of each bracket.
        let position = brackets.indexOf(str[i]); 
        //gets rid of all other characters that are not brackets.

        console.log(arr, position,str[i], arr.length, "arr, position, str[i], arr.length -------")
        //the position must be divided equally so that they are equal distance from each other.
        if(position % 2 === 0){
            arr.push(position + 1); 
        }else{
            //if the item in the arr has an index not equal to the position then it is false.
            if(arr.pop() !== position){
                return false;
            }
        }
        console.log(arr, position,str[i], arr.length, "arr, position, str[i], arr.length")
    }
    return arr.length === 0; 
};

console.log(balancedBrackets('[]{}()'));

//arr is always empty in --------
//arr is filled after the middle content.
//position = index
//str[i] = bracket that is currently being searched for

// [] 0 '[' 0 'arr, bracePosition, str[i], arr.length -------'
 
// [ 1 ] 0 '[' 1 'arr, bracePosition, str[i], arr.length'
 
// [ 1 ] 1 ']' 1 'arr, bracePosition, str[i], arr.length -------'
 
// [] 1 ']' 0 'arr, bracePosition, str[i], arr.length' 
 
// [] 2 '{' 0 'arr, bracePosition, str[i], arr.length -------' 
 
// [ 3 ] 2 '{' 1 'arr, bracePosition, str[i], arr.length' 
 
// [ 3 ] 3 '}' 1 'arr, bracePosition, str[i], arr.length -------' 
 
// [] 3 '}' 0 'arr, bracePosition, str[i], arr.length'
 
// [] 4 '(' 0 'arr, bracePosition, str[i], arr.length -------'
 
// [ 5 ] 4 '(' 1 'arr, bracePosition, str[i], arr.length'
 
// [ 5 ] 5 ')' 1 'arr, bracePosition, str[i], arr.length -------'
 
// [] 5 ')' 0 'arr, bracePosition, str[i], arr.length'

//big o notation 
//compare the same function different implementation.

function addupTo(n){
        //depending on how much n is worth. also the = counts.
        // = += ++, some amplify if n is big. 
        //n = 20 there are 20+ operations
    let total = 0; 
    for(let i = 0; i <= n; i++){
        total += i;
    }
    return total; 
}
    
function addupTo(n){
        // 3 operations * + /
    return n * (n + 1) / 2; 
}