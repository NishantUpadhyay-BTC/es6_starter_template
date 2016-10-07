require("babel-register")({
    presets: [
        "es2015-node5"
    ],
});

import ParameterDefault from './ParameterDefault';
let t = new ParameterDefault()

// similar to splat operator in Ruby
console.log(t.containsAll("banana", "b", "nan"))
console.log(t.containsAll("banana", "c", "nan"))

console.log(t.animalSentence())
console.log(t.animalSentenceFancy('bears'))
// Passing undefined is considered to be equivalent to not passing anything at
// all. Thus, animalSentence(undefined, "unicorns") returns "Lions and tigers and
// unicorns! Oh my!".

//A parameter without a default implicitly defaults to undefined, so

// function myFunc(a=42, b) {...}

//is allowed and equivalent to

// function myFunc(a=42, b=undefined) {...}
