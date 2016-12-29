$(".zp-closed__video-link a").click(function() {
  $(".zp-closed__hello").fadeOut();
  $(".zp-closed__pleasure").fadeOut();
  $(".zp-closed__content").fadeOut();
  $(".zp-closed__sale").fadeOut();
  $(".zp-closed__video-link").fadeOut();
  $(".zp-closed__video").show();

  setTimeout(videoButton, 1000);

  function videoButton() {
    $(".zp-closed__video-button").css("display", "block");
  }
})

$(".zp-closed__video-button").click(function() {
  $(".zp-closed__hello").fadeIn();
  $(".zp-closed__pleasure").fadeIn();
  $(".zp-closed__content").fadeIn();
  $(".zp-closed__sale").fadeIn();
  $(".zp-closed__video-link").fadeIn();
  $(".zp-closed__video").hide();
});

