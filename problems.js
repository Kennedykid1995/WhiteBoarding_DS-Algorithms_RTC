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
        //non recursive is called iterative
        //a process(a function in our case) that calls itself.
        //they call themselves. 

        //invoke the same functionwith a different input until you reach your base case
        //the base case, the condition when the recursion ends.
        //two essential parts
        //base case and different input 

        //basic resursive solution.
        function countDown(){
            if(num <= 0){ //base case
                console.log("All Done!");
                return; //ends the function
            }
            console.log(num);//this section functions if the base case hasn't been hit.
            num--;
            countDown(num); 
        }
    countDown(5); 

        function sumRange(num){
            if(num === 1) return 1; 
            return num + sumRange(num - 1)
        }

    sumRange(3); 
        return 3 + sumRange(2); //3     3+3=6; 
                return 2 + sumRange(1); //true 2+1
                            return 1 //^^^

//writing factorial recursion

        //5 * 4 * 3 * 2 * 1
        //iterative solution
        function factorial(num){
            let total = 1;
            for(let i = num; i > 1; i--){
                total *= i
            }
            return total
        }
        //recursive solution
        function factorial(num){
            if(num === 1) return 1;
            return num * factorial(num-1);
        }
        factorial(5); 
            //return 5 * 4, 20 * 3, 60 * 2, 120 * 1 //ends at 1. 

        function collectOdds(arr){
            let result = [];  //call outside of the function within the function
            //shrinking the array to collect all of the odds. 
            function helper(helperInput){
                if(helperInput.length === 0){
                    return;
                }
                if(helperInput[0] % 2 !== 0){
                    result.push(helperInput[0])
                }
                helper(helperInput.slice(1))
            }
            helper(arr);
            return result; 
        }
        //pure recursion way

        function collectOddValues(arr){
            let newArr = []; 

            if(arr.length === 0){
                return newArr;
            }
            if(arr[0] % 2 !== 0){
                newArr.push(arr[0]);
            }
            newArr = newArr.concat(collectOddValues(arr.slice(1)));
            return newArr;
        }

        function power(base, exp){
            //power(2,0) = 1
            //power(2, 2) = 4
            if(exp === 0) return 1; //base case
            return base * power(base, exp - 1); 
            //the function will call itself
            //base exp
            // 3    4//begins
            // 3    3
            // 3    2
            // 3    1//ends
          }
          console.log(power(9, 2))

          function factorial(x){
            //need the create the base cases
            //when or if the function gets to 0 or 1
            //and then call the function so that it loops 
            //through until it meets the base case.
            //5*4*3*2*1 = 120
            if(x < 0)return 0; 
            if(x <= 1) return 1;
            return x * factorial(x - 1); 
          }
          console.log(factorial(5))

          function productOfArray(arr){
            //establish a base case
            if(arr.length === 0){
              return 1;
            }
            //loop through you get to the base case.
            //multiple 
            console.log(arr)
            return arr[0]*productOfArray(arr.slice(1)); 
          }
          // [ 1, 4, 3 ]
          // [ 4, 3 ]
          // [ 3 ]
          // 12
          console.log(productOfArray([1,4,3]))

          function recursiveRange(x){
            if(x === 0) return 0; 
            console.log(x)
            return x + recursiveRange(x-1);
          }
          // 5
          // 4
          // 3
          // 2
          // 1
          // 15
          console.log(recursiveRange(5))

//searching algorithmns
    //objectives
    //linear search
    //binary search
    //naive string searching 
    //KMP string searching

//linear search
    //indexOf
    //includes
    //find
    //findIndex

//function accepts an array and value 
//loop through the array and check if the current array element is equal
//to the value if it is, return the index at which the element is found
//if the value is never found, return -1
function linearSearch(arr, val){
    for(let i = 0; i < arr.length; i++){
        if(arr[i] === val) return i; 
    }
    return -1; 
}
linearSearch([1,2,34,5], 5) //returns 3. 
//Big O linear search
    //best case O(1) we find immediately
    //worst case O(n) searching all of the items
    //average case O(n) as n grows so does the average amount of time it takes

//binary search
    //much faster
    //eliminates half of the remaining elements at any given time
    //elements must be sorted, has to have an order. 

