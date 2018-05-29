(function () {
  requirejs.config({
    baseUrl: 'js',  // 基本路径，下面 paths 中引入模块的路径都是在 baseUrl 的基础上进行的。
    paths: {
      // 引入模块时需要注意，无论是自定义模块还是三方模块，后面的 .js 都要省略掉，
        // 因为 requirejs 会自动帮我们加上后缀，多加会重复，报错。

      // 引入自定义模块路径
      data: './module/data',
      service: './module/service',
      // 引入三方模块路径
      jquery: './lib/jquery',       // 引入jquery 时需要注意,jquery 必须全部都是小写，否则会提示 $ is not a function
      angular: './lib/angular'      // 引入angular 时需要注意，必须要在下面加上 shim 那一段代码，否则找不到 angular 对象
    },
    shim: {
      angular: {
        exports: 'angular'
      }
    }
  });
  
  requirejs(['service', 'jquery', 'angular'], function (service, $, angular) {
    console.log('目前是在主模块 main.js 中');
    service.print();
    $('body').css('background', 'lightblue');
    console.log(angular);
  });
})();