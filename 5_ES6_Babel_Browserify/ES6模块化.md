
**写在前面：** 如想要打开该项目，需：
  - 先安装当前项目所需的插件：
    - npm install --save-dev babel-cli
    - npm install --save-dev babel-preset-es2015
    - npm install -g browserify
    - npm install jquer --save-dev
  
  - 在当前项目打开命令行，分别运行以下编译命令：
    - npm run build
    - browserify build/js/main.js -o dist/build.js

  - 打开 html 文件夹中的index.html 文件夹，即可在控制台查看效果

***

## 使用 ES6 进行模块化的方式

### 暴露方式
  - 普通暴露：export value
    - 分开暴露：如 module1.js 中的写法
    - 统一暴露：如 module2.js 中的写法

  - 默认暴露：export default
    - 如 module3.js 和 module4.js 中的写法

  > **注意** 默认暴露中没有分开暴露的写法，只能暴露一次

  ### 引入方式
  - 引入普通暴露的模块时：**必须使用解构赋值的方式进行引入
    - import { field1, field2, ...} from 'module 所在路径'
  
  - 引入默认暴露的模块时：可以以对象的形式进行引入
    - import module from 'module所在路径'

  - 引入三方插件时：
    - import 插件 from '插件名'

  ### 使用方式

  - 使用babel插件将ES6代码转化为ES5
    - 安装命令： 
      - npm install --save-dev babel-cli
      - npm install --save-dev babel-preset-es2015

    - 在项目根目录下创建 .babelrc 文件，内容：
      ```json
        {
          "presets": ["es2015"]
        }
      ```
    - 在项目的 package.json 文件中添加：
      ```json
        "scripts": {
          "build": "babel js -d build/js"
        }
      ```
      > **注意：** 上面这个 json 中 build 是需要运行的命令，可以将 ES6 代码转化为 ES5 代码，命令代表的含义是：**babel 需要转换的js文件夹 -d 转化完成后代码所在的js文件夹**
    - 编译命令：npm run build
      
  - 使用 browserify 将ES5代码转化成浏览器可以识别的语言
    - 安装命令：npm install -g browserify
    - 编译命令：browserify build/js/main.js -o dist/build.js
    > **注意：** 上面这个编译命令代表的含义是**browserify 主js文件路径 -o 编译后生成文件所在的路径**

***
> **注意** 每次修改了文件之后，想要看到效果，都需要再次执行开头部分的两个编译命令！！！