//divide and conquer
    // /pick a pivot point in the middle, check the right side and the left
    // this function accepts a sorted array and a value, 
    //create a left pointer and start of the arr, and a right pointer at the end of the arrat.
    //while the left pointer comes before the right pointer. 
    //create a pointer in the middle
    //if you fin the value yu want, return index
    //if the value is to small, move the left pointer up
    //if the value is too large, move the right pointer down    
    //if you never find the value return -1. 
    function binarySearch(arr, val){
        let start = 0; 
        let end = arr.length - 1; 
        let middle = Math.floor((start + end) / 2); 
        while(arr[middle] !== val && start <= end){
            if(val < arr[middle]){
                end = middle - 1; //end = 3 //middle = 2 // start = 1
            }else{
                start = middle + 1;  //start = 5 //middle = 6 // end = 7
            }
        }
        if(arr[middle] == val){
            return middle
        }else{
            return -1
        }
    }
    binarySearch([1,2,3,4,5,6,7], 3); 
    //start - 1
    //end - 7
    //middle - 4

    //Binary search Big O 
        //worst - O(log n)
        //best - O(1)

//naive string search

//loop over the longer string
//loop over the shorter sting 
//no match break inner loop
//if there is a match keep going
//increment count
//return the count
    function naiveString(long, short){
        let count = 0; 
        for(let i = 0; i < long.length; i++){
            for(let j = 0; j < short.length; j++){
                if(short[j] !== long[i + j]) break; 
                if(j === short.length -1) count++; 
            }
        }
        return count; 
    }
    naiveString("lori loled", "lol");


//sorting algorithms
//sorting is the process of rearranging the items in a collection, 
//so that the items are in some kind of order.


//Bubble sort
    //sorting algorithm where the largest values bubble to the top. 
    //5,1,2,4,3,6
    //1,2,4,3,5,6
    //1,2,3,4,5,6
    //the larger num swaps indexes with the smaller num. 

    //start loop in with a variable called i the end of the array towards the beginning.
    //start an inner loop with a variable called j from the beginning until i - 1;
    //if arr[j] is greater than arr[j + 1], swap those two values
    //return the sorted array

    function bubbleSort(arr){
        let noSwaps; 
        for(let i = arr.length; i > 0; i--){
            noSwaps = true
            for(let j = 0; j < i - 1; j++){
                if(arr[j] > arr[j + 1]){
                    //swap
                    let temp = arr[j]; 
                    arr[j] = arr[j + 1];
                    arr[j + 1] = temp; 
                    noSwaps = false;
                }
            }
            if(noSwaps) break; 
        }
        return arr; 
    }
    bubbleSort([2,1,4,5,3,6])

    //bubble sort big O
    //in general it is O(n^2) cause of the nested loop. 
    //unless the array is nearly sorted. simplifies down to O(n);

//selection sort
//similar to bubble but instead of first placing values into sorted position,
//it places small values into sorted position. 

//[5,3,4,1,2]
//looks for the minimum value
//[1,5,3,4,2]
//[1,2,5,3,4]
//[1,2,3,5,4]
//[1,2,3,4,5]

    //store the first element as the smalledt value youve seen so far
    //compare the item to the next item in the array until you find a smaller number
    //if a smaller number is found, designate that smaller number to be the 
    //new minimum and continue until the end of the array
    //if the minimum us not the value index you initially began with swap the two values
    //repeat this wuth the next element until the array is sorted. 
    function selectionSort(arr){
        for(let i = 0; i < arr.length; i++){
            let lowest = i; //the index. 
            for(let j = i + 1; j < arr.length; j++){
                if( arr[j] < arr[lowest]){
                    lowest = j; 
                } 
            }
            if(i !== lowest){
            let temp = arr[i];
            arr[i] = arr[lowest];
            arr[lowest] = temp; 
            }
        }
        return arr
    }
    selectionSort([10,2,3,1,67,3])

//insertion sort
//builds up the sort by gradually creating a larger left half which is always sorted.
//[5,3,4,1,2]//finds the three and compars it to the left half
//[3,5,4,1,2]//moves to front
//[3,4,5,1,2]//does the same thing with four
//[1,3,4,5,2]
//[1,2,3,4,5]//until it is sorted.
//start by picking the second element in the array
//now compare the second element with the one before it and swap if necessary
//continue to the nect element and if it is in the incorrect order.
//iterate through the sorted portion( the left side) to place the element in the correct place
//repeat until the array is sorted. 
    function insertionSort(arr){
        for(let i = 1; i < arr.length; i++){
            let currentVal = arr[i]; 
            for(let j = i - 1; j >= 0 && arr[j] > currentVal; j--){
                arr[j + 1] = arr[j];  
            }
            arr[j+1] = currentVal; 
        }
        return arr
    }
    insertionSort([5,2,1,9,34,21]); 

    //big o
    //worse case O(n^2)
    //best O(1)

//time and space complexity of the three sorting methods
    //bubble best time O(n) space O(1) worse/average O(n^2)
    //insertion best O(n) space O(1) worse/average O(n^2)
    //selection best O(n) space O(1) worse/average O(n^2)


