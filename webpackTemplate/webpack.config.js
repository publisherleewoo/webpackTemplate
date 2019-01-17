var path = require('path');

module.exports = {
    context: __dirname,
    entry: './src/app.js',
    output: {
        path: path.resolve(__dirname, 'js'),
        filename: 'app.js',
    },
    module: {
        rules: [
            {
                test: /\.js$/, //확장자가 .js
                exclude: /node_modules/, //노드모듈스 디렉토리 제외,
                loader: 'babel-loader' //바벨로더 적용
            },
        ]
    }
}