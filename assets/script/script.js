$(document).ready(function() {
	$('#fullpage').fullpage({
    sectionsColor : ['#CCD1D1', '#fff', '#000'],
    menu: '#menu',
    anchors: ['Home', 'Developing', 'Design'],
    loopBottom: true,
    navigation: true,
    navigationTooltips: ['Home', 'Developing', 'Design']
  });

  /*$('#facebook-logo').click({
    $(this).attr('href','http://facebook.com/soniaupp');
  });*/

});
