$(document).ready(function() {
        
    $('#openBtn').click(function(){
  
    	$('.modal-body').load('rdiolist.html',function(result){
    	  $('#myModal').modal({show:true});
  		});
  
  
	});
        
});

  function DropSelectedTrack(){
    var song = document.getElementById("saveit-key").innerHTML.split('=')[2];

	var marker = L.marker([40.74486725088441, -73.98499131202698], {icon: markArrow}).addTo(map);

	marker.bindPopup("<b>You dropped the song:</b><br />"+ song).openPopup();

  }
