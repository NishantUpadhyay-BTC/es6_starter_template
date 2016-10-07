export default class Symbols{
  constructor(){
    //  The Seventh Type
    // Since JavaScript was first standardized in 1997, there have been six
    // types. Until ES6, every value in a JS program fell into one of these
    // categories.

    // 1. Undefined
    // 2. Null
    // 3. Boolean
    // 4. Number
    // 5. String
    // 6. Object

    // ES6 symbols are values, but they’re not strings. They’re not objects.
    // They’re something new: a seventh type of value.
    let element = {}
    var isMoving = Symbol("isMoving");
    element[isMoving] = true;

    if (element[isMoving]) {
      console.log("element is moving man...")
    }
    delete element[isMoving];
    if (element[isMoving]) {
      console.log("element is moving man...")
    }else{
      console.log("element is stopped moving man...")
    }

    // The string "isMoving" in Symbol("isMoving") is called a description.
    // It’s helpful for debugging. It’s shown when you write the symbol to
    // console.log(), when you convert it to a string using .toString(), and
    // possibly in error messages. That’s all.

    // element[isMoving] is called a symbol-keyed property. It’s simply a
    // property whose name is a symbol rather than a string. Apart from that,
    // it is in every way a normal property.

    // Like array elements, symbol-keyed properties can’t be accessed using dot
    // syntax, as in obj.name. They must be accessed using square brackets.

    // It’s trivial to access a symbol-keyed property if you’ve already got
    // the symbol. The above example shows how to get and set element[isMoving],
    // and we could also ask if (isMoving in element) or even
    // delete element[isMoving] if we needed to.


    // Three sets of symbols

    // Call Symbol(). As we already discussed, this returns a new unique symbol
    // each time it’s called.

    // Call Symbol.for(string). This accesses a set of existing symbols called
    // the symbol registry. Unlike the unique symbols defined by Symbol(),
    // symbols in the symbol registry are shared. If you call Symbol.for("cat")
    // thirty times, it will return the same symbol each time. The registry is
    // useful when multiple web pages, or multiple modules within the same web
    // page, need to share a symbol.

    // Use symbols like Symbol.iterator, defined by the standard. A few symbols
    // are defined by the standard itself. Each one has its own special purpose.
  }
}
