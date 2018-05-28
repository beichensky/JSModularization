(function (window, $) {
  let msg = 'test';
  function test () {
    console.log(msg);
  }
  function changeBg() {
    $('body').css('background', 'red');
  }
  window.module = {test, changeBg};
})(window, jQuery);