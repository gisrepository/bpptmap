// Get the modal
var modal = document.getElementById("responsive-sidebar");

// Get the button that opens the modal
var btn = document.getElementById("button-legend-layout");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[1];

// When the user clicks the button, open the modal
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

var map = L.map('map').setView([-33.87, 150.77], 10);
var layer = L.esri.basemapLayer('Topographic').addTo(map);
var layerLabels;

function setBasemap (basemap) {
if (layer) {
map.removeLayer(layer);
}

layer = L.esri.basemapLayer(basemap);

map.addLayer(layer);

if (layerLabels) {
map.removeLayer(layerLabels);
}

if (
basemap === 'ShadedRelief' ||
basemap === 'Oceans' ||
basemap === 'Gray' ||
basemap === 'DarkGray' ||
basemap === 'Terrain'
) {
layerLabels = L.esri.basemapLayer(basemap + 'Labels');
map.addLayer(layerLabels);
} else if (basemap.includes('Imagery')) {
layerLabels = L.esri.basemapLayer('ImageryLabels');
map.addLayer(layerLabels);
}
}

document
.querySelector('#basemaps')
.addEventListener('change', function (e) {
var basemap = e.target.value;
setBasemap(basemap);
});

var stylejalan = {
"color": "#ff3300",
"weight": 0.5,
"opacity": 0.6
};

var lanskap = {
"color": "#9999ff",
"weight": 2,
"opacity": 0.6
};


var myStyle = {
"color": "#000000",
"weight": 1.5,
"opacity": 0.6
};

var stylemintoring = {
  "color": "#ff3300",
  "weight": 1.5,
  "opacity": 0.8,
  };
var stylemintoring18 = {
  "color": "#0000ff",
  "weight": 1.5,
  "opacity": 0.8,
  };
var stylehd = {
  "color": "#FF00FF",
  "weight": 1,
  "opacity": 0.8,
  };
var stylehl = {
  "color": "#00cc00",
  "weight": 1,
  "opacity": 0.1,
  };
var stylehpt = {
  "color": "#ccff33",
  "weight": 1,
  "opacity": 0.1,
  };
var stylehpk = {
  "color": "#ff00ff",
  "weight": 1,
  "opacity": 0.1,
  };
var stylehp = {
  "color": "#ffff00",
  "weight": 1,
  "opacity": 0.1,
  };
var stylehutan1 = {
  "color": "#66ff33",
  "weight": 1,
  "opacity": 0.1,
  };
var stylehutan2 = {
  "color": "#ff9900",
  "weight": 1,
  "opacity": 0.1,
  };
var stylehutan3 = {
  "color": "#6b6b47",
  "weight": 1,
  "opacity": 0.1,
  };

var styleplot = {
  "color": "#000",
  "weight": 1,
  "opacity": 0,
  };

var stylekarhutla15 = {
"color": "#18E0A0",
"weight": 0.5,
"opacity": 50,
};
var stylekarhutla16 = {
"color": "#A018E0",
"weight": 0.5,
"opacity": 50,
};

var stylekarhutla17 = {
"color": "#E018BC",
"weight": 0.5,
"opacity": 50,
};

var stylekarhutla18 = {
"color": "#1D8FE3",
"weight": 0.5,
"opacity": 50,
};

var stylekarhutla19 = {
"color": "#3900EA",
"weight": 0.5,
"opacity": 50,
};

function popUp(f,l){
var out = [];
if (f.properties){
  for(key in f.properties){
      out.push(key+": "+f.properties[key]);
  }
  l.bindPopup(out.join("<br />"));
}
}


var jalan = new L.GeoJSON.AJAX(["json4//jalan/jalan.geojson"],{style: stylejalan})
map.addLayer(jalan)

var lanskap = new L.GeoJSON.AJAX(["json4//lanskapline.geojson"],{style: lanskap})
map.addLayer(lanskap)


//ADMINISTRASI



//FUNGSI CHECKBOX ADD DATA
var pusatdesa = new L.GeoJSON.AJAX(["json4/pusatdesafin.geojson"],{onEachFeature:popUp,style: myStyle})

document.getElementById('pusatdesa').onclick = function() {
if ( this.checked ) {
map.addLayer(pusatdesa);
} else {
map.removeLayer(pusatdesa);
}
};

