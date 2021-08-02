function isPalindrome(word) {

    let reverseWord = ""

    for (i = word.length - 1; i > -1; i--) {
        reverseWord += word[i]
    }

    if (word === reverseWord) {
        console.log("This word is a palindrome")

    }
    else {
        console.log("This word is not a palindrome")

    }

}





