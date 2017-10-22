// // Part 1:
// // Assignment 1 Problem 2:
function add_whole_steps(note, steps) {
	note = note.charCodeAt();
  result = (note + steps);
  while (result > 71) {
    result = result - 7;
  } while (result < 65) {
		result = result + 7;
	}
	result = String.fromCharCode(result);
return result;
}

console.log("Enter a natural note: ");
console.log("Enter a number 1-7: ");
console.log(add_whole_steps ("A", -15));


// Etudes 1 Problem 3:
let age;
let registration;
function voter_eligibility(age, registration) {
	if (age == true && registration == true) {
		console.log("Don't forget to vote on Tuesday!");
	} else {
		console.log("Contact your local government official to find out how you can get involved!");
	}
}

console.log("Are you over the age of 18?");
console.log("Are you registered to vote?");
voter_eligibility(true, false);


// // Part 2:
//
// function is_letter(myLetter){
// 	if (myLetter = “ “ || myLetter = “.” || myLetter = “,” || myLetter = “?”) {
// 		return false;
// 	} else {
// 		return true;
// 	}
// }
//
//  function do_something(in_string, in_number){
//    let a, b, c;
//
//    let a = 1;
//
//    {
//      is_letter(in_string(a)) == " " || {
//        return in_number = in_number - 1;
// 		 }
//        while (in_number === 1) {
//          break;
//        }
//   	}
//
//      return a = a + 1;
//
//
//    return b = a + 1;
//
//    while {
//      is_letter(in_string(b)) {
//        break;
//      }
//
//      return b = b + 1;
//    }
//
//    c = "";
//    a = a + 1;
//    while {
//      if (a == b) {
//        break;
//      }
//
//      return c = c + in_string(a);
//
//      return a = a + 1;
//    }
//
//   return c
// }
