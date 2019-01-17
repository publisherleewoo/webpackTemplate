const path = require('path');



module.exports = {
    entry: {
        jquery: './src/jquery.js'
    },
    output: {
        filename: '[name].js',
        path: __dirname + '/dist'
    }


}