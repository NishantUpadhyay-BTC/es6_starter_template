require("babel-register")({
    presets: [
        "es2015-node5"
    ],
});

import TemplateString from './TemplateString';
new TemplateString()
