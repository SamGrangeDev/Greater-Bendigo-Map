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
var format_C2ZCommercial2Zone_2 = new ol.format.GeoJSON();
var features_C2ZCommercial2Zone_2 = format_C2ZCommercial2Zone_2.readFeatures(json_C2ZCommercial2Zone_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_C2ZCommercial2Zone_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_C2ZCommercial2Zone_2.addFeatures(features_C2ZCommercial2Zone_2);
var lyr_C2ZCommercial2Zone_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_C2ZCommercial2Zone_2, 
                style: style_C2ZCommercial2Zone_2,
                popuplayertitle: "C2Z - Commercial 2 Zone",
                interactive: false,
                title: '<img src="styles/legend/C2ZCommercial2Zone_2.png" /> C2Z - Commercial 2 Zone'
            });
var format_IN1ZIndustrial1Zone_3 = new ol.format.GeoJSON();
var features_IN1ZIndustrial1Zone_3 = format_IN1ZIndustrial1Zone_3.readFeatures(json_IN1ZIndustrial1Zone_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_IN1ZIndustrial1Zone_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_IN1ZIndustrial1Zone_3.addFeatures(features_IN1ZIndustrial1Zone_3);
var lyr_IN1ZIndustrial1Zone_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_IN1ZIndustrial1Zone_3, 
                style: style_IN1ZIndustrial1Zone_3,
                popuplayertitle: "IN1Z - Industrial 1 Zone",
                interactive: false,
                title: '<img src="styles/legend/IN1ZIndustrial1Zone_3.png" /> IN1Z - Industrial 1 Zone'
            });
var format_IN3ZIndustrial3Zone_4 = new ol.format.GeoJSON();
var features_IN3ZIndustrial3Zone_4 = format_IN3ZIndustrial3Zone_4.readFeatures(json_IN3ZIndustrial3Zone_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_IN3ZIndustrial3Zone_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_IN3ZIndustrial3Zone_4.addFeatures(features_IN3ZIndustrial3Zone_4);
var lyr_IN3ZIndustrial3Zone_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_IN3ZIndustrial3Zone_4, 
                style: style_IN3ZIndustrial3Zone_4,
                popuplayertitle: "IN3Z - Industrial 3 Zone",
                interactive: false,
                title: '<img src="styles/legend/IN3ZIndustrial3Zone_4.png" /> IN3Z - Industrial 3 Zone'
            });
var format_PCRZPublicConservationandResourceZone_5 = new ol.format.GeoJSON();
var features_PCRZPublicConservationandResourceZone_5 = format_PCRZPublicConservationandResourceZone_5.readFeatures(json_PCRZPublicConservationandResourceZone_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PCRZPublicConservationandResourceZone_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PCRZPublicConservationandResourceZone_5.addFeatures(features_PCRZPublicConservationandResourceZone_5);
var lyr_PCRZPublicConservationandResourceZone_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PCRZPublicConservationandResourceZone_5, 
                style: style_PCRZPublicConservationandResourceZone_5,
                popuplayertitle: "PCRZ - Public Conservation and Resource Zone",
                interactive: false,
                title: '<img src="styles/legend/PCRZPublicConservationandResourceZone_5.png" /> PCRZ - Public Conservation and Resource Zone'
            });
var format_PPRZPublicParkandRecreationZone_6 = new ol.format.GeoJSON();
var features_PPRZPublicParkandRecreationZone_6 = format_PPRZPublicParkandRecreationZone_6.readFeatures(json_PPRZPublicParkandRecreationZone_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PPRZPublicParkandRecreationZone_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PPRZPublicParkandRecreationZone_6.addFeatures(features_PPRZPublicParkandRecreationZone_6);
var lyr_PPRZPublicParkandRecreationZone_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PPRZPublicParkandRecreationZone_6, 
                style: style_PPRZPublicParkandRecreationZone_6,
                popuplayertitle: "PPRZ - Public Park and Recreation Zone",
                interactive: false,
                title: '<img src="styles/legend/PPRZPublicParkandRecreationZone_6.png" /> PPRZ - Public Park and Recreation Zone'
            });
var format_PUZ1PublicUseZoneServiceandUtility_7 = new ol.format.GeoJSON();
var features_PUZ1PublicUseZoneServiceandUtility_7 = format_PUZ1PublicUseZoneServiceandUtility_7.readFeatures(json_PUZ1PublicUseZoneServiceandUtility_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PUZ1PublicUseZoneServiceandUtility_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PUZ1PublicUseZoneServiceandUtility_7.addFeatures(features_PUZ1PublicUseZoneServiceandUtility_7);
var lyr_PUZ1PublicUseZoneServiceandUtility_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PUZ1PublicUseZoneServiceandUtility_7, 
                style: style_PUZ1PublicUseZoneServiceandUtility_7,
                popuplayertitle: "PUZ1 - Public Use Zone-Service and Utility",
                interactive: false,
                title: '<img src="styles/legend/PUZ1PublicUseZoneServiceandUtility_7.png" /> PUZ1 - Public Use Zone-Service and Utility'
            });
var format_PUZ2PublicUseZoneEducation_8 = new ol.format.GeoJSON();
var features_PUZ2PublicUseZoneEducation_8 = format_PUZ2PublicUseZoneEducation_8.readFeatures(json_PUZ2PublicUseZoneEducation_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PUZ2PublicUseZoneEducation_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PUZ2PublicUseZoneEducation_8.addFeatures(features_PUZ2PublicUseZoneEducation_8);
var lyr_PUZ2PublicUseZoneEducation_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PUZ2PublicUseZoneEducation_8, 
                style: style_PUZ2PublicUseZoneEducation_8,
                popuplayertitle: "PUZ2 - Public Use Zone-Education",
                interactive: false,
                title: '<img src="styles/legend/PUZ2PublicUseZoneEducation_8.png" /> PUZ2 - Public Use Zone-Education'
            });
var format_PUZ5PublicUseZoneCemetery_Crematorium_9 = new ol.format.GeoJSON();
var features_PUZ5PublicUseZoneCemetery_Crematorium_9 = format_PUZ5PublicUseZoneCemetery_Crematorium_9.readFeatures(json_PUZ5PublicUseZoneCemetery_Crematorium_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PUZ5PublicUseZoneCemetery_Crematorium_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PUZ5PublicUseZoneCemetery_Crematorium_9.addFeatures(features_PUZ5PublicUseZoneCemetery_Crematorium_9);
var lyr_PUZ5PublicUseZoneCemetery_Crematorium_9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PUZ5PublicUseZoneCemetery_Crematorium_9, 
                style: style_PUZ5PublicUseZoneCemetery_Crematorium_9,
                popuplayertitle: "PUZ5 - Public Use Zone-Cemetery_Crematorium",
                interactive: false,
                title: '<img src="styles/legend/PUZ5PublicUseZoneCemetery_Crematorium_9.png" /> PUZ5 - Public Use Zone-Cemetery_Crematorium'
            });
var format_PUZ6PublicUseZoneLocalGovernment_10 = new ol.format.GeoJSON();
var features_PUZ6PublicUseZoneLocalGovernment_10 = format_PUZ6PublicUseZoneLocalGovernment_10.readFeatures(json_PUZ6PublicUseZoneLocalGovernment_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PUZ6PublicUseZoneLocalGovernment_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PUZ6PublicUseZoneLocalGovernment_10.addFeatures(features_PUZ6PublicUseZoneLocalGovernment_10);
var lyr_PUZ6PublicUseZoneLocalGovernment_10 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PUZ6PublicUseZoneLocalGovernment_10, 
                style: style_PUZ6PublicUseZoneLocalGovernment_10,
                popuplayertitle: "PUZ6 - Public Use Zone-Local Government",
                interactive: false,
                title: '<img src="styles/legend/PUZ6PublicUseZoneLocalGovernment_10.png" /> PUZ6 - Public Use Zone-Local Government'
            });
var format_RCZRuralConservationZone_11 = new ol.format.GeoJSON();
var features_RCZRuralConservationZone_11 = format_RCZRuralConservationZone_11.readFeatures(json_RCZRuralConservationZone_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_RCZRuralConservationZone_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RCZRuralConservationZone_11.addFeatures(features_RCZRuralConservationZone_11);
var lyr_RCZRuralConservationZone_11 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_RCZRuralConservationZone_11, 
                style: style_RCZRuralConservationZone_11,
                popuplayertitle: "RCZ - Rural Conservation Zone",
                interactive: false,
                title: '<img src="styles/legend/RCZRuralConservationZone_11.png" /> RCZ - Rural Conservation Zone'
            });
var format_FZFarmingZone_12 = new ol.format.GeoJSON();
var features_FZFarmingZone_12 = format_FZFarmingZone_12.readFeatures(json_FZFarmingZone_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_FZFarmingZone_12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_FZFarmingZone_12.addFeatures(features_FZFarmingZone_12);
var lyr_FZFarmingZone_12 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_FZFarmingZone_12, 
                style: style_FZFarmingZone_12,
                popuplayertitle: "FZ - Farming Zone",
                interactive: false,
                title: '<img src="styles/legend/FZFarmingZone_12.png" /> FZ - Farming Zone'
            });
var format_TRZ1StateTransportInfrastructure_13 = new ol.format.GeoJSON();
var features_TRZ1StateTransportInfrastructure_13 = format_TRZ1StateTransportInfrastructure_13.readFeatures(json_TRZ1StateTransportInfrastructure_13, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_TRZ1StateTransportInfrastructure_13 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TRZ1StateTransportInfrastructure_13.addFeatures(features_TRZ1StateTransportInfrastructure_13);
var lyr_TRZ1StateTransportInfrastructure_13 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TRZ1StateTransportInfrastructure_13, 
                style: style_TRZ1StateTransportInfrastructure_13,
                popuplayertitle: "TRZ1 - State Transport Infrastructure",
                interactive: false,
                title: '<img src="styles/legend/TRZ1StateTransportInfrastructure_13.png" /> TRZ1 - State Transport Infrastructure'
            });
var format_TRZ2PrincipalRoadNetwork_14 = new ol.format.GeoJSON();
var features_TRZ2PrincipalRoadNetwork_14 = format_TRZ2PrincipalRoadNetwork_14.readFeatures(json_TRZ2PrincipalRoadNetwork_14, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_TRZ2PrincipalRoadNetwork_14 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TRZ2PrincipalRoadNetwork_14.addFeatures(features_TRZ2PrincipalRoadNetwork_14);
var lyr_TRZ2PrincipalRoadNetwork_14 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TRZ2PrincipalRoadNetwork_14, 
                style: style_TRZ2PrincipalRoadNetwork_14,
                popuplayertitle: "TRZ2 - Principal Road Network",
                interactive: false,
                title: '<img src="styles/legend/TRZ2PrincipalRoadNetwork_14.png" /> TRZ2 - Principal Road Network'
            });
var format_RLZRuralLivingZone_15 = new ol.format.GeoJSON();
var features_RLZRuralLivingZone_15 = format_RLZRuralLivingZone_15.readFeatures(json_RLZRuralLivingZone_15, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_RLZRuralLivingZone_15 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RLZRuralLivingZone_15.addFeatures(features_RLZRuralLivingZone_15);
var lyr_RLZRuralLivingZone_15 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_RLZRuralLivingZone_15, 
                style: style_RLZRuralLivingZone_15,
                popuplayertitle: "RLZ - Rural Living Zone",
                interactive: false,
                title: '<img src="styles/legend/RLZRuralLivingZone_15.png" /> RLZ - Rural Living Zone'
            });
var format_GRZGeneralResidentialZone_16 = new ol.format.GeoJSON();
var features_GRZGeneralResidentialZone_16 = format_GRZGeneralResidentialZone_16.readFeatures(json_GRZGeneralResidentialZone_16, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_GRZGeneralResidentialZone_16 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_GRZGeneralResidentialZone_16.addFeatures(features_GRZGeneralResidentialZone_16);
var lyr_GRZGeneralResidentialZone_16 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_GRZGeneralResidentialZone_16, 
                style: style_GRZGeneralResidentialZone_16,
                popuplayertitle: "GRZ - General Residential Zone",
                interactive: false,
                title: '<img src="styles/legend/GRZGeneralResidentialZone_16.png" /> GRZ - General Residential Zone'
            });
var format_LDRZLowDensityResidentialZone_17 = new ol.format.GeoJSON();
var features_LDRZLowDensityResidentialZone_17 = format_LDRZLowDensityResidentialZone_17.readFeatures(json_LDRZLowDensityResidentialZone_17, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_LDRZLowDensityResidentialZone_17 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LDRZLowDensityResidentialZone_17.addFeatures(features_LDRZLowDensityResidentialZone_17);
var lyr_LDRZLowDensityResidentialZone_17 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_LDRZLowDensityResidentialZone_17, 
                style: style_LDRZLowDensityResidentialZone_17,
                popuplayertitle: "LDRZ - Low Density Residential Zone",
                interactive: false,
                title: '<img src="styles/legend/LDRZLowDensityResidentialZone_17.png" /> LDRZ - Low Density Residential Zone'
            });
var format_UGZUrbanGrowthZone_18 = new ol.format.GeoJSON();
var features_UGZUrbanGrowthZone_18 = format_UGZUrbanGrowthZone_18.readFeatures(json_UGZUrbanGrowthZone_18, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_UGZUrbanGrowthZone_18 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_UGZUrbanGrowthZone_18.addFeatures(features_UGZUrbanGrowthZone_18);
var lyr_UGZUrbanGrowthZone_18 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_UGZUrbanGrowthZone_18, 
                style: style_UGZUrbanGrowthZone_18,
                popuplayertitle: "UGZ - Urban Growth Zone",
                interactive: false,
                title: '<img src="styles/legend/UGZUrbanGrowthZone_18.png" /> UGZ - Urban Growth Zone'
            });
var format_BAOBufferAreaOverlay_19 = new ol.format.GeoJSON();
var features_BAOBufferAreaOverlay_19 = format_BAOBufferAreaOverlay_19.readFeatures(json_BAOBufferAreaOverlay_19, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BAOBufferAreaOverlay_19 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BAOBufferAreaOverlay_19.addFeatures(features_BAOBufferAreaOverlay_19);
var lyr_BAOBufferAreaOverlay_19 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_BAOBufferAreaOverlay_19, 
                style: style_BAOBufferAreaOverlay_19,
                popuplayertitle: "BAO - Buffer Area Overlay",
                interactive: false,
                title: '<img src="styles/legend/BAOBufferAreaOverlay_19.png" /> BAO - Buffer Area Overlay'
            });
