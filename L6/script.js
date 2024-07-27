/* Exercise 1:
Define a filter function on the String object. The function accepts an array of strings that
specifies a list of banned words. The function returns the string after removing all the
banned words.
Example:
console.log("This house is not nice!".filter('not'));
Output: "This house is nice!"
*/
String.prototype.filter = function(bannedWords) {
    let words = this.split(' ');
    let filteredWords = words.filter(word => !bannedWords.includes(word));
    return filteredWords.join(' ');
};
/* Exercise 2:
Write a BubbleSort algorithm on the Array object. Bubble sort is a simple sorting algorithm
that works by repeatedly stepping through the list to be sorted,
    Example:[6,4,0, 3,-2,1].bubbleSort();
Output : [-2, 0, 1, 3, 4, 6]
 */

Array.prototype.bubbleSort = function(){
    let l = this.length;
    let swapFlag;
    do{
        swapFlag = false;
        for (let i = 0; i < l-1; i++){
            if(this[i] > this[i+1]){
                [this[i],this[i+1]] = [this[i+1], this[i]];
                swapFlag = true;
            }
        }
        l--;
    } while(swapFlag);
    return this;
}

/*
Exercise 3:
Create an object called Teacher derived from a Person function constructor, and implement
a method called teach that receives a string called subject, and prints out: [teacher's name]
is now teaching [subject]. Create a Teacher object and call its teach method.
Also do the same thing using Object.create. When using Object.create you will need a
factory function instead of a function constructor in order to pass parameters such as
‘name’ to be set in the prototype.
*/
// Define the Person constructor function
function Person(name) {
    this.name = name;
}

// Define the Teacher constructor function, inheriting from Person
function Teacher(name) {
    Person.call(this, name); // Call Person constructor with Teacher's context
}

// Inherit methods and properties from Person
Teacher.prototype = Object.create(Person.prototype);
Teacher.prototype.constructor = Teacher;

// Add teach method to Teacher prototype
Teacher.prototype.teach = function(subject) {
    return this.name+" is now teaching "+subject;
};

/*
Exercise 4:
Write code that will create person, student, and professor objects.
• Person objects have
 - name and age fields
 - a greeting method that prints out: “Greetings, my name is [name] and I am [age] years old.”
 - a salute method that prints out: “Good morning!, and in case I dont see you, good afternoon,
   good evening and good night!”

• Student objects inherit name, age, and salute from person. They also have a field
‘major’ and have their own greeting method. Their greeting is “Hey, my name is
[name] and I am studying [major]. The greeting should be output to the console.

• Professor objects inherit name, age, and salute from person. They also have a field
‘department’ and have their own greeting method. Their salutation is “Good day,
my name is [name] and I am in the [department] department.” Output it to the
console.

• Create a professor object and a student object. Call both the greeting and salutation
methods on each.

• Do this exercise once using the object prototype approach for inheritance and then
using the function constructor approach.
 */
// Aproach 1: Prototype
// Person prototype
function Person(name, age) {
    this.name = name;
    this.age = age;
}

Person.prototype.greeting = function() {
    console.log(`Greetings, my name is ${this.name} and I am ${this.age} years old.`);
};

Person.prototype.salute = function() {
    console.log("Good morning!, and in case I don't see you, good afternoon, good evening and good night!");
};

// Student prototype
function Student(name, age, major) {
    Person.call(this, name, age);
    this.major = major;
}

Student.prototype = Object.create(Person.prototype);
Student.prototype.constructor = Student;

Student.prototype.greeting = function() {
    console.log(`Hey, my name is ${this.name} and I am studying ${this.major}.`);
};

// Professor prototype
function Professor(name, age, department) {
    Person.call(this, name, age);
    this.department = department;
}

Professor.prototype = Object.create(Person.prototype);
Professor.prototype.constructor = Professor;

Professor.prototype.greeting = function() {
    console.log(`Good day, my name is ${this.name} and I am in the ${this.department} department.`);
};
// Approach 2: Function Constructor
// Person constructor function
function Person2(name, age) {
    this.name = name;
    this.age = age;
}

Person2.prototype.greeting = function() {
    console.log(`Greetings, my name is ${this.name} and I am ${this.age} years old.`);
};

Person2.prototype.salute = function() {
    console.log("Good morning!, and in case I don't see you, good afternoon, good evening and good night!");
};

// Student constructor function
function Student2(name, age, major) {
    Person2.call(this, name, age);
    this.major = major;
}

// Set up inheritance from Person
Student2.prototype = Object.create(Person2.prototype);
Student2.prototype.constructor = Student2;

Student2.prototype.greeting = function() {
    console.log(`Hey, my name is ${this.name} and I am studying ${this.major}.`);
};

// Professor constructor function
function Professor2(name, age, department) {
    Person2.call(this, name, age);
    this.department = department;
}

// Set up inheritance from Person
Professor2.prototype = Object.create(Person2.prototype);
Professor2.prototype.constructor = Professor2;

Professor2.prototype.greeting = function() {
    console.log(`Good day, my name is ${this.name} and I am in the ${this.department} department.`);
};


function main() {
    // Example usage:
    console.log("Exercise 1: \n"+ "Input String: This house is not nice! \n"+ "Filtering: not");
    console.log("This house is not nice!".filter(['not']));

    console.log("Exercise 2: \n"+ "Input Array: [6,4,0, 3,-2,1]");
    const arr = [6,4,0, 3,-2,1];
    console.log(arr.bubbleSort());

    // Create a Teacher object
    const mrSmith = new Teacher('Mr. Smith');
    console.log(mrSmith.teach('Mathematics'));

    // Approach 1
    // Create instances and test
    const student = new Student('Alice', 20, 'Computer Science');
    const professor = new Professor('Dr. Smith', 45, 'Mathematics');

    student.greeting();
    student.salute();

    professor.greeting();
    professor.salute();

    // Approach 2: Create instances and test
    const student2 = new Student2('Alice', 20, 'Computer Science');
    const professor2 = new Professor2('Dr. Smith', 45, 'Mathematics');

    student2.greeting();
    student2.salute();

    professor2.greeting();
    professor2.salute();
//

}

