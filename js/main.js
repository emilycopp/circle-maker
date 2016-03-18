var $body = $('body');

$('html').on('keydown', function () {
  var $ball = $('<div>');
  var newLeft = Math.random() * 1200;
  var newTop = Math.random() * 600;

  $body.append($ball);
  $ball.css('left', newLeft);
  $ball.css('top', newTop);
  $ball.addClass('ball');
});
