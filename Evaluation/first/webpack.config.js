const { dirname } = require("path");
const path = require("path");


module.exports = {
    entry: "./src/index.js",
    output: {
        path: path.resolve(".","build"), // file
        filename: "bundle.js",
    },
    mode: "development",
    module: {
        rules: [
            { test: /\.css$/, use: ["style-loader","css-loader"] },
            {test: /\.js$/, use:["babel-loader"],exclude: /node_modules/}
        ]
    }

};