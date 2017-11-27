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

  $(".designheader").hover(function() {
    $(".designheader").css('opacity', '0.5');
  }, function() {
    $(".designheader").css('opacity', '1');
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

  $("#carousel-next").click(function () { //jQuery Function Number 3
    let left = parseInt($('#carousel').css('margin-left').replace("px", ""));
    $('#carousel-prev').show(); //jQuery Function Number 4
    if (left == -2500) {
      $('#carousel-next').hide();
    } else {
      let newLeft = left - 1250;
      $("#carousel").css('margin-left', String(newLeft) + "px");
    }
  });

  $("#carousel-prev").click(function () {
    let left = parseInt($('#carousel').css('margin-left').replace("px", ""));
    $('#carousel-next').show();
    if (left == 0) {
      $('#carousel-prev').hide(); //jQuery Function Number 5
    } else {
      let newLeft = left + 1250;
      $("#carousel").css('margin-left', String(newLeft) + "px");
    }
  });

  $('#school').click(function() { //jQuery Function Number 6
    $(this).text('UC BROCCOLI 2020');
  });

});
