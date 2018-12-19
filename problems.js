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
        //as n grows the runtime grows.
        //O(n)
    let total = 0; 
    for(let i = 0; i <= n; i++){
        total += i;
    }
    return total; 
}
    
function addupTo(n){
        //as n grows it is not reflected in the runtime.
        // 3 operations * + /
        //faster, better implementation.
        //constant overall
        //O(1)
    return n * (n + 1) / 2; 
}

// Big O runtime of an algorithm grows as the inputs grow

function countUpandDown(n){
    console.log("going up")
    for(let i = 0; i < n; i++){         //0(n)
        console.log(i)
    }
    for(let j = n-1; j >=0; j--){       //0(n)
        console.log(j)
    }
        console.log("back down.")       //0(n)
    }

function printAllPairs(n){
    for(let i = 0; i < n; i++){         //0(n) with in 0(n)
        for(let j = 0; j < n; j++){     //0(n^2) O of n squared. 
            console.log(i, j)
        }
    }
}


//simplifying big O expressions. 
//constants dont matter; 
    //O(n + 10) = O(n)
    //O(1000n + 50) = O(n)
    //O(n^2 + 5n + 8) = O(n^2)

//Arithmetic operations are constant
//Variable assingment is constant
//Accessing elements in an array(by index) or object(by key) is constant
//in a loop the complexity is the length of the loop times the complexity of whatever
//happens inside of the loop.

//space complexity
//most booleans numbers underfined null are constant space
//strings require O(n)space 

function sum(arr){
    //O(1) constant space. 
    let total = 0; 
    for(let i = 0; i < arr.length; i++){
        total += arr[i];
    }
    return total; 
}

function double(arr){
    //O(n)
    let newArr = []; 
    for(let i = 0; i < arr.length; i++){
        newArr.push(2*arr[i]);      //newArr gets long and long depending on the input.
    }
    return newArr; 
}

//logarithms

//what is log?
//O(log n) is great. 


//Built in data structures

//objects - when you dont need order,
// insertion O(1) removal O(1) searching O(n) access O(1)...

//Arrays - when you need order, 
//insertion it depends, removal it depends, access O(1), searching O(n).

//built in methods
//push pop constant time
//shift un shift O(n)
//concat O(n)
//slice splice O(n)
//sort O(n *logn)
//foreach/map/filter/reduce/etc O(n)


//Problem solving patterns/ Algorithms 

//Devise a plan for solving problems
//Master common problem solving patterns

//understand the problem
//explore concrete examples
//break it down
//solve/simplify
//look back and refactor

//understand the problem
    //1. can i restate the problem in my own words
    //2. what are the inputs that go into the problem
    //3. what are the outputs, what should be come from the solution
    //to the problem
    //4. Can the outputs be determined from the inputs? in other words
    //do i have enough information to solve the problem? you may not
    //be able to answer this question until you set about solving the problem.
    //5. How should I label the important pieces of data that are a part of the problem

//problem write a function which returns the sum of two numbers.
    //1. implement addition
    //2. ints? floats? what about string for large numbers? 
    //3. int, float , strings
    //4. 
    //5.

//come up with concrete examples
    //start with simple examples --with the input and the output
    //progress to more complex examples
    //explore examples with empty inputs
    //explore examples with invalid inputs

    //write a function which takes in a string and returns counts 
    //of each character in the string.

    //simple examples
        // function charCount("aaaaa"); //{a:4}

        // charCount("my dog is a cat")
        //do we want to account for spaces, numbers, casing, etc...

        // charCount("");

//break it down
    //explicitly write out the steps you need to take.
    //same problem as before
    
    function charCount(str){
        //make object to return at the end
        let newArr = {};
        //loop over str, for each character..
        for(let char of str){
            char = char.toLowerCase();
            //use regular expression to get only letters and numbers 
            if(/[a-z0-9]/.test(char)){
                //regular expressions performance vary. instead...
                //if char is a num/letter key in object, add one to count
                if(newArr[char]){
                    newArr[char]++;
                }else{
                //if the char is a num/letter not in our object set to one.
                    newArr[char] = 1; 
                };
                //instead of above
                //newArr[char] = ++newArr[char] || 1
            }
        }
        //if character is something else dont do anything
        //return object at end
        return newArr; 
    }

//solve and simplify
    //find the core difficulty in what you're trying to do
    //temporarily ignore that difficulty
    //write a simplified solution
    //then incorporate that difficulty back in.

//look back and refactor
    //ask yourself these questions
        //can you check the result
        //can you derive the result differently
        //can you understand it at a glance
        //can you use the result of method for some other problem/
        //can you improve the performace of your solution
        //can you think of other ways to refactor
        //how have other people solved this problem
        
//Patterns
    //Frequency Counter
        //this pattern uses objects or sets to collect values frequencies of values.
        //often can avoid nested loops.
       function same(arr1, arr2){
           if(arr1.length !== arr2.length){
               return false;
           }
           for(let i = 0; i < arr1.length; i++){
               let correctIndex = arr2.indexOf(arr1[i] ** 2)
               if(correctIndex === -1){
                   return false;
               }
               arr2.splice(correctIndex, 1);
           }
           return true;
       } 

       same([1,2,3], [9, 1, 4]) === true //1 * 1 = 1, 2 * 2 = 4, 3 * 3 = 9. 

       //two loops is better than two nested loops. 
       //refactored.
       //O(n)
       function same(arr1, arr2){
           if(arr1.length !== arr2.length){
               return false;
           }
           let frequencyCounter1 = {}; 
           let frequencyCounter2 = {}; 
           for(let val of arr1){
               frequencyCounter1[val] = (frequencyCounter1[val] || 0) + 1; 
           }
           for (let val of arr2){
               frequencyCounter2[val] = (frequencyCounter2[val] || 0) + 1; 
           }
           for(let key in frequencyCounter1){
               if(!(key ** 2 in frequencyCounter2)){
                   return false
               }
               if(frequencyCounter2[key ** 2] !== frequencyCounter1[key]){
                   return false
               }
           }
           return true; 
       }

