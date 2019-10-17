/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
   1. Window Binding
 * When in the global scope, the value of “this” will be the 
 * window / console Object.This is to say that if none of the other
 * rules applies the THIS keyword defaults to the window object. Also 
 * when "strict mode" is used it will be undefined.
 * 
    2. Implicit Binding
   Whenever a function is called by a preceding dot, the object before 
   that dot is this.
 * It is most common principle.
 * Implict is automatic. It requires no settings.
 * It only applies to objects with methods.
 * When we log out the THIS keyword we get a different object each 
 * time it’s run.
 * 
    3. New Binding
 * Whenever a constructor function is used, THIS refers to the
 * specific instance of the object that is created and returned by the 
 * constructor function.
 * A constructor function is a function that returns an object. It’s an 
 * object creator.
 * When we call it we have to use the NEW keyword.
 *
* 4. Explicit Binding
 * Whenever JS APPLY or CALL method is used THIS is fully and clearly 
 * defined. It is used to invoke a function with a specific value for THIS.
 * It tells a function what the ThIS keyword should be.
 It uses Call Apply and Bind
 CALL will immediately invoke the function whereas dot call passes in the 
 arguments one by one.
 APPLY will do the same as Call, except for dot Apply it passes the argument 
 in an array.
 BIND will pass in arguments one by one but it does not immediately invoke 
 the function but it returns a brand new function that can be used later.
 All of the above allows developers to explicitly state what the this 
 keyword is in any function.
*
* write out a code example of each explanation above
*/

// Principle 1

//code example for Window Binding
function car() {
   console.log(this);
}
car();


// Principle 2

// code example for Implicit Binding

const myObj = {
   greeting: 'Hello',
   sayHello: function (name) {
      console.log(`${this.greeting} my name is ${name}`);
   }
};
myObj.sayHello('Dan');


// Principle 3

// code example for New Binding

function CordialPerson(greeter) {
   this.greeting = 'Hello ';
   this.greeter = greeter;
   this.speak = function () {
      console.log(`${this.greeting} ${this.greeter}!`);

   };
}

const jerry = new CordialPerson('Newman');
const newman = new CordialPerson('Jerry');
const rosanna = new CordialPerson('rosanna');

jerry.speak();
newman.speak();
rosanna.speak();

// Principle 4

// code example for Explicit Binding

//.call
function vehCol() {
   console.log(this.color);
}

let johnCar = {
   name: 'Rav 4',
   color: 'Red'
}

let peterCar = {
   name: 'A4',
   color: 'Blue'
}

let jamesCar = {
   name: 'ES350',
   color: 'Pearl White'
}
vehCol.call(johnCar); // function is invoke here
vehCol.call(peterCar);
vehCol.call(jamesCar);

//Bind
function vehMake() {
   console.log(this.make);
}


let janeCar = {
   name: 'ES350',
   color: 'Pearl White',
   make: 'Lexus'
}

paulCarMake = vehMake.bind(janeCar);

paulCarMake(); // bind is not invoke immediately like .call 
// it only  runs when it is call.

//The 'NEW' keyword creates a new object and 'THIS' points to that object.

function mazda(pharse) {
   this.slogan = pharse;
}

let dainaCar = new mazda('Zoom Zoom Zoom');
console.log(`${dainaCar.slogan} is Mazda company catch pharse!`);