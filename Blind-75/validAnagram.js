// Given two strings s and t, return true if t is an anagram of s, and 
// false otherwise.

// An Anagram is a word or phrase formed by rearranging the letters of 
// a different word or phrase, typically using all the original letters 
// exactly once.

// Example 1:

// Input: s = "anagram", t = "nagaram"
// Output: true
// Example 2:

// Input: s = "rat", t = "car"
// Output: false

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    
    let arrS=[];
    let arrT=[];
    for (let i =0; i<s.length; i++){
        let charS= s[i];
        arrS.push(charS);
        
    }
    for (let x=0; x<t.length; x++){
        let charT= t[x];
        arrT.push(charT);
    }
    arrS.sort();
    arrT.sort();
    
    let newS=arrS.toString();
    let newT=arrT.toString();
    console.log(newS);
    console.log(newT)

    if (newS ==  newT){
        return true;
    }
    else {
        return false;
    }
    
};