//advanced sorting algorithms
    //merge sort 
    //splitting up, merging, and sorting. 
    //works by decomping an array into smaller arrays of 0 or 1 elements, then building
    //a newly built array. 
    //[10,2,90,5,6,23,1,2,3]
    //[10,2,90,5] [6,23,1,2,3] //splits in half anf keeps doing that until arrays are 0 or 1. 
    
    //create an empty array that you will return in the end
    //take a look at the smallest values in each input array
    //while there are still values we haven't looked at
    //if the value in the first arrat is smaller than the value in the second
    //push the value in the first array into the results and move on to the next \
    //value in the first array.
    //if the value in the first array is larger than the value in the second array, push
    //the value in the second array into our results and move on to the next value in the
    //second array. 

    function twoSorted(arr1, arr2){
        let results = []; 
        let i = 0; 
        let j = 0; 
        while(i < arr1.length && j < arr2.length){
            if(arr2[j] > arr[i]){
                results.push(arr[i])
                i++; 
            }else{
                results.push(arr2[j])
                j++; 
            }
        }
        //the two while loops insert whatever is left in the arrays into results.
        while(i < arr1.length){
            results.push(arr1[i])
            i++
        }
        while(j < arr2.length){
            results.push(arr2[j]); 
            j++
        }
        return results
    }
    twoSorted([1,10,50] [2,14,99,100])

//writing merge sort
    //uses recursion
    //break up the array into halves until you gave arrays that are empty or have one element
    //once you have the smaller arrays sorted, merge those arrays with other sorted arrays
    //until you are back at the full length of the array. 
    //once you have the array merged back together return the merged array. 
    function mergeSort(arr){
        if(arr.length <= 1) return arr; //base case
        let mid = Math.floor(arr.length / 2); 
        let left = mergeSort(arr.slice(0, mid)); 
        let right = mergeSort(arr.slice(mid)); 
        return twoSorted(left, right); 

    }
    mergeSort([12, 24, 76, 73, 72, 1, 9])

    //big O
    //best case O(n log n) space O(n); 

//Quick Sort
    //like merge sort, exploits the fact that arrays of 0 or 1 element are always sorted
    //works by selecting one element called the pivot and finding the index where the pivot
    //shpuld end up in the sorted  array
    //once the pivot is positioned appropriately, quick sort can be applied on either side of
    //the pivot. 

    //pivot helper
    //picking a pivot
    //the runtime of quick sort depends in part on how one selects the pivot
    //ideally, the pivot should be chosen so thta its roughly the median value in the
    //data set you are sorting 
    
    //it will help to accept three arguments: an array, a start index, and an end index
    //these can default to 0 and the array length minus 1
    //grab the pivot from the start of the array. 
    //store the current pivot index in a variable. keep track of where it should end up
    //loop through the array from the start until the end
        //if the pivot is greater than the current element, increment 
        //the pivot index varuable and then swap the current element with the element at
        //the pivot index.
    //swap the starting element the pivot with the pivot index
    //return the pivot index. 

    function pivotHelper(arr, start=0, end=arr.length+1){
        function swap(arr, i, j){
            let temp = arr[i]; 
            arr[i] = arr[j]; 
            arr[j] = temp; 
        }
        let pivot = arr[start]; 
        let swapIndex = start; 
        for(let i = start + 1; i < arr.length; i++){
            if(pivot > arr[i]){
                swapIndex++;
                swap(arr, swapIndex, i); 
            }
        }
        swap(arr, start, swapIndex); 
        return swapIndex; 
    }
    pivotHelper([4,8,2,3,4,1]);
//quick sort implementation
    //pivot helper finished
    //call the pivot helper on the array
    //resursively call the pivot helper on the subarray to the left of the index
    //and the subarray to the right of that index. 
    //your base case occus when you consider a subarray with less than 2 elements. 
    function quickSort(arr, left = 0, right = arr.length - 1){
        if(left < right){
        let pivotInx = pivotHelper(arr, left, right);
        //left
        quickSort(arr, left, pivotInx - 1)  
        //right
        quickSort(arr, pivotInx + 1, right); 
        }
        return arr; 
    }
    quickSort([4,6,9,1,2,5,3]); 

    //sorting algorithms that are not comparing, that are faster;
    //Radix sort doesn't compare elements. 
    //is a special sorting algorithm that works on lists of numbers
    //it never makes comparisons between elements
    //it exploits the fact that information about size of a number is
    //encoded in the number of digits
    //more digits means a bigger number

    //helper functions for this algorithm
    //radix sort helpers 
    //getDigit(num, place)- returns athe digit in num at the given
    //place value. 
    function getDigit(num, i){
        return Math.floor(Math.abs(num) / Math.pow(10, i)) % 10;
    }
    //next helper
    //digitCount
    function digitCount(num){
        if(num === 0) return 1; 
        return Math.floor(Math.log10(Math.abs(num))) + 1; 
    }
    //mostDigits
    function mostDigits(nums){
        let maxDigits = 0; 
        for(let i = 0; i < nums.length; i++){
            maxDigits = Math.max(maxDigits, digitCount(nums[i])); 
        }
        return maxDigits; 
    }

    //Radix Sort
    //define a function that accepts lists pf numbers
    //figure out how many digits the largest number has
    //loop from k = 0 up to this largest number of digits
    //create buckets for each digit for each digit(0 to 9); 
    //place each number on the corresponding bucket based on 
    //its kth digits
    //replace our existing array with valies in our buckets
    //starting with 0 and going up to 9
    //return list at the end.

    function radixSort(nums){
        let maxDigitCount = mostDigits(nums);
        for(let k = 0; k < maxDigitCount; k++){
            let digitBuckets = Array.from({length: 10}, () => []); 
            for(let i = 0; i < nums.length; i++){
                let digit = getDigit(nums[i], k)
                digitBuckets[digit].push(nums[i]); 
            }
            nums = [].concat(...digitBuckets); //makes this into the list.
        }
    }
    radixSort([1,43,212,45,32,2,56432,2212])

    //Big O
    //O(nk) - time /O(n + k) -space