var desa = new L.GeoJSON.AJAX(["json4/batasdesaline2.geojson"],{style: myStyle})
document.getElementById('batasdesa').onclick = function() {
if ( this.checked ) {
map.addLayer(desa);
} else {
map.removeLayer(desa);
}
};


document.getElementById('select-all').onclick = function() {
if ( this.checked ) {
map.addLayer(pusatdesa);
map.addLayer(desa);
} else {
map.removeLayer(pusatdesa);
map.removeLayer(desa)
}
};

//MONITORING

var jan = new L.GeoJSON.AJAX(["json4/monitoring/jan.geojson"],{onEachFeature:popUp,style: stylemintoring})
document.getElementById('jan').onclick = function() {
if ( this.checked ) {
map.addLayer(jan);
} else {
map.removeLayer(jan);
}
};


var feb = new L.GeoJSON.AJAX(["json4/monitoring/feb.geojson"],{onEachFeature:popUp,style: stylemintoring})
document.getElementById('feb').onclick = function() {
if ( this.checked ) {
map.addLayer(feb);
} else {
map.removeLayer(feb);
}
};

var mar = new L.GeoJSON.AJAX(["json4/monitoring/mar.geojson"],{onEachFeature:popUp,style:stylemintoring})
document.getElementById('mar').onclick = function() {
if ( this.checked ) {
map.addLayer(mar);
} else {
map.removeLayer(mar);
}
};

var apr = new L.GeoJSON.AJAX(["json4/monitoring/apr.geojson"],{onEachFeature:popUp,style: stylemintoring})
document.getElementById('apr').onclick = function() {
if ( this.checked ) {
map.addLayer(apr);
} else {
map.removeLayer(apr);
}
};

var mei = new L.GeoJSON.AJAX(["json4/monitoring/mei.geojson"],{onEachFeature:popUp,style: stylemintoring})
document.getElementById('mei').onclick = function() {
if ( this.checked ) {
  map.addLayer(mei);
} else {
map.removeLayer(mei);
}
};

var jun = new L.GeoJSON.AJAX(["json4/monitoring/jun.geojson"],{onEachFeature:popUp,style: stylemintoring})
document.getElementById('jun').onclick = function() {
if ( this.checked ) {
  map.addLayer(jun);
} else {
map.removeLayer(jun);
}
};

var jul = new L.GeoJSON.AJAX(["json4/monitoring/jul.geojson"],{onEachFeature:popUp,style: stylemintoring})
document.getElementById('jul').onclick = function() {
if ( this.checked ) {
  map.addLayer(jul);
} else {
map.removeLayer(jul);
}
};

var agust = new L.GeoJSON.AJAX(["json4/monitoring/agust.geojson"],{onEachFeature:popUp,style: stylemintoring})
document.getElementById('agust').onclick = function() {
if ( this.checked ) {
   map.addLayer(agust);
} else {
 map.removeLayer(agust);
}
};

var sept = new L.GeoJSON.AJAX(["json4/monitoring/sept.geojson"],{onEachFeature:popUp,style: stylemintoring})
document.getElementById('sept').onclick = function() {
if ( this.checked ) {
 map.addLayer(sept);
} else {
map.removeLayer(sept);
}
};

document.getElementById('select-all2').onclick = function() {
if ( this.checked ) {
 map.addLayer(jan);
 map.addLayer(feb);
 map.addLayer(mar);
 map.addLayer(apr);
 map.addLayer(mei);
 map.addLayer(jun);
 map.addLayer(jul);
 map.addLayer(agust);
 map.addLayer(sept);
} else {
 map.removeLayer(jan);
 map.removeLayer(feb);
 map.removeLayer(mar);
 map.removeLayer(apr);
 map.removeLayer(mei);
 map.removeLayer(jun);
 map.removeLayer(jul);
 map.removeLayer(agust);
 map.removeLayer(sept);
}
};

var def18 = new L.GeoJSON.AJAX(["json4/monitoring/def18.geojson"],{onEachFeature:popUp,style: stylemintoring18})
document.getElementById('def18').onclick = function() {
if ( this.checked ) {
  map.addLayer(def18);
} else {
map.removeLayer(def18);
}
};

