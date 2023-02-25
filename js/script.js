$(document).ready(function(){
	$('.header__burger').click(function(event){
		$('.header__burger,.header__menu').toggleClass('active');
		$('body').toggleClass('lock');
	});

});
var form = document.querySelector('form');
form.onsubmit = function ()
  {
  var text = form.text;
  text.value = '<p>' + text.value + '</p>';
  text.value = text.value.replace(/\n/g, '</p><p>');
  };