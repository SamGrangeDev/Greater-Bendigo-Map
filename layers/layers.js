var wms_layers = [];


        var lyr_GoogleMaps_0 = new ol.layer.Tile({
            'title': 'Google Maps',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=m&x={x}&y={y}&z={z}'
            })
        });

        var lyr_ESRISatelliteArcGISWorld_Imagery_1 = new ol.layer.Tile({
            'title': 'ESRI Satellite (ArcGIS/World_Imagery)',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}'
            })
        });
var format_DCPODevelopmentContributionsPlanOverlay_2 = new ol.format.GeoJSON();
var features_DCPODevelopmentContributionsPlanOverlay_2 = format_DCPODevelopmentContributionsPlanOverlay_2.readFeatures(json_DCPODevelopmentContributionsPlanOverlay_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_DCPODevelopmentContributionsPlanOverlay_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DCPODevelopmentContributionsPlanOverlay_2.addFeatures(features_DCPODevelopmentContributionsPlanOverlay_2);
var lyr_DCPODevelopmentContributionsPlanOverlay_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_DCPODevelopmentContributionsPlanOverlay_2, 
                style: style_DCPODevelopmentContributionsPlanOverlay_2,
                popuplayertitle: "DCPO - Development Contributions Plan Overlay",
                interactive: false,
                title: '<img src="styles/legend/DCPODevelopmentContributionsPlanOverlay_2.png" /> DCPO - Development Contributions Plan Overlay'
            });
var lyr_DCPArea_3 = new ol.layer.Image({
                            opacity: 1,
                            title: "DCP Area",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/DCPArea_3.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [16067866.505925, -4393120.008022, 16071183.782667, -4391147.164738]
                            })
                        });
var lyr_HuntlyDCPStructure_4 = new ol.layer.Image({
                            opacity: 1,
                            title: "Huntly DCP Structure",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/HuntlyDCPStructure_4.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [16067286.574507, -4393188.656366, 16071246.879428, -4390690.100797]
                            })
                        });
var lyr_DCPInfrastructureProjects_5 = new ol.layer.Image({
                            opacity: 1,
                            title: "DCP Infrastructure Projects",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/DCPInfrastructureProjects_5.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [16067287.579112, -4393191.338029, 16071247.427297, -4390689.256252]
                            })
                        });
var lyr_HuntlyDCPLandUGZLandandHuntlyWestArea_6 = new ol.layer.Image({
                            opacity: 1,
                            title: "Huntly DCP Land, UGZ Land and Huntly West Area",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/HuntlyDCPLandUGZLandandHuntlyWestArea_6.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [16066924.277670, -4393537.392398, 16071478.219030, -4391014.232711]
                            })
                        });
var lyr_BagshotPrecinctConceptStructurePlan_7 = new ol.layer.Image({
                            opacity: 1,
                            title: "Bagshot Precinct Concept Structure Plan",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/BagshotPrecinctConceptStructurePlan_7.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [16070832.599098, -4394449.043602, 16072521.238093, -4391522.843217]
                            })
                        });
var lyr_ProvidenceEstateMasterplan_8 = new ol.layer.Image({
                            opacity: 1,
                            title: "Providence Estate Masterplan",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/ProvidenceEstateMasterplan_8.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [16069920.217572, -4392525.705836, 16071186.654794, -4391265.781878]
                            })
                        });
var format_LGA_9 = new ol.format.GeoJSON();
var features_LGA_9 = format_LGA_9.readFeatures(json_LGA_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_LGA_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LGA_9.addFeatures(features_LGA_9);
var lyr_LGA_9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_LGA_9, 
                style: style_LGA_9,
                popuplayertitle: "LGA",
                interactive: false,
                title: '<img src="styles/legend/LGA_9.png" /> LGA'
            });
var format_Suburb_10 = new ol.format.GeoJSON();
var features_Suburb_10 = format_Suburb_10.readFeatures(json_Suburb_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Suburb_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Suburb_10.addFeatures(features_Suburb_10);
var lyr_Suburb_10 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Suburb_10, 
                style: style_Suburb_10,
                popuplayertitle: "Suburb",
                interactive: false,
                title: '<img src="styles/legend/Suburb_10.png" /> Suburb'
            });
