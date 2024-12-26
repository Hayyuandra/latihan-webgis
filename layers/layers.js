var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_TEMPATSAMPAHAKHIR_PT_50K_1 = new ol.format.GeoJSON();
var features_TEMPATSAMPAHAKHIR_PT_50K_1 = format_TEMPATSAMPAHAKHIR_PT_50K_1.readFeatures(json_TEMPATSAMPAHAKHIR_PT_50K_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_TEMPATSAMPAHAKHIR_PT_50K_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TEMPATSAMPAHAKHIR_PT_50K_1.addFeatures(features_TEMPATSAMPAHAKHIR_PT_50K_1);
var lyr_TEMPATSAMPAHAKHIR_PT_50K_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TEMPATSAMPAHAKHIR_PT_50K_1, 
                style: style_TEMPATSAMPAHAKHIR_PT_50K_1,
                popuplayertitle: 'TEMPATSAMPAHAKHIR_PT_50K',
                interactive: true,
                title: '<img src="styles/legend/TEMPATSAMPAHAKHIR_PT_50K_1.png" /> TEMPATSAMPAHAKHIR_PT_50K'
            });

lyr_OpenStreetMap_0.setVisible(true);lyr_TEMPATSAMPAHAKHIR_PT_50K_1.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_TEMPATSAMPAHAKHIR_PT_50K_1];
lyr_TEMPATSAMPAHAKHIR_PT_50K_1.set('fieldAliases', {'NAMOBJ': 'NAMOBJ', 'FCODE': 'FCODE', 'REMARK': 'REMARK', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', });
lyr_TEMPATSAMPAHAKHIR_PT_50K_1.set('fieldImages', {'NAMOBJ': '', 'FCODE': '', 'REMARK': '', 'SRS_ID': '', 'LCODE': '', 'METADATA': '', });
lyr_TEMPATSAMPAHAKHIR_PT_50K_1.set('fieldLabels', {'NAMOBJ': 'inline label - visible with data', 'FCODE': 'inline label - visible with data', 'REMARK': 'inline label - visible with data', 'SRS_ID': 'inline label - visible with data', 'LCODE': 'inline label - visible with data', 'METADATA': 'inline label - visible with data', });
lyr_TEMPATSAMPAHAKHIR_PT_50K_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});