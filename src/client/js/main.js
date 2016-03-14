// add scripts

$(document).on('ready', function() {
  console.log('sanity check!');

  var myCenter=new google.maps.LatLng(39.73929, -104.99039);
  console.log("myCenter:",myCenter);
  var secondLocation=new google.maps.LatLng(40.0002, -105.0603);
  var thirdLocation=new google.maps.LatLng(39.7392, -104.9903);

  function initialize() {
    var mapProp = {
          center:myCenter,
          zoom:18,
          mapTypeId:google.maps.MapTypeId.HYBRID
        };
    var map=new google.maps.Map(document.getElementById("googleMap"),mapProp);
    var marker=new google.maps.Marker({
          position:myCenter,
          animation:google.maps.Animation.BOUNCE
        });
    marker.setMap(map);
    var marker2=new google.maps.Marker({
          position:secondLocation,
          animation:google.maps.Animation.BOUNCE
        });
    // marker2.setMap(map);
    var marker3=new google.maps.Marker({
      position: thirdLocation,
      icon: '../images/lombardi-icon.png',
      animation:google.maps.Animation.BOUNCE
      });
    marker3.setMap(map);
    }

  google.maps.event.addDomListener(window, 'load', initialize);

});