// SOAL 1
console.log("_____________Soal 1____________")
// Fungsi ES6
{const  firstName = 'William'
        lastName = 'Imoh'
 
const theString = `${firstName} ${lastName}`
 
console.log(theString) 
}
// SOAL 2
console.log("_____________Soal 2____________")
{
const newObject = {
    firstName: "Harry",
    lastName: "Potter Holt",
    destination: "Hogwarts React Conf",
    occupation: "Deve-wizard Avocado",
    spell: "Vimulus Renderus!!!"
  }
  const {firstName, 
        lastName,
        destination,
        occupation} = newObject
  console.log(firstName, lastName, destination, occupation)
  }

// SOAL 3
console.log("_____________Soal 3____________")
  
const west = ["Will", "Chris", "Sam", "Holly"]
const east = ["Gill", "Brian", "Noel", "Maggie"]
const combined = [...west, ...east]
//Driver Code
console.log(combined)
