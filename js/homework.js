// ==========Exercise #1 ===========
/*
Write a function that parses through the below object and displays all of their
favorite food dishes as shown:
*/

let person3 = {
    pizza: ["Deep Dish", "South Side Thin Crust"],
    tacos: "Anything not from Taco bell",
    burgers: "Portillos Burgers",
    ice_cream: ["Chocolate", "Vanilla", "Oreo"],
    shakes: [{
        oberwise: "Chocolate",
        dunkin: "Vanilla",
        culvers: "All of them",
        mcDonalds: "Sham-rock-shake",
        cupids_candies: "Chocolate Malt"
    }]
}

for (let i = 0; i < Object.values(person3).length; i++) {
    if (Array.isArray(Object.values(person3)[i])) {
        console.log(Object.values(person3)[i])
    } else {
        console.log("Not an Array")
    }

}

//=======Exercise #2=========//
/*
Write an object prototype or class for a Person that has a name and age, has a
printInfo method, and also has a method that
increments the persons age by 1 each time the method is called.
Create two people using the 'new' keyword, and print
both of their infos and increment one persons
age by 3 years. Use an arrow function for both methods
*/

// Create our Person Prototype/Class
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    printinfo() {
        return `name: ${this.name} \nAge: ${this.age}`
    }

}

let chris = new Person('Chris', 23)
let akira = new Person('Akira', 25)

console.log(chris.printinfo())
console.log(akira.printinfo())


let count_one = (() => {
    let counter = 23;
    console.log('chris')
    return () => { return counter++ }
})()
console.log(`Chris's age is ${count_one()}`)
console.log(`Chirs's age is ${count_one()}`)

let count_three = (() => {
    let counter = 25;
    console.log('chris')
    return () => { return counter += 3 }
})()
console.log(`Chris's age is ${count_three()}`)
console.log(`Chirs's age is ${count_three()}`)
console.log(`Chirs's age is ${count_three()}`)
// Use an arrow to create the printInfo method

// Create another arrow function for the addAge method that takes a single parameter
// Adding to the age 


// =============Exercise #3 ============//


//     Create a Promised based function that will check a string to determine if it's length is greater than 10.
//     If the length is greater than ten console log "Big word".
//     If the length of the string is less than 10 console log "Small Number"

const lengthIsGreater = (num) => {
    return new Promise((resolve, reject) => {
        if (num > 10) {
            resolve(true)
            console.log("Big word")
        } else {
            reject(false)
            console.log("Small word")
        }

    })
}
lengthIsGreater(11)