var format_BMOBushfireManagementOverlay_20 = new ol.format.GeoJSON();
var features_BMOBushfireManagementOverlay_20 = format_BMOBushfireManagementOverlay_20.readFeatures(json_BMOBushfireManagementOverlay_20, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BMOBushfireManagementOverlay_20 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BMOBushfireManagementOverlay_20.addFeatures(features_BMOBushfireManagementOverlay_20);
var lyr_BMOBushfireManagementOverlay_20 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_BMOBushfireManagementOverlay_20, 
                style: style_BMOBushfireManagementOverlay_20,
                popuplayertitle: "BMO - Bushfire Management Overlay",
                interactive: false,
                title: '<img src="styles/legend/BMOBushfireManagementOverlay_20.png" /> BMO - Bushfire Management Overlay'
            });
var format_ESOEnvironmentalSignificanceOverlay_21 = new ol.format.GeoJSON();
var features_ESOEnvironmentalSignificanceOverlay_21 = format_ESOEnvironmentalSignificanceOverlay_21.readFeatures(json_ESOEnvironmentalSignificanceOverlay_21, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ESOEnvironmentalSignificanceOverlay_21 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ESOEnvironmentalSignificanceOverlay_21.addFeatures(features_ESOEnvironmentalSignificanceOverlay_21);
var lyr_ESOEnvironmentalSignificanceOverlay_21 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ESOEnvironmentalSignificanceOverlay_21, 
                style: style_ESOEnvironmentalSignificanceOverlay_21,
                popuplayertitle: "ESO - Environmental Significance Overlay",
                interactive: false,
                title: '<img src="styles/legend/ESOEnvironmentalSignificanceOverlay_21.png" /> ESO - Environmental Significance Overlay'
            });
var format_PAOPublicAcquisitionOverlay_22 = new ol.format.GeoJSON();
var features_PAOPublicAcquisitionOverlay_22 = format_PAOPublicAcquisitionOverlay_22.readFeatures(json_PAOPublicAcquisitionOverlay_22, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PAOPublicAcquisitionOverlay_22 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PAOPublicAcquisitionOverlay_22.addFeatures(features_PAOPublicAcquisitionOverlay_22);
var lyr_PAOPublicAcquisitionOverlay_22 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PAOPublicAcquisitionOverlay_22, 
                style: style_PAOPublicAcquisitionOverlay_22,
                popuplayertitle: "PAO - Public Acquisition Overlay",
                interactive: false,
                title: '<img src="styles/legend/PAOPublicAcquisitionOverlay_22.png" /> PAO - Public Acquisition Overlay'
            });
var format_RORestructureOverlay_23 = new ol.format.GeoJSON();
var features_RORestructureOverlay_23 = format_RORestructureOverlay_23.readFeatures(json_RORestructureOverlay_23, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_RORestructureOverlay_23 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RORestructureOverlay_23.addFeatures(features_RORestructureOverlay_23);
var lyr_RORestructureOverlay_23 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_RORestructureOverlay_23, 
                style: style_RORestructureOverlay_23,
                popuplayertitle: "RO - Restructure Overlay",
                interactive: false,
                title: '<img src="styles/legend/RORestructureOverlay_23.png" /> RO - Restructure Overlay'
            });
var format_RXORoadClosureOverlay_24 = new ol.format.GeoJSON();
var features_RXORoadClosureOverlay_24 = format_RXORoadClosureOverlay_24.readFeatures(json_RXORoadClosureOverlay_24, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_RXORoadClosureOverlay_24 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RXORoadClosureOverlay_24.addFeatures(features_RXORoadClosureOverlay_24);
var lyr_RXORoadClosureOverlay_24 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_RXORoadClosureOverlay_24, 
                style: style_RXORoadClosureOverlay_24,
                popuplayertitle: "RXO - Road Closure Overlay",
                interactive: false,
                title: '<img src="styles/legend/RXORoadClosureOverlay_24.png" /> RXO - Road Closure Overlay'
            });
var format_SLOSignificantLandscapeOverlay_25 = new ol.format.GeoJSON();
var features_SLOSignificantLandscapeOverlay_25 = format_SLOSignificantLandscapeOverlay_25.readFeatures(json_SLOSignificantLandscapeOverlay_25, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SLOSignificantLandscapeOverlay_25 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SLOSignificantLandscapeOverlay_25.addFeatures(features_SLOSignificantLandscapeOverlay_25);
var lyr_SLOSignificantLandscapeOverlay_25 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SLOSignificantLandscapeOverlay_25, 
                style: style_SLOSignificantLandscapeOverlay_25,
                popuplayertitle: "SLO - Significant Landscape Overlay",
                interactive: false,
                title: '<img src="styles/legend/SLOSignificantLandscapeOverlay_25.png" /> SLO - Significant Landscape Overlay'
            });
var format_SROStateResourceOverlay_26 = new ol.format.GeoJSON();
var features_SROStateResourceOverlay_26 = format_SROStateResourceOverlay_26.readFeatures(json_SROStateResourceOverlay_26, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SROStateResourceOverlay_26 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SROStateResourceOverlay_26.addFeatures(features_SROStateResourceOverlay_26);
var lyr_SROStateResourceOverlay_26 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SROStateResourceOverlay_26, 
                style: style_SROStateResourceOverlay_26,
                popuplayertitle: "SRO - State Resource Overlay",
                interactive: false,
                title: '<img src="styles/legend/SROStateResourceOverlay_26.png" /> SRO - State Resource Overlay'
            });
var format_FOFloodwayOverlay_27 = new ol.format.GeoJSON();
var features_FOFloodwayOverlay_27 = format_FOFloodwayOverlay_27.readFeatures(json_FOFloodwayOverlay_27, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_FOFloodwayOverlay_27 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_FOFloodwayOverlay_27.addFeatures(features_FOFloodwayOverlay_27);
var lyr_FOFloodwayOverlay_27 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_FOFloodwayOverlay_27, 
                style: style_FOFloodwayOverlay_27,
                popuplayertitle: "FO - Floodway Overlay",
                interactive: false,
                title: '<img src="styles/legend/FOFloodwayOverlay_27.png" /> FO - Floodway Overlay'
            });
var format_HOHeritageOverlay_28 = new ol.format.GeoJSON();
var features_HOHeritageOverlay_28 = format_HOHeritageOverlay_28.readFeatures(json_HOHeritageOverlay_28, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_HOHeritageOverlay_28 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_HOHeritageOverlay_28.addFeatures(features_HOHeritageOverlay_28);
var lyr_HOHeritageOverlay_28 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_HOHeritageOverlay_28, 
                style: style_HOHeritageOverlay_28,
                popuplayertitle: "HO - Heritage Overlay",
                interactive: false,
                title: '<img src="styles/legend/HOHeritageOverlay_28.png" /> HO - Heritage Overlay'
            });
var format_LSIOLandSubjecttoInundationOverlay_29 = new ol.format.GeoJSON();
var features_LSIOLandSubjecttoInundationOverlay_29 = format_LSIOLandSubjecttoInundationOverlay_29.readFeatures(json_LSIOLandSubjecttoInundationOverlay_29, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_LSIOLandSubjecttoInundationOverlay_29 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LSIOLandSubjecttoInundationOverlay_29.addFeatures(features_LSIOLandSubjecttoInundationOverlay_29);
var lyr_LSIOLandSubjecttoInundationOverlay_29 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_LSIOLandSubjecttoInundationOverlay_29, 
                style: style_LSIOLandSubjecttoInundationOverlay_29,
                popuplayertitle: "LSIO - Land Subject to Inundation Overlay",
                interactive: false,
                title: '<img src="styles/legend/LSIOLandSubjecttoInundationOverlay_29.png" /> LSIO - Land Subject to Inundation Overlay'
            });
var format_VPOVegetationProtectionOverlay_30 = new ol.format.GeoJSON();
var features_VPOVegetationProtectionOverlay_30 = format_VPOVegetationProtectionOverlay_30.readFeatures(json_VPOVegetationProtectionOverlay_30, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_VPOVegetationProtectionOverlay_30 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_VPOVegetationProtectionOverlay_30.addFeatures(features_VPOVegetationProtectionOverlay_30);
var lyr_VPOVegetationProtectionOverlay_30 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_VPOVegetationProtectionOverlay_30, 
                style: style_VPOVegetationProtectionOverlay_30,
                popuplayertitle: "VPO - Vegetation Protection Overlay",
                interactive: false,
                title: '<img src="styles/legend/VPOVegetationProtectionOverlay_30.png" /> VPO - Vegetation Protection Overlay'
            });
var format_HeritageRegister_31 = new ol.format.GeoJSON();
var features_HeritageRegister_31 = format_HeritageRegister_31.readFeatures(json_HeritageRegister_31, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_HeritageRegister_31 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_HeritageRegister_31.addFeatures(features_HeritageRegister_31);
var lyr_HeritageRegister_31 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_HeritageRegister_31, 
                style: style_HeritageRegister_31,
                popuplayertitle: "Heritage Register",
                interactive: false,
                title: '<img src="styles/legend/HeritageRegister_31.png" /> Heritage Register'
            });
var format_WBWaterwaysBuffered_32 = new ol.format.GeoJSON();
var features_WBWaterwaysBuffered_32 = format_WBWaterwaysBuffered_32.readFeatures(json_WBWaterwaysBuffered_32, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_WBWaterwaysBuffered_32 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_WBWaterwaysBuffered_32.addFeatures(features_WBWaterwaysBuffered_32);
var lyr_WBWaterwaysBuffered_32 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_WBWaterwaysBuffered_32, 
                style: style_WBWaterwaysBuffered_32,
                popuplayertitle: "WB - Waterways Buffered",
                interactive: false,
                title: '<img src="styles/legend/WBWaterwaysBuffered_32.png" /> WB - Waterways Buffered'
            });
var format_SSP5_33 = new ol.format.GeoJSON();
var features_SSP5_33 = format_SSP5_33.readFeatures(json_SSP5_33, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SSP5_33 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SSP5_33.addFeatures(features_SSP5_33);
var lyr_SSP5_33 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SSP5_33, 
                style: style_SSP5_33,
                popuplayertitle: "SSP 5",
                interactive: false,
                title: '<img src="styles/legend/SSP5_33.png" /> SSP 5'
            });
var format_SSP3_34 = new ol.format.GeoJSON();
var features_SSP3_34 = format_SSP3_34.readFeatures(json_SSP3_34, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SSP3_34 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SSP3_34.addFeatures(features_SSP3_34);
var lyr_SSP3_34 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SSP3_34, 
                style: style_SSP3_34,
                popuplayertitle: "SSP 3",
                interactive: false,
                title: '<img src="styles/legend/SSP3_34.png" /> SSP 3'
            });
var format_SSP2_35 = new ol.format.GeoJSON();
var features_SSP2_35 = format_SSP2_35.readFeatures(json_SSP2_35, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SSP2_35 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SSP2_35.addFeatures(features_SSP2_35);
var lyr_SSP2_35 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SSP2_35, 
                style: style_SSP2_35,
                popuplayertitle: "SSP 2",
                interactive: false,
                title: '<img src="styles/legend/SSP2_35.png" /> SSP 2'
            });
var format_DCPODevelopmentContributionsPlanOverlay_36 = new ol.format.GeoJSON();
var features_DCPODevelopmentContributionsPlanOverlay_36 = format_DCPODevelopmentContributionsPlanOverlay_36.readFeatures(json_DCPODevelopmentContributionsPlanOverlay_36, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_DCPODevelopmentContributionsPlanOverlay_36 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DCPODevelopmentContributionsPlanOverlay_36.addFeatures(features_DCPODevelopmentContributionsPlanOverlay_36);
var lyr_DCPODevelopmentContributionsPlanOverlay_36 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_DCPODevelopmentContributionsPlanOverlay_36, 
                style: style_DCPODevelopmentContributionsPlanOverlay_36,
                popuplayertitle: "DCPO - Development Contributions Plan Overlay",
                interactive: false,
                title: '<img src="styles/legend/DCPODevelopmentContributionsPlanOverlay_36.png" /> DCPO - Development Contributions Plan Overlay'
            });
var lyr_DCPArea_37 = new ol.layer.Image({
                            opacity: 1,
                            title: "DCP Area",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/DCPArea_37.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [16067866.505925, -4393120.008022, 16071183.782667, -4391147.164738]
                            })
                        });
var lyr_HuntlyDCPStructure_38 = new ol.layer.Image({
                            opacity: 1,
                            title: "Huntly DCP Structure",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/HuntlyDCPStructure_38.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [16067286.574507, -4393188.656366, 16071246.879428, -4390690.100797]
                            })
                        });
var lyr_DCPInfrastructureProjects_39 = new ol.layer.Image({
                            opacity: 1,
                            title: "DCP Infrastructure Projects",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/DCPInfrastructureProjects_39.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [16067287.579112, -4393191.338029, 16071247.427297, -4390689.256252]
                            })
                        });
var lyr_HuntlyDCPLandUGZLandandHuntlyWestArea_40 = new ol.layer.Image({
                            opacity: 1,
                            title: "Huntly DCP Land, UGZ Land and Huntly West Area",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/HuntlyDCPLandUGZLandandHuntlyWestArea_40.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [16066924.277670, -4393537.392398, 16071478.219030, -4391014.232711]
                            })
                        });
var lyr_BagshotPrecinctConceptStructurePlan_41 = new ol.layer.Image({
                            opacity: 1,
                            title: "Bagshot Precinct Concept Structure Plan",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/BagshotPrecinctConceptStructurePlan_41.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [16069919.504875, -4394514.728123, 16072530.017845, -4391267.477228]
                            })
                        });
var format_LGA_42 = new ol.format.GeoJSON();
var features_LGA_42 = format_LGA_42.readFeatures(json_LGA_42, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_LGA_42 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LGA_42.addFeatures(features_LGA_42);
var lyr_LGA_42 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_LGA_42, 
                style: style_LGA_42,
                popuplayertitle: "LGA",
                interactive: false,
                title: '<img src="styles/legend/LGA_42.png" /> LGA'
            });
var format_GreaterBendigoProperties_43 = new ol.format.GeoJSON();
var features_GreaterBendigoProperties_43 = format_GreaterBendigoProperties_43.readFeatures(json_GreaterBendigoProperties_43, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_GreaterBendigoProperties_43 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_GreaterBendigoProperties_43.addFeatures(features_GreaterBendigoProperties_43);
var lyr_GreaterBendigoProperties_43 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_GreaterBendigoProperties_43, 
                style: style_GreaterBendigoProperties_43,
                popuplayertitle: "Greater Bendigo Properties",
                interactive: true,
                title: '<img src="styles/legend/GreaterBendigoProperties_43.png" /> Greater Bendigo Properties'
            });