document.getElementById('select-all3').onclick = function() {
if ( this.checked ) {
map.addLayer(def18);
} else {
map.removeLayer(def18);
}
};
//IZIN HPHD
var hd = new L.GeoJSON.AJAX(["json4/izin hd/izinhd.geojson"],{style: stylehd})
document.getElementById('hd').onclick = function() {
if ( this.checked ) {
  map.addLayer(hd);
} else {
map.removeLayer(hd);
}
};

document.getElementById('select-all4').onclick = function() {
if ( this.checked ) {
map.addLayer(hd);
} else {
map.removeLayer(hd);
}
};
//KAWASAN HUTAN
var hl = new L.GeoJSON.AJAX(["json4/kh/hl.geojson"],{onEachFeature:popUp,style: stylehl})
document.getElementById('hl').onclick = function() {
if ( this.checked ) {
  map.addLayer(hl);
} else {
map.removeLayer(hl);
}
};

var hpt = new L.GeoJSON.AJAX(["json4/kh/hpt.geojson"],{onEachFeature:popUp,style: stylehpt})
document.getElementById('hpt').onclick = function() {
if ( this.checked ) {
    map.addLayer(hpt);
} else {
  map.removeLayer(hpt);
}
};

var hpk = new L.GeoJSON.AJAX(["json4/kh/hpk.geojson"],{onEachFeature:popUp,style: stylehpk})
document.getElementById('hpk').onclick = function() {
if ( this.checked ) {
    map.addLayer(hpk);
} else {
  map.removeLayer(hpk);
}
};

  var hp = new L.GeoJSON.AJAX(["json4/kh/hp.geojson"],{onEachFeature:popUp,style: stylehp})
  document.getElementById('hp').onclick = function() {
  if ( this.checked ) {
      map.addLayer(hp);
  } else {
    map.removeLayer(hp);
  }
};

document.getElementById('select-all5').onclick = function() {
if ( this.checked ) {
    map.addLayer(hl);
    map.addLayer(hpt);
    map.addLayer(hpk);
    map.addLayer(hp);
} else {
    map.removeLayer(hl);
    map.removeLayer(hpt);
    map.removeLayer(hpk);
    map.removeLayer(hp);
}
};
//TUTUPAN HUTAN
  var hlks = new L.GeoJSON.AJAX(["json4/hutan/hlks.geojson"],{onEachFeature:popUp,style: stylehutan1})
  document.getElementById('hlks').onclick = function() {
  if ( this.checked ) {
      map.addLayer(hlks);
  } else {
    map.removeLayer(hlks);
  }
};

    var hms = new L.GeoJSON.AJAX(["json4/hutan/hms.geojson"],{onEachFeature:popUp,style:stylehutan2})
    document.getElementById('hms').onclick = function() {
    if ( this.checked ) {
        map.addLayer(hms);
    } else {
      map.removeLayer(hms);
    }
  };

  var hrs = new L.GeoJSON.AJAX(["json4/hutan/hrs.geojson"],{onEachFeature:popUp,style: stylehutan3})
  document.getElementById('hrs').onclick = function() {
  if ( this.checked ) {
      map.addLayer(hrs);
  } else {
    map.removeLayer(hrs);
  }
};

document.getElementById('select-all6').onclick = function() {
if ( this.checked ) {
    map.addLayer(hlks);
    map.addLayer(hms);
    map.addLayer(hrs);
} else {
    map.removeLayer(hlks);
    map.removeLayer(hms);
    map.removeLayer(hrs);
}
};
//rehabilitas
    var plot = new L.GeoJSON.AJAX(["json4/rehabilitasi/plotgbtdankarbon2.geojson"],{onEachFeature:popUp,style: styleplot})
    document.getElementById('plot').onclick = function() {
    if ( this.checked ) {
        map.addLayer(plot);
    } else {
      map.removeLayer(plot);
    }
  };

  document.getElementById('select-allplot').onclick = function() {
  if ( this.checked ) {
      map.addLayer(plot);
  } else {
      map.removeLayer(plot);
  }
  };

  var wpk = new L.GeoJSON.AJAX(["json4/wpk/wpk.geojson"],{onEachFeature:popUp,style: styleplot})
  document.getElementById('wpk').onclick = function() {
  if ( this.checked ) {
      map.addLayer(wpk);
  } else {
    map.removeLayer(wpk);
  }
};

