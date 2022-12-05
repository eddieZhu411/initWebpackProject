# initWebpackProject
webpack项目配置模板 持续完善...

//初始化项目
npm init 
//安装webpack
npm install webpack -D
npm install webpack-cli -D
or
//全局安装
npm i webpack -D -g


//安装dotenv,用于读取.env文件中的key/value
npm i dotenv -D

//安装cross-env,用于添加自定义变量到process.env对象中
npm i cross-env -D

//html-webpack-plugin 生成.html文件

//编写scripts命令
build:project1 | build:project2 | build:project3
分别添加project属性至process.env中

--->package.json
```
{
  "name": "webpack",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "serve": "npx webpack server --config ./config/webpack.dev.js",
    "build": "npx webpack --config ./config/webpack.config.js",
    "build:project1": "cross-env project=project1 npx webpack --config ./config/webpack.pro.js",
    "build:project2": "cross-env project=project2 npx webpack --config ./config/webpack.pro.js",
    "build:project3": "cross-env project=project3 npx webpack --config ./config/webpack.pro.js",
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "author": "",
  "license": "ISC",
  "devDependencies": {
    "cross-env": "^7.0.3",
    "dotenv": "^16.0.3",
    "html-webpack-plugin": "^5.5.0",
    "webpack": "^5.75.0",
    "webpack-cli": "^5.0.0",
    "webpack-dev-server": "^4.11.1",
    "webpack-merge": "^5.8.0"
  }
}
```
### 新建webpack配置文件

//webpack 不同环境中的相同配置
webpack.common.js
```
//通过添加的project属性加载不同的环境变量
const processEnv = process.env
require('dotenv').config({ path: path.resolve(__dirname + '/../env/.env.' + processEnv.project) })

//再通过DefinePlugin将读取的环境变量添加至process.env对象中
new webpack.DefinePlugin({
  'process.env': JSON.stringify(processEnv)
})
```

//打包开发环境的配置
webpack.dev.js
```
//使用webpack-merge 合并配置属性
webpackMerge(commonConfig, devConfig)
```

//打包生产环境的配置
webpack.pro.js
```
//使用webpack-merge 合并配置属性
webpackMerge(commonConfig, devConfig)
```

main.js
```
//就可以在webpack打包过程中替换process.env.CUSTOM_TEXT所对应的value
console.log(process.env.CUSTOM_TEXT)
```
这样就可以在打包不同项目时，注入不同的环境变量


