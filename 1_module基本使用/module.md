## 基础模块化的三种方式：
  - 全局 function 模式
  - namespace 命名空间模式
  - IIFE 匿名函数立即调用的模式


### 全局 function 模式的缺点：
  - 会造成名冲突问题
  - 会造成数据污染问题

### namespace 模式
  - 优点
    1、将所有的属性以及函数都储存在对象中，解决了命名冲突问题
  - 缺点
    - 还是会造成数据污染问题

### IIIF模式
  - 优点
    - 将需要暴露的变量或者函数都放到对象中暴露出去，没有暴露的变量和函数不会被访问到，解决了数据污染问题
  - 缺点
    - 依赖注入时，需要按照以来的顺序进行先后引入，否则会出现问题，在引入大量js依赖时，就容易产生问题