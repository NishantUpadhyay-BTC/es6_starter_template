require("babel-register")({
    presets: [
        "es2015-node5"
    ],
});

import Symbols from './Symbols';
new Symbols()
