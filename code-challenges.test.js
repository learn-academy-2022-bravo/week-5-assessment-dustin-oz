// ASSESSMENT 5: JavaScript Coding Practical Questions with Jest

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest


// --------------------1) Create a function that takes in a string and returns a coded message. The coded message converts 'a' to 4, 'e' to 3, 'i' to 1, and 'o' to 0.

// a) Create a test with expect statements using the variables provided.

describe("codedMessage", () => {
    it("takes in a string and returns a coded message. The coded message converts 'a' to 4, 'e' to 3, 'i' to 1, and 'o' to 0", () => {
        const secretCodeWord1 = "Lackadaisical"
        const secretCodeWord2 = "Gobbledygook"
        const secretCodeWord3 = "Eccentric"
        expect(codedMessage(secretCodeWord1)).toEqual("L4ck4d41s1c4l")
        expect(codedMessage(secretCodeWord2)).toEqual("G0bbl3dyg00k")
        expect(codedMessage(secretCodeWord3)).toEqual("3cc3ntr1c")
    })
})

// Expected output: "L4ck4d41s1c4l"
// Expected output: "G0bbl3dyg00k"
// Expected output: "3cc3ntr1c"
        
        // JEST GOOD FAILURE OUTPUT: -->  ReferenceError: codedMessage is not defined



// b) Create the function that makes the test pass.


// STUDENT NOTE: I think I have been given two types of guidance in past assessment instructor notes on my pseudo code . I have been  told good job since it was quite clear what I was intendeding (much as it is written below this note) and I have been told by another instructors notes on my assessment something like, dont make my pseudo code so text or word dependent? I took that to mean i need to make my pseudo code shorter? But I think I will continue to pseudo code perhaps in a slighly more wordy/lengthly fashion, of course on a case  by case basis.. in this first challenge question, I felt it needed more words to make sure I can remember what I am doing later in the coding since I had never used .replace()..

// PSEUDO CODE:
// Create function called codedMessage that takes in (string)
// use ".replace" along with the "g" global identifier for each vowel in the alphabet excluding "u" on STRING
// use the "i" identifier in ^^ .replace to be "case insensitive" --> /a/gi 
// Since .replace takes 2 values, the target word and new value, supply each .replace with the "#" specified
// return the entire statement

const codedMessage = (string) => {
    return string.replace(/a/gi, 4).replace(/e/gi, 3).replace(/i/gi, 1).replace(/o/gi, 0)
}

        // JEST PASS
        // PASS./ code - challenges.test.js
        // codedMessage
        //     ✓ returns eat food or keep working based on input(1 ms)





// --------------------2) Create a function that takes in an array of words and a single letter and returns all the words that contain that particular letter.

// a) Create a test with expects statement using the variable provided.


describe("wordOutput", () => {
    it("takes in an array of words and a single letter and returns all the words that contain that particular letter", () => {
        const arrayOfWords1 = ["Apple", "Banana", "Plum", "Orange", "Kiwi"]
        const letterA = "a"
        const arrayOfWords2 = ["Mango", "Cherry", "Apricot", "Blueberry", "Peach"]
        const letterE = "e"
        expect(wordOutput(arrayOfWords1, letterA)).toEqual(["Apple", "Banana", "Orange"])
        expect(wordOutput(arrayOfWords2, letterE)).toEqual(["Cherry", "Blueberry", "Peach"])
    })
})

// Expected output: ["Apple", "Banana", "Orange"]
// Expected output: ["Cherry", "Blueberry", "Peach"]

        // JEST GOOD FAILURE: --> ReferenceError: wordOutput is not defined



// b) Create the function that makes the test pass.

// PSEUDO CODE:
// Create a function "wordOutput" that takes in (array, letter)
// return the supplied "array" and ".filter" on each "value" in the the array
// return "value" in the array if it ".includes" (letter) ||or if  "value" ".includes" (letter.toUppercase)

const wordOutput = (array, letter) => {
    return array.filter(value => {
        return value.includes(letter) || value.includes(letter.toUpperCase())
    })
}

        // JEST TEST PASS
        // PASS./ code - challenges.test.js
        // wordOutput
        //     ✓ takes in an array of words and a single letter and returns all the words that contain that particular letter(1 ms)





// --------------------3) Create a function that takes in an array of 5 numbers and determines whether or not the array is a “full house”. A full house is exactly one pair and one three of a kind.

// a) Create a test with expect statements using the variable provided.

describe("fullHouseFinder", () => {
    it("takes in an array of 5 numbers and determines whether or not the array is a “full house”. A full house is exactly one pair and one three of a kind", () => {
        const hand1 = [5, 5, 5, 3, 3]
        const hand2 = [5, 5, 3, 3, 4]
        const hand3 = [5, 5, 5, 5, 4]
        expect(fullHouseFinder(hand1)).toEqual(true)
        expect(fullHouseFinder(hand2)).toEqual(false)
        expect(fullHouseFinder(hand3)).toEqual(false)
    })
})

// Expected output: true
// Expected output: false
// Expected output: false

        // JEST GOOD FAILURE: --> ReferenceError: fullHouseFinder is not defined


// b) Create the function that makes the test pass.

// PSEUDO CODE:
// Create function "fullHouseFinder" that takes in (array)
// Create "dealer" variable to hold a new array that ".filter's" looking for dupilicates (value, index)
// the ".sort" method will sort the duplicate numbers in "dealer"
// using if statement and conditionals, check dealer.length < 3 and return false 
// elseif's can handle the other ways to win/not win


const fullHouseFinder = (array) => {
    let dealer = array.filter((value, index) =>
        index !== array.indexOf(value)).sort()

    if (dealer.length < 3) {
        return false
    } else if (dealer[0] === dealer[1] && dealer[1] !== dealer[2]) {
        return true
    } else if (dealer[0] !== dealer[1] && dealer[1] === dealer[2]) {
        return true
    } else {
        return false
    }
}

        // JEST TEST PASS
        // PASS./ code - challenges.test.js
        // fullHouseFinder
        //     ✓ takes in an array of 5 numbers and determines whether or not the array is a “full house”. A full house is exactly one pair and one three of a kind(1 ms)