document.getElementById('select-allwpk').onclick = function() {
if ( this.checked ) {
    map.addLayer(wpk);
} else {
    map.removeLayer(wpk);
}
};

var karhutla15 = new L.GeoJSON.AJAX(["json4/karhutla/areaterbakar/2015.geojson"],{onEachFeature:popUp,style: stylekarhutla15})
document.getElementById('karhutla15').onclick = function() {
if ( this.checked ) {
    map.addLayer(karhutla15);
} else {
  map.removeLayer(karhutla15);
}
};

var karhutla16 = new L.GeoJSON.AJAX(["json4/karhutla/areaterbakar/2016.geojson"],{onEachFeature:popUp,style: stylekarhutla16})
document.getElementById('karhutla16').onclick = function() {
if ( this.checked ) {
  map.addLayer(karhutla16);
} else {
map.removeLayer(karhutla16);
}
};

var karhutla17 = new L.GeoJSON.AJAX(["json4/karhutla/areaterbakar/2017.geojson"],{onEachFeature:popUp,style: stylekarhutla17})
document.getElementById('karhutla17').onclick = function() {
if ( this.checked ) {
  map.addLayer(karhutla17);
} else {
map.removeLayer(karhutla17);
}
};

var karhutla18 = new L.GeoJSON.AJAX(["json4/karhutla/areaterbakar/2018.geojson"],{onEachFeature:popUp,style: stylekarhutla18})
document.getElementById('karhutla18').onclick = function() {
if ( this.checked ) {
  map.addLayer(karhutla18);
} else {
map.removeLayer(karhutla18);
}
};

var karhutla19 = new L.GeoJSON.AJAX(["json4/karhutla/areaterbakar/2019.geojson"],{onEachFeature:popUp,style: stylekarhutla19})
document.getElementById('karhutla19').onclick = function() {
if ( this.checked ) {
map.addLayer(karhutla19);
} else {
map.removeLayer(karhutla19);
}
};

