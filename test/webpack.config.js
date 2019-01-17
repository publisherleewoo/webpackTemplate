const path = require('path');

module.exports = {
    context: __dirname,
    entry: './src/app.js',
    output: {
        path: path.resolve(__dirname, 'js'),
        publicPath: '/js/',  //webpack-dev-Server 설치시 작성
        filename: 'app.js'
    },
    module: {
        rules: [
            {
                test: /\.css$/,  //확장자가 .css파일중
                exclude: /node_modules/,  // node_modules의 파일은 제외하고
                loader: ['style-loader', 'css-loader'] //아래것을 적용
            }
        ]
    },
    devServer: { //webpack-dev-Server 설치시 작성, package.json에 // npm run watch 작성 후 html폴더 만들기
        contentBase: path.resolve(__dirname, 'html'),
        port: 9000
    }
}