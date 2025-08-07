const person = {
  greet() {
    console.log("Hello!");
  }
};

const student = {
  study() {
    console.log("Studying...");
  }
};

student.__proto__ = person; // student now inherits from person

student.greet(); // Output: Hello!
