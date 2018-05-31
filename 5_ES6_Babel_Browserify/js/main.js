import $ from "jquery";
import { msg, test1, test2 } from './module/module1';
import { print1, print2} from './module/module2';
import module3 from './module/module3';
import module4 from './module/module4';

$(document).ready(function() {
  $('body').css('background', 'lightblue');
  console.log('main.js', '测试module1 中的 msg = ' + msg);
  test1();
  test2();
  print1();
  print2();
  module3();
  module4.test();
  module4.print();
})


