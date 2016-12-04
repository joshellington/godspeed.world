$(function() {
  updateCams();
});

function updateCams() {
  $('#cams').empty();
  $.getJSON('/inc/webcams.php', function(data) {
    console.log(data.result);
    for (var webcam in data.result.webcams) {
      if (data.result.webcams.hasOwnProperty(webcam)) {
        webcam = data.result.webcams[webcam];
        var ele = $('<div class="webcam" style="background-image:url('+webcam.image.current.preview+');"> \
        <h3><a href="https://www.google.com/maps/preview/@'+webcam.location.latitude+','+webcam.location.longitude+',17z"> \
        <marquee>'+webcam.title+'</marquee></a></h3></div>');

        $('#cams').prepend(ele);
      }
    }
  });
}