//Data structures 
    //singly linked lists
       //stores a piece  of data - next
       //refrence to next node - next

       class Node{
           constructor(val){
               this.val = val; 
               this.next = null
           }
       }
       class singlyLinkedList{
           constructor(){
            this.head = null; 
            this.tail = null;
            this.length = 0; 
           }
           push(val){
               let newNode = new Node(val);
               if(!this.head){
                   this.head = newNode; 
                   this.tail = this.head; 
               }else{
                   this.tail.next = newNode; 
                   this.tail = newNode; 
               }
               this.length ++; 
               return this; 
           }
        //    traverse(){
        //        let current = this.head; 
        //        while(current){
        //            console.log(current.val); 
        //            current = current.next; 
        //        }
        //    }
           pop(){
               //if there is no nodes in the list return undefines
               //loop through the list until you reach the tail
               //set the next property of the 2nd to last node to be null
               //set the tail to be the 2nd to last node
               //decrement the length of the list by 1
               //return the value of the node removed
               if(!this.head) return undefined; 
               let current = this.head;
               let newTail = current; 
               while(current.next){
                   newTail = current; //always lagging behind
                   current = current.next; 
               }
               this.tail = newTail;
               this.tail.next = null; 
               this.length--;

               if(this.length === 0){
                   this.head = null; 
                   this.tail = null; 
               }
               return current 
           }
           shift(){
               if(!this.head) return undefined;
               let currentHead = this.head;
               this.head = currentHead.next;
               this.length--; 
               if(this.length === 0){
                   this.head = null;
                   this.tail = null; 
               }
               return currentHead; 
           }
           unshift(val){
              //should accept a value
              //create a new node using the value passed to the function
              //if there is no head property on the list, set the head and tail
              // to be the newly created node
              //otherwise set the newly created nodes next property to be the
              // current head property on the the list. 
              //set the head property on the list to be that newly created node
              //increment the length of the list by 1
              //return the linked list
            let newNode = new Node(val); 
            if(!this.head){
                this.head = newNode; 
                this.tail = this.head;
            } else {
                newNode.next = this.head; 
                this.head = newNode; 
            }
            this.length++;
            return this; 
           }
           get(index){
               //should accept an index
               //if the index is less than zero or greater than or equal to the length of the list
               //return null
               //loop through the list until you reach the index and return the node at that
               //specific index
            if(index < 0 || index > this.length) return null; 
            let counter = 0; 
            let current = this.head; 
            while(counter !== index){
                current = current.next;
                counter++;
            }
            return current;
           }
           set(index, val){
                //define function that accepts index and value
                //use the get method to find node
                //if the node not found return false
                //if found update value and return true
                let foundNode = this.get(index);
                if(foundNode){
                    foundNode.val = val;
                    return true; 
                }
                return false;
           }
           insert(index, val){
               //if the index is less than zero or greater than the length, return false
               //if the is the same as the length, push new node to the end of the list
               //if th eindex is 0, unshift a new node to the start of the list
               //otherwise, using get method access the node at the index -1
               //set the next property on the node to be the new node
               //set the next property on the new node to be the previous nex
               //increment the length
               //return true
               if(index > 0 || index < this.length) return false; //weird number
               if(index === this.length) return this.push(val); //end
               if(index === 0)this.unshift(val);//beginning
               let newNode = new Node(val); 
               let prev = this.get(index - 1); 
               let temp = prev.next;
               prev.next = newNode;
               newNode = temp; 
               this.length++;
               return true;
           }
       }
    
       let list = new singlyLinkedList(val)
       list.push("hello")
       list.push("goodbye")
       list.push("bye bye")



