```
npm init 
npm install webpack webpack-cli path --save-dev
```

/src/app.js 만들고 안에 코드넣기
```
let a = 0;
console.log(a)
```

webpack.config.js 만들고
```
var path = require('path');

module.exports = {
    context: __dirname,
    entry: './src/app.js',
    output: {
        path: path.resolve(__dirname, 'js'),
        filename: 'app.js',
    },
    module: {

    }
}
```

아래와같이하면 번들파일 나옴
```
 .\node_modules\.bin\webpack --mode=development
```

```
npm install @babel/core @babel/polyfill @babel/preset-env babel-loader --save-dev
```

webpack.config.js 폴더로가서 아래로 변경 
```
var path = require('path');

module.exports = {
    context: __dirname,
    entry: './src/app.js',
    output: {
        path: path.resolve(__dirname, 'js'),
        filename: 'app.js',
    },
    module: {
        rules:[
            {
                test:/\.js$/, //확장자가 .js
                exclude:/node_modules/, //노드모듈스 디렉토리 제외,
                loader:'babel-loader' //바벨로더 적용

            },
        ]
    }
}

```


.babelrc 파일생성후

```
{
    "presets":["@babel/preset-env"]
}

```


/src/app.js 아래로 변경
```
import "@babel/polyfill";

let a = 0;
console.log(a)
```

다시 아래 실행해서 번들링
```
 .\node_modules\.bin\webpack --mode=development
```