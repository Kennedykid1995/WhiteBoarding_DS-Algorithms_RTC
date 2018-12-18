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