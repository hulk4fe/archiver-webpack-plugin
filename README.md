# archiver-webpack-plugin
用于压缩目录的webpack插件

## 安装
````bash
npm install --save-dev archiver-webpack-plugin
````

## 使用
`webpack.config.js`
````
const ArchiverWebpackPlugin = require("archiver-webpack-plugin");

module.exports = {
  plugins: [
    new ArchiverPlugin({
      format: "zip",
      output: "/dist/Project",
      src: "/dist/Project",
      test: ["js/**", "*.html", "css/**"],
      name: "Project"
    })
  ]
}
````

## 参数说明
````javascript
/**
 * compress-webpack-plugin是用于压缩目录的插件
 * @param {Object} options 
 * @param {Boolean} options.output 输出压缩包路径，默认webpack output目录
 * @param {Array} options.format 压缩文件后缀，默认zip
 * @param {string} options.name 输出压缩包名称
 * @param {string} options.src 要压缩的文件路径包括文件名
 * @param {string} options.test 可选择压缩哪些类型文件，默认**
 * @author me-hotel
 */
````
