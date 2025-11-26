var wms_layers = [];


        var lyr_DarkMatterretina_0 = new ol.layer.Tile({
            'title': 'Dark Matter (retina)',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: '&nbsp;&middot; <a href="https://cartodb.com/basemaps/">Map tiles by CartoDB, under CC BY 3.0. Data by OpenStreetMap, under ODbL.</a>',
                url: 'https://a.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}@2x.png'
            })
        });
var format_Yaplar_1 = new ol.format.GeoJSON();
var features_Yaplar_1 = format_Yaplar_1.readFeatures(json_Yaplar_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Yaplar_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Yaplar_1.addFeatures(features_Yaplar_1);
var lyr_Yaplar_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Yaplar_1, 
                style: style_Yaplar_1,
                popuplayertitle: 'Yapılar',
                interactive: false,
                title: '<img src="styles/legend/Yaplar_1.png" /> Yapılar'
            });
var format_KentselDnmOfisi_2 = new ol.format.GeoJSON();
var features_KentselDnmOfisi_2 = format_KentselDnmOfisi_2.readFeatures(json_KentselDnmOfisi_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_KentselDnmOfisi_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_KentselDnmOfisi_2.addFeatures(features_KentselDnmOfisi_2);
var lyr_KentselDnmOfisi_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_KentselDnmOfisi_2, 
                style: style_KentselDnmOfisi_2,
                popuplayertitle: 'Kentsel Dönüşüm Ofisi',
                interactive: true,
                title: '<img src="styles/legend/KentselDnmOfisi_2.png" /> Kentsel Dönüşüm Ofisi'
            });
var format_YkmTamamlananYaplar_3 = new ol.format.GeoJSON();
var features_YkmTamamlananYaplar_3 = format_YkmTamamlananYaplar_3.readFeatures(json_YkmTamamlananYaplar_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_YkmTamamlananYaplar_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_YkmTamamlananYaplar_3.addFeatures(features_YkmTamamlananYaplar_3);
var lyr_YkmTamamlananYaplar_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_YkmTamamlananYaplar_3, 
                style: style_YkmTamamlananYaplar_3,
                popuplayertitle: 'Yıkımı Tamamlanan Yapılar',
                interactive: true,
                title: '<img src="styles/legend/YkmTamamlananYaplar_3.png" /> Yıkımı Tamamlanan Yapılar'
            });
var format_TahliyesiTamamlananYaplar_4 = new ol.format.GeoJSON();
var features_TahliyesiTamamlananYaplar_4 = format_TahliyesiTamamlananYaplar_4.readFeatures(json_TahliyesiTamamlananYaplar_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_TahliyesiTamamlananYaplar_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TahliyesiTamamlananYaplar_4.addFeatures(features_TahliyesiTamamlananYaplar_4);
var lyr_TahliyesiTamamlananYaplar_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TahliyesiTamamlananYaplar_4, 
                style: style_TahliyesiTamamlananYaplar_4,
                popuplayertitle: 'Tahliyesi Tamamlanan Yapılar',
                interactive: true,
                title: '<img src="styles/legend/TahliyesiTamamlananYaplar_4.png" /> Tahliyesi Tamamlanan Yapılar'
            });

