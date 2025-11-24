let students = ["Ali", "Vali", "Guli"];

students.push('Gani');
console.log(students);

students.pop();
console.log(students);

students.unshift('Sanjar');
console.log(students);

students.shift();
console.log(students);


students[1] = 'Sarvar';
console.log(students);


let fIsm = prompt('Ism kiriting:');


let togriIsm = fIsm.slice(0, 1).toUpperCase() + fIsm.slice(1).toLowerCase();


if (students.includes(togriIsm)) {
    alert('Ro‘yxatda BOR');
} else {
    alert('Ro‘yxatda YO‘Q');
}



let raqam = prompt("Biror raqam kiriting:");

if (raqam % 15 === 0) {
    alert("FizzBuzz");
} else if (raqam % 5 === 0) {
    alert("Buzz");
} else if (raqam % 3 === 0) {
    alert("Fizz");
} else {
    alert(raqam);
}
