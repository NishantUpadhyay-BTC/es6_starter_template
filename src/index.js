require("babel-register")({
    presets: [
        "es2015-node5"
    ],
});

// let iterable = [10, 20, 30];
//
// for (const value of iterable) {
//   console.log(value);
// }
// console.log('Congratulations! You All set to go ahead!!!!')

import iterator from './iterators_for_of_loop'
new iterator()
