let firstName = "Skyler"
let lastName = "Clark-Hamel"
let birthYear = 1991

fuction olderYounger(birthYear, hisYear) {

  if ( birthYear > hisYear ) {
    return console.log("younger than ");
  } else {
    return console.log("older than ");

  }
}

console.log("Hello, " + firstName + " " + lastName);

console.log("You are about " + (2017 - birthYear) + " years old.");

console.log("That's about " + olderYounger(1991, 1971) + "Snoop Dogg.")
