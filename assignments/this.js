/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1.   Window binding
        "this" defaults to the window object.  If you are in strict mode "this" is undefined
* 2. 
        Implicit binding
        The "this" refers to the object it's written in.  When the function is called,
        the object to the left of the dot is the object "this" refers to.
* 3. 
        Explicit binding
        call - immeditately invokes the function and passes in arguments 1 by 1
        apply - immediately invokes the function and passes in an array of arguments
        bind - returns a new function that you invoke later.  You pass in arguments  1 by 1
* 4. 
        New binding
        using the "new" keyword to make a new object that "this" points to
*
* write out a code example of each explanation above
*/

// Principle 1

// code example for Window Binding

function myWindow() {
    console.log(this.my_var)
}
var my_var = "stuff"
myWindow()

// Principle 2

// code example for Implicit Binding
let myObject = {
    name: "something",
    object: function() {
        console.log(this.name)
    }
}
myObject.object()

// Principle 3

// code example for New Binding
function myObjectFunction(something) {
    // this.something is different cause of "this"
    this.something = something
}
let myNewObject = new myObjectFunction("string")
console.log(myNewObject.something)

// Principle 4

// code example for Explicit Binding

let myCallExample = {
    name: "call example"
}

let myBindExample = {
    name: "bind example"
}

let myApplyExample = {
    name: "apply example"

}
function callExample() {

    console.log(this.name)
}

function bindExample() {
    console.log(this.name)
}

function applyExample(a, b) {

    console.log(this.name, a, b)
}
callExample.call(myCallExample)

myBind = bindExample.bind(myBindExample)
myBind()

// apply is a higher level function
applyExample.apply(myApplyExample, ["input 1", "input 2"])