var format_Suburb_44 = new ol.format.GeoJSON();
var features_Suburb_44 = format_Suburb_44.readFeatures(json_Suburb_44, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Suburb_44 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Suburb_44.addFeatures(features_Suburb_44);
var lyr_Suburb_44 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Suburb_44, 
                style: style_Suburb_44,
                popuplayertitle: "Suburb",
                interactive: false,
                title: '<img src="styles/legend/Suburb_44.png" /> Suburb'
            });
var group_Administrative = new ol.layer.Group({
                                layers: [lyr_LGA_42,lyr_GreaterBendigoProperties_43,lyr_Suburb_44,],
                                fold: "open",
                                title: "Administrative"});
var group_StructurePlan = new ol.layer.Group({
                                layers: [lyr_BagshotPrecinctConceptStructurePlan_41,],
                                fold: "open",
                                title: "Structure Plan"});
var group_DCPItems = new ol.layer.Group({
                                layers: [lyr_DCPODevelopmentContributionsPlanOverlay_36,lyr_DCPArea_37,lyr_HuntlyDCPStructure_38,lyr_DCPInfrastructureProjects_39,lyr_HuntlyDCPLandUGZLandandHuntlyWestArea_40,],
                                fold: "open",
                                title: "DCP Items"});
var group_SSPFloodScenario20812100 = new ol.layer.Group({
                                layers: [lyr_SSP5_33,lyr_SSP3_34,lyr_SSP2_35,],
                                fold: "open",
                                title: "SSP Flood Scenario 2081-2100"});
var group_NDHDeductedOverlays = new ol.layer.Group({
                                layers: [lyr_FOFloodwayOverlay_27,lyr_HOHeritageOverlay_28,lyr_LSIOLandSubjecttoInundationOverlay_29,lyr_VPOVegetationProtectionOverlay_30,lyr_HeritageRegister_31,lyr_WBWaterwaysBuffered_32,],
                                fold: "open",
                                title: "NDH Deducted Overlays"});
var group_NotetoDD = new ol.layer.Group({
                                layers: [lyr_BAOBufferAreaOverlay_19,lyr_BMOBushfireManagementOverlay_20,lyr_ESOEnvironmentalSignificanceOverlay_21,lyr_PAOPublicAcquisitionOverlay_22,lyr_RORestructureOverlay_23,lyr_RXORoadClosureOverlay_24,lyr_SLOSignificantLandscapeOverlay_25,lyr_SROStateResourceOverlay_26,],
                                fold: "open",
                                title: "Note to DD"});
var group_OtherOverlays = new ol.layer.Group({
                                layers: [],
                                fold: "open",
                                title: "Other Overlays"});
var group_Zoning = new ol.layer.Group({
                                layers: [lyr_C2ZCommercial2Zone_2,lyr_IN1ZIndustrial1Zone_3,lyr_IN3ZIndustrial3Zone_4,lyr_PCRZPublicConservationandResourceZone_5,lyr_PPRZPublicParkandRecreationZone_6,lyr_PUZ1PublicUseZoneServiceandUtility_7,lyr_PUZ2PublicUseZoneEducation_8,lyr_PUZ5PublicUseZoneCemetery_Crematorium_9,lyr_PUZ6PublicUseZoneLocalGovernment_10,lyr_RCZRuralConservationZone_11,lyr_FZFarmingZone_12,lyr_TRZ1StateTransportInfrastructure_13,lyr_TRZ2PrincipalRoadNetwork_14,lyr_RLZRuralLivingZone_15,lyr_GRZGeneralResidentialZone_16,lyr_LDRZLowDensityResidentialZone_17,lyr_UGZUrbanGrowthZone_18,],
                                fold: "open",
                                title: "Zoning"});
var group_BaseLayer = new ol.layer.Group({
                                layers: [lyr_GoogleMaps_0,lyr_ESRISatelliteArcGISWorld_Imagery_1,],
                                fold: "open",
                                title: "Base Layer"});

