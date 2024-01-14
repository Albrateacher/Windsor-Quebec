var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var format_QuebecCityADPointsStatsCan2021_1 = new ol.format.GeoJSON();
var features_QuebecCityADPointsStatsCan2021_1 = format_QuebecCityADPointsStatsCan2021_1.readFeatures(json_QuebecCityADPointsStatsCan2021_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_QuebecCityADPointsStatsCan2021_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_QuebecCityADPointsStatsCan2021_1.addFeatures(features_QuebecCityADPointsStatsCan2021_1);
var lyr_QuebecCityADPointsStatsCan2021_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_QuebecCityADPointsStatsCan2021_1, 
                style: style_QuebecCityADPointsStatsCan2021_1,
                interactive: false,
                title: '<img src="styles/legend/QuebecCityADPointsStatsCan2021_1.png" /> Quebec City,AD Points, Stats Can 2021 '
            });
var format_LineWindsorQuebec_2 = new ol.format.GeoJSON();
var features_LineWindsorQuebec_2 = format_LineWindsorQuebec_2.readFeatures(json_LineWindsorQuebec_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_LineWindsorQuebec_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LineWindsorQuebec_2.addFeatures(features_LineWindsorQuebec_2);
var lyr_LineWindsorQuebec_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_LineWindsorQuebec_2, 
                style: style_LineWindsorQuebec_2,
                interactive: false,
                title: '<img src="styles/legend/LineWindsorQuebec_2.png" /> Line Windsor Quebec'
            });
var format_BufferWindsorQuebec75Km_3 = new ol.format.GeoJSON();
var features_BufferWindsorQuebec75Km_3 = format_BufferWindsorQuebec75Km_3.readFeatures(json_BufferWindsorQuebec75Km_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BufferWindsorQuebec75Km_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BufferWindsorQuebec75Km_3.addFeatures(features_BufferWindsorQuebec75Km_3);
var lyr_BufferWindsorQuebec75Km_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_BufferWindsorQuebec75Km_3, 
                style: style_BufferWindsorQuebec75Km_3,
                interactive: false,
                title: '<img src="styles/legend/BufferWindsorQuebec75Km_3.png" /> Buffer, Windsor Quebec, 75Km'
            });
var lyr_DensityMapPopulationQuebecCity_4 = new ol.layer.Image({
                            opacity: 1,
                            title: "Density Map, Population Quebec City",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/DensityMapPopulationQuebecCity_4.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [-7961791.741093, 5884290.725506, -7913791.741135, 5933956.513458]
                            })
                        });
var format_PolygonADCensus2021QuebecCity_5 = new ol.format.GeoJSON();
var features_PolygonADCensus2021QuebecCity_5 = format_PolygonADCensus2021QuebecCity_5.readFeatures(json_PolygonADCensus2021QuebecCity_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PolygonADCensus2021QuebecCity_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PolygonADCensus2021QuebecCity_5.addFeatures(features_PolygonADCensus2021QuebecCity_5);
var lyr_PolygonADCensus2021QuebecCity_5 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_PolygonADCensus2021QuebecCity_5, 
                style: style_PolygonADCensus2021QuebecCity_5,
                interactive: false,
                title: '<img src="styles/legend/PolygonADCensus2021QuebecCity_5.png" /> Polygon, AD, Census 2021 (Quebec City)'
            });

lyr_GoogleSatellite_0.setVisible(true);lyr_QuebecCityADPointsStatsCan2021_1.setVisible(true);lyr_LineWindsorQuebec_2.setVisible(true);lyr_BufferWindsorQuebec75Km_3.setVisible(true);lyr_DensityMapPopulationQuebecCity_4.setVisible(true);lyr_PolygonADCensus2021QuebecCity_5.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,lyr_QuebecCityADPointsStatsCan2021_1,lyr_LineWindsorQuebec_2,lyr_BufferWindsorQuebec75Km_3,lyr_DensityMapPopulationQuebecCity_4,lyr_PolygonADCensus2021QuebecCity_5];
lyr_QuebecCityADPointsStatsCan2021_1.set('fieldAliases', {'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_LineWindsorQuebec_2.set('fieldAliases', {'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_BufferWindsorQuebec75Km_3.set('fieldAliases', {'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_PolygonADCensus2021QuebecCity_5.set('fieldAliases', {'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_QuebecCityADPointsStatsCan2021_1.set('fieldImages', {'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', });
lyr_LineWindsorQuebec_2.set('fieldImages', {'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', });
lyr_BufferWindsorQuebec75Km_3.set('fieldImages', {'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', });
lyr_PolygonADCensus2021QuebecCity_5.set('fieldImages', {'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', });
lyr_QuebecCityADPointsStatsCan2021_1.set('fieldLabels', {'Name': 'no label', 'description': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMode': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'header label', 'icon': 'no label', });
lyr_LineWindsorQuebec_2.set('fieldLabels', {'Name': 'no label', 'description': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMode': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', });
lyr_BufferWindsorQuebec75Km_3.set('fieldLabels', {'Name': 'no label', 'description': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMode': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', });
lyr_PolygonADCensus2021QuebecCity_5.set('fieldLabels', {'Name': 'no label', 'description': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMode': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', });
lyr_PolygonADCensus2021QuebecCity_5.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});