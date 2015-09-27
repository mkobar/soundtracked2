$(document).ready(function() {
        
    $('#openBtn').click(function(){
  
    	$('.modal-body').load('rdiolist.html',function(result){
    	  $('#myModal').modal({show:true});
  		});
  
  
	});
        
});

var globalmood = "no mood";


function onLocationFound(e) {
    var song = document.getElementById("saveit-key").innerHTML.split('=')[2];
    var marker = L.marker(e.latlng, {icon: markArrow}).addTo(map);
    if(typeof song === 'undefined'){
    	marker.bindPopup("<b>You didn't drop a song</b>");
	}
	else
	{
		marker.bindPopup("<b>You dropped the song:</b><br />"+ song + "<br /><b>You're in the mood:</b><br />" + globalmood).openPopup();	
	}

	

}

  function DropSelectedTrack(mood){
  	globalmood = mood;
	map.locate({setView: true, maxZoom: 17});
	map.on('locationfound', onLocationFound);

  }