lyr_DarkMatterretina_0.setVisible(true);lyr_Yaplar_1.setVisible(true);lyr_KentselDnmOfisi_2.setVisible(true);lyr_YkmTamamlananYaplar_3.setVisible(true);lyr_TahliyesiTamamlananYaplar_4.setVisible(true);
var layersList = [lyr_DarkMatterretina_0,lyr_Yaplar_1,lyr_KentselDnmOfisi_2,lyr_YkmTamamlananYaplar_3,lyr_TahliyesiTamamlananYaplar_4];
lyr_Yaplar_1.set('fieldAliases', {'fid': 'fid', 'OBJECTID': 'OBJECTID', 'ANALIZ_NO': 'ANALIZ_NO', 'KAT_ADEDI': 'KAT_ADEDI', 'KULLANIM_F': 'KULLANIM_F', 'YAS': 'YAS', 'TESCIL_DUR': 'TESCIL_DUR', 'YAPI_CINSI': 'YAPI_CINSI', 'TAHLIYE_DU': 'TAHLIYE_DU', 'YIKIM_DURU': 'YIKIM_DURU', 'GORUSME_DU': 'GORUSME_DU', 'YIKIM_ETAP': 'YIKIM_ETAP', 'ANLASMA_DU': 'ANLASMA_DU', 'HAK_SAHİP': 'HAK_SAHİP', 'Tapu_Geçm': 'Tapu_Geçm', });
lyr_KentselDnmOfisi_2.set('fieldAliases', {'id': 'id', 'Sokak/Cadd': 'Sokak/Cadd', 'Numara': 'Numara', 'Ilce': 'Ilce', 'Mahalle': 'Mahalle', });
lyr_YkmTamamlananYaplar_3.set('fieldAliases', {'id': 'id', 'Sokak': 'Sokak', 'Numara': 'Numara', 'Hak Sahibi': 'Hak Sahibi', 'Tarihi': 'Tarihi', });
lyr_TahliyesiTamamlananYaplar_4.set('fieldAliases', {'id': 'id', 'Sokak': 'Sokak', 'Numara': 'Numara', 'Hak Sahibi': 'Hak Sahibi', 'Tarih': 'Tarih', });
lyr_Yaplar_1.set('fieldImages', {'fid': 'TextEdit', 'OBJECTID': 'TextEdit', 'ANALIZ_NO': 'TextEdit', 'KAT_ADEDI': 'TextEdit', 'KULLANIM_F': 'TextEdit', 'YAS': 'TextEdit', 'TESCIL_DUR': 'TextEdit', 'YAPI_CINSI': 'TextEdit', 'TAHLIYE_DU': 'TextEdit', 'YIKIM_DURU': 'TextEdit', 'GORUSME_DU': 'TextEdit', 'YIKIM_ETAP': 'TextEdit', 'ANLASMA_DU': 'TextEdit', 'HAK_SAHİP': 'TextEdit', 'Tapu_Geçm': 'TextEdit', });
lyr_KentselDnmOfisi_2.set('fieldImages', {'id': 'TextEdit', 'Sokak/Cadd': 'TextEdit', 'Numara': 'TextEdit', 'Ilce': 'TextEdit', 'Mahalle': 'TextEdit', });
lyr_YkmTamamlananYaplar_3.set('fieldImages', {'id': 'TextEdit', 'Sokak': 'TextEdit', 'Numara': 'TextEdit', 'Hak Sahibi': 'TextEdit', 'Tarihi': 'TextEdit', });
lyr_TahliyesiTamamlananYaplar_4.set('fieldImages', {'id': 'TextEdit', 'Sokak': 'TextEdit', 'Numara': 'TextEdit', 'Hak Sahibi': 'TextEdit', 'Tarih': 'TextEdit', });
lyr_Yaplar_1.set('fieldLabels', {'fid': 'no label', 'OBJECTID': 'no label', 'ANALIZ_NO': 'no label', 'KAT_ADEDI': 'no label', 'KULLANIM_F': 'no label', 'YAS': 'no label', 'TESCIL_DUR': 'no label', 'YAPI_CINSI': 'no label', 'TAHLIYE_DU': 'no label', 'YIKIM_DURU': 'no label', 'GORUSME_DU': 'no label', 'YIKIM_ETAP': 'no label', 'ANLASMA_DU': 'no label', 'HAK_SAHİP': 'no label', 'Tapu_Geçm': 'no label', });
lyr_KentselDnmOfisi_2.set('fieldLabels', {'id': 'no label', 'Sokak/Cadd': 'header label - always visible', 'Numara': 'header label - always visible', 'Ilce': 'header label - always visible', 'Mahalle': 'header label - always visible', });
lyr_YkmTamamlananYaplar_3.set('fieldLabels', {'id': 'no label', 'Sokak': 'header label - always visible', 'Numara': 'header label - always visible', 'Hak Sahibi': 'header label - always visible', 'Tarihi': 'header label - always visible', });
lyr_TahliyesiTamamlananYaplar_4.set('fieldLabels', {'id': 'no label', 'Sokak': 'header label - visible with data', 'Numara': 'header label - visible with data', 'Hak Sahibi': 'header label - visible with data', 'Tarih': 'header label - visible with data', });
lyr_TahliyesiTamamlananYaplar_4.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});