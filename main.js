function myMap() {
    var map = new google.maps.Map(document.getElementById("map"), {
      center: {lat: 29.624160, lng: 78.236917}, // Center on Akhil 
      zoom: 18,
      map_id: '0x3bc2c12766e8b9b9:0xb5ecacebb8db3b78'
    });

    var akhilMarker = {
      url: "https://cdn1.iconfinder.com/data/icons/3d-isometric-color/256/map-pin-iso-color.png",
      scaledSize: new google.maps.Size(50, 50),
      origin: new google.maps.Point(0, 0),
      anchor: new google.maps.Point(0, 0)
    };


    // Marker for Akhil
    new google.maps.Marker({
      position: {lat: 29.624160, lng: 78.236917},
      map: map,
      icon: akhilMarker,
      title: "Akhil"
    });

  }

  window.initMap = myMap;