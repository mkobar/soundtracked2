var blueNote = L.icon({
    iconUrl: 'images/bluenote.png',
    shadowUrl: 'images/shadownote.png',

    //iconSize:     [38, 95], // size of the icon
    //shadowSize:   [50, 64], // size of the shadow
    iconAnchor:   [12, 60], // point of the icon which will correspond to marker's location
    shadowAnchor: [4, 38],  // the same for the shadow
    popupAnchor:  [-3, -76] // point from which the popup should open relative to the iconAnchor
});
var yellowNote = L.icon({
    iconUrl: 'images/yellownote.png',
    shadowUrl: 'images/shadownote.png',

    //iconSize:     [38, 95], // size of the icon
    //shadowSize:   [50, 64], // size of the shadow
    iconAnchor:   [12, 60], // point of the icon which will correspond to marker's location
    shadowAnchor: [4, 38],  // the same for the shadow
    popupAnchor:  [-3, -76] // point from which the popup should open relative to the iconAnchor
});

function AddMarkersForSongsInTheMood(songs){
	var markers = [];
	for (var i in songs){
		//alert("lat: " + locations[i].lat +", lon: "+locations[i].lon);
		var marker = L.marker([songs[i].location.lat, songs[i].location.lon], {icon: blueNote}).addTo(map);
		markers.push(marker);
	}
	return markers;
}
function ShowWindowForNearestSong(song,marker){
	marker.bindPopup("<b>Song</b><br />"+ song.song).openPopup();
	marker.setIcon(yellowNote);

}
function GetSongsFromJson(val, chosenMood){
	var locations = [];
	for (var i in val ){
		if (val[i].mood == chosenMood){

			locations.push(val[i]);
		} 
	}
	return locations;
}

function GetJsonFile(chosenMood){
	$.getJSON( "mydata.json", function( data ) {
		var items = [];
		$.each( data, function( key, val ) {
			var songs = GetSongsFromJson(val, chosenMood);


			var markers = AddMarkersForSongsInTheMood(songs);
			
			if (markers.length > 0){
				ShowWindowForNearestSong(songs[0],markers[0]);
			}
			

			});
	});
}

window.onload = function() {

    var chosenMood = "mood";
	chosenMood = window.location.search.replace("?", "").split("=")[1];


    GetJsonFile(chosenMood)


		

    return false;
}