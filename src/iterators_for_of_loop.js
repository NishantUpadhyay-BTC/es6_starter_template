export default class iterator {
  constructor(){

    // The old way to iterate array
    let myArray = [1,2,3]
    // for (var index = 0; index < myArray.length; index++) {
    //   console.log(myArray[index]);
    // }

    // ES5 way to iterate array
    // This is a little shorter, but there is one minor drawback:
    // you can’t break out of this loop using a break statement or return
    // from the enclosing function using a return statement.

    // myArray.forEach(function (value) {
    //   console.log(value);
    //   if(value === 2){
    //     console.log("Ahh I am in ");
    //     return; // This line will not break the loop
    //   }
    // });

    // Let's try above with for-in loop
    // for (var index in myArray) {
    //   console.log(myArray[index]);
    //   if(myArray[index] == 2){return;}
    // }

    // The drawback of above looping is as below:
    //  - The values assigned to index in this code are the strings "0", "1", "2" and so on, not actual numbers.
    //    Since you probably don’t want string arithmetic
    //  - In some circumstances, this code can loop over the array elements in an arbitrary order.

    // In short, for–in was designed to work on plain old Objects with string keys. For Arrays, it’s not so great.

    // The mighty for-of loop
    for (var value of myArray) {
      console.log(value);
    }

    // - this is the most concise, direct syntax yet for looping through array elements
    // - it avoids all the pitfalls of for–in
    // - unlike forEach(), it works with break, continue, and return

    // for-of is not just for arrays but it also works on most array-like objects, string, map, set
    // map and set is new to ES6

    let words = ['ding', 'dong', 'dang'];
    var uniqueWords = new Set(words);
    console.log(uniqueWords) //see how set looks like. We will go in more detail in next post
    for (var word of uniqueWords) {
      console.log(word);
    }
  }
}
