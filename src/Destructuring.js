export default class Destructuring{
  constructor(){

    let someArray = ['ding', 'dang', 'dong']
    // Without Destructuring the assignment, you might access the first 3 elements of the array like this
    var first = someArray[0];
    var second = someArray[1];
    var third = someArray[2];

    console.log(`Hey I am first ${first}`)
    console.log(`Hey I am second ${second}`)
    console.log(`Hey I am third ${third}`)

    console.log("***** After destructuring *****")

    var [first, second, third] = someArray;

    console.log(`Hey I am first ${first}`)
    console.log(`Hey I am second ${second}`)
    console.log(`Hey I am third ${third}`)

    // The general form of the syntax is:
    // [ variable1, variable2, ..., variableN ] = array;

    // In fact, variable is a misnomer since you can nest patterns as deep as you would like:

    var [foo, [[bar], baz]] = [1, [[2], 3]];
    console.log(foo);
    console.log(bar);
    console.log(baz);

    // Furthermore, you can skip over items in the array being destructured:
    var [,,third] = ["foo", "bar", "baz"];
    console.log(third);

    // And you can capture all trailing items in an array with a “rest” pattern:
    var [head, ...tail] = [1, 2, 3, 4];
    console.log(tail);

    // When you access items in the array that are out of bounds or don’t exist,
    // you get the same result you would by indexing: undefined.

    console.log([][0]);
    // undefined

    var [missing] = [];
    console.log(missing);

    // Destructuring objects

    // Destructuring on objects lets you bind variables to different properties of an object.

    var robotA = { name: "Bender" };
    var robotB = { name: "Flexo" };

    var { name: nameA } = robotA;
    var { name: nameB } = robotB;

    console.log(nameA);
    // "Bender"
    console.log(nameB);
    // "Flexo"

    // When you try to use destructuring on null or undefined, you get a type error:

    var {wtf} = NaN;
    console.log(wtf);


    // When you iterate over Maps (an ES6 addition to the standard library),
    // you get a series of [key, value] pairs. We can destructure this pair to
    // get easy access to both the key and the value:

    var map = new Map();
    var test1 = '';
    var test2 = '';
    map.set(test1, "the global");
    map.set(test2, "the document");

    for (var [key, value] of map) {
      console.log(key + " is " + value);
    }

    // you can use an object as the container and name the returned values:

    function returnMultipleValues() {
      return {
        foo: 1,
        bar: 2
      };
    }
    var temp = returnMultipleValues();
    var foo = temp.foo;
    var bar = temp.bar;
    console.log(`${foo} ${bar}`)
  }
}
