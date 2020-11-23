            var lati=14.883333;
            var longi=5.26;
            var midpoint={lat:lati, lng:longi};
            var x = document.getElementById("demo");
            var markersArray=[];
            
            
            
            // Konvertere adresse til LatLng
            function convert(address){
                geocoder.geocode({ address: address }, (results, status) => {
                if (status === "OK") {
                    alert(results[0].geometry.location);
                } else {
                  alert("Geocode was not successful for the following reason: " + status);
                }
              });
            }
            
            function convertandDraw(address){
                geocoder.geocode({ address: address }, (results, status) => {
                if (status === "OK") {
                    drawCirclesByAddress(results[0].geometry.location);
                } else {
                  alert("Geocode was not successful for the following reason: " + status);
                }
              });
            }
            
            //Sette sirkler rundt parkeringsplasser i nærheten av nåværende posisjon
            function drawCircles(){
                for (const houseInList of parkingHouseList) {
                    let current = houseInList;
                    if(current[2] < (longi+0.2) && current[2] > (longi-0.2) && 
                      current[3] < (lati+0.2) && current[3] > (lati-0.2)){
                        center={lat:current[3], lng:current[2]};
                        console.log(typeof(longi))
                        console.log(center);
                       drawCirclesByAddress(center);
                    }
                    else if(longi==5.26 && lati==14.883333){
                        alert("Trykk Hent lokasjon først, for å oppdatere nåværende posisjon");
                    }
                }
            }

            function drawCirclesByAddress(latLng){
                // Add the circle for this place to the map.
                const parkCircle = new google.maps.Circle({
                  strokeColor: "#FF0000",
                  strokeOpacity: 0.8,
                  strokeWeight: 2,
                  fillColor: "#FF0000",
                  fillOpacity: 0.35,
                  map,
                  center: latLng,
                  radius: 20,
                });
            }
            
            
            
            
            // Initialize and add the map
            function initMap() {
              // The location of Uluru
              var yourPos = {lat: lati, lng: longi};
              // The map, centered at Uluru
              map = new google.maps.Map(
                  document.getElementById('map'), {zoom: 4, center: yourPos});
              // The marker, positioned at Uluru
              marker = new google.maps.Marker({position: yourPos, map: map});
              markersArray.push(marker);
              geocoder = new google.maps.Geocoder();
              }
            
            function geocodeAddress(address) {
              geocoder.geocode({ address: address }, (results, status) => {
                if (status === "OK") {
                  clearOverlays();
                  map.setCenter(results[0].geometry.location);
                  marker = new google.maps.Marker({
                    map: map,
                    position: results[0].geometry.location,
                  });
                  markersArray.push(marker);
                  map.setZoom(17);
                } else {
                  alert("Geocode was not successful for the following reason: " + status);
                }
              });
            }
            
            function getLocation() {
              if (navigator.geolocation) {
                navigator.geolocation.getCurrentPosition(showPosition, showError);
              } else { 
                x.innerHTML = "Geolocation is not supported by this browser.";
              }
            }
            
            function showPosition(position) {
                lati= position.coords.latitude;
                longi=position.coords.longitude;
                x.innerHTML = "Latitude: " + lati +
                "<br>Longitude: " + longi;
            }

            function showError(error) {
              switch(error.code) {
                case error.PERMISSION_DENIED:
                  x.innerHTML = "User denied the request for Geolocation."
                  break;
                case error.POSITION_UNAVAILABLE:
                  x.innerHTML = "Location information is unavailable."
                  break;
                case error.TIMEOUT:
                  x.innerHTML = "The request to get user location timed out."
                  break;
                case error.UNKNOWN_ERROR:
                  x.innerHTML = "An unknown error occurred."
                  break;
              }
            }
            
            //Moves map and zooms in on users location
            function moveMap() {
                if(lati==14.883333 && longi==5.26){
                        alert("Trykk 'Try it' først, for å hente posisjon");
                    }
                   
                else{
                        clearOverlays();
                        midpoint={lat:lati, lng:longi};
                        map.setCenter(midpoint);
                        map.panTo(midpoint);
                        map.setZoom(15);
                        marker = new google.maps.Marker({position: midpoint, map: map});
                        markersArray.push(marker);
                    }

            }
            
            //To remove previous markers
            function clearOverlays() {
              for (var i = 0; i < markersArray.length; i++ ) {
                markersArray[i].setMap(null);
              }
              markersArray.length = 0;
            }
            /*
            Get longitude and latitude
            https://www.w3schools.com/html/html5_geolocation.asp
            */

            //Gets array from array.js, converts address to lattitude and longitude, then draws circles around these addresses
            function getAddressAndMark(){
                for (const houseInList of parkingHouseList) {
                    let current = houseInList;
                    convertandDraw(current[0]);
                    console.log(current[0]);
                }
            }