// PROBLEM 1:
function sum_range(num1, num2) {
  let sum = 0;
  for ( let i = num1 ; i <= num2 ; i++) {
    sum += i;
  }

  console.log(sum);
}

sum_range(1,5);


// PROBLEM 2:

function rotate_encrypt(myString, myInteger) {
  let a = "";

  let output = "";

  for ( let i = 0; i < myString.length; i++ ) {
    a = myString.charCodeAt(i);
    a = a + myInteger;
    if ((a >= 65) || (a <= 90))  {
      output += String.fromCharCode(a);
    } else {
      while ( a > 90 ) {
        a = a - 26;
      }
    }
  }
  return output;
}
console.log(rotate_encrypt("SKYLER", 2));

// PROBLEM 3:
function add_whole_steps(note, steps) {
	note = note.charCodeAt();
  result = (note + steps);
  while (result > 71) {
    result -= 7;
  } while (result < 65) {
		result += 7;
	}
	result = String.fromCharCode(result);
return result;
}

console.log("Enter a natural note: ");
console.log("Enter a number 1-7: ");
console.log(add_whole_steps ("A", -15));
