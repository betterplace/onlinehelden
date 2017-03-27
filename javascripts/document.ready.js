$(document).ready(function() {

  $("[data-behavior~=toggle-element]").on("click", function(event) {
    event.preventDefault();

    var target = $(this).data("target");
    var position_y = $(this).offset().top;

    $(target).toggle();
    $('body, html').animate({ scrollTop: position_y}, 500);
  })

});

var disableStr = 'ga-disable-UA-1584203-21';

if (document.cookie.indexOf(disableStr + '=true') > -1) {
  window[disableStr] = true;
}

function gaOptout() {
  document.cookie = disableStr + '=true; expires=Thu, 31 Dec 2099 23:59:59 UTC; path=/';
  window[disableStr] = true;
}