document.getElementById('select-allkarhutla').onclick = function() {
if ( this.checked ) {
  map.addLayer(karhutla15);
  map.addLayer(karhutla16);
  map.addLayer(karhutla17);
  map.addLayer(karhutla18);
  map.addLayer(karhutla19);
} else {
  map.removeLayer(karhutla15);
  map.removeLayer(karhutla16);
  map.removeLayer(karhutla17);
  map.removeLayer(karhutla18);
  map.removeLayer(karhutla19);
}
};




    var iconhotspot = L.icon({
     iconUrl: 'icon/hotspot.png',
     iconSize: [8, 13],
     shadowSize: [0, 0],
     iconAnchor: [10, 10],
     shadowAnchor: [0, 0],
     popupAnchor: [-6, -10]
    });

    var iconmonitgbt = L.icon({
     iconUrl: 'icon/monitgbt.png',
     iconSize: [8, 8],
     shadowSize: [0, 0],
     iconAnchor: [10, 10],
     shadowAnchor: [0, 0],
     popupAnchor: [-6, -10]
    });


    $.getJSON("json4/karhutla/hotspot15.geojson",function(data){
    // set violationPoints to the dataset, and add the rodent violation GeoJSON layer to the map
        hotspot15 = L.geoJson(data, {
         onEachFeature: function popUp(f,l){
             var out = [];
             if (f.properties){
                 for(key in f.properties){
                     out.push(key+": "+f.properties[key]);
                 }
                 l.bindPopup(out.join("<br />"));
             }
         }, pointToLayer: function (feature, latlng) {
             var marker = L.marker(latlng,{icon: iconhotspot});
             return marker;
         }
     })
    });

    document.getElementById('hotspot15').onclick = function() {
    if ( this.checked ) {
       map.addLayer(hotspot15);
    } else {
      map.removeLayer(hotspot15);
    }
    };

    $.getJSON("json4/karhutla/hotspot16.geojson",function(data){
    // set violationPoints to the dataset, and add the rodent violation GeoJSON layer to the map
        hotspot16 = L.geoJson(data, {
         onEachFeature: function popUp(f,l){
             var out = [];
             if (f.properties){
                 for(key in f.properties){
                     out.push(key+": "+f.properties[key]);
                 }
                 l.bindPopup(out.join("<br />"));
             }
         }, pointToLayer: function (feature, latlng) {
             var marker = L.marker(latlng,{icon: iconhotspot});
             return marker;
         }
     })
    });

    document.getElementById('hotspot16').onclick = function() {
    if ( this.checked ) {
       map.addLayer(hotspot16);
    } else {
     map.removeLayer(hotspot16);
    }
    };

    $.getJSON("json4/karhutla/hotspot17.geojson",function(data){
    // set violationPoints to the dataset, and add the rodent violation GeoJSON layer to the map
        hotspot17 = L.geoJson(data, {
         onEachFeature: function popUp(f,l){
             var out = [];
             if (f.properties){
                 for(key in f.properties){
                     out.push(key+": "+f.properties[key]);
                 }
                 l.bindPopup(out.join("<br />"));
             }
         }, pointToLayer: function (feature, latlng) {
             var marker = L.marker(latlng,{icon: iconhotspot});
             return marker;
         }
     })
    });

    document.getElementById('hotspot17').onclick = function() {
    if ( this.checked ) {
       map.addLayer(hotspot17);
    } else {
     map.removeLayer(hotspot17);
    }
    };

    $.getJSON("json4/karhutla/hotspot18.geojson",function(data){
    // set violationPoints to the dataset, and add the rodent violation GeoJSON layer to the map
        hotspot18 = L.geoJson(data, {
         onEachFeature: function popUp(f,l){
             var out = [];
             if (f.properties){
                 for(key in f.properties){
                     out.push(key+": "+f.properties[key]);
                 }
                 l.bindPopup(out.join("<br />"));
             }
         }, pointToLayer: function (feature, latlng) {
             var marker = L.marker(latlng,{icon: iconhotspot});
             return marker;
         }
     })
    });

    document.getElementById('hotspot18').onclick = function() {
    if ( this.checked ) {
       map.addLayer(hotspot18);
    } else {
     map.removeLayer(hotspot18);
    }
    };

    $.getJSON("json4/karhutla/hotspot192.geojson",function(data){

// set violationPoints to the dataset, and add the rodent violation GeoJSON layer to the map
      hotspot192 = L.geoJson(data, {
       onEachFeature: function popUp(f,l){
           var out = [];
           if (f.properties){
               for(key in f.properties){
                   out.push(key+": "+f.properties[key]);
               }
               l.bindPopup(out.join("<br />"));
           }
       }, pointToLayer: function (feature, latlng) {
           var marker = L.marker(latlng,{icon: iconhotspot});
           return marker;
       }
   })
 });

 document.getElementById('hotspot19').onclick = function() {
 if ( this.checked ) {
     map.addLayer(hotspot192);
 } else {
   map.removeLayer(hotspot192);
 }
};

 document.getElementById('select-allhotspot').onclick = function() {
 if ( this.checked ) {
     map.addLayer(hotspot15);
     map.addLayer(hotspot16);
     map.addLayer(hotspot17);
     map.addLayer(hotspot18);
     map.addLayer(hotspot192);
 } else {
     map.removeLayer(hotspot15);
     map.removeLayer(hotspot16);
     map.removeLayer(hotspot17);
     map.removeLayer(hotspot18);
     map.removeLayer(hotspot192);
 }
 };

    $.getJSON("json4/monitoring_gbt/gbtjul19.geojson",function(data){
    // set violationPoints to the dataset, and add the rodent violation GeoJSON layer to the map
      julgbt = L.geoJson(data, {
         onEachFeature: function popUp(f,l){
             var out = [];
             if (f.properties){
                 for(key in f.properties){
                     out.push(key+": "+f.properties[key]);
                 }
                 l.bindPopup(out.join("<br />"));
             }
         }, pointToLayer: function (feature, latlng) {
             var marker = L.marker(latlng,{icon: iconmonitgbt});
             return marker;
         }
     })
    });

    document.getElementById('julgbt').onclick = function() {
    if ( this.checked ) {
        map.addLayer(julgbt);
    } else {
      map.removeLayer(julgbt);
    }
  };

    document.getElementById('select-allmonitgbt').onclick = function() {
    if ( this.checked ) {
        map.addLayer(julgbt);
    } else {
        map.removeLayer(julgbt);
    }
    };
