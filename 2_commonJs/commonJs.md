## commonJs使用的两种方式
- 服务端，使用 node 命令进行加载
- 客户端，在浏览器中展示，需要借助于 browerify 插件

### commonJs使用的方式
- 暴露方式：在需要暴露的js文件中使用以下命令暴漏
    1.  module.exports = value
    2.  exports.field = value

- 引入方式：在主 js 文件中将暴露的 js 文件引入
  1.  require('js 文件路径')
  2.  require('js 插件名')

### node 服务端的实现步骤
  1.  创建需要的 js 文件，例如需要三个 js 文件，module1.js、module2.js、module3.js
  1.  创建一个主的 js 文件，例如 app.js
  1.  将第一步中的 js 文件引入到 app.js 中
  1.  在命令行中，在当前目录下，执行 node app.js 命令，就能看到 module1.js、module2.js、module3.js 中代码的执行结果

### brower 客户端展示的方式
  1.  代码的书写和实现方式同 node 服务端的 1、2、3步骤，只不过在这里需要借助插件才能在浏览器中识别
  1.  下载 browerify 插件，命令：npm install -g browserify
  3.  将 app.js 文件进行编译，转化成浏览器的文件，命令：browerify app.js -o dist/build.js
  4.  创建 index.html 文件，引入编译生成的 build.js 文件，即可在浏览器中查看运行效果。
  
  > **注意：** 在第3步中使用 browerify app.js -o dist/build.js 命令生成编译文件时，**不需要事先建立好dist 文件**。因为 browerify 会自动创建文件夹，只会自动创建文件。