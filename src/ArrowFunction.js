export default class ArrowFunction{
  constructor(){
    // A new arrow in your quiver
    let allJobs = []
    // ES5
    var selected = allJobs.filter(function (job) {
      return job.isSelected();
    });

    // ES6
    var selected = allJobs.filter(job => job.isSelected());

    // When you just need a simple function with one argument, the new arrow
    // function syntax is simply Identifier => Expression. You get to skip
    // typing function and return, as well as some parentheses, braces, and a
    // semicolon.

    let values = [1,2,3,4,5,6]
    // ES5
    var total = values.reduce(function (a, b) {
      return a + b;
    }, 0);

    // ES6
    var total = values.reduce((a, b) => a + b, 0);
    console.log(total);

    // There is one subtle difference in behavior between ordinary function
    // functions and arrow functions. Arrow functions do not have their own this 
    // value. The value of this inside an arrow function is always inherited from
    // the enclosing scope.
  }
}
