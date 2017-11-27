$(document).ready(function() {

  $(window).click(function(e){
    console.log(e.pageX+", "+$(window).width()+"   "+e.pageY+" "+$(window).height());
  });
	$('#fullpage').fullpage({
    sectionsColor: ['#ccd1d1', '#fff', '#000'],
    menu: '#menu',
    anchors: ['Home', 'Developing', 'Design'],
    loopBottom: true,
    navigation: true,
    navigationTooltips: ['Home', 'Developing', 'Design']
  });

  $('.logo').hover(function() { //jQuery Function Number 1
    $(this).css('opacity', '0.6'); //jQuery Function Number 2
  }, function() {
    $(this).css('opacity', '1');
  });

  $("#berkeley").hover(function() {
    $("#1p").css('opacity', '1');
  }, function() {
    $("#1p").css('opacity', '0');
  });

  $("#adobe").hover(function() {
    $("#2p").css('opacity', '1');
  }, function() {
    $("#2p").css('opacity', '0');
  });

  $("#whatsapp").hover(function() {
    $("#3p").css('opacity', '1');
  }, function() {
    $("#3p").css('opacity', '0');
  });

  $("#pialacode").hover(function() {
    $("#palcp").css('opacity', '1');
  }, function() {
    $("#palcp").css('opacity', '0');
  });

});
