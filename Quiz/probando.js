// Trolls are attacking your comment section!

// A common way to deal with this situation is to remove all of the vowels from the trolls' comments, neutralizing the threat.

// Your task is to write a function that takes a string and return a new string with all vowels removed.

// For example, the string "This website is for losers LOL!" would become "Ths wbst s fr lsrs LL!".

// Note: for this kata y isn't considered a vowel



function disemvowel(str) {
    const vowels = "aeiouAEIOU"
    let result = ""
    
    for(let i = 0; i < str.length; i++){
      if(!vowels.includes(str[i])){
        result += str[i]
      }
    }
    
    return result
  }

console.log(  disemvowel("hola"))

//   No, actually, if the character at the current index of the string str[i] is not a vowel, the !vowels.includes(str[i]) condition will evaluate to true, so it will be pushed into the result array arr.

// In other words, the code is using a negation (!) to check if the current character is not a vowel and then pushing it into the array.
  