var format_GreaterBendigoProperties_11 = new ol.format.GeoJSON();
var features_GreaterBendigoProperties_11 = format_GreaterBendigoProperties_11.readFeatures(json_GreaterBendigoProperties_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_GreaterBendigoProperties_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_GreaterBendigoProperties_11.addFeatures(features_GreaterBendigoProperties_11);
var lyr_GreaterBendigoProperties_11 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_GreaterBendigoProperties_11, 
                style: style_GreaterBendigoProperties_11,
                popuplayertitle: "Greater Bendigo Properties",
                interactive: true,
                title: '<img src="styles/legend/GreaterBendigoProperties_11.png" /> Greater Bendigo Properties'
            });
var group_Administrative = new ol.layer.Group({
                                layers: [lyr_LGA_9,lyr_Suburb_10,lyr_GreaterBendigoProperties_11,],
                                fold: "open",
                                title: "Administrative"});
var group_StructurePlan = new ol.layer.Group({
                                layers: [lyr_BagshotPrecinctConceptStructurePlan_7,lyr_ProvidenceEstateMasterplan_8,],
                                fold: "open",
                                title: "Structure Plan"});
var group_DCPItems = new ol.layer.Group({
                                layers: [lyr_DCPODevelopmentContributionsPlanOverlay_2,lyr_DCPArea_3,lyr_HuntlyDCPStructure_4,lyr_DCPInfrastructureProjects_5,lyr_HuntlyDCPLandUGZLandandHuntlyWestArea_6,],
                                fold: "open",
                                title: "DCP Items"});
var group_SSPFloodScenario20812100 = new ol.layer.Group({
                                layers: [],
                                fold: "open",
                                title: "SSP Flood Scenario 2081-2100"});
var group_NDHDeductedOverlays = new ol.layer.Group({
                                layers: [],
                                fold: "open",
                                title: "NDH Deducted Overlays"});
var group_NotetoDD = new ol.layer.Group({
                                layers: [],
                                fold: "open",
                                title: "Note to DD"});
var group_OtherOverlays = new ol.layer.Group({
                                layers: [],
                                fold: "open",
                                title: "Other Overlays"});
var group_Zoning = new ol.layer.Group({
                                layers: [],
                                fold: "open",
                                title: "Zoning"});
var group_BaseLayer = new ol.layer.Group({
                                layers: [lyr_GoogleMaps_0,lyr_ESRISatelliteArcGISWorld_Imagery_1,],
                                fold: "open",
                                title: "Base Layer"});

