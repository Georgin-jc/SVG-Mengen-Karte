var wms_layers = [];


        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' &nbsp &middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_PLZ_Sd_1 = new ol.format.GeoJSON();
var features_PLZ_Sd_1 = format_PLZ_Sd_1.readFeatures(json_PLZ_Sd_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PLZ_Sd_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PLZ_Sd_1.addFeatures(features_PLZ_Sd_1);
var lyr_PLZ_Sd_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PLZ_Sd_1, 
                style: style_PLZ_Sd_1,
                popuplayertitle: 'PLZ_Süd',
                interactive: true,
    title: 'PLZ_Süd<br />\
    <img src="styles/legend/PLZ_Sd_1_0.png" /> Heubach<br />\
    <img src="styles/legend/PLZ_Sd_1_1.png" /> Kattanek<br />\
    <img src="styles/legend/PLZ_Sd_1_2.png" /> Mallinger<br />\
    <img src="styles/legend/PLZ_Sd_1_3.png" /> <br />' });
var format_PLZ_Nord_Mengen_2 = new ol.format.GeoJSON();
var features_PLZ_Nord_Mengen_2 = format_PLZ_Nord_Mengen_2.readFeatures(json_PLZ_Nord_Mengen_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PLZ_Nord_Mengen_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PLZ_Nord_Mengen_2.addFeatures(features_PLZ_Nord_Mengen_2);
var lyr_PLZ_Nord_Mengen_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PLZ_Nord_Mengen_2, 
                style: style_PLZ_Nord_Mengen_2,
                popuplayertitle: 'PLZ_Nord_Mengen',
                interactive: true,
                title: '<img src="styles/legend/PLZ_Nord_Mengen_2.png" /> PLZ_Nord_Mengen'
            });
var format_Deutschland_Grenzen_3 = new ol.format.GeoJSON();
var features_Deutschland_Grenzen_3 = format_Deutschland_Grenzen_3.readFeatures(json_Deutschland_Grenzen_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Deutschland_Grenzen_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Deutschland_Grenzen_3.addFeatures(features_Deutschland_Grenzen_3);
var lyr_Deutschland_Grenzen_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Deutschland_Grenzen_3, 
                style: style_Deutschland_Grenzen_3,
                popuplayertitle: 'Deutschland_Grenzen',
                interactive: true,
                title: '<img src="styles/legend/Deutschland_Grenzen_3.png" /> Deutschland_Grenzen'
            });

lyr_OSMStandard_0.setVisible(true);lyr_PLZ_Sd_1.setVisible(true);lyr_PLZ_Nord_Mengen_2.setVisible(true);lyr_Deutschland_Grenzen_3.setVisible(true);
var layersList = [lyr_OSMStandard_0,lyr_PLZ_Sd_1,lyr_PLZ_Nord_Mengen_2,lyr_Deutschland_Grenzen_3];
lyr_PLZ_Sd_1.set('fieldAliases', {'plz': 'plz', 'note': 'note', 'einwohner': 'einwohner', 'qkm': 'qkm', 'PLZ Übers': 'PLZ Übers', 'PLZ Übe_1': 'PLZ Übe_1', });
lyr_PLZ_Nord_Mengen_2.set('fieldAliases', {'plz': 'plz', 'einwohner': 'einwohner', 'Brief30': 'Brief30', 'Mengen_Abo': 'Mengen_Abo', 'Wochenblä': 'Wochenblä', });
lyr_Deutschland_Grenzen_3.set('fieldAliases', {'plz': 'plz', 'note': 'note', 'einwohner': 'einwohner', 'qkm': 'qkm', });
lyr_PLZ_Sd_1.set('fieldImages', {'plz': 'TextEdit', 'note': 'TextEdit', 'einwohner': 'TextEdit', 'qkm': 'TextEdit', 'PLZ Übers': 'TextEdit', 'PLZ Übe_1': 'TextEdit', });
lyr_PLZ_Nord_Mengen_2.set('fieldImages', {'plz': 'TextEdit', 'einwohner': 'TextEdit', 'Brief30': 'TextEdit', 'Mengen_Abo': 'TextEdit', 'Wochenblä': 'TextEdit', });
lyr_Deutschland_Grenzen_3.set('fieldImages', {'plz': 'TextEdit', 'note': 'TextEdit', 'einwohner': 'TextEdit', 'qkm': 'TextEdit', });
lyr_PLZ_Sd_1.set('fieldLabels', {'plz': 'header label - visible with data', 'note': 'no label', 'einwohner': 'no label', 'qkm': 'no label', 'PLZ Übers': 'no label', 'PLZ Übe_1': 'no label', });
lyr_PLZ_Nord_Mengen_2.set('fieldLabels', {'plz': 'header label - visible with data', 'einwohner': 'inline label - visible with data', 'Brief30': 'inline label - visible with data', 'Mengen_Abo': 'inline label - visible with data', 'Wochenblä': 'inline label - visible with data', });
lyr_Deutschland_Grenzen_3.set('fieldLabels', {'plz': 'no label', 'note': 'no label', 'einwohner': 'no label', 'qkm': 'no label', });
lyr_Deutschland_Grenzen_3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});