lyr_GoogleMaps_0.setVisible(false);lyr_ESRISatelliteArcGISWorld_Imagery_1.setVisible(true);lyr_C2ZCommercial2Zone_2.setVisible(false);lyr_IN1ZIndustrial1Zone_3.setVisible(false);lyr_IN3ZIndustrial3Zone_4.setVisible(false);lyr_PCRZPublicConservationandResourceZone_5.setVisible(false);lyr_PPRZPublicParkandRecreationZone_6.setVisible(false);lyr_PUZ1PublicUseZoneServiceandUtility_7.setVisible(false);lyr_PUZ2PublicUseZoneEducation_8.setVisible(false);lyr_PUZ5PublicUseZoneCemetery_Crematorium_9.setVisible(false);lyr_PUZ6PublicUseZoneLocalGovernment_10.setVisible(false);lyr_RCZRuralConservationZone_11.setVisible(false);lyr_FZFarmingZone_12.setVisible(false);lyr_TRZ1StateTransportInfrastructure_13.setVisible(false);lyr_TRZ2PrincipalRoadNetwork_14.setVisible(false);lyr_RLZRuralLivingZone_15.setVisible(false);lyr_GRZGeneralResidentialZone_16.setVisible(false);lyr_LDRZLowDensityResidentialZone_17.setVisible(false);lyr_UGZUrbanGrowthZone_18.setVisible(false);lyr_BAOBufferAreaOverlay_19.setVisible(false);lyr_BMOBushfireManagementOverlay_20.setVisible(false);lyr_ESOEnvironmentalSignificanceOverlay_21.setVisible(false);lyr_PAOPublicAcquisitionOverlay_22.setVisible(false);lyr_RORestructureOverlay_23.setVisible(false);lyr_RXORoadClosureOverlay_24.setVisible(false);lyr_SLOSignificantLandscapeOverlay_25.setVisible(false);lyr_SROStateResourceOverlay_26.setVisible(false);lyr_FOFloodwayOverlay_27.setVisible(false);lyr_HOHeritageOverlay_28.setVisible(false);lyr_LSIOLandSubjecttoInundationOverlay_29.setVisible(false);lyr_VPOVegetationProtectionOverlay_30.setVisible(false);lyr_HeritageRegister_31.setVisible(false);lyr_WBWaterwaysBuffered_32.setVisible(false);lyr_SSP5_33.setVisible(false);lyr_SSP3_34.setVisible(false);lyr_SSP2_35.setVisible(false);lyr_DCPODevelopmentContributionsPlanOverlay_36.setVisible(false);lyr_DCPArea_37.setVisible(true);lyr_HuntlyDCPStructure_38.setVisible(true);lyr_DCPInfrastructureProjects_39.setVisible(true);lyr_HuntlyDCPLandUGZLandandHuntlyWestArea_40.setVisible(true);lyr_BagshotPrecinctConceptStructurePlan_41.setVisible(true);lyr_LGA_42.setVisible(true);lyr_GreaterBendigoProperties_43.setVisible(true);lyr_Suburb_44.setVisible(true);
var layersList = [group_BaseLayer,group_Zoning,group_NotetoDD,group_NDHDeductedOverlays,group_SSPFloodScenario20812100,group_DCPItems,group_StructurePlan,group_Administrative];
lyr_C2ZCommercial2Zone_2.set('fieldAliases', {'fid': 'fid', 'OBJECTID': 'OBJECTID', 'PFI': 'PFI', 'SCHEME_COD': 'SCHEME_COD', 'LGA_CODE': 'LGA_CODE', 'LGA': 'LGA', 'ZONE_NUM': 'ZONE_NUM', 'ZONE_STATU': 'ZONE_STATU', 'ZONE_CODE': 'ZONE_CODE', 'ZONE_DESCR': 'ZONE_DESCR', 'GAZ_BEGIN_': 'GAZ_BEGIN_', 'PFI_CREATE': 'PFI_CREATE', 'UFI': 'UFI', 'UFI_CREATE': 'UFI_CREATE', 'ZONE_CODE_': 'ZONE_CODE_', 'ZONE_COD_1': 'ZONE_COD_1', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', });
lyr_IN1ZIndustrial1Zone_3.set('fieldAliases', {'fid': 'fid', 'OBJECTID': 'OBJECTID', 'PFI': 'PFI', 'SCHEME_COD': 'SCHEME_COD', 'LGA_CODE': 'LGA_CODE', 'LGA': 'LGA', 'ZONE_NUM': 'ZONE_NUM', 'ZONE_STATU': 'ZONE_STATU', 'ZONE_CODE': 'ZONE_CODE', 'ZONE_DESCR': 'ZONE_DESCR', 'GAZ_BEGIN_': 'GAZ_BEGIN_', 'PFI_CREATE': 'PFI_CREATE', 'UFI': 'UFI', 'UFI_CREATE': 'UFI_CREATE', 'ZONE_CODE_': 'ZONE_CODE_', 'ZONE_COD_1': 'ZONE_COD_1', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', });
lyr_IN3ZIndustrial3Zone_4.set('fieldAliases', {'fid': 'fid', 'OBJECTID': 'OBJECTID', 'PFI': 'PFI', 'SCHEME_COD': 'SCHEME_COD', 'LGA_CODE': 'LGA_CODE', 'LGA': 'LGA', 'ZONE_NUM': 'ZONE_NUM', 'ZONE_STATU': 'ZONE_STATU', 'ZONE_CODE': 'ZONE_CODE', 'ZONE_DESCR': 'ZONE_DESCR', 'GAZ_BEGIN_': 'GAZ_BEGIN_', 'PFI_CREATE': 'PFI_CREATE', 'UFI': 'UFI', 'UFI_CREATE': 'UFI_CREATE', 'ZONE_CODE_': 'ZONE_CODE_', 'ZONE_COD_1': 'ZONE_COD_1', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', });
lyr_PCRZPublicConservationandResourceZone_5.set('fieldAliases', {'fid': 'fid', 'OBJECTID': 'OBJECTID', 'PFI': 'PFI', 'SCHEME_COD': 'SCHEME_COD', 'LGA_CODE': 'LGA_CODE', 'LGA': 'LGA', 'ZONE_NUM': 'ZONE_NUM', 'ZONE_STATU': 'ZONE_STATU', 'ZONE_CODE': 'ZONE_CODE', 'ZONE_DESCR': 'ZONE_DESCR', 'GAZ_BEGIN_': 'GAZ_BEGIN_', 'PFI_CREATE': 'PFI_CREATE', 'UFI': 'UFI', 'UFI_CREATE': 'UFI_CREATE', 'ZONE_CODE_': 'ZONE_CODE_', 'ZONE_COD_1': 'ZONE_COD_1', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', });
lyr_PPRZPublicParkandRecreationZone_6.set('fieldAliases', {'fid': 'fid', 'OBJECTID': 'OBJECTID', 'PFI': 'PFI', 'SCHEME_COD': 'SCHEME_COD', 'LGA_CODE': 'LGA_CODE', 'LGA': 'LGA', 'ZONE_NUM': 'ZONE_NUM', 'ZONE_STATU': 'ZONE_STATU', 'ZONE_CODE': 'ZONE_CODE', 'ZONE_DESCR': 'ZONE_DESCR', 'GAZ_BEGIN_': 'GAZ_BEGIN_', 'PFI_CREATE': 'PFI_CREATE', 'UFI': 'UFI', 'UFI_CREATE': 'UFI_CREATE', 'ZONE_CODE_': 'ZONE_CODE_', 'ZONE_COD_1': 'ZONE_COD_1', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', });
lyr_PUZ1PublicUseZoneServiceandUtility_7.set('fieldAliases', {'fid': 'fid', 'OBJECTID': 'OBJECTID', 'PFI': 'PFI', 'SCHEME_COD': 'SCHEME_COD', 'LGA_CODE': 'LGA_CODE', 'LGA': 'LGA', 'ZONE_NUM': 'ZONE_NUM', 'ZONE_STATU': 'ZONE_STATU', 'ZONE_CODE': 'ZONE_CODE', 'ZONE_DESCR': 'ZONE_DESCR', 'GAZ_BEGIN_': 'GAZ_BEGIN_', 'PFI_CREATE': 'PFI_CREATE', 'UFI': 'UFI', 'UFI_CREATE': 'UFI_CREATE', 'ZONE_CODE_': 'ZONE_CODE_', 'ZONE_COD_1': 'ZONE_COD_1', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', });
lyr_PUZ2PublicUseZoneEducation_8.set('fieldAliases', {'fid': 'fid', 'OBJECTID': 'OBJECTID', 'PFI': 'PFI', 'SCHEME_COD': 'SCHEME_COD', 'LGA_CODE': 'LGA_CODE', 'LGA': 'LGA', 'ZONE_NUM': 'ZONE_NUM', 'ZONE_STATU': 'ZONE_STATU', 'ZONE_CODE': 'ZONE_CODE', 'ZONE_DESCR': 'ZONE_DESCR', 'GAZ_BEGIN_': 'GAZ_BEGIN_', 'PFI_CREATE': 'PFI_CREATE', 'UFI': 'UFI', 'UFI_CREATE': 'UFI_CREATE', 'ZONE_CODE_': 'ZONE_CODE_', 'ZONE_COD_1': 'ZONE_COD_1', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', });
lyr_PUZ5PublicUseZoneCemetery_Crematorium_9.set('fieldAliases', {'fid': 'fid', 'OBJECTID': 'OBJECTID', 'PFI': 'PFI', 'SCHEME_COD': 'SCHEME_COD', 'LGA_CODE': 'LGA_CODE', 'LGA': 'LGA', 'ZONE_NUM': 'ZONE_NUM', 'ZONE_STATU': 'ZONE_STATU', 'ZONE_CODE': 'ZONE_CODE', 'ZONE_DESCR': 'ZONE_DESCR', 'GAZ_BEGIN_': 'GAZ_BEGIN_', 'PFI_CREATE': 'PFI_CREATE', 'UFI': 'UFI', 'UFI_CREATE': 'UFI_CREATE', 'ZONE_CODE_': 'ZONE_CODE_', 'ZONE_COD_1': 'ZONE_COD_1', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', });
lyr_PUZ6PublicUseZoneLocalGovernment_10.set('fieldAliases', {'fid': 'fid', 'OBJECTID': 'OBJECTID', 'PFI': 'PFI', 'SCHEME_COD': 'SCHEME_COD', 'LGA_CODE': 'LGA_CODE', 'LGA': 'LGA', 'ZONE_NUM': 'ZONE_NUM', 'ZONE_STATU': 'ZONE_STATU', 'ZONE_CODE': 'ZONE_CODE', 'ZONE_DESCR': 'ZONE_DESCR', 'GAZ_BEGIN_': 'GAZ_BEGIN_', 'PFI_CREATE': 'PFI_CREATE', 'UFI': 'UFI', 'UFI_CREATE': 'UFI_CREATE', 'ZONE_CODE_': 'ZONE_CODE_', 'ZONE_COD_1': 'ZONE_COD_1', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', });
lyr_RCZRuralConservationZone_11.set('fieldAliases', {'fid': 'fid', 'OBJECTID': 'OBJECTID', 'PFI': 'PFI', 'SCHEME_COD': 'SCHEME_COD', 'LGA_CODE': 'LGA_CODE', 'LGA': 'LGA', 'ZONE_NUM': 'ZONE_NUM', 'ZONE_STATU': 'ZONE_STATU', 'ZONE_CODE': 'ZONE_CODE', 'ZONE_DESCR': 'ZONE_DESCR', 'GAZ_BEGIN_': 'GAZ_BEGIN_', 'PFI_CREATE': 'PFI_CREATE', 'UFI': 'UFI', 'UFI_CREATE': 'UFI_CREATE', 'ZONE_CODE_': 'ZONE_CODE_', 'ZONE_COD_1': 'ZONE_COD_1', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', });
lyr_FZFarmingZone_12.set('fieldAliases', {'fid': 'fid', 'OBJECTID': 'OBJECTID', 'PFI': 'PFI', 'SCHEME_COD': 'SCHEME_COD', 'LGA_CODE': 'LGA_CODE', 'LGA': 'LGA', 'ZONE_NUM': 'ZONE_NUM', 'ZONE_STATU': 'ZONE_STATU', 'ZONE_CODE': 'ZONE_CODE', 'ZONE_DESCR': 'ZONE_DESCR', 'GAZ_BEGIN_': 'GAZ_BEGIN_', 'PFI_CREATE': 'PFI_CREATE', 'UFI': 'UFI', 'UFI_CREATE': 'UFI_CREATE', 'ZONE_CODE_': 'ZONE_CODE_', 'ZONE_COD_1': 'ZONE_COD_1', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', });
lyr_TRZ1StateTransportInfrastructure_13.set('fieldAliases', {'fid': 'fid', 'OBJECTID': 'OBJECTID', 'PFI': 'PFI', 'SCHEME_COD': 'SCHEME_COD', 'LGA_CODE': 'LGA_CODE', 'LGA': 'LGA', 'ZONE_NUM': 'ZONE_NUM', 'ZONE_STATU': 'ZONE_STATU', 'ZONE_CODE': 'ZONE_CODE', 'ZONE_DESCR': 'ZONE_DESCR', 'GAZ_BEGIN_': 'GAZ_BEGIN_', 'PFI_CREATE': 'PFI_CREATE', 'UFI': 'UFI', 'UFI_CREATE': 'UFI_CREATE', 'ZONE_CODE_': 'ZONE_CODE_', 'ZONE_COD_1': 'ZONE_COD_1', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', });
lyr_TRZ2PrincipalRoadNetwork_14.set('fieldAliases', {'fid': 'fid', 'OBJECTID': 'OBJECTID', 'PFI': 'PFI', 'SCHEME_COD': 'SCHEME_COD', 'LGA_CODE': 'LGA_CODE', 'LGA': 'LGA', 'ZONE_NUM': 'ZONE_NUM', 'ZONE_STATU': 'ZONE_STATU', 'ZONE_CODE': 'ZONE_CODE', 'ZONE_DESCR': 'ZONE_DESCR', 'GAZ_BEGIN_': 'GAZ_BEGIN_', 'PFI_CREATE': 'PFI_CREATE', 'UFI': 'UFI', 'UFI_CREATE': 'UFI_CREATE', 'ZONE_CODE_': 'ZONE_CODE_', 'ZONE_COD_1': 'ZONE_COD_1', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', });
lyr_RLZRuralLivingZone_15.set('fieldAliases', {'fid': 'fid', 'OBJECTID': 'OBJECTID', 'PFI': 'PFI', 'SCHEME_COD': 'SCHEME_COD', 'LGA_CODE': 'LGA_CODE', 'LGA': 'LGA', 'ZONE_NUM': 'ZONE_NUM', 'ZONE_STATU': 'ZONE_STATU', 'ZONE_CODE': 'ZONE_CODE', 'ZONE_DESCR': 'ZONE_DESCR', 'GAZ_BEGIN_': 'GAZ_BEGIN_', 'PFI_CREATE': 'PFI_CREATE', 'UFI': 'UFI', 'UFI_CREATE': 'UFI_CREATE', 'ZONE_CODE_': 'ZONE_CODE_', 'ZONE_COD_1': 'ZONE_COD_1', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', });
lyr_GRZGeneralResidentialZone_16.set('fieldAliases', {'fid': 'fid', 'OBJECTID': 'OBJECTID', 'PFI': 'PFI', 'SCHEME_COD': 'SCHEME_COD', 'LGA_CODE': 'LGA_CODE', 'LGA': 'LGA', 'ZONE_NUM': 'ZONE_NUM', 'ZONE_STATU': 'ZONE_STATU', 'ZONE_CODE': 'ZONE_CODE', 'ZONE_DESCR': 'ZONE_DESCR', 'GAZ_BEGIN_': 'GAZ_BEGIN_', 'PFI_CREATE': 'PFI_CREATE', 'UFI': 'UFI', 'UFI_CREATE': 'UFI_CREATE', 'ZONE_CODE_': 'ZONE_CODE_', 'ZONE_COD_1': 'ZONE_COD_1', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', });
lyr_LDRZLowDensityResidentialZone_17.set('fieldAliases', {'fid': 'fid', 'OBJECTID': 'OBJECTID', 'PFI': 'PFI', 'SCHEME_COD': 'SCHEME_COD', 'LGA_CODE': 'LGA_CODE', 'LGA': 'LGA', 'ZONE_NUM': 'ZONE_NUM', 'ZONE_STATU': 'ZONE_STATU', 'ZONE_CODE': 'ZONE_CODE', 'ZONE_DESCR': 'ZONE_DESCR', 'GAZ_BEGIN_': 'GAZ_BEGIN_', 'PFI_CREATE': 'PFI_CREATE', 'UFI': 'UFI', 'UFI_CREATE': 'UFI_CREATE', 'ZONE_CODE_': 'ZONE_CODE_', 'ZONE_COD_1': 'ZONE_COD_1', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', });
lyr_UGZUrbanGrowthZone_18.set('fieldAliases', {'fid': 'fid', 'OBJECTID': 'OBJECTID', 'PFI': 'PFI', 'SCHEME_COD': 'SCHEME_COD', 'LGA_CODE': 'LGA_CODE', 'LGA': 'LGA', 'ZONE_NUM': 'ZONE_NUM', 'ZONE_STATU': 'ZONE_STATU', 'ZONE_CODE': 'ZONE_CODE', 'ZONE_DESCR': 'ZONE_DESCR', 'GAZ_BEGIN_': 'GAZ_BEGIN_', 'PFI_CREATE': 'PFI_CREATE', 'UFI': 'UFI', 'UFI_CREATE': 'UFI_CREATE', 'ZONE_CODE_': 'ZONE_CODE_', 'ZONE_COD_1': 'ZONE_COD_1', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', });
lyr_BAOBufferAreaOverlay_19.set('fieldAliases', {'fid': 'fid', 'OBJECTID': 'OBJECTID', 'PFI': 'PFI', 'SCHEME_COD': 'SCHEME_COD', 'LGA_CODE': 'LGA_CODE', 'LGA': 'LGA', 'ZONE_NUM': 'ZONE_NUM', 'ZONE_STATU': 'ZONE_STATU', 'ZONE_CODE': 'ZONE_CODE', 'ZONE_DESCR': 'ZONE_DESCR', 'GAZ_BEGIN_': 'GAZ_BEGIN_', 'PFI_CREATE': 'PFI_CREATE', 'UFI': 'UFI', 'UFI_CREATE': 'UFI_CREATE', 'ZONE_CODE_': 'ZONE_CODE_', 'ZONE_COD_1': 'ZONE_COD_1', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', });
lyr_BMOBushfireManagementOverlay_20.set('fieldAliases', {'fid': 'fid', 'OBJECTID': 'OBJECTID', 'PFI': 'PFI', 'SCHEME_COD': 'SCHEME_COD', 'LGA_CODE': 'LGA_CODE', 'LGA': 'LGA', 'ZONE_NUM': 'ZONE_NUM', 'ZONE_STATU': 'ZONE_STATU', 'ZONE_CODE': 'ZONE_CODE', 'ZONE_DESCR': 'ZONE_DESCR', 'GAZ_BEGIN_': 'GAZ_BEGIN_', 'PFI_CREATE': 'PFI_CREATE', 'UFI': 'UFI', 'UFI_CREATE': 'UFI_CREATE', 'ZONE_CODE_': 'ZONE_CODE_', 'ZONE_COD_1': 'ZONE_COD_1', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'SHAPE_Area', });
lyr_ESOEnvironmentalSignificanceOverlay_21.set('fieldAliases', {'fid': 'fid', 'OBJECTID': 'OBJECTID', 'PFI': 'PFI', 'SCHEME_COD': 'SCHEME_COD', 'LGA_CODE': 'LGA_CODE', 'LGA': 'LGA', 'ZONE_NUM': 'ZONE_NUM', 'ZONE_STATU': 'ZONE_STATU', 'ZONE_CODE': 'ZONE_CODE', 'ZONE_DESCR': 'ZONE_DESCR', 'GAZ_BEGIN_': 'GAZ_BEGIN_', 'PFI_CREATE': 'PFI_CREATE', 'UFI': 'UFI', 'UFI_CREATE': 'UFI_CREATE', 'ZONE_CODE_': 'ZONE_CODE_', 'ZONE_COD_1': 'ZONE_COD_1', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', });
lyr_PAOPublicAcquisitionOverlay_22.set('fieldAliases', {'fid': 'fid', 'OBJECTID': 'OBJECTID', 'PFI': 'PFI', 'SCHEME_COD': 'SCHEME_COD', 'LGA_CODE': 'LGA_CODE', 'LGA': 'LGA', 'ZONE_NUM': 'ZONE_NUM', 'ZONE_STATU': 'ZONE_STATU', 'ZONE_CODE': 'ZONE_CODE', 'ZONE_DESCR': 'ZONE_DESCR', 'GAZ_BEGIN_': 'GAZ_BEGIN_', 'PFI_CREATE': 'PFI_CREATE', 'UFI': 'UFI', 'UFI_CREATE': 'UFI_CREATE', 'ZONE_CODE_': 'ZONE_CODE_', 'ZONE_COD_1': 'ZONE_COD_1', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'SHAPE_Area', });
lyr_RORestructureOverlay_23.set('fieldAliases', {'fid': 'fid', 'OBJECTID': 'OBJECTID', 'PFI': 'PFI', 'SCHEME_COD': 'SCHEME_COD', 'LGA_CODE': 'LGA_CODE', 'LGA': 'LGA', 'ZONE_NUM': 'ZONE_NUM', 'ZONE_STATU': 'ZONE_STATU', 'ZONE_CODE': 'ZONE_CODE', 'ZONE_DESCR': 'ZONE_DESCR', 'GAZ_BEGIN_': 'GAZ_BEGIN_', 'PFI_CREATE': 'PFI_CREATE', 'UFI': 'UFI', 'UFI_CREATE': 'UFI_CREATE', 'ZONE_CODE_': 'ZONE_CODE_', 'ZONE_COD_1': 'ZONE_COD_1', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'SHAPE_Area', });
lyr_RXORoadClosureOverlay_24.set('fieldAliases', {'fid': 'fid', 'OBJECTID': 'OBJECTID', 'PFI': 'PFI', 'SCHEME_COD': 'SCHEME_COD', 'LGA_CODE': 'LGA_CODE', 'LGA': 'LGA', 'ZONE_NUM': 'ZONE_NUM', 'ZONE_STATU': 'ZONE_STATU', 'ZONE_CODE': 'ZONE_CODE', 'ZONE_DESCR': 'ZONE_DESCR', 'GAZ_BEGIN_': 'GAZ_BEGIN_', 'PFI_CREATE': 'PFI_CREATE', 'UFI': 'UFI', 'UFI_CREATE': 'UFI_CREATE', 'ZONE_CODE_': 'ZONE_CODE_', 'ZONE_COD_1': 'ZONE_COD_1', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'SHAPE_Area', });
lyr_SLOSignificantLandscapeOverlay_25.set('fieldAliases', {'fid': 'fid', 'OBJECTID': 'OBJECTID', 'PFI': 'PFI', 'SCHEME_COD': 'SCHEME_COD', 'LGA_CODE': 'LGA_CODE', 'LGA': 'LGA', 'ZONE_NUM': 'ZONE_NUM', 'ZONE_STATU': 'ZONE_STATU', 'ZONE_CODE': 'ZONE_CODE', 'ZONE_DESCR': 'ZONE_DESCR', 'GAZ_BEGIN_': 'GAZ_BEGIN_', 'PFI_CREATE': 'PFI_CREATE', 'UFI': 'UFI', 'UFI_CREATE': 'UFI_CREATE', 'ZONE_CODE_': 'ZONE_CODE_', 'ZONE_COD_1': 'ZONE_COD_1', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'SHAPE_Area', });
lyr_SROStateResourceOverlay_26.set('fieldAliases', {'fid': 'fid', 'OBJECTID': 'OBJECTID', 'PFI': 'PFI', 'SCHEME_COD': 'SCHEME_COD', 'LGA_CODE': 'LGA_CODE', 'LGA': 'LGA', 'ZONE_NUM': 'ZONE_NUM', 'ZONE_STATU': 'ZONE_STATU', 'ZONE_CODE': 'ZONE_CODE', 'ZONE_DESCR': 'ZONE_DESCR', 'GAZ_BEGIN_': 'GAZ_BEGIN_', 'PFI_CREATE': 'PFI_CREATE', 'UFI': 'UFI', 'UFI_CREATE': 'UFI_CREATE', 'ZONE_CODE_': 'ZONE_CODE_', 'ZONE_COD_1': 'ZONE_COD_1', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'SHAPE_Area', });
lyr_FOFloodwayOverlay_27.set('fieldAliases', {'fid': 'fid', 'OBJECTID': 'OBJECTID', 'PFI': 'PFI', 'SCHEME_COD': 'SCHEME_COD', 'LGA_CODE': 'LGA_CODE', 'LGA': 'LGA', 'ZONE_NUM': 'ZONE_NUM', 'ZONE_STATU': 'ZONE_STATU', 'ZONE_CODE': 'ZONE_CODE', 'ZONE_DESCR': 'ZONE_DESCR', 'GAZ_BEGIN_': 'GAZ_BEGIN_', 'PFI_CREATE': 'PFI_CREATE', 'UFI': 'UFI', 'UFI_CREATE': 'UFI_CREATE', 'ZONE_CODE_': 'ZONE_CODE_', 'ZONE_COD_1': 'ZONE_COD_1', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'SHAPE_Area', });
lyr_HOHeritageOverlay_28.set('fieldAliases', {'fid': 'fid', 'OBJECTID': 'OBJECTID', 'PFI': 'PFI', 'SCHEME_COD': 'SCHEME_COD', 'LGA_CODE': 'LGA_CODE', 'LGA': 'LGA', 'ZONE_NUM': 'ZONE_NUM', 'ZONE_STATU': 'ZONE_STATU', 'ZONE_CODE': 'ZONE_CODE', 'ZONE_DESCR': 'ZONE_DESCR', 'GAZ_BEGIN_': 'GAZ_BEGIN_', 'PFI_CREATE': 'PFI_CREATE', 'UFI': 'UFI', 'UFI_CREATE': 'UFI_CREATE', 'ZONE_CODE_': 'ZONE_CODE_', 'ZONE_COD_1': 'ZONE_COD_1', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'SHAPE_Area', });
lyr_LSIOLandSubjecttoInundationOverlay_29.set('fieldAliases', {'fid': 'fid', 'OBJECTID': 'OBJECTID', 'PFI': 'PFI', 'SCHEME_COD': 'SCHEME_COD', 'LGA_CODE': 'LGA_CODE', 'LGA': 'LGA', 'ZONE_NUM': 'ZONE_NUM', 'ZONE_STATU': 'ZONE_STATU', 'ZONE_CODE': 'ZONE_CODE', 'ZONE_DESCR': 'ZONE_DESCR', 'GAZ_BEGIN_': 'GAZ_BEGIN_', 'PFI_CREATE': 'PFI_CREATE', 'UFI': 'UFI', 'UFI_CREATE': 'UFI_CREATE', 'ZONE_CODE_': 'ZONE_CODE_', 'ZONE_COD_1': 'ZONE_COD_1', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'SHAPE_Area', });
lyr_VPOVegetationProtectionOverlay_30.set('fieldAliases', {'fid': 'fid', 'OBJECTID': 'OBJECTID', 'PFI': 'PFI', 'SCHEME_COD': 'SCHEME_COD', 'LGA_CODE': 'LGA_CODE', 'LGA': 'LGA', 'ZONE_NUM': 'ZONE_NUM', 'ZONE_STATU': 'ZONE_STATU', 'ZONE_CODE': 'ZONE_CODE', 'ZONE_DESCR': 'ZONE_DESCR', 'GAZ_BEGIN_': 'GAZ_BEGIN_', 'PFI_CREATE': 'PFI_CREATE', 'UFI': 'UFI', 'UFI_CREATE': 'UFI_CREATE', 'ZONE_CODE_': 'ZONE_CODE_', 'ZONE_COD_1': 'ZONE_COD_1', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'SHAPE_Area', });
lyr_HeritageRegister_31.set('fieldAliases', {'fid': 'fid', 'OBJECTID': 'OBJECTID', 'VDPID': 'VDPID', 'UFI': 'UFI', 'HERMES_NUM': 'HERMES_NUM', 'VHR_NUM': 'VHR_NUM', 'VHI_NUM': 'VHI_NUM', 'HERITAGE_O': 'HERITAGE_O', 'SITE_NAME': 'SITE_NAME', 'ID': 'ID', 'UFI_CREATE': 'UFI_CREATE', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', });
lyr_WBWaterwaysBuffered_32.set('fieldAliases', {'fid': 'fid', 'LayerName': 'LayerName', 'layer': 'layer', 'path': 'path', });
lyr_SSP5_33.set('fieldAliases', {'fid': 'fid', 'LayerName': 'LayerName', 'layer': 'layer', 'path': 'path', });
lyr_SSP3_34.set('fieldAliases', {'fid': 'fid', 'LayerName': 'LayerName', 'layer': 'layer', 'path': 'path', });
lyr_SSP2_35.set('fieldAliases', {'fid': 'fid', 'LayerName': 'LayerName', 'layer': 'layer', 'path': 'path', });
lyr_DCPODevelopmentContributionsPlanOverlay_36.set('fieldAliases', {'fid': 'fid', 'OBJECTID': 'OBJECTID', 'PFI': 'PFI', 'SCHEME_COD': 'SCHEME_COD', 'LGA_CODE': 'LGA_CODE', 'LGA': 'LGA', 'ZONE_NUM': 'ZONE_NUM', 'ZONE_STATU': 'ZONE_STATU', 'ZONE_CODE': 'ZONE_CODE', 'ZONE_DESCR': 'ZONE_DESCR', 'GAZ_BEGIN_': 'GAZ_BEGIN_', 'PFI_CREATE': 'PFI_CREATE', 'UFI': 'UFI', 'UFI_CREATE': 'UFI_CREATE', 'ZONE_CODE_': 'ZONE_CODE_', 'ZONE_COD_1': 'ZONE_COD_1', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'SHAPE_Area', });
lyr_LGA_42.set('fieldAliases', {'LGA_CODE24': 'LGA_CODE24', 'LGA_NAME24': 'LGA_NAME24', 'STE_CODE21': 'STE_CODE21', 'STE_NAME21': 'STE_NAME21', 'AUS_CODE21': 'AUS_CODE21', 'AUS_NAME21': 'AUS_NAME21', 'AREASQKM': 'AREASQKM', 'LOCI_URI21': 'LOCI_URI21', });
lyr_GreaterBendigoProperties_43.set('fieldAliases', {'fid': 'fid', 'OBJECTID': 'OBJECTID', 'PROP_PFI': 'PROP_PFI', 'PROP_LGA_CODE': 'PROP_LGA_CODE', 'PROP_PROPNUM': 'PROP_PROPNUM', 'PROP_PROPERTY_TYPE': 'PROP_PROPERTY_TYPE', 'PROP_MULTI_ASSESSMENT': 'PROP_MULTI_ASSESSMENT', 'PROP_STATUS': 'PROP_STATUS', 'ADD_EZI_ADDRESS': 'ADD_EZI_ADDRESS', 'ADD_IS_PRIMARY': 'ADD_IS_PRIMARY', 'ADD_HOUSE_NUMBER_1': 'ADD_HOUSE_NUMBER_1', 'ADD_HOUSE_SUFFIX_1': 'ADD_HOUSE_SUFFIX_1', 'ADD_ROAD_NAME': 'ADD_ROAD_NAME', 'ADD_ROAD_TYPE': 'ADD_ROAD_TYPE', 'ADD_ROAD_SUFFIX': 'ADD_ROAD_SUFFIX', 'ADD_LOCALITY_NAME': 'ADD_LOCALITY_NAME', 'ADD_STATE': 'ADD_STATE', 'ADD_POSTCODE': 'ADD_POSTCODE', 'ADD_NUM_ROAD_ADDRESS': 'ADD_NUM_ROAD_ADDRESS', 'Shape_Length': 'Shape_Length', 'Shape_Area': 'Shape_Area', });
lyr_Suburb_44.set('fieldAliases', {'LC_PLY_PID': 'LC_PLY_PID', 'LOC_PID': 'LOC_PID', 'DT_CREATE': 'DT_CREATE', 'LOC_NAME': 'LOC_NAME', 'LOC_CLASS': 'LOC_CLASS', 'STATE': 'STATE', });
lyr_C2ZCommercial2Zone_2.set('fieldImages', {'fid': 'TextEdit', 'OBJECTID': 'TextEdit', 'PFI': 'TextEdit', 'SCHEME_COD': 'TextEdit', 'LGA_CODE': 'TextEdit', 'LGA': 'TextEdit', 'ZONE_NUM': 'TextEdit', 'ZONE_STATU': 'TextEdit', 'ZONE_CODE': 'TextEdit', 'ZONE_DESCR': 'TextEdit', 'GAZ_BEGIN_': 'TextEdit', 'PFI_CREATE': 'TextEdit', 'UFI': 'TextEdit', 'UFI_CREATE': 'TextEdit', 'ZONE_CODE_': 'TextEdit', 'ZONE_COD_1': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_IN1ZIndustrial1Zone_3.set('fieldImages', {'fid': 'TextEdit', 'OBJECTID': 'TextEdit', 'PFI': 'TextEdit', 'SCHEME_COD': 'TextEdit', 'LGA_CODE': 'TextEdit', 'LGA': 'TextEdit', 'ZONE_NUM': 'TextEdit', 'ZONE_STATU': 'TextEdit', 'ZONE_CODE': 'TextEdit', 'ZONE_DESCR': 'TextEdit', 'GAZ_BEGIN_': 'TextEdit', 'PFI_CREATE': 'TextEdit', 'UFI': 'TextEdit', 'UFI_CREATE': 'TextEdit', 'ZONE_CODE_': 'TextEdit', 'ZONE_COD_1': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_IN3ZIndustrial3Zone_4.set('fieldImages', {'fid': 'TextEdit', 'OBJECTID': 'TextEdit', 'PFI': 'TextEdit', 'SCHEME_COD': 'TextEdit', 'LGA_CODE': 'TextEdit', 'LGA': 'TextEdit', 'ZONE_NUM': 'TextEdit', 'ZONE_STATU': 'TextEdit', 'ZONE_CODE': 'TextEdit', 'ZONE_DESCR': 'TextEdit', 'GAZ_BEGIN_': 'TextEdit', 'PFI_CREATE': 'TextEdit', 'UFI': 'TextEdit', 'UFI_CREATE': 'TextEdit', 'ZONE_CODE_': 'TextEdit', 'ZONE_COD_1': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_PCRZPublicConservationandResourceZone_5.set('fieldImages', {'fid': 'TextEdit', 'OBJECTID': 'TextEdit', 'PFI': 'TextEdit', 'SCHEME_COD': 'TextEdit', 'LGA_CODE': 'TextEdit', 'LGA': 'TextEdit', 'ZONE_NUM': 'TextEdit', 'ZONE_STATU': 'TextEdit', 'ZONE_CODE': 'TextEdit', 'ZONE_DESCR': 'TextEdit', 'GAZ_BEGIN_': 'TextEdit', 'PFI_CREATE': 'TextEdit', 'UFI': 'TextEdit', 'UFI_CREATE': 'TextEdit', 'ZONE_CODE_': 'TextEdit', 'ZONE_COD_1': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_PPRZPublicParkandRecreationZone_6.set('fieldImages', {'fid': 'TextEdit', 'OBJECTID': 'TextEdit', 'PFI': 'TextEdit', 'SCHEME_COD': 'TextEdit', 'LGA_CODE': 'TextEdit', 'LGA': 'TextEdit', 'ZONE_NUM': 'TextEdit', 'ZONE_STATU': 'TextEdit', 'ZONE_CODE': 'TextEdit', 'ZONE_DESCR': 'TextEdit', 'GAZ_BEGIN_': 'TextEdit', 'PFI_CREATE': 'TextEdit', 'UFI': 'TextEdit', 'UFI_CREATE': 'TextEdit', 'ZONE_CODE_': 'TextEdit', 'ZONE_COD_1': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_PUZ1PublicUseZoneServiceandUtility_7.set('fieldImages', {'fid': 'TextEdit', 'OBJECTID': 'TextEdit', 'PFI': 'TextEdit', 'SCHEME_COD': 'TextEdit', 'LGA_CODE': 'TextEdit', 'LGA': 'TextEdit', 'ZONE_NUM': 'TextEdit', 'ZONE_STATU': 'TextEdit', 'ZONE_CODE': 'TextEdit', 'ZONE_DESCR': 'TextEdit', 'GAZ_BEGIN_': 'TextEdit', 'PFI_CREATE': 'TextEdit', 'UFI': 'TextEdit', 'UFI_CREATE': 'TextEdit', 'ZONE_CODE_': 'TextEdit', 'ZONE_COD_1': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_PUZ2PublicUseZoneEducation_8.set('fieldImages', {'fid': 'TextEdit', 'OBJECTID': 'TextEdit', 'PFI': 'TextEdit', 'SCHEME_COD': 'TextEdit', 'LGA_CODE': 'TextEdit', 'LGA': 'TextEdit', 'ZONE_NUM': 'TextEdit', 'ZONE_STATU': 'TextEdit', 'ZONE_CODE': 'TextEdit', 'ZONE_DESCR': 'TextEdit', 'GAZ_BEGIN_': 'TextEdit', 'PFI_CREATE': 'TextEdit', 'UFI': 'TextEdit', 'UFI_CREATE': 'TextEdit', 'ZONE_CODE_': 'TextEdit', 'ZONE_COD_1': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_PUZ5PublicUseZoneCemetery_Crematorium_9.set('fieldImages', {'fid': 'TextEdit', 'OBJECTID': 'TextEdit', 'PFI': 'TextEdit', 'SCHEME_COD': 'TextEdit', 'LGA_CODE': 'TextEdit', 'LGA': 'TextEdit', 'ZONE_NUM': 'TextEdit', 'ZONE_STATU': 'TextEdit', 'ZONE_CODE': 'TextEdit', 'ZONE_DESCR': 'TextEdit', 'GAZ_BEGIN_': 'TextEdit', 'PFI_CREATE': 'TextEdit', 'UFI': 'TextEdit', 'UFI_CREATE': 'TextEdit', 'ZONE_CODE_': 'TextEdit', 'ZONE_COD_1': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_PUZ6PublicUseZoneLocalGovernment_10.set('fieldImages', {'fid': 'TextEdit', 'OBJECTID': 'TextEdit', 'PFI': 'TextEdit', 'SCHEME_COD': 'TextEdit', 'LGA_CODE': 'TextEdit', 'LGA': 'TextEdit', 'ZONE_NUM': 'TextEdit', 'ZONE_STATU': 'TextEdit', 'ZONE_CODE': 'TextEdit', 'ZONE_DESCR': 'TextEdit', 'GAZ_BEGIN_': 'TextEdit', 'PFI_CREATE': 'TextEdit', 'UFI': 'TextEdit', 'UFI_CREATE': 'TextEdit', 'ZONE_CODE_': 'TextEdit', 'ZONE_COD_1': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_RCZRuralConservationZone_11.set('fieldImages', {'fid': 'TextEdit', 'OBJECTID': 'TextEdit', 'PFI': 'TextEdit', 'SCHEME_COD': 'TextEdit', 'LGA_CODE': 'TextEdit', 'LGA': 'TextEdit', 'ZONE_NUM': 'TextEdit', 'ZONE_STATU': 'TextEdit', 'ZONE_CODE': 'TextEdit', 'ZONE_DESCR': 'TextEdit', 'GAZ_BEGIN_': 'TextEdit', 'PFI_CREATE': 'TextEdit', 'UFI': 'TextEdit', 'UFI_CREATE': 'TextEdit', 'ZONE_CODE_': 'TextEdit', 'ZONE_COD_1': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_FZFarmingZone_12.set('fieldImages', {'fid': 'TextEdit', 'OBJECTID': 'TextEdit', 'PFI': 'TextEdit', 'SCHEME_COD': 'TextEdit', 'LGA_CODE': 'TextEdit', 'LGA': 'TextEdit', 'ZONE_NUM': 'TextEdit', 'ZONE_STATU': 'TextEdit', 'ZONE_CODE': 'TextEdit', 'ZONE_DESCR': 'TextEdit', 'GAZ_BEGIN_': 'TextEdit', 'PFI_CREATE': 'TextEdit', 'UFI': 'TextEdit', 'UFI_CREATE': 'TextEdit', 'ZONE_CODE_': 'TextEdit', 'ZONE_COD_1': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_TRZ1StateTransportInfrastructure_13.set('fieldImages', {'fid': 'TextEdit', 'OBJECTID': 'TextEdit', 'PFI': 'TextEdit', 'SCHEME_COD': 'TextEdit', 'LGA_CODE': 'TextEdit', 'LGA': 'TextEdit', 'ZONE_NUM': 'TextEdit', 'ZONE_STATU': 'TextEdit', 'ZONE_CODE': 'TextEdit', 'ZONE_DESCR': 'TextEdit', 'GAZ_BEGIN_': 'TextEdit', 'PFI_CREATE': 'TextEdit', 'UFI': 'TextEdit', 'UFI_CREATE': 'TextEdit', 'ZONE_CODE_': 'TextEdit', 'ZONE_COD_1': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_TRZ2PrincipalRoadNetwork_14.set('fieldImages', {'fid': 'TextEdit', 'OBJECTID': 'TextEdit', 'PFI': 'TextEdit', 'SCHEME_COD': 'TextEdit', 'LGA_CODE': 'TextEdit', 'LGA': 'TextEdit', 'ZONE_NUM': 'TextEdit', 'ZONE_STATU': 'TextEdit', 'ZONE_CODE': 'TextEdit', 'ZONE_DESCR': 'TextEdit', 'GAZ_BEGIN_': 'TextEdit', 'PFI_CREATE': 'TextEdit', 'UFI': 'TextEdit', 'UFI_CREATE': 'TextEdit', 'ZONE_CODE_': 'TextEdit', 'ZONE_COD_1': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_RLZRuralLivingZone_15.set('fieldImages', {'fid': 'TextEdit', 'OBJECTID': 'TextEdit', 'PFI': 'TextEdit', 'SCHEME_COD': 'TextEdit', 'LGA_CODE': 'TextEdit', 'LGA': 'TextEdit', 'ZONE_NUM': 'TextEdit', 'ZONE_STATU': 'TextEdit', 'ZONE_CODE': 'TextEdit', 'ZONE_DESCR': 'TextEdit', 'GAZ_BEGIN_': 'TextEdit', 'PFI_CREATE': 'TextEdit', 'UFI': 'TextEdit', 'UFI_CREATE': 'TextEdit', 'ZONE_CODE_': 'TextEdit', 'ZONE_COD_1': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_GRZGeneralResidentialZone_16.set('fieldImages', {'fid': 'TextEdit', 'OBJECTID': 'TextEdit', 'PFI': 'TextEdit', 'SCHEME_COD': 'TextEdit', 'LGA_CODE': 'TextEdit', 'LGA': 'TextEdit', 'ZONE_NUM': 'TextEdit', 'ZONE_STATU': 'TextEdit', 'ZONE_CODE': 'TextEdit', 'ZONE_DESCR': 'TextEdit', 'GAZ_BEGIN_': 'TextEdit', 'PFI_CREATE': 'TextEdit', 'UFI': 'TextEdit', 'UFI_CREATE': 'TextEdit', 'ZONE_CODE_': 'TextEdit', 'ZONE_COD_1': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_LDRZLowDensityResidentialZone_17.set('fieldImages', {'fid': 'TextEdit', 'OBJECTID': 'TextEdit', 'PFI': 'TextEdit', 'SCHEME_COD': 'TextEdit', 'LGA_CODE': 'TextEdit', 'LGA': 'TextEdit', 'ZONE_NUM': 'TextEdit', 'ZONE_STATU': 'TextEdit', 'ZONE_CODE': 'TextEdit', 'ZONE_DESCR': 'TextEdit', 'GAZ_BEGIN_': 'TextEdit', 'PFI_CREATE': 'TextEdit', 'UFI': 'TextEdit', 'UFI_CREATE': 'TextEdit', 'ZONE_CODE_': 'TextEdit', 'ZONE_COD_1': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_UGZUrbanGrowthZone_18.set('fieldImages', {'fid': 'TextEdit', 'OBJECTID': 'TextEdit', 'PFI': 'TextEdit', 'SCHEME_COD': 'TextEdit', 'LGA_CODE': 'TextEdit', 'LGA': 'TextEdit', 'ZONE_NUM': 'TextEdit', 'ZONE_STATU': 'TextEdit', 'ZONE_CODE': 'TextEdit', 'ZONE_DESCR': 'TextEdit', 'GAZ_BEGIN_': 'TextEdit', 'PFI_CREATE': 'TextEdit', 'UFI': 'TextEdit', 'UFI_CREATE': 'TextEdit', 'ZONE_CODE_': 'TextEdit', 'ZONE_COD_1': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_BAOBufferAreaOverlay_19.set('fieldImages', {'fid': '', 'OBJECTID': '', 'PFI': '', 'SCHEME_COD': '', 'LGA_CODE': '', 'LGA': '', 'ZONE_NUM': '', 'ZONE_STATU': '', 'ZONE_CODE': '', 'ZONE_DESCR': '', 'GAZ_BEGIN_': '', 'PFI_CREATE': '', 'UFI': '', 'UFI_CREATE': '', 'ZONE_CODE_': '', 'ZONE_COD_1': '', 'Shape_Leng': '', 'Shape_Area': '', });
lyr_BMOBushfireManagementOverlay_20.set('fieldImages', {'fid': '', 'OBJECTID': '', 'PFI': '', 'SCHEME_COD': '', 'LGA_CODE': '', 'LGA': '', 'ZONE_NUM': '', 'ZONE_STATU': '', 'ZONE_CODE': '', 'ZONE_DESCR': '', 'GAZ_BEGIN_': '', 'PFI_CREATE': '', 'UFI': '', 'UFI_CREATE': '', 'ZONE_CODE_': '', 'ZONE_COD_1': '', 'Shape_Leng': '', 'Shape_Area': '', });
lyr_ESOEnvironmentalSignificanceOverlay_21.set('fieldImages', {'fid': '', 'OBJECTID': '', 'PFI': '', 'SCHEME_COD': '', 'LGA_CODE': '', 'LGA': '', 'ZONE_NUM': '', 'ZONE_STATU': '', 'ZONE_CODE': '', 'ZONE_DESCR': '', 'GAZ_BEGIN_': '', 'PFI_CREATE': '', 'UFI': '', 'UFI_CREATE': '', 'ZONE_CODE_': '', 'ZONE_COD_1': '', 'Shape_Leng': '', 'Shape_Area': '', });
lyr_PAOPublicAcquisitionOverlay_22.set('fieldImages', {'fid': '', 'OBJECTID': '', 'PFI': '', 'SCHEME_COD': '', 'LGA_CODE': '', 'LGA': '', 'ZONE_NUM': '', 'ZONE_STATU': '', 'ZONE_CODE': '', 'ZONE_DESCR': '', 'GAZ_BEGIN_': '', 'PFI_CREATE': '', 'UFI': '', 'UFI_CREATE': '', 'ZONE_CODE_': '', 'ZONE_COD_1': '', 'Shape_Leng': '', 'Shape_Area': '', });
lyr_RORestructureOverlay_23.set('fieldImages', {'fid': '', 'OBJECTID': '', 'PFI': '', 'SCHEME_COD': '', 'LGA_CODE': '', 'LGA': '', 'ZONE_NUM': '', 'ZONE_STATU': '', 'ZONE_CODE': '', 'ZONE_DESCR': '', 'GAZ_BEGIN_': '', 'PFI_CREATE': '', 'UFI': '', 'UFI_CREATE': '', 'ZONE_CODE_': '', 'ZONE_COD_1': '', 'Shape_Leng': '', 'Shape_Area': '', });
lyr_RXORoadClosureOverlay_24.set('fieldImages', {'fid': '', 'OBJECTID': '', 'PFI': '', 'SCHEME_COD': '', 'LGA_CODE': '', 'LGA': '', 'ZONE_NUM': '', 'ZONE_STATU': '', 'ZONE_CODE': '', 'ZONE_DESCR': '', 'GAZ_BEGIN_': '', 'PFI_CREATE': '', 'UFI': '', 'UFI_CREATE': '', 'ZONE_CODE_': '', 'ZONE_COD_1': '', 'Shape_Leng': '', 'Shape_Area': '', });
lyr_SLOSignificantLandscapeOverlay_25.set('fieldImages', {'fid': '', 'OBJECTID': '', 'PFI': '', 'SCHEME_COD': '', 'LGA_CODE': '', 'LGA': '', 'ZONE_NUM': '', 'ZONE_STATU': '', 'ZONE_CODE': '', 'ZONE_DESCR': '', 'GAZ_BEGIN_': '', 'PFI_CREATE': '', 'UFI': '', 'UFI_CREATE': '', 'ZONE_CODE_': '', 'ZONE_COD_1': '', 'Shape_Leng': '', 'Shape_Area': '', });
lyr_SROStateResourceOverlay_26.set('fieldImages', {'fid': '', 'OBJECTID': '', 'PFI': '', 'SCHEME_COD': '', 'LGA_CODE': '', 'LGA': '', 'ZONE_NUM': '', 'ZONE_STATU': '', 'ZONE_CODE': '', 'ZONE_DESCR': '', 'GAZ_BEGIN_': '', 'PFI_CREATE': '', 'UFI': '', 'UFI_CREATE': '', 'ZONE_CODE_': '', 'ZONE_COD_1': '', 'Shape_Leng': '', 'Shape_Area': '', });
lyr_FOFloodwayOverlay_27.set('fieldImages', {'fid': '', 'OBJECTID': '', 'PFI': '', 'SCHEME_COD': '', 'LGA_CODE': '', 'LGA': '', 'ZONE_NUM': '', 'ZONE_STATU': '', 'ZONE_CODE': '', 'ZONE_DESCR': '', 'GAZ_BEGIN_': '', 'PFI_CREATE': '', 'UFI': '', 'UFI_CREATE': '', 'ZONE_CODE_': '', 'ZONE_COD_1': '', 'Shape_Leng': '', 'Shape_Area': '', });
lyr_HOHeritageOverlay_28.set('fieldImages', {'fid': '', 'OBJECTID': '', 'PFI': '', 'SCHEME_COD': '', 'LGA_CODE': '', 'LGA': '', 'ZONE_NUM': '', 'ZONE_STATU': '', 'ZONE_CODE': '', 'ZONE_DESCR': '', 'GAZ_BEGIN_': '', 'PFI_CREATE': '', 'UFI': '', 'UFI_CREATE': '', 'ZONE_CODE_': '', 'ZONE_COD_1': '', 'Shape_Leng': '', 'Shape_Area': '', });
lyr_LSIOLandSubjecttoInundationOverlay_29.set('fieldImages', {'fid': '', 'OBJECTID': '', 'PFI': '', 'SCHEME_COD': '', 'LGA_CODE': '', 'LGA': '', 'ZONE_NUM': '', 'ZONE_STATU': '', 'ZONE_CODE': '', 'ZONE_DESCR': '', 'GAZ_BEGIN_': '', 'PFI_CREATE': '', 'UFI': '', 'UFI_CREATE': '', 'ZONE_CODE_': '', 'ZONE_COD_1': '', 'Shape_Leng': '', 'Shape_Area': '', });
lyr_VPOVegetationProtectionOverlay_30.set('fieldImages', {'fid': '', 'OBJECTID': 'TextEdit', 'PFI': 'TextEdit', 'SCHEME_COD': 'TextEdit', 'LGA_CODE': 'TextEdit', 'LGA': 'TextEdit', 'ZONE_NUM': 'TextEdit', 'ZONE_STATU': 'TextEdit', 'ZONE_CODE': 'TextEdit', 'ZONE_DESCR': 'TextEdit', 'GAZ_BEGIN_': 'TextEdit', 'PFI_CREATE': 'TextEdit', 'UFI': 'TextEdit', 'UFI_CREATE': 'TextEdit', 'ZONE_CODE_': 'TextEdit', 'ZONE_COD_1': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_HeritageRegister_31.set('fieldImages', {'fid': '', 'OBJECTID': '', 'VDPID': '', 'UFI': '', 'HERMES_NUM': '', 'VHR_NUM': '', 'VHI_NUM': '', 'HERITAGE_O': '', 'SITE_NAME': '', 'ID': '', 'UFI_CREATE': '', 'Shape_Leng': '', 'Shape_Area': '', });
lyr_WBWaterwaysBuffered_32.set('fieldImages', {'fid': 'TextEdit', 'LayerName': 'TextEdit', 'layer': 'TextEdit', 'path': 'TextEdit', });
lyr_SSP5_33.set('fieldImages', {'fid': 'TextEdit', 'LayerName': 'TextEdit', 'layer': 'TextEdit', 'path': 'TextEdit', });
lyr_SSP3_34.set('fieldImages', {'fid': 'TextEdit', 'LayerName': 'TextEdit', 'layer': 'TextEdit', 'path': 'TextEdit', });
lyr_SSP2_35.set('fieldImages', {'fid': 'TextEdit', 'LayerName': 'TextEdit', 'layer': 'TextEdit', 'path': 'TextEdit', });
lyr_DCPODevelopmentContributionsPlanOverlay_36.set('fieldImages', {'fid': '', 'OBJECTID': '', 'PFI': '', 'SCHEME_COD': '', 'LGA_CODE': '', 'LGA': '', 'ZONE_NUM': '', 'ZONE_STATU': '', 'ZONE_CODE': '', 'ZONE_DESCR': '', 'GAZ_BEGIN_': '', 'PFI_CREATE': '', 'UFI': '', 'UFI_CREATE': '', 'ZONE_CODE_': '', 'ZONE_COD_1': '', 'Shape_Leng': '', 'Shape_Area': '', });
lyr_LGA_42.set('fieldImages', {'LGA_CODE24': 'TextEdit', 'LGA_NAME24': 'TextEdit', 'STE_CODE21': 'TextEdit', 'STE_NAME21': 'TextEdit', 'AUS_CODE21': 'TextEdit', 'AUS_NAME21': 'TextEdit', 'AREASQKM': 'TextEdit', 'LOCI_URI21': 'TextEdit', });
lyr_GreaterBendigoProperties_43.set('fieldImages', {'fid': '', 'OBJECTID': '', 'PROP_PFI': '', 'PROP_LGA_CODE': '', 'PROP_PROPNUM': '', 'PROP_PROPERTY_TYPE': '', 'PROP_MULTI_ASSESSMENT': '', 'PROP_STATUS': '', 'ADD_EZI_ADDRESS': '', 'ADD_IS_PRIMARY': '', 'ADD_HOUSE_NUMBER_1': '', 'ADD_HOUSE_SUFFIX_1': '', 'ADD_ROAD_NAME': '', 'ADD_ROAD_TYPE': '', 'ADD_ROAD_SUFFIX': '', 'ADD_LOCALITY_NAME': '', 'ADD_STATE': '', 'ADD_POSTCODE': '', 'ADD_NUM_ROAD_ADDRESS': '', 'Shape_Length': '', 'Shape_Area': '', });
lyr_Suburb_44.set('fieldImages', {'LC_PLY_PID': 'TextEdit', 'LOC_PID': 'TextEdit', 'DT_CREATE': 'DateTime', 'LOC_NAME': 'TextEdit', 'LOC_CLASS': 'TextEdit', 'STATE': 'TextEdit', });
lyr_C2ZCommercial2Zone_2.set('fieldLabels', {'fid': 'hidden field', 'OBJECTID': 'hidden field', 'PFI': 'hidden field', 'SCHEME_COD': 'hidden field', 'LGA_CODE': 'hidden field', 'LGA': 'hidden field', 'ZONE_NUM': 'hidden field', 'ZONE_STATU': 'hidden field', 'ZONE_CODE': 'hidden field', 'ZONE_DESCR': 'hidden field', 'GAZ_BEGIN_': 'hidden field', 'PFI_CREATE': 'hidden field', 'UFI': 'hidden field', 'UFI_CREATE': 'hidden field', 'ZONE_CODE_': 'hidden field', 'ZONE_COD_1': 'hidden field', 'Shape_Leng': 'hidden field', 'Shape_Area': 'hidden field', });
lyr_IN1ZIndustrial1Zone_3.set('fieldLabels', {'fid': 'hidden field', 'OBJECTID': 'hidden field', 'PFI': 'hidden field', 'SCHEME_COD': 'hidden field', 'LGA_CODE': 'hidden field', 'LGA': 'hidden field', 'ZONE_NUM': 'hidden field', 'ZONE_STATU': 'hidden field', 'ZONE_CODE': 'hidden field', 'ZONE_DESCR': 'hidden field', 'GAZ_BEGIN_': 'hidden field', 'PFI_CREATE': 'hidden field', 'UFI': 'hidden field', 'UFI_CREATE': 'hidden field', 'ZONE_CODE_': 'hidden field', 'ZONE_COD_1': 'hidden field', 'Shape_Leng': 'hidden field', 'Shape_Area': 'hidden field', });
lyr_IN3ZIndustrial3Zone_4.set('fieldLabels', {'fid': 'hidden field', 'OBJECTID': 'hidden field', 'PFI': 'hidden field', 'SCHEME_COD': 'hidden field', 'LGA_CODE': 'hidden field', 'LGA': 'hidden field', 'ZONE_NUM': 'hidden field', 'ZONE_STATU': 'hidden field', 'ZONE_CODE': 'hidden field', 'ZONE_DESCR': 'hidden field', 'GAZ_BEGIN_': 'hidden field', 'PFI_CREATE': 'hidden field', 'UFI': 'hidden field', 'UFI_CREATE': 'hidden field', 'ZONE_CODE_': 'hidden field', 'ZONE_COD_1': 'hidden field', 'Shape_Leng': 'hidden field', 'Shape_Area': 'hidden field', });
lyr_PCRZPublicConservationandResourceZone_5.set('fieldLabels', {'fid': 'hidden field', 'OBJECTID': 'hidden field', 'PFI': 'hidden field', 'SCHEME_COD': 'hidden field', 'LGA_CODE': 'hidden field', 'LGA': 'hidden field', 'ZONE_NUM': 'hidden field', 'ZONE_STATU': 'hidden field', 'ZONE_CODE': 'hidden field', 'ZONE_DESCR': 'hidden field', 'GAZ_BEGIN_': 'hidden field', 'PFI_CREATE': 'hidden field', 'UFI': 'hidden field', 'UFI_CREATE': 'hidden field', 'ZONE_CODE_': 'hidden field', 'ZONE_COD_1': 'hidden field', 'Shape_Leng': 'hidden field', 'Shape_Area': 'hidden field', });
lyr_PPRZPublicParkandRecreationZone_6.set('fieldLabels', {'fid': 'hidden field', 'OBJECTID': 'hidden field', 'PFI': 'hidden field', 'SCHEME_COD': 'hidden field', 'LGA_CODE': 'hidden field', 'LGA': 'hidden field', 'ZONE_NUM': 'hidden field', 'ZONE_STATU': 'hidden field', 'ZONE_CODE': 'hidden field', 'ZONE_DESCR': 'hidden field', 'GAZ_BEGIN_': 'hidden field', 'PFI_CREATE': 'hidden field', 'UFI': 'hidden field', 'UFI_CREATE': 'hidden field', 'ZONE_CODE_': 'hidden field', 'ZONE_COD_1': 'hidden field', 'Shape_Leng': 'hidden field', 'Shape_Area': 'hidden field', });
lyr_PUZ1PublicUseZoneServiceandUtility_7.set('fieldLabels', {'fid': 'hidden field', 'OBJECTID': 'hidden field', 'PFI': 'hidden field', 'SCHEME_COD': 'hidden field', 'LGA_CODE': 'hidden field', 'LGA': 'hidden field', 'ZONE_NUM': 'hidden field', 'ZONE_STATU': 'hidden field', 'ZONE_CODE': 'hidden field', 'ZONE_DESCR': 'hidden field', 'GAZ_BEGIN_': 'hidden field', 'PFI_CREATE': 'hidden field', 'UFI': 'hidden field', 'UFI_CREATE': 'hidden field', 'ZONE_CODE_': 'hidden field', 'ZONE_COD_1': 'hidden field', 'Shape_Leng': 'hidden field', 'Shape_Area': 'hidden field', });
lyr_PUZ2PublicUseZoneEducation_8.set('fieldLabels', {'fid': 'hidden field', 'OBJECTID': 'hidden field', 'PFI': 'hidden field', 'SCHEME_COD': 'hidden field', 'LGA_CODE': 'hidden field', 'LGA': 'hidden field', 'ZONE_NUM': 'hidden field', 'ZONE_STATU': 'hidden field', 'ZONE_CODE': 'hidden field', 'ZONE_DESCR': 'hidden field', 'GAZ_BEGIN_': 'hidden field', 'PFI_CREATE': 'hidden field', 'UFI': 'hidden field', 'UFI_CREATE': 'hidden field', 'ZONE_CODE_': 'hidden field', 'ZONE_COD_1': 'hidden field', 'Shape_Leng': 'hidden field', 'Shape_Area': 'hidden field', });
lyr_PUZ5PublicUseZoneCemetery_Crematorium_9.set('fieldLabels', {'fid': 'hidden field', 'OBJECTID': 'hidden field', 'PFI': 'hidden field', 'SCHEME_COD': 'hidden field', 'LGA_CODE': 'hidden field', 'LGA': 'hidden field', 'ZONE_NUM': 'hidden field', 'ZONE_STATU': 'hidden field', 'ZONE_CODE': 'hidden field', 'ZONE_DESCR': 'hidden field', 'GAZ_BEGIN_': 'hidden field', 'PFI_CREATE': 'hidden field', 'UFI': 'hidden field', 'UFI_CREATE': 'hidden field', 'ZONE_CODE_': 'hidden field', 'ZONE_COD_1': 'hidden field', 'Shape_Leng': 'hidden field', 'Shape_Area': 'hidden field', });
lyr_PUZ6PublicUseZoneLocalGovernment_10.set('fieldLabels', {'fid': 'hidden field', 'OBJECTID': 'hidden field', 'PFI': 'hidden field', 'SCHEME_COD': 'hidden field', 'LGA_CODE': 'hidden field', 'LGA': 'hidden field', 'ZONE_NUM': 'hidden field', 'ZONE_STATU': 'hidden field', 'ZONE_CODE': 'hidden field', 'ZONE_DESCR': 'hidden field', 'GAZ_BEGIN_': 'hidden field', 'PFI_CREATE': 'hidden field', 'UFI': 'hidden field', 'UFI_CREATE': 'hidden field', 'ZONE_CODE_': 'hidden field', 'ZONE_COD_1': 'hidden field', 'Shape_Leng': 'hidden field', 'Shape_Area': 'hidden field', });
lyr_RCZRuralConservationZone_11.set('fieldLabels', {'fid': 'hidden field', 'OBJECTID': 'hidden field', 'PFI': 'hidden field', 'SCHEME_COD': 'hidden field', 'LGA_CODE': 'hidden field', 'LGA': 'hidden field', 'ZONE_NUM': 'hidden field', 'ZONE_STATU': 'hidden field', 'ZONE_CODE': 'hidden field', 'ZONE_DESCR': 'hidden field', 'GAZ_BEGIN_': 'hidden field', 'PFI_CREATE': 'hidden field', 'UFI': 'hidden field', 'UFI_CREATE': 'hidden field', 'ZONE_CODE_': 'hidden field', 'ZONE_COD_1': 'hidden field', 'Shape_Leng': 'hidden field', 'Shape_Area': 'hidden field', });
lyr_FZFarmingZone_12.set('fieldLabels', {'fid': 'hidden field', 'OBJECTID': 'hidden field', 'PFI': 'hidden field', 'SCHEME_COD': 'hidden field', 'LGA_CODE': 'hidden field', 'LGA': 'hidden field', 'ZONE_NUM': 'hidden field', 'ZONE_STATU': 'hidden field', 'ZONE_CODE': 'hidden field', 'ZONE_DESCR': 'hidden field', 'GAZ_BEGIN_': 'hidden field', 'PFI_CREATE': 'hidden field', 'UFI': 'hidden field', 'UFI_CREATE': 'hidden field', 'ZONE_CODE_': 'hidden field', 'ZONE_COD_1': 'hidden field', 'Shape_Leng': 'hidden field', 'Shape_Area': 'hidden field', });
lyr_TRZ1StateTransportInfrastructure_13.set('fieldLabels', {'fid': 'hidden field', 'OBJECTID': 'hidden field', 'PFI': 'hidden field', 'SCHEME_COD': 'hidden field', 'LGA_CODE': 'hidden field', 'LGA': 'hidden field', 'ZONE_NUM': 'hidden field', 'ZONE_STATU': 'hidden field', 'ZONE_CODE': 'hidden field', 'ZONE_DESCR': 'hidden field', 'GAZ_BEGIN_': 'hidden field', 'PFI_CREATE': 'hidden field', 'UFI': 'hidden field', 'UFI_CREATE': 'hidden field', 'ZONE_CODE_': 'hidden field', 'ZONE_COD_1': 'hidden field', 'Shape_Leng': 'hidden field', 'Shape_Area': 'hidden field', });
lyr_TRZ2PrincipalRoadNetwork_14.set('fieldLabels', {'fid': 'hidden field', 'OBJECTID': 'hidden field', 'PFI': 'hidden field', 'SCHEME_COD': 'hidden field', 'LGA_CODE': 'hidden field', 'LGA': 'hidden field', 'ZONE_NUM': 'hidden field', 'ZONE_STATU': 'hidden field', 'ZONE_CODE': 'hidden field', 'ZONE_DESCR': 'hidden field', 'GAZ_BEGIN_': 'hidden field', 'PFI_CREATE': 'hidden field', 'UFI': 'hidden field', 'UFI_CREATE': 'hidden field', 'ZONE_CODE_': 'hidden field', 'ZONE_COD_1': 'hidden field', 'Shape_Leng': 'hidden field', 'Shape_Area': 'hidden field', });
lyr_RLZRuralLivingZone_15.set('fieldLabels', {'fid': 'hidden field', 'OBJECTID': 'hidden field', 'PFI': 'hidden field', 'SCHEME_COD': 'hidden field', 'LGA_CODE': 'hidden field', 'LGA': 'hidden field', 'ZONE_NUM': 'hidden field', 'ZONE_STATU': 'hidden field', 'ZONE_CODE': 'hidden field', 'ZONE_DESCR': 'hidden field', 'GAZ_BEGIN_': 'hidden field', 'PFI_CREATE': 'hidden field', 'UFI': 'hidden field', 'UFI_CREATE': 'hidden field', 'ZONE_CODE_': 'hidden field', 'ZONE_COD_1': 'hidden field', 'Shape_Leng': 'hidden field', 'Shape_Area': 'hidden field', });
lyr_GRZGeneralResidentialZone_16.set('fieldLabels', {'fid': 'hidden field', 'OBJECTID': 'hidden field', 'PFI': 'hidden field', 'SCHEME_COD': 'hidden field', 'LGA_CODE': 'hidden field', 'LGA': 'hidden field', 'ZONE_NUM': 'hidden field', 'ZONE_STATU': 'hidden field', 'ZONE_CODE': 'hidden field', 'ZONE_DESCR': 'hidden field', 'GAZ_BEGIN_': 'hidden field', 'PFI_CREATE': 'hidden field', 'UFI': 'hidden field', 'UFI_CREATE': 'hidden field', 'ZONE_CODE_': 'hidden field', 'ZONE_COD_1': 'hidden field', 'Shape_Leng': 'hidden field', 'Shape_Area': 'hidden field', });
lyr_LDRZLowDensityResidentialZone_17.set('fieldLabels', {'fid': 'hidden field', 'OBJECTID': 'hidden field', 'PFI': 'hidden field', 'SCHEME_COD': 'hidden field', 'LGA_CODE': 'hidden field', 'LGA': 'hidden field', 'ZONE_NUM': 'hidden field', 'ZONE_STATU': 'hidden field', 'ZONE_CODE': 'hidden field', 'ZONE_DESCR': 'hidden field', 'GAZ_BEGIN_': 'hidden field', 'PFI_CREATE': 'hidden field', 'UFI': 'hidden field', 'UFI_CREATE': 'hidden field', 'ZONE_CODE_': 'hidden field', 'ZONE_COD_1': 'hidden field', 'Shape_Leng': 'hidden field', 'Shape_Area': 'hidden field', });
lyr_UGZUrbanGrowthZone_18.set('fieldLabels', {'fid': 'hidden field', 'OBJECTID': 'hidden field', 'PFI': 'hidden field', 'SCHEME_COD': 'hidden field', 'LGA_CODE': 'hidden field', 'LGA': 'hidden field', 'ZONE_NUM': 'hidden field', 'ZONE_STATU': 'hidden field', 'ZONE_CODE': 'hidden field', 'ZONE_DESCR': 'hidden field', 'GAZ_BEGIN_': 'hidden field', 'PFI_CREATE': 'hidden field', 'UFI': 'hidden field', 'UFI_CREATE': 'hidden field', 'ZONE_CODE_': 'hidden field', 'ZONE_COD_1': 'hidden field', 'Shape_Leng': 'hidden field', 'Shape_Area': 'hidden field', });
lyr_BAOBufferAreaOverlay_19.set('fieldLabels', {'fid': 'hidden field', 'OBJECTID': 'hidden field', 'PFI': 'hidden field', 'SCHEME_COD': 'hidden field', 'LGA_CODE': 'hidden field', 'LGA': 'hidden field', 'ZONE_NUM': 'hidden field', 'ZONE_STATU': 'hidden field', 'ZONE_CODE': 'hidden field', 'ZONE_DESCR': 'hidden field', 'GAZ_BEGIN_': 'hidden field', 'PFI_CREATE': 'hidden field', 'UFI': 'hidden field', 'UFI_CREATE': 'hidden field', 'ZONE_CODE_': 'hidden field', 'ZONE_COD_1': 'hidden field', 'Shape_Leng': 'hidden field', 'Shape_Area': 'hidden field', });
lyr_BMOBushfireManagementOverlay_20.set('fieldLabels', {'fid': 'hidden field', 'OBJECTID': 'hidden field', 'PFI': 'hidden field', 'SCHEME_COD': 'hidden field', 'LGA_CODE': 'hidden field', 'LGA': 'hidden field', 'ZONE_NUM': 'hidden field', 'ZONE_STATU': 'hidden field', 'ZONE_CODE': 'hidden field', 'ZONE_DESCR': 'hidden field', 'GAZ_BEGIN_': 'hidden field', 'PFI_CREATE': 'hidden field', 'UFI': 'hidden field', 'UFI_CREATE': 'hidden field', 'ZONE_CODE_': 'hidden field', 'ZONE_COD_1': 'hidden field', 'Shape_Leng': 'hidden field', 'Shape_Area': 'hidden field', });
lyr_ESOEnvironmentalSignificanceOverlay_21.set('fieldLabels', {'fid': 'hidden field', 'OBJECTID': 'hidden field', 'PFI': 'hidden field', 'SCHEME_COD': 'hidden field', 'LGA_CODE': 'hidden field', 'LGA': 'hidden field', 'ZONE_NUM': 'hidden field', 'ZONE_STATU': 'hidden field', 'ZONE_CODE': 'hidden field', 'ZONE_DESCR': 'hidden field', 'GAZ_BEGIN_': 'hidden field', 'PFI_CREATE': 'hidden field', 'UFI': 'hidden field', 'UFI_CREATE': 'hidden field', 'ZONE_CODE_': 'hidden field', 'ZONE_COD_1': 'hidden field', 'Shape_Leng': 'hidden field', 'Shape_Area': 'hidden field', });
lyr_PAOPublicAcquisitionOverlay_22.set('fieldLabels', {'fid': 'hidden field', 'OBJECTID': 'hidden field', 'PFI': 'hidden field', 'SCHEME_COD': 'hidden field', 'LGA_CODE': 'hidden field', 'LGA': 'hidden field', 'ZONE_NUM': 'hidden field', 'ZONE_STATU': 'hidden field', 'ZONE_CODE': 'hidden field', 'ZONE_DESCR': 'hidden field', 'GAZ_BEGIN_': 'hidden field', 'PFI_CREATE': 'hidden field', 'UFI': 'hidden field', 'UFI_CREATE': 'hidden field', 'ZONE_CODE_': 'hidden field', 'ZONE_COD_1': 'hidden field', 'Shape_Leng': 'hidden field', 'Shape_Area': 'hidden field', });
lyr_RORestructureOverlay_23.set('fieldLabels', {'fid': 'hidden field', 'OBJECTID': 'hidden field', 'PFI': 'hidden field', 'SCHEME_COD': 'hidden field', 'LGA_CODE': 'hidden field', 'LGA': 'hidden field', 'ZONE_NUM': 'hidden field', 'ZONE_STATU': 'hidden field', 'ZONE_CODE': 'hidden field', 'ZONE_DESCR': 'hidden field', 'GAZ_BEGIN_': 'hidden field', 'PFI_CREATE': 'hidden field', 'UFI': 'hidden field', 'UFI_CREATE': 'hidden field', 'ZONE_CODE_': 'hidden field', 'ZONE_COD_1': 'hidden field', 'Shape_Leng': 'hidden field', 'Shape_Area': 'hidden field', });
lyr_RXORoadClosureOverlay_24.set('fieldLabels', {'fid': 'hidden field', 'OBJECTID': 'hidden field', 'PFI': 'hidden field', 'SCHEME_COD': 'hidden field', 'LGA_CODE': 'hidden field', 'LGA': 'hidden field', 'ZONE_NUM': 'hidden field', 'ZONE_STATU': 'hidden field', 'ZONE_CODE': 'hidden field', 'ZONE_DESCR': 'hidden field', 'GAZ_BEGIN_': 'hidden field', 'PFI_CREATE': 'hidden field', 'UFI': 'hidden field', 'UFI_CREATE': 'hidden field', 'ZONE_CODE_': 'hidden field', 'ZONE_COD_1': 'hidden field', 'Shape_Leng': 'hidden field', 'Shape_Area': 'hidden field', });
lyr_SLOSignificantLandscapeOverlay_25.set('fieldLabels', {'fid': 'hidden field', 'OBJECTID': 'hidden field', 'PFI': 'hidden field', 'SCHEME_COD': 'hidden field', 'LGA_CODE': 'hidden field', 'LGA': 'hidden field', 'ZONE_NUM': 'hidden field', 'ZONE_STATU': 'hidden field', 'ZONE_CODE': 'hidden field', 'ZONE_DESCR': 'hidden field', 'GAZ_BEGIN_': 'hidden field', 'PFI_CREATE': 'hidden field', 'UFI': 'hidden field', 'UFI_CREATE': 'hidden field', 'ZONE_CODE_': 'hidden field', 'ZONE_COD_1': 'hidden field', 'Shape_Leng': 'hidden field', 'Shape_Area': 'hidden field', });
lyr_SROStateResourceOverlay_26.set('fieldLabels', {'fid': 'hidden field', 'OBJECTID': 'hidden field', 'PFI': 'hidden field', 'SCHEME_COD': 'hidden field', 'LGA_CODE': 'hidden field', 'LGA': 'hidden field', 'ZONE_NUM': 'hidden field', 'ZONE_STATU': 'hidden field', 'ZONE_CODE': 'hidden field', 'ZONE_DESCR': 'hidden field', 'GAZ_BEGIN_': 'hidden field', 'PFI_CREATE': 'hidden field', 'UFI': 'hidden field', 'UFI_CREATE': 'hidden field', 'ZONE_CODE_': 'hidden field', 'ZONE_COD_1': 'hidden field', 'Shape_Leng': 'hidden field', 'Shape_Area': 'hidden field', });
lyr_FOFloodwayOverlay_27.set('fieldLabels', {'fid': 'hidden field', 'OBJECTID': 'hidden field', 'PFI': 'hidden field', 'SCHEME_COD': 'hidden field', 'LGA_CODE': 'hidden field', 'LGA': 'hidden field', 'ZONE_NUM': 'hidden field', 'ZONE_STATU': 'hidden field', 'ZONE_CODE': 'hidden field', 'ZONE_DESCR': 'hidden field', 'GAZ_BEGIN_': 'hidden field', 'PFI_CREATE': 'hidden field', 'UFI': 'hidden field', 'UFI_CREATE': 'hidden field', 'ZONE_CODE_': 'hidden field', 'ZONE_COD_1': 'hidden field', 'Shape_Leng': 'hidden field', 'Shape_Area': 'hidden field', });
lyr_HOHeritageOverlay_28.set('fieldLabels', {'fid': 'hidden field', 'OBJECTID': 'hidden field', 'PFI': 'hidden field', 'SCHEME_COD': 'hidden field', 'LGA_CODE': 'hidden field', 'LGA': 'hidden field', 'ZONE_NUM': 'hidden field', 'ZONE_STATU': 'hidden field', 'ZONE_CODE': 'hidden field', 'ZONE_DESCR': 'hidden field', 'GAZ_BEGIN_': 'hidden field', 'PFI_CREATE': 'hidden field', 'UFI': 'hidden field', 'UFI_CREATE': 'hidden field', 'ZONE_CODE_': 'hidden field', 'ZONE_COD_1': 'hidden field', 'Shape_Leng': 'hidden field', 'Shape_Area': 'hidden field', });
lyr_LSIOLandSubjecttoInundationOverlay_29.set('fieldLabels', {'fid': 'hidden field', 'OBJECTID': 'hidden field', 'PFI': 'hidden field', 'SCHEME_COD': 'hidden field', 'LGA_CODE': 'hidden field', 'LGA': 'hidden field', 'ZONE_NUM': 'hidden field', 'ZONE_STATU': 'hidden field', 'ZONE_CODE': 'hidden field', 'ZONE_DESCR': 'hidden field', 'GAZ_BEGIN_': 'hidden field', 'PFI_CREATE': 'hidden field', 'UFI': 'hidden field', 'UFI_CREATE': 'hidden field', 'ZONE_CODE_': 'hidden field', 'ZONE_COD_1': 'hidden field', 'Shape_Leng': 'hidden field', 'Shape_Area': 'hidden field', });
lyr_VPOVegetationProtectionOverlay_30.set('fieldLabels', {'fid': 'hidden field', 'OBJECTID': 'hidden field', 'PFI': 'hidden field', 'SCHEME_COD': 'hidden field', 'LGA_CODE': 'hidden field', 'LGA': 'hidden field', 'ZONE_NUM': 'hidden field', 'ZONE_STATU': 'hidden field', 'ZONE_CODE': 'hidden field', 'ZONE_DESCR': 'hidden field', 'GAZ_BEGIN_': 'hidden field', 'PFI_CREATE': 'hidden field', 'UFI': 'hidden field', 'UFI_CREATE': 'hidden field', 'ZONE_CODE_': 'hidden field', 'ZONE_COD_1': 'hidden field', 'Shape_Leng': 'hidden field', 'Shape_Area': 'hidden field', });
lyr_HeritageRegister_31.set('fieldLabels', {'fid': 'no label', 'OBJECTID': 'no label', 'VDPID': 'no label', 'UFI': 'no label', 'HERMES_NUM': 'no label', 'VHR_NUM': 'no label', 'VHI_NUM': 'no label', 'HERITAGE_O': 'no label', 'SITE_NAME': 'no label', 'ID': 'no label', 'UFI_CREATE': 'no label', 'Shape_Leng': 'no label', 'Shape_Area': 'no label', });
lyr_WBWaterwaysBuffered_32.set('fieldLabels', {'fid': 'no label', 'LayerName': 'no label', 'layer': 'no label', 'path': 'no label', });
lyr_SSP5_33.set('fieldLabels', {'fid': 'no label', 'LayerName': 'no label', 'layer': 'no label', 'path': 'no label', });
lyr_SSP3_34.set('fieldLabels', {'fid': 'no label', 'LayerName': 'no label', 'layer': 'no label', 'path': 'no label', });
lyr_SSP2_35.set('fieldLabels', {'fid': 'no label', 'LayerName': 'no label', 'layer': 'no label', 'path': 'no label', });
lyr_DCPODevelopmentContributionsPlanOverlay_36.set('fieldLabels', {'fid': 'hidden field', 'OBJECTID': 'hidden field', 'PFI': 'hidden field', 'SCHEME_COD': 'hidden field', 'LGA_CODE': 'hidden field', 'LGA': 'hidden field', 'ZONE_NUM': 'hidden field', 'ZONE_STATU': 'hidden field', 'ZONE_CODE': 'hidden field', 'ZONE_DESCR': 'hidden field', 'GAZ_BEGIN_': 'hidden field', 'PFI_CREATE': 'hidden field', 'UFI': 'hidden field', 'UFI_CREATE': 'hidden field', 'ZONE_CODE_': 'hidden field', 'ZONE_COD_1': 'hidden field', 'Shape_Leng': 'hidden field', 'Shape_Area': 'hidden field', });
lyr_LGA_42.set('fieldLabels', {'LGA_CODE24': 'hidden field', 'LGA_NAME24': 'hidden field', 'STE_CODE21': 'hidden field', 'STE_NAME21': 'hidden field', 'AUS_CODE21': 'hidden field', 'AUS_NAME21': 'hidden field', 'AREASQKM': 'hidden field', 'LOCI_URI21': 'hidden field', });
lyr_GreaterBendigoProperties_43.set('fieldLabels', {'fid': 'hidden field', 'OBJECTID': 'hidden field', 'PROP_PFI': 'hidden field', 'PROP_LGA_CODE': 'hidden field', 'PROP_PROPNUM': 'hidden field', 'PROP_PROPERTY_TYPE': 'hidden field', 'PROP_MULTI_ASSESSMENT': 'hidden field', 'PROP_STATUS': 'hidden field', 'ADD_EZI_ADDRESS': 'header label - visible with data', 'ADD_IS_PRIMARY': 'hidden field', 'ADD_HOUSE_NUMBER_1': 'hidden field', 'ADD_HOUSE_SUFFIX_1': 'hidden field', 'ADD_ROAD_NAME': 'hidden field', 'ADD_ROAD_TYPE': 'hidden field', 'ADD_ROAD_SUFFIX': 'hidden field', 'ADD_LOCALITY_NAME': 'hidden field', 'ADD_STATE': 'hidden field', 'ADD_POSTCODE': 'hidden field', 'ADD_NUM_ROAD_ADDRESS': 'hidden field', 'Shape_Length': 'hidden field', 'Shape_Area': 'hidden field', });
lyr_Suburb_44.set('fieldLabels', {'LC_PLY_PID': 'hidden field', 'LOC_PID': 'hidden field', 'DT_CREATE': 'hidden field', 'LOC_NAME': 'hidden field', 'LOC_CLASS': 'hidden field', 'STATE': 'hidden field', });
lyr_Suburb_44.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});