lyr_GoogleMaps_0.setVisible(false);lyr_ESRISatelliteArcGISWorld_Imagery_1.setVisible(true);lyr_DCPODevelopmentContributionsPlanOverlay_2.setVisible(false);lyr_DCPArea_3.setVisible(false);lyr_HuntlyDCPStructure_4.setVisible(false);lyr_DCPInfrastructureProjects_5.setVisible(false);lyr_HuntlyDCPLandUGZLandandHuntlyWestArea_6.setVisible(false);lyr_BagshotPrecinctConceptStructurePlan_7.setVisible(false);lyr_ProvidenceEstateMasterplan_8.setVisible(false);lyr_LGA_9.setVisible(true);lyr_Suburb_10.setVisible(true);lyr_GreaterBendigoProperties_11.setVisible(true);
var layersList = [group_BaseLayer,group_DCPItems,group_StructurePlan,group_Administrative];
lyr_DCPODevelopmentContributionsPlanOverlay_2.set('fieldAliases', {'fid': 'fid', 'OBJECTID': 'OBJECTID', 'PFI': 'PFI', 'SCHEME_COD': 'SCHEME_COD', 'LGA_CODE': 'LGA_CODE', 'LGA': 'LGA', 'ZONE_NUM': 'ZONE_NUM', 'ZONE_STATU': 'ZONE_STATU', 'ZONE_CODE': 'ZONE_CODE', 'ZONE_DESCR': 'ZONE_DESCR', 'GAZ_BEGIN_': 'GAZ_BEGIN_', 'PFI_CREATE': 'PFI_CREATE', 'UFI': 'UFI', 'UFI_CREATE': 'UFI_CREATE', 'ZONE_CODE_': 'ZONE_CODE_', 'ZONE_COD_1': 'ZONE_COD_1', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'SHAPE_Area', });
lyr_LGA_9.set('fieldAliases', {'LGA_CODE24': 'LGA_CODE24', 'LGA_NAME24': 'LGA_NAME24', 'STE_CODE21': 'STE_CODE21', 'STE_NAME21': 'STE_NAME21', 'AUS_CODE21': 'AUS_CODE21', 'AUS_NAME21': 'AUS_NAME21', 'AREASQKM': 'AREASQKM', 'LOCI_URI21': 'LOCI_URI21', });
lyr_Suburb_10.set('fieldAliases', {'LC_PLY_PID': 'LC_PLY_PID', 'LOC_PID': 'LOC_PID', 'DT_CREATE': 'DT_CREATE', 'LOC_NAME': 'LOC_NAME', 'LOC_CLASS': 'LOC_CLASS', 'STATE': 'STATE', });
lyr_GreaterBendigoProperties_11.set('fieldAliases', {'fid': 'fid', 'OBJECTID': 'OBJECTID', 'PROP_PFI': 'PROP_PFI', 'PROP_LGA_CODE': 'PROP_LGA_CODE', 'PROP_PROPNUM': 'PROP_PROPNUM', 'PROP_PROPERTY_TYPE': 'PROP_PROPERTY_TYPE', 'PROP_MULTI_ASSESSMENT': 'PROP_MULTI_ASSESSMENT', 'PROP_STATUS': 'PROP_STATUS', 'ADD_EZI_ADDRESS': 'ADD_EZI_ADDRESS', 'ADD_IS_PRIMARY': 'ADD_IS_PRIMARY', 'ADD_HOUSE_NUMBER_1': 'ADD_HOUSE_NUMBER_1', 'ADD_HOUSE_SUFFIX_1': 'ADD_HOUSE_SUFFIX_1', 'ADD_ROAD_NAME': 'ADD_ROAD_NAME', 'ADD_ROAD_TYPE': 'ADD_ROAD_TYPE', 'ADD_ROAD_SUFFIX': 'ADD_ROAD_SUFFIX', 'ADD_LOCALITY_NAME': 'ADD_LOCALITY_NAME', 'ADD_STATE': 'ADD_STATE', 'ADD_POSTCODE': 'ADD_POSTCODE', 'ADD_NUM_ROAD_ADDRESS': 'ADD_NUM_ROAD_ADDRESS', 'Shape_Length': 'Shape_Length', 'Shape_Area': 'Shape_Area', });
lyr_DCPODevelopmentContributionsPlanOverlay_2.set('fieldImages', {'fid': '', 'OBJECTID': '', 'PFI': '', 'SCHEME_COD': '', 'LGA_CODE': '', 'LGA': '', 'ZONE_NUM': '', 'ZONE_STATU': '', 'ZONE_CODE': '', 'ZONE_DESCR': '', 'GAZ_BEGIN_': '', 'PFI_CREATE': '', 'UFI': '', 'UFI_CREATE': '', 'ZONE_CODE_': '', 'ZONE_COD_1': '', 'Shape_Leng': '', 'Shape_Area': '', });
lyr_LGA_9.set('fieldImages', {'LGA_CODE24': 'TextEdit', 'LGA_NAME24': 'TextEdit', 'STE_CODE21': 'TextEdit', 'STE_NAME21': 'TextEdit', 'AUS_CODE21': 'TextEdit', 'AUS_NAME21': 'TextEdit', 'AREASQKM': 'TextEdit', 'LOCI_URI21': 'TextEdit', });
lyr_Suburb_10.set('fieldImages', {'LC_PLY_PID': 'TextEdit', 'LOC_PID': 'TextEdit', 'DT_CREATE': 'DateTime', 'LOC_NAME': 'TextEdit', 'LOC_CLASS': 'TextEdit', 'STATE': 'TextEdit', });
lyr_GreaterBendigoProperties_11.set('fieldImages', {'fid': '', 'OBJECTID': '', 'PROP_PFI': '', 'PROP_LGA_CODE': '', 'PROP_PROPNUM': '', 'PROP_PROPERTY_TYPE': '', 'PROP_MULTI_ASSESSMENT': '', 'PROP_STATUS': '', 'ADD_EZI_ADDRESS': '', 'ADD_IS_PRIMARY': '', 'ADD_HOUSE_NUMBER_1': '', 'ADD_HOUSE_SUFFIX_1': '', 'ADD_ROAD_NAME': '', 'ADD_ROAD_TYPE': '', 'ADD_ROAD_SUFFIX': '', 'ADD_LOCALITY_NAME': '', 'ADD_STATE': '', 'ADD_POSTCODE': '', 'ADD_NUM_ROAD_ADDRESS': '', 'Shape_Length': '', 'Shape_Area': '', });
lyr_DCPODevelopmentContributionsPlanOverlay_2.set('fieldLabels', {'fid': 'hidden field', 'OBJECTID': 'hidden field', 'PFI': 'hidden field', 'SCHEME_COD': 'hidden field', 'LGA_CODE': 'hidden field', 'LGA': 'hidden field', 'ZONE_NUM': 'hidden field', 'ZONE_STATU': 'hidden field', 'ZONE_CODE': 'hidden field', 'ZONE_DESCR': 'hidden field', 'GAZ_BEGIN_': 'hidden field', 'PFI_CREATE': 'hidden field', 'UFI': 'hidden field', 'UFI_CREATE': 'hidden field', 'ZONE_CODE_': 'hidden field', 'ZONE_COD_1': 'hidden field', 'Shape_Leng': 'hidden field', 'Shape_Area': 'hidden field', });
lyr_LGA_9.set('fieldLabels', {'LGA_CODE24': 'hidden field', 'LGA_NAME24': 'hidden field', 'STE_CODE21': 'hidden field', 'STE_NAME21': 'hidden field', 'AUS_CODE21': 'hidden field', 'AUS_NAME21': 'hidden field', 'AREASQKM': 'hidden field', 'LOCI_URI21': 'hidden field', });
lyr_Suburb_10.set('fieldLabels', {'LC_PLY_PID': 'hidden field', 'LOC_PID': 'hidden field', 'DT_CREATE': 'hidden field', 'LOC_NAME': 'hidden field', 'LOC_CLASS': 'hidden field', 'STATE': 'hidden field', });
lyr_GreaterBendigoProperties_11.set('fieldLabels', {'fid': 'hidden field', 'OBJECTID': 'hidden field', 'PROP_PFI': 'hidden field', 'PROP_LGA_CODE': 'hidden field', 'PROP_PROPNUM': 'hidden field', 'PROP_PROPERTY_TYPE': 'hidden field', 'PROP_MULTI_ASSESSMENT': 'hidden field', 'PROP_STATUS': 'hidden field', 'ADD_EZI_ADDRESS': 'header label - visible with data', 'ADD_IS_PRIMARY': 'hidden field', 'ADD_HOUSE_NUMBER_1': 'hidden field', 'ADD_HOUSE_SUFFIX_1': 'hidden field', 'ADD_ROAD_NAME': 'hidden field', 'ADD_ROAD_TYPE': 'hidden field', 'ADD_ROAD_SUFFIX': 'hidden field', 'ADD_LOCALITY_NAME': 'hidden field', 'ADD_STATE': 'hidden field', 'ADD_POSTCODE': 'hidden field', 'ADD_NUM_ROAD_ADDRESS': 'hidden field', 'Shape_Length': 'hidden field', 'Shape_Area': 'hidden field', });
lyr_GreaterBendigoProperties_11.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});