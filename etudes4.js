//Problem 1:
let my_arr = [4, 8, 15, 16, 23, 42],
  result;

result = my_arr.reduce((total, one_number) => total + one_number);
result /= my_arr.length;

console.log(result);


//Problem 2, Version 1:
let my_arr = [4, 8, 15, 16, 42, 23];
my_arr.reverse();

console.log(my_arr);

//Problem 2, Version 2:[RUNS, BUT NOT PERFECTLY]
let my_arr = [4, 8, 15, 16, 42, 23];
function reverser(my_arr){
  	let reverse_arr = "";
  	for ( let i = my_arr.length - 1; i >= 0 ; i--) {
  		reverse_arr += my_arr[i];
  	}
  	return reverse_arr;
}

console.log(reverser(my_arr))


//Problem 3, Version 1:
let persons = ["Clark-Hamel, Skyler", "Clark-Hamel, Sarah", "Hamel, David", "Hamel, Sean"];

let sorted = persons.sort(function(a, b){
  if (a < 0) a = -a;
  if (b < 0) b = -b;
  if (a < b) return -1;
  return 1;
});

console.log(sorted);

// Problem 3, Version 2: [RUNS, BUT NOT CORRECTLY]
let first_name = ["Skyler", "Sarah", "David", "Sean"],
    last_name = ["Clark-Hamel", "Clark-Hamel", "Hamel", "Hamel"];

let sortedLast = last_name.sort(function(a, b) {
    if (a < 0) a = -a;
    if (b < 0) b = -b;
    if (a < b) return -1;
    return 1;
});

let sortedFirst = first_name.sort(function(a, b) {
    if (a < 0) a = -a;
    if (b < 0) b = -b;
    if (a < b) return -1;
    return 1;
});

console.log(sortedLast, sortedFirst);

//Problem 3, Version 3 [DOES NOT WORK]
let persons =
  first_name = "Skyler", last_name = "Clark-Hamel",
  first_name = "Sarah", last_name = "Clark-Hamel",
  first_name = "David", last_name = "Hamel";

let sortedLast = persons.sort(function(a, b) {
    if (a < 0) a = -a;
    if (b < 0) b = -b;
    if (a < b) return -1;
    return 1;
});

let sortedFirst = first_name.sort(function(a, b) {
    if (a < 0) a = -a;
    if (b < 0) b = -b;
    if (a < b) return -1;
    return 1;
});

console.log(sortedLast, sortedFirst);


//Problem 4, Version 1:
let arr_1 = [1,2],
    arr_2 = [3,4];

console.log(arr_1.concat(arr_2));

//Problem 4, Version 2: (DOES NOT GIVE CORRECT RESULT)
function flatten (arr_1, arr_2) {
  let arr_1 = [1,2],
      arr_2 = [3,4];
  result = arr_1.concat(arr_2);
  return result;
}

console.log(flatten);


// Problem 5, Version 1:
let my_obj = { Name: "Skyler", Location: "Nashville" };

console.log("Name:      " + my_obj.Name);
console.log("Location:  " + my_obj.Location);

// Problem 5, Version 2:
let my_obj = { Name: "Skyler", Location: "Nashville" };

for (let key in my_obj) {
  console.log(key + ":" + " " + my_obj[key]);
}