//anagram problem
       //two strings two items, and see if they are the same
       //try and use frequency approach. 
       function anagram(first, second){
           if(first.length !== second.length){
               return false;
           }
           const lookup = {}; 
           for(let i = 0; i < first.length; i++){
               let letter = first[i]; 
               //if letter exists, increment, otherwise set to 1
               lookup[letter] ? lookup[letter] += 1: lookup[letter] = 1; 
           }
           for(let i = 0; i < second.length; i++){
               let letter = second[i]; 
               //can't find letter or letter is a zero then its not and anagram.
               if(!lookup[letter]){
                   return false;
               }else{
                   lookup[letter] -= 1; 
               }
           }
           return true; 
       }

//two pointers pattern 
       //sumZero
       //O(n^2)
       function sumZero(arr){
           for(let i = 0; i < arr.length; i++){
               for(let j = i+1; j < arr.length; j++){
                   if(arr[i] + arr[j] === 0){
                       return [arr[i], arr[j]];
                   }
               }
           }
       }

       //refactored
       //O(n)
       function sumZero(arr){
           //start on the left and right side to figure out the problem. 
           let left = 0; 
           let right = arr.length - 1;
           while(left < right){
               let sum = arr[left] + arr[right];
               if(sum === 0){
                   return [arr[left], arr[right]];
               }else if(sum > 0){
                   right--;
               }else{
                   left++;
               }
           }
       }
       //countUniqueValues
       function countUniqueValues(arr){
           let i = 0; 
           if(arr.length === 0) return 0; 
           for(let j = 1; j < arr.length; j++){
               //compare index of i and j
               if(arr[i] !== arr[j]){
                   i++;
                   arr[i] = arr[j]; 
               } 
           }
           return i + 1; 
       }

//Sliding window pattern
       //set of data that is continuious
       //a window can be a single var which can be eith an array or number
       //from one position to another.
       //depending on the certain condition the window either increases or closes
       //and a new window is created
       //very useful for keeping track of a subset of data in an array/string etc.

       //maxSubarraySum
       //not a great solution
       //bad runtime especially if you have a large array.
       //since you are going from each index up to the spaces of the num. 

       function maxSubarraySum(arr, num){
           if(num > arr.length){
               return null;
           }
           let max = -Infinity; //if an array only had negitive numbers.
           for(let i = 0; i < arr.length - num + 1; i++){
               temp = 0; //store our sum each time through
               for(let j = 0; j < num; j++){
                   temp += arr[i + j];
               }    //
               if(temp > max){
                   max = temp;
               }
           }
           return max; 
       }
                    //adding from i to what ever the num is
       maxSubarraySum([2,6,9,2,1,8,5,6,3], 3)
                    // i+6+9 --3 items.
                        //i+9+2

        //sliding window approach
        //O(n)
        function maxSubarraySum(arr, num){
            let maxSum = 0; 
            let tempSum = 0; 
            if(arr.length < num) return null; 
            for(let i = 0; i < num; i++){
                maxSum += arr[i];
            }
            tempSum = maxSum; 
            for(let i = num; i < arr.length; i++){
                tempSum = tempSum - arr[i - num] + arr[i];
                maxSum = Math.max(maxSum, tempSum);
            }
            return maxSum; 
        }             //creating a sum that goes from 2 to 9
                    //then for 6 to 4 it subtracts 2 and adds 4
                    //allows us to loop over the array once
                    //so we dont have to contiuously loop through it.
                    //until it finds the largest sum.
        maxSubarraySum([2,6,9,4,3,4,6], 3); 

//divide and conquer
        //dividing a data set into smaller chunks and then repeating a process
        //with a subset of data.
        //this pattern can tremendously decrease time complexity.

        function search(arr, val){
            let min = 0; 
            let max = arr.length - 1; 
            while(min <= max){
                let middle = Math.floor((min + max) / 2);
                let currentElement = arr[middle];
                if(currentElement < val){
                    min = middle + 1;
                }
                else if(currentElement > val){
                    max = middle - 1;
                }
                else{
                    return middle; 
                }
            }
            return -1; 
        }

        //three problems using patterns
        //frequency counter
        function sameFrequency(num1, num2){
            let strNum1 = num1.toString();
            let strNum2 = num2.toString();
            if(strNum1.length !== strNum2.length) return false;

            let countNum1 = {};
            let countNum2 = {};
             
            for(let i = 0; i < strNum1.length; i++){
                countNum1[strNum1[i]] = (countNum1[strNum1[i]] || 0) + 1;
            }
            for(let j = 0; j < strNum1.length; j++){
                countNum2[strNum2[j]] = (countNum2[strNum2[j]] || 0) + 1;
            }
            for(let key in countNum1){
                if(countNum1[key] !== countNum2[key]) return false;
            }
            return true;
        }
        //frequency counter
        function areThereDuplicates(){
            let collection = {}; 
            for(let val in arguments){
                collection[arguments[val]] = [collection[arguments[val]] || 0]+ 1; 
            }
            for(let key in collection){
                if(collection[key] > 1)return true; 
            }
            return false;
        }
        //window
        function avrgPair(arr, num){
            let start = 0; 
            let end = arr.length - 1; 
            while(start<end){
                let avg = (arr[start] + arr[end]) / 2;
                if(avg === num)start++;
                else end--;
            }
            return false; 
        }


//recursion 
