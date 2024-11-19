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
var format_AboriginalCulturalHeritageSensitivity_19 = new ol.format.GeoJSON();
var features_AboriginalCulturalHeritageSensitivity_19 = format_AboriginalCulturalHeritageSensitivity_19.readFeatures(json_AboriginalCulturalHeritageSensitivity_19, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_AboriginalCulturalHeritageSensitivity_19 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AboriginalCulturalHeritageSensitivity_19.addFeatures(features_AboriginalCulturalHeritageSensitivity_19);
var lyr_AboriginalCulturalHeritageSensitivity_19 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AboriginalCulturalHeritageSensitivity_19, 
                style: style_AboriginalCulturalHeritageSensitivity_19,
                popuplayertitle: "Aboriginal Cultural Heritage Sensitivity",
                interactive: false,
                title: '<img src="styles/legend/AboriginalCulturalHeritageSensitivity_19.png" /> Aboriginal Cultural Heritage Sensitivity'
            });
var format_RegisteredAboriginalParties_20 = new ol.format.GeoJSON();
var features_RegisteredAboriginalParties_20 = format_RegisteredAboriginalParties_20.readFeatures(json_RegisteredAboriginalParties_20, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_RegisteredAboriginalParties_20 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RegisteredAboriginalParties_20.addFeatures(features_RegisteredAboriginalParties_20);
var lyr_RegisteredAboriginalParties_20 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_RegisteredAboriginalParties_20, 
                style: style_RegisteredAboriginalParties_20,
                popuplayertitle: "Registered Aboriginal Parties",
                interactive: false,
                title: '<img src="styles/legend/RegisteredAboriginalParties_20.png" /> Registered Aboriginal Parties'
            });
var format_HeritageInventory_21 = new ol.format.GeoJSON();
var features_HeritageInventory_21 = format_HeritageInventory_21.readFeatures(json_HeritageInventory_21, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_HeritageInventory_21 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_HeritageInventory_21.addFeatures(features_HeritageInventory_21);
var lyr_HeritageInventory_21 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_HeritageInventory_21, 
                style: style_HeritageInventory_21,
                popuplayertitle: "Heritage Inventory",
                interactive: false,
                title: '<img src="styles/legend/HeritageInventory_21.png" /> Heritage Inventory'
            });
var format_RecognitionandSettlementAgreement_22 = new ol.format.GeoJSON();
var features_RecognitionandSettlementAgreement_22 = format_RecognitionandSettlementAgreement_22.readFeatures(json_RecognitionandSettlementAgreement_22, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_RecognitionandSettlementAgreement_22 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RecognitionandSettlementAgreement_22.addFeatures(features_RecognitionandSettlementAgreement_22);
var lyr_RecognitionandSettlementAgreement_22 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_RecognitionandSettlementAgreement_22, 
                style: style_RecognitionandSettlementAgreement_22,
                popuplayertitle: "Recognition and Settlement Agreement",
                interactive: false,
                title: '<img src="styles/legend/RecognitionandSettlementAgreement_22.png" /> Recognition and Settlement Agreement'
            });
var format_AEOAirportEnvironsOverlay_23 = new ol.format.GeoJSON();
var features_AEOAirportEnvironsOverlay_23 = format_AEOAirportEnvironsOverlay_23.readFeatures(json_AEOAirportEnvironsOverlay_23, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_AEOAirportEnvironsOverlay_23 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AEOAirportEnvironsOverlay_23.addFeatures(features_AEOAirportEnvironsOverlay_23);
var lyr_AEOAirportEnvironsOverlay_23 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AEOAirportEnvironsOverlay_23, 
                style: style_AEOAirportEnvironsOverlay_23,
                popuplayertitle: "AEO - Airport Environs Overlay",
                interactive: false,
                title: '<img src="styles/legend/AEOAirportEnvironsOverlay_23.png" /> AEO - Airport Environs Overlay'
            });
var format_CLPOCityLinkProjectOverlay_24 = new ol.format.GeoJSON();
var features_CLPOCityLinkProjectOverlay_24 = format_CLPOCityLinkProjectOverlay_24.readFeatures(json_CLPOCityLinkProjectOverlay_24, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CLPOCityLinkProjectOverlay_24 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CLPOCityLinkProjectOverlay_24.addFeatures(features_CLPOCityLinkProjectOverlay_24);
var lyr_CLPOCityLinkProjectOverlay_24 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CLPOCityLinkProjectOverlay_24, 
                style: style_CLPOCityLinkProjectOverlay_24,
                popuplayertitle: "CLPO - City Link Project Overlay",
                interactive: false,
                title: '<img src="styles/legend/CLPOCityLinkProjectOverlay_24.png" /> CLPO - City Link Project Overlay'
            });
var format_DCPODevelopmentContributionsPlanOverlay_25 = new ol.format.GeoJSON();
var features_DCPODevelopmentContributionsPlanOverlay_25 = format_DCPODevelopmentContributionsPlanOverlay_25.readFeatures(json_DCPODevelopmentContributionsPlanOverlay_25, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_DCPODevelopmentContributionsPlanOverlay_25 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DCPODevelopmentContributionsPlanOverlay_25.addFeatures(features_DCPODevelopmentContributionsPlanOverlay_25);
var lyr_DCPODevelopmentContributionsPlanOverlay_25 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_DCPODevelopmentContributionsPlanOverlay_25, 
                style: style_DCPODevelopmentContributionsPlanOverlay_25,
                popuplayertitle: "DCPO - Development Contributions Plan Overlay",
                interactive: false,
                title: '<img src="styles/legend/DCPODevelopmentContributionsPlanOverlay_25.png" /> DCPO - Development Contributions Plan Overlay'
            });
var format_DDODesignandDevelopmentOverlay_26 = new ol.format.GeoJSON();
var features_DDODesignandDevelopmentOverlay_26 = format_DDODesignandDevelopmentOverlay_26.readFeatures(json_DDODesignandDevelopmentOverlay_26, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_DDODesignandDevelopmentOverlay_26 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DDODesignandDevelopmentOverlay_26.addFeatures(features_DDODesignandDevelopmentOverlay_26);
var lyr_DDODesignandDevelopmentOverlay_26 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_DDODesignandDevelopmentOverlay_26, 
                style: style_DDODesignandDevelopmentOverlay_26,
                popuplayertitle: "DDO - Design and Development Overlay",
                interactive: false,
                title: '<img src="styles/legend/DDODesignandDevelopmentOverlay_26.png" /> DDO - Design and Development Overlay'
            });
var format_DPODevelopmentPlanOverlay_27 = new ol.format.GeoJSON();
var features_DPODevelopmentPlanOverlay_27 = format_DPODevelopmentPlanOverlay_27.readFeatures(json_DPODevelopmentPlanOverlay_27, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_DPODevelopmentPlanOverlay_27 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DPODevelopmentPlanOverlay_27.addFeatures(features_DPODevelopmentPlanOverlay_27);
var lyr_DPODevelopmentPlanOverlay_27 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_DPODevelopmentPlanOverlay_27, 
                style: style_DPODevelopmentPlanOverlay_27,
                popuplayertitle: "DPO - Development Plan Overlay",
                interactive: false,
                title: '<img src="styles/legend/DPODevelopmentPlanOverlay_27.png" /> DPO - Development Plan Overlay'
            });
var format_EAOEnvironmentalAuditOverlay_28 = new ol.format.GeoJSON();
var features_EAOEnvironmentalAuditOverlay_28 = format_EAOEnvironmentalAuditOverlay_28.readFeatures(json_EAOEnvironmentalAuditOverlay_28, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_EAOEnvironmentalAuditOverlay_28 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EAOEnvironmentalAuditOverlay_28.addFeatures(features_EAOEnvironmentalAuditOverlay_28);
var lyr_EAOEnvironmentalAuditOverlay_28 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EAOEnvironmentalAuditOverlay_28, 
                style: style_EAOEnvironmentalAuditOverlay_28,
                popuplayertitle: "EAO - Environmental Audit Overlay",
                interactive: false,
                title: '<img src="styles/legend/EAOEnvironmentalAuditOverlay_28.png" /> EAO - Environmental Audit Overlay'
            });
var format_EMOErosionManagementOverlay_29 = new ol.format.GeoJSON();
var features_EMOErosionManagementOverlay_29 = format_EMOErosionManagementOverlay_29.readFeatures(json_EMOErosionManagementOverlay_29, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_EMOErosionManagementOverlay_29 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EMOErosionManagementOverlay_29.addFeatures(features_EMOErosionManagementOverlay_29);
var lyr_EMOErosionManagementOverlay_29 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EMOErosionManagementOverlay_29, 
                style: style_EMOErosionManagementOverlay_29,
                popuplayertitle: "EMO - Erosion Management Overlay",
                interactive: false,
                title: '<img src="styles/legend/EMOErosionManagementOverlay_29.png" /> EMO - Erosion Management Overlay'
            });
var format_ICOInfrastructureContributionsOverlay_30 = new ol.format.GeoJSON();
var features_ICOInfrastructureContributionsOverlay_30 = format_ICOInfrastructureContributionsOverlay_30.readFeatures(json_ICOInfrastructureContributionsOverlay_30, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ICOInfrastructureContributionsOverlay_30 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ICOInfrastructureContributionsOverlay_30.addFeatures(features_ICOInfrastructureContributionsOverlay_30);
var lyr_ICOInfrastructureContributionsOverlay_30 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ICOInfrastructureContributionsOverlay_30, 
                style: style_ICOInfrastructureContributionsOverlay_30,
                popuplayertitle: "ICO - Infrastructure Contributions Overlay",
                interactive: false,
                title: '<img src="styles/legend/ICOInfrastructureContributionsOverlay_30.png" /> ICO - Infrastructure Contributions Overlay'
            });
var format_IPOIncorporatedPlanOverlay_31 = new ol.format.GeoJSON();
var features_IPOIncorporatedPlanOverlay_31 = format_IPOIncorporatedPlanOverlay_31.readFeatures(json_IPOIncorporatedPlanOverlay_31, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_IPOIncorporatedPlanOverlay_31 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_IPOIncorporatedPlanOverlay_31.addFeatures(features_IPOIncorporatedPlanOverlay_31);
var lyr_IPOIncorporatedPlanOverlay_31 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_IPOIncorporatedPlanOverlay_31, 
                style: style_IPOIncorporatedPlanOverlay_31,
                popuplayertitle: "IPO - Incorporated Plan Overlay",
                interactive: false,
                title: '<img src="styles/legend/IPOIncorporatedPlanOverlay_31.png" /> IPO - Incorporated Plan Overlay'
            });
var format_MAEOMelbourneAirportEnvironsOverlay_32 = new ol.format.GeoJSON();
var features_MAEOMelbourneAirportEnvironsOverlay_32 = format_MAEOMelbourneAirportEnvironsOverlay_32.readFeatures(json_MAEOMelbourneAirportEnvironsOverlay_32, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_MAEOMelbourneAirportEnvironsOverlay_32 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MAEOMelbourneAirportEnvironsOverlay_32.addFeatures(features_MAEOMelbourneAirportEnvironsOverlay_32);
var lyr_MAEOMelbourneAirportEnvironsOverlay_32 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_MAEOMelbourneAirportEnvironsOverlay_32, 
                style: style_MAEOMelbourneAirportEnvironsOverlay_32,
                popuplayertitle: "MAEO - Melbourne Airport Environs Overlay",
                interactive: false,
                title: '<img src="styles/legend/MAEOMelbourneAirportEnvironsOverlay_32.png" /> MAEO - Melbourne Airport Environs Overlay'
            });
var format_NCONeighbourhoodCharacterOverlay_33 = new ol.format.GeoJSON();
var features_NCONeighbourhoodCharacterOverlay_33 = format_NCONeighbourhoodCharacterOverlay_33.readFeatures(json_NCONeighbourhoodCharacterOverlay_33, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_NCONeighbourhoodCharacterOverlay_33 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_NCONeighbourhoodCharacterOverlay_33.addFeatures(features_NCONeighbourhoodCharacterOverlay_33);
var lyr_NCONeighbourhoodCharacterOverlay_33 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_NCONeighbourhoodCharacterOverlay_33, 
                style: style_NCONeighbourhoodCharacterOverlay_33,
                popuplayertitle: "NCO - Neighbourhood Character Overlay",
                interactive: false,
                title: '<img src="styles/legend/NCONeighbourhoodCharacterOverlay_33.png" /> NCO - Neighbourhood Character Overlay'
            });
var format_POParkingOverlay_34 = new ol.format.GeoJSON();
var features_POParkingOverlay_34 = format_POParkingOverlay_34.readFeatures(json_POParkingOverlay_34, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_POParkingOverlay_34 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_POParkingOverlay_34.addFeatures(features_POParkingOverlay_34);
var lyr_POParkingOverlay_34 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_POParkingOverlay_34, 
                style: style_POParkingOverlay_34,
                popuplayertitle: "PO - Parking Overlay",
                interactive: false,
                title: '<img src="styles/legend/POParkingOverlay_34.png" /> PO - Parking Overlay'
            });
var format_PSBProtectedSettlementBoundary_35 = new ol.format.GeoJSON();
var features_PSBProtectedSettlementBoundary_35 = format_PSBProtectedSettlementBoundary_35.readFeatures(json_PSBProtectedSettlementBoundary_35, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PSBProtectedSettlementBoundary_35 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PSBProtectedSettlementBoundary_35.addFeatures(features_PSBProtectedSettlementBoundary_35);
var lyr_PSBProtectedSettlementBoundary_35 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PSBProtectedSettlementBoundary_35, 
                style: style_PSBProtectedSettlementBoundary_35,
                popuplayertitle: "PSB - Protected Settlement Boundary",
                interactive: false,
                title: '<img src="styles/legend/PSBProtectedSettlementBoundary_35.png" /> PSB - Protected Settlement Boundary'
            });
var format_RFORuralFloodwayOverlay_36 = new ol.format.GeoJSON();
var features_RFORuralFloodwayOverlay_36 = format_RFORuralFloodwayOverlay_36.readFeatures(json_RFORuralFloodwayOverlay_36, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_RFORuralFloodwayOverlay_36 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RFORuralFloodwayOverlay_36.addFeatures(features_RFORuralFloodwayOverlay_36);
var lyr_RFORuralFloodwayOverlay_36 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_RFORuralFloodwayOverlay_36, 
                style: style_RFORuralFloodwayOverlay_36,
                popuplayertitle: "RFO - Rural Floodway Overlay",
                interactive: false,
                title: '<img src="styles/legend/RFORuralFloodwayOverlay_36.png" /> RFO - Rural Floodway Overlay'
            });
var format_SBOSpecialBuildingOverlay_37 = new ol.format.GeoJSON();
var features_SBOSpecialBuildingOverlay_37 = format_SBOSpecialBuildingOverlay_37.readFeatures(json_SBOSpecialBuildingOverlay_37, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SBOSpecialBuildingOverlay_37 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SBOSpecialBuildingOverlay_37.addFeatures(features_SBOSpecialBuildingOverlay_37);
var lyr_SBOSpecialBuildingOverlay_37 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SBOSpecialBuildingOverlay_37, 
                style: style_SBOSpecialBuildingOverlay_37,
                popuplayertitle: "SBO - Special Building Overlay",
                interactive: false,
                title: '<img src="styles/legend/SBOSpecialBuildingOverlay_37.png" /> SBO - Special Building Overlay'
            });
var format_SCOSpecificControlsOverlay_38 = new ol.format.GeoJSON();
var features_SCOSpecificControlsOverlay_38 = format_SCOSpecificControlsOverlay_38.readFeatures(json_SCOSpecificControlsOverlay_38, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SCOSpecificControlsOverlay_38 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SCOSpecificControlsOverlay_38.addFeatures(features_SCOSpecificControlsOverlay_38);
var lyr_SCOSpecificControlsOverlay_38 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SCOSpecificControlsOverlay_38, 
                style: style_SCOSpecificControlsOverlay_38,
                popuplayertitle: "SCO - Specific Controls Overlay",
                interactive: false,
                title: '<img src="styles/legend/SCOSpecificControlsOverlay_38.png" /> SCO - Specific Controls Overlay'
            });
var format_SMOSalinityManagementOverlay_39 = new ol.format.GeoJSON();
var features_SMOSalinityManagementOverlay_39 = format_SMOSalinityManagementOverlay_39.readFeatures(json_SMOSalinityManagementOverlay_39, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SMOSalinityManagementOverlay_39 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SMOSalinityManagementOverlay_39.addFeatures(features_SMOSalinityManagementOverlay_39);
var lyr_SMOSalinityManagementOverlay_39 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SMOSalinityManagementOverlay_39, 
                style: style_SMOSalinityManagementOverlay_39,
                popuplayertitle: "SMO - Salinity Management Overlay",
                interactive: false,
                title: '<img src="styles/legend/SMOSalinityManagementOverlay_39.png" /> SMO - Salinity Management Overlay'
            });
var format_BAOBufferAreaOverlay_40 = new ol.format.GeoJSON();
var features_BAOBufferAreaOverlay_40 = format_BAOBufferAreaOverlay_40.readFeatures(json_BAOBufferAreaOverlay_40, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BAOBufferAreaOverlay_40 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BAOBufferAreaOverlay_40.addFeatures(features_BAOBufferAreaOverlay_40);
var lyr_BAOBufferAreaOverlay_40 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_BAOBufferAreaOverlay_40, 
                style: style_BAOBufferAreaOverlay_40,
                popuplayertitle: "BAO - Buffer Area Overlay",
                interactive: false,
                title: '<img src="styles/legend/BAOBufferAreaOverlay_40.png" /> BAO - Buffer Area Overlay'
            });
var format_BMOBushfireManagementOverlay_41 = new ol.format.GeoJSON();
var features_BMOBushfireManagementOverlay_41 = format_BMOBushfireManagementOverlay_41.readFeatures(json_BMOBushfireManagementOverlay_41, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BMOBushfireManagementOverlay_41 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BMOBushfireManagementOverlay_41.addFeatures(features_BMOBushfireManagementOverlay_41);
var lyr_BMOBushfireManagementOverlay_41 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_BMOBushfireManagementOverlay_41, 
                style: style_BMOBushfireManagementOverlay_41,
                popuplayertitle: "BMO - Bushfire Management Overlay",
                interactive: false,
                title: '<img src="styles/legend/BMOBushfireManagementOverlay_41.png" /> BMO - Bushfire Management Overlay'
            });
var format_ESOEnvironmentalSignificanceOverlay_42 = new ol.format.GeoJSON();
var features_ESOEnvironmentalSignificanceOverlay_42 = format_ESOEnvironmentalSignificanceOverlay_42.readFeatures(json_ESOEnvironmentalSignificanceOverlay_42, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ESOEnvironmentalSignificanceOverlay_42 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ESOEnvironmentalSignificanceOverlay_42.addFeatures(features_ESOEnvironmentalSignificanceOverlay_42);
var lyr_ESOEnvironmentalSignificanceOverlay_42 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ESOEnvironmentalSignificanceOverlay_42, 
                style: style_ESOEnvironmentalSignificanceOverlay_42,
                popuplayertitle: "ESO - Environmental Significance Overlay",
                interactive: false,
                title: '<img src="styles/legend/ESOEnvironmentalSignificanceOverlay_42.png" /> ESO - Environmental Significance Overlay'
            });
var format_PAOPublicAcquisitionOverlay_43 = new ol.format.GeoJSON();
var features_PAOPublicAcquisitionOverlay_43 = format_PAOPublicAcquisitionOverlay_43.readFeatures(json_PAOPublicAcquisitionOverlay_43, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PAOPublicAcquisitionOverlay_43 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PAOPublicAcquisitionOverlay_43.addFeatures(features_PAOPublicAcquisitionOverlay_43);
var lyr_PAOPublicAcquisitionOverlay_43 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PAOPublicAcquisitionOverlay_43, 
                style: style_PAOPublicAcquisitionOverlay_43,
                popuplayertitle: "PAO - Public Acquisition Overlay",
                interactive: false,
                title: '<img src="styles/legend/PAOPublicAcquisitionOverlay_43.png" /> PAO - Public Acquisition Overlay'
            });
var format_RORestructureOverlay_44 = new ol.format.GeoJSON();
var features_RORestructureOverlay_44 = format_RORestructureOverlay_44.readFeatures(json_RORestructureOverlay_44, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_RORestructureOverlay_44 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RORestructureOverlay_44.addFeatures(features_RORestructureOverlay_44);
var lyr_RORestructureOverlay_44 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_RORestructureOverlay_44, 
                style: style_RORestructureOverlay_44,
                popuplayertitle: "RO - Restructure Overlay",
                interactive: false,
                title: '<img src="styles/legend/RORestructureOverlay_44.png" /> RO - Restructure Overlay'
            });
var format_RXORoadClosureOverlay_45 = new ol.format.GeoJSON();
var features_RXORoadClosureOverlay_45 = format_RXORoadClosureOverlay_45.readFeatures(json_RXORoadClosureOverlay_45, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_RXORoadClosureOverlay_45 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RXORoadClosureOverlay_45.addFeatures(features_RXORoadClosureOverlay_45);
var lyr_RXORoadClosureOverlay_45 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_RXORoadClosureOverlay_45, 
                style: style_RXORoadClosureOverlay_45,
                popuplayertitle: "RXO - Road Closure Overlay",
                interactive: false,
                title: '<img src="styles/legend/RXORoadClosureOverlay_45.png" /> RXO - Road Closure Overlay'
            });
var format_SLOSignificantLandscapeOverlay_46 = new ol.format.GeoJSON();
var features_SLOSignificantLandscapeOverlay_46 = format_SLOSignificantLandscapeOverlay_46.readFeatures(json_SLOSignificantLandscapeOverlay_46, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SLOSignificantLandscapeOverlay_46 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SLOSignificantLandscapeOverlay_46.addFeatures(features_SLOSignificantLandscapeOverlay_46);
var lyr_SLOSignificantLandscapeOverlay_46 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SLOSignificantLandscapeOverlay_46, 
                style: style_SLOSignificantLandscapeOverlay_46,
                popuplayertitle: "SLO - Significant Landscape Overlay",
                interactive: false,
                title: '<img src="styles/legend/SLOSignificantLandscapeOverlay_46.png" /> SLO - Significant Landscape Overlay'
            });
var format_SROStateResourceOverlay_47 = new ol.format.GeoJSON();
var features_SROStateResourceOverlay_47 = format_SROStateResourceOverlay_47.readFeatures(json_SROStateResourceOverlay_47, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SROStateResourceOverlay_47 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SROStateResourceOverlay_47.addFeatures(features_SROStateResourceOverlay_47);
var lyr_SROStateResourceOverlay_47 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SROStateResourceOverlay_47, 
                style: style_SROStateResourceOverlay_47,
                popuplayertitle: "SRO - State Resource Overlay",
                interactive: false,
                title: '<img src="styles/legend/SROStateResourceOverlay_47.png" /> SRO - State Resource Overlay'
            });
var format_FOFloodwayOverlay_48 = new ol.format.GeoJSON();
var features_FOFloodwayOverlay_48 = format_FOFloodwayOverlay_48.readFeatures(json_FOFloodwayOverlay_48, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_FOFloodwayOverlay_48 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_FOFloodwayOverlay_48.addFeatures(features_FOFloodwayOverlay_48);
var lyr_FOFloodwayOverlay_48 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_FOFloodwayOverlay_48, 
                style: style_FOFloodwayOverlay_48,
                popuplayertitle: "FO - Floodway Overlay",
                interactive: false,
                title: '<img src="styles/legend/FOFloodwayOverlay_48.png" /> FO - Floodway Overlay'
            });
var format_HOHeritageOverlay_49 = new ol.format.GeoJSON();
var features_HOHeritageOverlay_49 = format_HOHeritageOverlay_49.readFeatures(json_HOHeritageOverlay_49, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_HOHeritageOverlay_49 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_HOHeritageOverlay_49.addFeatures(features_HOHeritageOverlay_49);
var lyr_HOHeritageOverlay_49 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_HOHeritageOverlay_49, 
                style: style_HOHeritageOverlay_49,
                popuplayertitle: "HO - Heritage Overlay",
                interactive: false,
                title: '<img src="styles/legend/HOHeritageOverlay_49.png" /> HO - Heritage Overlay'
            });
var format_LSIOLandSubjecttoInundationOverlay_50 = new ol.format.GeoJSON();
var features_LSIOLandSubjecttoInundationOverlay_50 = format_LSIOLandSubjecttoInundationOverlay_50.readFeatures(json_LSIOLandSubjecttoInundationOverlay_50, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_LSIOLandSubjecttoInundationOverlay_50 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LSIOLandSubjecttoInundationOverlay_50.addFeatures(features_LSIOLandSubjecttoInundationOverlay_50);
var lyr_LSIOLandSubjecttoInundationOverlay_50 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_LSIOLandSubjecttoInundationOverlay_50, 
                style: style_LSIOLandSubjecttoInundationOverlay_50,
                popuplayertitle: "LSIO - Land Subject to Inundation Overlay",
                interactive: false,
                title: '<img src="styles/legend/LSIOLandSubjecttoInundationOverlay_50.png" /> LSIO - Land Subject to Inundation Overlay'
            });
var format_VPOVegetationProtectionOverlay_51 = new ol.format.GeoJSON();
var features_VPOVegetationProtectionOverlay_51 = format_VPOVegetationProtectionOverlay_51.readFeatures(json_VPOVegetationProtectionOverlay_51, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_VPOVegetationProtectionOverlay_51 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_VPOVegetationProtectionOverlay_51.addFeatures(features_VPOVegetationProtectionOverlay_51);
var lyr_VPOVegetationProtectionOverlay_51 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_VPOVegetationProtectionOverlay_51, 
                style: style_VPOVegetationProtectionOverlay_51,
                popuplayertitle: "VPO - Vegetation Protection Overlay",
                interactive: false,
                title: '<img src="styles/legend/VPOVegetationProtectionOverlay_51.png" /> VPO - Vegetation Protection Overlay'
            });
var format_HeritageRegister_52 = new ol.format.GeoJSON();
var features_HeritageRegister_52 = format_HeritageRegister_52.readFeatures(json_HeritageRegister_52, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_HeritageRegister_52 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_HeritageRegister_52.addFeatures(features_HeritageRegister_52);
var lyr_HeritageRegister_52 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_HeritageRegister_52, 
                style: style_HeritageRegister_52,
                popuplayertitle: "Heritage Register",
                interactive: false,
                title: '<img src="styles/legend/HeritageRegister_52.png" /> Heritage Register'
            });
var format_SSP5_53 = new ol.format.GeoJSON();
var features_SSP5_53 = format_SSP5_53.readFeatures(json_SSP5_53, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SSP5_53 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SSP5_53.addFeatures(features_SSP5_53);
var lyr_SSP5_53 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SSP5_53, 
                style: style_SSP5_53,
                popuplayertitle: "SSP 5",
                interactive: false,
                title: '<img src="styles/legend/SSP5_53.png" /> SSP 5'
            });
var format_SSP3_54 = new ol.format.GeoJSON();
var features_SSP3_54 = format_SSP3_54.readFeatures(json_SSP3_54, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SSP3_54 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SSP3_54.addFeatures(features_SSP3_54);
var lyr_SSP3_54 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SSP3_54, 
                style: style_SSP3_54,
                popuplayertitle: "SSP 3",
                interactive: false,
                title: '<img src="styles/legend/SSP3_54.png" /> SSP 3'
            });
var format_SSP2_55 = new ol.format.GeoJSON();
var features_SSP2_55 = format_SSP2_55.readFeatures(json_SSP2_55, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SSP2_55 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SSP2_55.addFeatures(features_SSP2_55);
var lyr_SSP2_55 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SSP2_55, 
                style: style_SSP2_55,
                popuplayertitle: "SSP 2",
                interactive: false,
                title: '<img src="styles/legend/SSP2_55.png" /> SSP 2'
            });
var lyr_BagshotPrecinctConceptStructurePlan_56 = new ol.layer.Image({
                            opacity: 1,
                            title: "Bagshot Precinct Concept Structure Plan",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/BagshotPrecinctConceptStructurePlan_56.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [16069919.504875, -4394514.728123, 16072530.017845, -4391267.477228]
                            })
                        });
var format_LGA_57 = new ol.format.GeoJSON();
var features_LGA_57 = format_LGA_57.readFeatures(json_LGA_57, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_LGA_57 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LGA_57.addFeatures(features_LGA_57);
var lyr_LGA_57 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_LGA_57, 
                style: style_LGA_57,
                popuplayertitle: "LGA",
                interactive: false,
                title: '<img src="styles/legend/LGA_57.png" /> LGA'
            });
var format_GreaterBendigoProperties_58 = new ol.format.GeoJSON();
var features_GreaterBendigoProperties_58 = format_GreaterBendigoProperties_58.readFeatures(json_GreaterBendigoProperties_58, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_GreaterBendigoProperties_58 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_GreaterBendigoProperties_58.addFeatures(features_GreaterBendigoProperties_58);
var lyr_GreaterBendigoProperties_58 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_GreaterBendigoProperties_58, 
                style: style_GreaterBendigoProperties_58,
                popuplayertitle: "Greater Bendigo Properties",
                interactive: true,
                title: '<img src="styles/legend/GreaterBendigoProperties_58.png" /> Greater Bendigo Properties'
            });
var format_Suburb_59 = new ol.format.GeoJSON();
var features_Suburb_59 = format_Suburb_59.readFeatures(json_Suburb_59, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Suburb_59 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Suburb_59.addFeatures(features_Suburb_59);
var lyr_Suburb_59 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Suburb_59, 
                style: style_Suburb_59,
                popuplayertitle: "Suburb",
                interactive: false,
                title: '<img src="styles/legend/Suburb_59.png" /> Suburb'
            });
var group_Administrative = new ol.layer.Group({
                                layers: [lyr_LGA_57,lyr_GreaterBendigoProperties_58,lyr_Suburb_59,],
                                fold: "open",
                                title: "Administrative"});
var group_StructurePlan = new ol.layer.Group({
                                layers: [lyr_BagshotPrecinctConceptStructurePlan_56,],
                                fold: "open",
                                title: "Structure Plan"});
var group_SSPFloodScenario20812100 = new ol.layer.Group({
                                layers: [lyr_SSP5_53,lyr_SSP3_54,lyr_SSP2_55,],
                                fold: "open",
                                title: "SSP Flood Scenario 2081-2100"});
var group_NDHDeductedOverlays = new ol.layer.Group({
                                layers: [lyr_FOFloodwayOverlay_48,lyr_HOHeritageOverlay_49,lyr_LSIOLandSubjecttoInundationOverlay_50,lyr_VPOVegetationProtectionOverlay_51,lyr_HeritageRegister_52,],
                                fold: "open",
                                title: "NDH Deducted Overlays"});
var group_NotetoDD = new ol.layer.Group({
                                layers: [lyr_BAOBufferAreaOverlay_40,lyr_BMOBushfireManagementOverlay_41,lyr_ESOEnvironmentalSignificanceOverlay_42,lyr_PAOPublicAcquisitionOverlay_43,lyr_RORestructureOverlay_44,lyr_RXORoadClosureOverlay_45,lyr_SLOSignificantLandscapeOverlay_46,lyr_SROStateResourceOverlay_47,],
                                fold: "open",
                                title: "Note to DD"});
var group_OtherOverlays = new ol.layer.Group({
                                layers: [lyr_AboriginalCulturalHeritageSensitivity_19,lyr_RegisteredAboriginalParties_20,lyr_HeritageInventory_21,lyr_RecognitionandSettlementAgreement_22,lyr_AEOAirportEnvironsOverlay_23,lyr_CLPOCityLinkProjectOverlay_24,lyr_DCPODevelopmentContributionsPlanOverlay_25,lyr_DDODesignandDevelopmentOverlay_26,lyr_DPODevelopmentPlanOverlay_27,lyr_EAOEnvironmentalAuditOverlay_28,lyr_EMOErosionManagementOverlay_29,lyr_ICOInfrastructureContributionsOverlay_30,lyr_IPOIncorporatedPlanOverlay_31,lyr_MAEOMelbourneAirportEnvironsOverlay_32,lyr_NCONeighbourhoodCharacterOverlay_33,lyr_POParkingOverlay_34,lyr_PSBProtectedSettlementBoundary_35,lyr_RFORuralFloodwayOverlay_36,lyr_SBOSpecialBuildingOverlay_37,lyr_SCOSpecificControlsOverlay_38,lyr_SMOSalinityManagementOverlay_39,],
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

lyr_GoogleMaps_0.setVisible(false);lyr_ESRISatelliteArcGISWorld_Imagery_1.setVisible(true);lyr_C2ZCommercial2Zone_2.setVisible(false);lyr_IN1ZIndustrial1Zone_3.setVisible(false);lyr_IN3ZIndustrial3Zone_4.setVisible(false);lyr_PCRZPublicConservationandResourceZone_5.setVisible(false);lyr_PPRZPublicParkandRecreationZone_6.setVisible(false);lyr_PUZ1PublicUseZoneServiceandUtility_7.setVisible(false);lyr_PUZ2PublicUseZoneEducation_8.setVisible(false);lyr_PUZ5PublicUseZoneCemetery_Crematorium_9.setVisible(false);lyr_PUZ6PublicUseZoneLocalGovernment_10.setVisible(false);lyr_RCZRuralConservationZone_11.setVisible(false);lyr_FZFarmingZone_12.setVisible(false);lyr_TRZ1StateTransportInfrastructure_13.setVisible(false);lyr_TRZ2PrincipalRoadNetwork_14.setVisible(false);lyr_RLZRuralLivingZone_15.setVisible(false);lyr_GRZGeneralResidentialZone_16.setVisible(false);lyr_LDRZLowDensityResidentialZone_17.setVisible(false);lyr_UGZUrbanGrowthZone_18.setVisible(false);lyr_AboriginalCulturalHeritageSensitivity_19.setVisible(false);lyr_RegisteredAboriginalParties_20.setVisible(false);lyr_HeritageInventory_21.setVisible(false);lyr_RecognitionandSettlementAgreement_22.setVisible(false);lyr_AEOAirportEnvironsOverlay_23.setVisible(false);lyr_CLPOCityLinkProjectOverlay_24.setVisible(false);lyr_DCPODevelopmentContributionsPlanOverlay_25.setVisible(false);lyr_DDODesignandDevelopmentOverlay_26.setVisible(false);lyr_DPODevelopmentPlanOverlay_27.setVisible(false);lyr_EAOEnvironmentalAuditOverlay_28.setVisible(false);lyr_EMOErosionManagementOverlay_29.setVisible(false);lyr_ICOInfrastructureContributionsOverlay_30.setVisible(false);lyr_IPOIncorporatedPlanOverlay_31.setVisible(false);lyr_MAEOMelbourneAirportEnvironsOverlay_32.setVisible(false);lyr_NCONeighbourhoodCharacterOverlay_33.setVisible(false);lyr_POParkingOverlay_34.setVisible(false);lyr_PSBProtectedSettlementBoundary_35.setVisible(false);lyr_RFORuralFloodwayOverlay_36.setVisible(false);lyr_SBOSpecialBuildingOverlay_37.setVisible(false);lyr_SCOSpecificControlsOverlay_38.setVisible(false);lyr_SMOSalinityManagementOverlay_39.setVisible(false);lyr_BAOBufferAreaOverlay_40.setVisible(false);lyr_BMOBushfireManagementOverlay_41.setVisible(false);lyr_ESOEnvironmentalSignificanceOverlay_42.setVisible(false);lyr_PAOPublicAcquisitionOverlay_43.setVisible(false);lyr_RORestructureOverlay_44.setVisible(false);lyr_RXORoadClosureOverlay_45.setVisible(false);lyr_SLOSignificantLandscapeOverlay_46.setVisible(false);lyr_SROStateResourceOverlay_47.setVisible(false);lyr_FOFloodwayOverlay_48.setVisible(false);lyr_HOHeritageOverlay_49.setVisible(false);lyr_LSIOLandSubjecttoInundationOverlay_50.setVisible(false);lyr_VPOVegetationProtectionOverlay_51.setVisible(false);lyr_HeritageRegister_52.setVisible(false);lyr_SSP5_53.setVisible(false);lyr_SSP3_54.setVisible(false);lyr_SSP2_55.setVisible(false);lyr_BagshotPrecinctConceptStructurePlan_56.setVisible(true);lyr_LGA_57.setVisible(true);lyr_GreaterBendigoProperties_58.setVisible(true);lyr_Suburb_59.setVisible(true);
var layersList = [group_BaseLayer,group_Zoning,group_OtherOverlays,group_NotetoDD,group_NDHDeductedOverlays,group_SSPFloodScenario20812100,group_StructurePlan,group_Administrative];
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
lyr_AboriginalCulturalHeritageSensitivity_19.set('fieldAliases', {'fid': 'fid', 'OBJECTID': 'OBJECTID', 'SENSITIVIT': 'SENSITIVIT', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', });
lyr_RegisteredAboriginalParties_20.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'ID': 'ID', 'NAME': 'NAME', 'ADDRESS': 'ADDRESS', 'TELEPHONE': 'TELEPHONE', 'REG_DATE': 'REG_DATE', 'CONTACT': 'CONTACT', 'EMAIL': 'EMAIL', 'AREA_': 'AREA_', 'SHORT_NAME': 'SHORT_NAME', 'SHORT': 'SHORT', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'SHAPE_Area', });
lyr_HeritageInventory_21.set('fieldAliases', {'fid': 'fid', 'OBJECTID': 'OBJECTID', 'VDPID': 'VDPID', 'UFI': 'UFI', 'HERMES_NUM': 'HERMES_NUM', 'VHR_NUM': 'VHR_NUM', 'VHI_NUM': 'VHI_NUM', 'HERITAGE_O': 'HERITAGE_O', 'SITE_NAME': 'SITE_NAME', 'ID': 'ID', 'UFI_CREATE': 'UFI_CREATE', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', });
lyr_RecognitionandSettlementAgreement_22.set('fieldAliases', {'fid': 'fid', 'OBJECTID': 'OBJECTID', 'ID': 'ID', 'NAME': 'NAME', 'LABEL_NAME': 'LABEL_NAME', 'CATEGORY': 'CATEGORY', 'SUB_CATEGO': 'SUB_CATEGO', 'LEGISLATIO': 'LEGISLATIO', 'DATE_COMME': 'DATE_COMME', 'OFFICIAL_A': 'OFFICIAL_A', 'VERSION_DA': 'VERSION_DA', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', });
lyr_AEOAirportEnvironsOverlay_23.set('fieldAliases', {'fid': 'fid', 'OBJECTID': 'OBJECTID', 'PFI': 'PFI', 'SCHEME_COD': 'SCHEME_COD', 'LGA_CODE': 'LGA_CODE', 'LGA': 'LGA', 'ZONE_NUM': 'ZONE_NUM', 'ZONE_STATU': 'ZONE_STATU', 'ZONE_CODE': 'ZONE_CODE', 'ZONE_DESCR': 'ZONE_DESCR', 'GAZ_BEGIN_': 'GAZ_BEGIN_', 'PFI_CREATE': 'PFI_CREATE', 'UFI': 'UFI', 'UFI_CREATE': 'UFI_CREATE', 'ZONE_CODE_': 'ZONE_CODE_', 'ZONE_COD_1': 'ZONE_COD_1', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'SHAPE_Area', });
lyr_CLPOCityLinkProjectOverlay_24.set('fieldAliases', {'fid': 'fid', 'OBJECTID': 'OBJECTID', 'PFI': 'PFI', 'SCHEME_COD': 'SCHEME_COD', 'LGA_CODE': 'LGA_CODE', 'LGA': 'LGA', 'ZONE_NUM': 'ZONE_NUM', 'ZONE_STATU': 'ZONE_STATU', 'ZONE_CODE': 'ZONE_CODE', 'ZONE_DESCR': 'ZONE_DESCR', 'GAZ_BEGIN_': 'GAZ_BEGIN_', 'PFI_CREATE': 'PFI_CREATE', 'UFI': 'UFI', 'UFI_CREATE': 'UFI_CREATE', 'ZONE_CODE_': 'ZONE_CODE_', 'ZONE_COD_1': 'ZONE_COD_1', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'SHAPE_Area', });
lyr_DCPODevelopmentContributionsPlanOverlay_25.set('fieldAliases', {'fid': 'fid', 'OBJECTID': 'OBJECTID', 'PFI': 'PFI', 'SCHEME_COD': 'SCHEME_COD', 'LGA_CODE': 'LGA_CODE', 'LGA': 'LGA', 'ZONE_NUM': 'ZONE_NUM', 'ZONE_STATU': 'ZONE_STATU', 'ZONE_CODE': 'ZONE_CODE', 'ZONE_DESCR': 'ZONE_DESCR', 'GAZ_BEGIN_': 'GAZ_BEGIN_', 'PFI_CREATE': 'PFI_CREATE', 'UFI': 'UFI', 'UFI_CREATE': 'UFI_CREATE', 'ZONE_CODE_': 'ZONE_CODE_', 'ZONE_COD_1': 'ZONE_COD_1', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'SHAPE_Area', });
lyr_DDODesignandDevelopmentOverlay_26.set('fieldAliases', {'fid': 'fid', 'OBJECTID': 'OBJECTID', 'PFI': 'PFI', 'SCHEME_COD': 'SCHEME_COD', 'LGA_CODE': 'LGA_CODE', 'LGA': 'LGA', 'ZONE_NUM': 'ZONE_NUM', 'ZONE_STATU': 'ZONE_STATU', 'ZONE_CODE': 'ZONE_CODE', 'ZONE_DESCR': 'ZONE_DESCR', 'GAZ_BEGIN_': 'GAZ_BEGIN_', 'PFI_CREATE': 'PFI_CREATE', 'UFI': 'UFI', 'UFI_CREATE': 'UFI_CREATE', 'ZONE_CODE_': 'ZONE_CODE_', 'ZONE_COD_1': 'ZONE_COD_1', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'SHAPE_Area', });
lyr_DPODevelopmentPlanOverlay_27.set('fieldAliases', {'fid': 'fid', 'OBJECTID': 'OBJECTID', 'PFI': 'PFI', 'SCHEME_COD': 'SCHEME_COD', 'LGA_CODE': 'LGA_CODE', 'LGA': 'LGA', 'ZONE_NUM': 'ZONE_NUM', 'ZONE_STATU': 'ZONE_STATU', 'ZONE_CODE': 'ZONE_CODE', 'ZONE_DESCR': 'ZONE_DESCR', 'GAZ_BEGIN_': 'GAZ_BEGIN_', 'PFI_CREATE': 'PFI_CREATE', 'UFI': 'UFI', 'UFI_CREATE': 'UFI_CREATE', 'ZONE_CODE_': 'ZONE_CODE_', 'ZONE_COD_1': 'ZONE_COD_1', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'SHAPE_Area', });
lyr_EAOEnvironmentalAuditOverlay_28.set('fieldAliases', {'fid': 'fid', 'OBJECTID': 'OBJECTID', 'PFI': 'PFI', 'SCHEME_COD': 'SCHEME_COD', 'LGA_CODE': 'LGA_CODE', 'LGA': 'LGA', 'ZONE_NUM': 'ZONE_NUM', 'ZONE_STATU': 'ZONE_STATU', 'ZONE_CODE': 'ZONE_CODE', 'ZONE_DESCR': 'ZONE_DESCR', 'GAZ_BEGIN_': 'GAZ_BEGIN_', 'PFI_CREATE': 'PFI_CREATE', 'UFI': 'UFI', 'UFI_CREATE': 'UFI_CREATE', 'ZONE_CODE_': 'ZONE_CODE_', 'ZONE_COD_1': 'ZONE_COD_1', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'SHAPE_Area', });
lyr_EMOErosionManagementOverlay_29.set('fieldAliases', {'fid': 'fid', 'OBJECTID': 'OBJECTID', 'PFI': 'PFI', 'SCHEME_COD': 'SCHEME_COD', 'LGA_CODE': 'LGA_CODE', 'LGA': 'LGA', 'ZONE_NUM': 'ZONE_NUM', 'ZONE_STATU': 'ZONE_STATU', 'ZONE_CODE': 'ZONE_CODE', 'ZONE_DESCR': 'ZONE_DESCR', 'GAZ_BEGIN_': 'GAZ_BEGIN_', 'PFI_CREATE': 'PFI_CREATE', 'UFI': 'UFI', 'UFI_CREATE': 'UFI_CREATE', 'ZONE_CODE_': 'ZONE_CODE_', 'ZONE_COD_1': 'ZONE_COD_1', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'SHAPE_Area', });
lyr_ICOInfrastructureContributionsOverlay_30.set('fieldAliases', {'fid': 'fid', 'OBJECTID': 'OBJECTID', 'PFI': 'PFI', 'SCHEME_COD': 'SCHEME_COD', 'LGA_CODE': 'LGA_CODE', 'LGA': 'LGA', 'ZONE_NUM': 'ZONE_NUM', 'ZONE_STATU': 'ZONE_STATU', 'ZONE_CODE': 'ZONE_CODE', 'ZONE_DESCR': 'ZONE_DESCR', 'GAZ_BEGIN_': 'GAZ_BEGIN_', 'PFI_CREATE': 'PFI_CREATE', 'UFI': 'UFI', 'UFI_CREATE': 'UFI_CREATE', 'ZONE_CODE_': 'ZONE_CODE_', 'ZONE_COD_1': 'ZONE_COD_1', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'SHAPE_Area', });
lyr_IPOIncorporatedPlanOverlay_31.set('fieldAliases', {'fid': 'fid', 'OBJECTID': 'OBJECTID', 'PFI': 'PFI', 'SCHEME_COD': 'SCHEME_COD', 'LGA_CODE': 'LGA_CODE', 'LGA': 'LGA', 'ZONE_NUM': 'ZONE_NUM', 'ZONE_STATU': 'ZONE_STATU', 'ZONE_CODE': 'ZONE_CODE', 'ZONE_DESCR': 'ZONE_DESCR', 'GAZ_BEGIN_': 'GAZ_BEGIN_', 'PFI_CREATE': 'PFI_CREATE', 'UFI': 'UFI', 'UFI_CREATE': 'UFI_CREATE', 'ZONE_CODE_': 'ZONE_CODE_', 'ZONE_COD_1': 'ZONE_COD_1', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'SHAPE_Area', });
lyr_MAEOMelbourneAirportEnvironsOverlay_32.set('fieldAliases', {'fid': 'fid', 'OBJECTID': 'OBJECTID', 'PFI': 'PFI', 'SCHEME_COD': 'SCHEME_COD', 'LGA_CODE': 'LGA_CODE', 'LGA': 'LGA', 'ZONE_NUM': 'ZONE_NUM', 'ZONE_STATU': 'ZONE_STATU', 'ZONE_CODE': 'ZONE_CODE', 'ZONE_DESCR': 'ZONE_DESCR', 'GAZ_BEGIN_': 'GAZ_BEGIN_', 'PFI_CREATE': 'PFI_CREATE', 'UFI': 'UFI', 'UFI_CREATE': 'UFI_CREATE', 'ZONE_CODE_': 'ZONE_CODE_', 'ZONE_COD_1': 'ZONE_COD_1', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'SHAPE_Area', });
lyr_NCONeighbourhoodCharacterOverlay_33.set('fieldAliases', {'fid': 'fid', 'OBJECTID': 'OBJECTID', 'PFI': 'PFI', 'SCHEME_COD': 'SCHEME_COD', 'LGA_CODE': 'LGA_CODE', 'LGA': 'LGA', 'ZONE_NUM': 'ZONE_NUM', 'ZONE_STATU': 'ZONE_STATU', 'ZONE_CODE': 'ZONE_CODE', 'ZONE_DESCR': 'ZONE_DESCR', 'GAZ_BEGIN_': 'GAZ_BEGIN_', 'PFI_CREATE': 'PFI_CREATE', 'UFI': 'UFI', 'UFI_CREATE': 'UFI_CREATE', 'ZONE_CODE_': 'ZONE_CODE_', 'ZONE_COD_1': 'ZONE_COD_1', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'SHAPE_Area', });
lyr_POParkingOverlay_34.set('fieldAliases', {'fid': 'fid', 'OBJECTID': 'OBJECTID', 'PFI': 'PFI', 'SCHEME_COD': 'SCHEME_COD', 'LGA_CODE': 'LGA_CODE', 'LGA': 'LGA', 'ZONE_NUM': 'ZONE_NUM', 'ZONE_STATU': 'ZONE_STATU', 'ZONE_CODE': 'ZONE_CODE', 'ZONE_DESCR': 'ZONE_DESCR', 'GAZ_BEGIN_': 'GAZ_BEGIN_', 'PFI_CREATE': 'PFI_CREATE', 'UFI': 'UFI', 'UFI_CREATE': 'UFI_CREATE', 'ZONE_CODE_': 'ZONE_CODE_', 'ZONE_COD_1': 'ZONE_COD_1', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'SHAPE_Area', });
lyr_PSBProtectedSettlementBoundary_35.set('fieldAliases', {'fid': 'fid', 'OBJECTID': 'OBJECTID', 'PFI': 'PFI', 'SCHEME_COD': 'SCHEME_COD', 'LGA_CODE': 'LGA_CODE', 'LGA': 'LGA', 'ZONE_NUM': 'ZONE_NUM', 'ZONE_STATU': 'ZONE_STATU', 'ZONE_CODE': 'ZONE_CODE', 'ZONE_DESCR': 'ZONE_DESCR', 'GAZ_BEGIN_': 'GAZ_BEGIN_', 'PFI_CREATE': 'PFI_CREATE', 'UFI': 'UFI', 'UFI_CREATE': 'UFI_CREATE', 'ZONE_CODE_': 'ZONE_CODE_', 'ZONE_COD_1': 'ZONE_COD_1', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'SHAPE_Area', });
lyr_RFORuralFloodwayOverlay_36.set('fieldAliases', {'fid': 'fid', 'OBJECTID': 'OBJECTID', 'PFI': 'PFI', 'SCHEME_COD': 'SCHEME_COD', 'LGA_CODE': 'LGA_CODE', 'LGA': 'LGA', 'ZONE_NUM': 'ZONE_NUM', 'ZONE_STATU': 'ZONE_STATU', 'ZONE_CODE': 'ZONE_CODE', 'ZONE_DESCR': 'ZONE_DESCR', 'GAZ_BEGIN_': 'GAZ_BEGIN_', 'PFI_CREATE': 'PFI_CREATE', 'UFI': 'UFI', 'UFI_CREATE': 'UFI_CREATE', 'ZONE_CODE_': 'ZONE_CODE_', 'ZONE_COD_1': 'ZONE_COD_1', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'SHAPE_Area', });
lyr_SBOSpecialBuildingOverlay_37.set('fieldAliases', {'fid': 'fid', 'OBJECTID': 'OBJECTID', 'PFI': 'PFI', 'SCHEME_COD': 'SCHEME_COD', 'LGA_CODE': 'LGA_CODE', 'LGA': 'LGA', 'ZONE_NUM': 'ZONE_NUM', 'ZONE_STATU': 'ZONE_STATU', 'ZONE_CODE': 'ZONE_CODE', 'ZONE_DESCR': 'ZONE_DESCR', 'GAZ_BEGIN_': 'GAZ_BEGIN_', 'PFI_CREATE': 'PFI_CREATE', 'UFI': 'UFI', 'UFI_CREATE': 'UFI_CREATE', 'ZONE_CODE_': 'ZONE_CODE_', 'ZONE_COD_1': 'ZONE_COD_1', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'SHAPE_Area', });
lyr_SCOSpecificControlsOverlay_38.set('fieldAliases', {'fid': 'fid', 'OBJECTID': 'OBJECTID', 'PFI': 'PFI', 'SCHEME_COD': 'SCHEME_COD', 'LGA_CODE': 'LGA_CODE', 'LGA': 'LGA', 'ZONE_NUM': 'ZONE_NUM', 'ZONE_STATU': 'ZONE_STATU', 'ZONE_CODE': 'ZONE_CODE', 'ZONE_DESCR': 'ZONE_DESCR', 'GAZ_BEGIN_': 'GAZ_BEGIN_', 'PFI_CREATE': 'PFI_CREATE', 'UFI': 'UFI', 'UFI_CREATE': 'UFI_CREATE', 'ZONE_CODE_': 'ZONE_CODE_', 'ZONE_COD_1': 'ZONE_COD_1', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'SHAPE_Area', });
lyr_SMOSalinityManagementOverlay_39.set('fieldAliases', {'fid': 'fid', 'OBJECTID': 'OBJECTID', 'PFI': 'PFI', 'SCHEME_COD': 'SCHEME_COD', 'LGA_CODE': 'LGA_CODE', 'LGA': 'LGA', 'ZONE_NUM': 'ZONE_NUM', 'ZONE_STATU': 'ZONE_STATU', 'ZONE_CODE': 'ZONE_CODE', 'ZONE_DESCR': 'ZONE_DESCR', 'GAZ_BEGIN_': 'GAZ_BEGIN_', 'PFI_CREATE': 'PFI_CREATE', 'UFI': 'UFI', 'UFI_CREATE': 'UFI_CREATE', 'ZONE_CODE_': 'ZONE_CODE_', 'ZONE_COD_1': 'ZONE_COD_1', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'SHAPE_Area', });
lyr_BAOBufferAreaOverlay_40.set('fieldAliases', {'fid': 'fid', 'OBJECTID': 'OBJECTID', 'PFI': 'PFI', 'SCHEME_COD': 'SCHEME_COD', 'LGA_CODE': 'LGA_CODE', 'LGA': 'LGA', 'ZONE_NUM': 'ZONE_NUM', 'ZONE_STATU': 'ZONE_STATU', 'ZONE_CODE': 'ZONE_CODE', 'ZONE_DESCR': 'ZONE_DESCR', 'GAZ_BEGIN_': 'GAZ_BEGIN_', 'PFI_CREATE': 'PFI_CREATE', 'UFI': 'UFI', 'UFI_CREATE': 'UFI_CREATE', 'ZONE_CODE_': 'ZONE_CODE_', 'ZONE_COD_1': 'ZONE_COD_1', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', });
lyr_BMOBushfireManagementOverlay_41.set('fieldAliases', {'fid': 'fid', 'OBJECTID': 'OBJECTID', 'PFI': 'PFI', 'SCHEME_COD': 'SCHEME_COD', 'LGA_CODE': 'LGA_CODE', 'LGA': 'LGA', 'ZONE_NUM': 'ZONE_NUM', 'ZONE_STATU': 'ZONE_STATU', 'ZONE_CODE': 'ZONE_CODE', 'ZONE_DESCR': 'ZONE_DESCR', 'GAZ_BEGIN_': 'GAZ_BEGIN_', 'PFI_CREATE': 'PFI_CREATE', 'UFI': 'UFI', 'UFI_CREATE': 'UFI_CREATE', 'ZONE_CODE_': 'ZONE_CODE_', 'ZONE_COD_1': 'ZONE_COD_1', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'SHAPE_Area', });
lyr_ESOEnvironmentalSignificanceOverlay_42.set('fieldAliases', {'fid': 'fid', 'OBJECTID': 'OBJECTID', 'PFI': 'PFI', 'SCHEME_COD': 'SCHEME_COD', 'LGA_CODE': 'LGA_CODE', 'LGA': 'LGA', 'ZONE_NUM': 'ZONE_NUM', 'ZONE_STATU': 'ZONE_STATU', 'ZONE_CODE': 'ZONE_CODE', 'ZONE_DESCR': 'ZONE_DESCR', 'GAZ_BEGIN_': 'GAZ_BEGIN_', 'PFI_CREATE': 'PFI_CREATE', 'UFI': 'UFI', 'UFI_CREATE': 'UFI_CREATE', 'ZONE_CODE_': 'ZONE_CODE_', 'ZONE_COD_1': 'ZONE_COD_1', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', });
lyr_PAOPublicAcquisitionOverlay_43.set('fieldAliases', {'fid': 'fid', 'OBJECTID': 'OBJECTID', 'PFI': 'PFI', 'SCHEME_COD': 'SCHEME_COD', 'LGA_CODE': 'LGA_CODE', 'LGA': 'LGA', 'ZONE_NUM': 'ZONE_NUM', 'ZONE_STATU': 'ZONE_STATU', 'ZONE_CODE': 'ZONE_CODE', 'ZONE_DESCR': 'ZONE_DESCR', 'GAZ_BEGIN_': 'GAZ_BEGIN_', 'PFI_CREATE': 'PFI_CREATE', 'UFI': 'UFI', 'UFI_CREATE': 'UFI_CREATE', 'ZONE_CODE_': 'ZONE_CODE_', 'ZONE_COD_1': 'ZONE_COD_1', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'SHAPE_Area', });
lyr_RORestructureOverlay_44.set('fieldAliases', {'fid': 'fid', 'OBJECTID': 'OBJECTID', 'PFI': 'PFI', 'SCHEME_COD': 'SCHEME_COD', 'LGA_CODE': 'LGA_CODE', 'LGA': 'LGA', 'ZONE_NUM': 'ZONE_NUM', 'ZONE_STATU': 'ZONE_STATU', 'ZONE_CODE': 'ZONE_CODE', 'ZONE_DESCR': 'ZONE_DESCR', 'GAZ_BEGIN_': 'GAZ_BEGIN_', 'PFI_CREATE': 'PFI_CREATE', 'UFI': 'UFI', 'UFI_CREATE': 'UFI_CREATE', 'ZONE_CODE_': 'ZONE_CODE_', 'ZONE_COD_1': 'ZONE_COD_1', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'SHAPE_Area', });
lyr_RXORoadClosureOverlay_45.set('fieldAliases', {'fid': 'fid', 'OBJECTID': 'OBJECTID', 'PFI': 'PFI', 'SCHEME_COD': 'SCHEME_COD', 'LGA_CODE': 'LGA_CODE', 'LGA': 'LGA', 'ZONE_NUM': 'ZONE_NUM', 'ZONE_STATU': 'ZONE_STATU', 'ZONE_CODE': 'ZONE_CODE', 'ZONE_DESCR': 'ZONE_DESCR', 'GAZ_BEGIN_': 'GAZ_BEGIN_', 'PFI_CREATE': 'PFI_CREATE', 'UFI': 'UFI', 'UFI_CREATE': 'UFI_CREATE', 'ZONE_CODE_': 'ZONE_CODE_', 'ZONE_COD_1': 'ZONE_COD_1', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'SHAPE_Area', });
lyr_SLOSignificantLandscapeOverlay_46.set('fieldAliases', {'fid': 'fid', 'OBJECTID': 'OBJECTID', 'PFI': 'PFI', 'SCHEME_COD': 'SCHEME_COD', 'LGA_CODE': 'LGA_CODE', 'LGA': 'LGA', 'ZONE_NUM': 'ZONE_NUM', 'ZONE_STATU': 'ZONE_STATU', 'ZONE_CODE': 'ZONE_CODE', 'ZONE_DESCR': 'ZONE_DESCR', 'GAZ_BEGIN_': 'GAZ_BEGIN_', 'PFI_CREATE': 'PFI_CREATE', 'UFI': 'UFI', 'UFI_CREATE': 'UFI_CREATE', 'ZONE_CODE_': 'ZONE_CODE_', 'ZONE_COD_1': 'ZONE_COD_1', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'SHAPE_Area', });
lyr_SROStateResourceOverlay_47.set('fieldAliases', {'fid': 'fid', 'OBJECTID': 'OBJECTID', 'PFI': 'PFI', 'SCHEME_COD': 'SCHEME_COD', 'LGA_CODE': 'LGA_CODE', 'LGA': 'LGA', 'ZONE_NUM': 'ZONE_NUM', 'ZONE_STATU': 'ZONE_STATU', 'ZONE_CODE': 'ZONE_CODE', 'ZONE_DESCR': 'ZONE_DESCR', 'GAZ_BEGIN_': 'GAZ_BEGIN_', 'PFI_CREATE': 'PFI_CREATE', 'UFI': 'UFI', 'UFI_CREATE': 'UFI_CREATE', 'ZONE_CODE_': 'ZONE_CODE_', 'ZONE_COD_1': 'ZONE_COD_1', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'SHAPE_Area', });
lyr_FOFloodwayOverlay_48.set('fieldAliases', {'fid': 'fid', 'OBJECTID': 'OBJECTID', 'PFI': 'PFI', 'SCHEME_COD': 'SCHEME_COD', 'LGA_CODE': 'LGA_CODE', 'LGA': 'LGA', 'ZONE_NUM': 'ZONE_NUM', 'ZONE_STATU': 'ZONE_STATU', 'ZONE_CODE': 'ZONE_CODE', 'ZONE_DESCR': 'ZONE_DESCR', 'GAZ_BEGIN_': 'GAZ_BEGIN_', 'PFI_CREATE': 'PFI_CREATE', 'UFI': 'UFI', 'UFI_CREATE': 'UFI_CREATE', 'ZONE_CODE_': 'ZONE_CODE_', 'ZONE_COD_1': 'ZONE_COD_1', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'SHAPE_Area', });
lyr_HOHeritageOverlay_49.set('fieldAliases', {'fid': 'fid', 'OBJECTID': 'OBJECTID', 'PFI': 'PFI', 'SCHEME_COD': 'SCHEME_COD', 'LGA_CODE': 'LGA_CODE', 'LGA': 'LGA', 'ZONE_NUM': 'ZONE_NUM', 'ZONE_STATU': 'ZONE_STATU', 'ZONE_CODE': 'ZONE_CODE', 'ZONE_DESCR': 'ZONE_DESCR', 'GAZ_BEGIN_': 'GAZ_BEGIN_', 'PFI_CREATE': 'PFI_CREATE', 'UFI': 'UFI', 'UFI_CREATE': 'UFI_CREATE', 'ZONE_CODE_': 'ZONE_CODE_', 'ZONE_COD_1': 'ZONE_COD_1', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'SHAPE_Area', });
lyr_LSIOLandSubjecttoInundationOverlay_50.set('fieldAliases', {'fid': 'fid', 'OBJECTID': 'OBJECTID', 'PFI': 'PFI', 'SCHEME_COD': 'SCHEME_COD', 'LGA_CODE': 'LGA_CODE', 'LGA': 'LGA', 'ZONE_NUM': 'ZONE_NUM', 'ZONE_STATU': 'ZONE_STATU', 'ZONE_CODE': 'ZONE_CODE', 'ZONE_DESCR': 'ZONE_DESCR', 'GAZ_BEGIN_': 'GAZ_BEGIN_', 'PFI_CREATE': 'PFI_CREATE', 'UFI': 'UFI', 'UFI_CREATE': 'UFI_CREATE', 'ZONE_CODE_': 'ZONE_CODE_', 'ZONE_COD_1': 'ZONE_COD_1', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'SHAPE_Area', });
lyr_VPOVegetationProtectionOverlay_51.set('fieldAliases', {'fid': 'fid', 'OBJECTID': 'OBJECTID', 'PFI': 'PFI', 'SCHEME_COD': 'SCHEME_COD', 'LGA_CODE': 'LGA_CODE', 'LGA': 'LGA', 'ZONE_NUM': 'ZONE_NUM', 'ZONE_STATU': 'ZONE_STATU', 'ZONE_CODE': 'ZONE_CODE', 'ZONE_DESCR': 'ZONE_DESCR', 'GAZ_BEGIN_': 'GAZ_BEGIN_', 'PFI_CREATE': 'PFI_CREATE', 'UFI': 'UFI', 'UFI_CREATE': 'UFI_CREATE', 'ZONE_CODE_': 'ZONE_CODE_', 'ZONE_COD_1': 'ZONE_COD_1', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'SHAPE_Area', });
lyr_HeritageRegister_52.set('fieldAliases', {'fid': 'fid', 'OBJECTID': 'OBJECTID', 'VDPID': 'VDPID', 'UFI': 'UFI', 'HERMES_NUM': 'HERMES_NUM', 'VHR_NUM': 'VHR_NUM', 'VHI_NUM': 'VHI_NUM', 'HERITAGE_O': 'HERITAGE_O', 'SITE_NAME': 'SITE_NAME', 'ID': 'ID', 'UFI_CREATE': 'UFI_CREATE', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', });
lyr_SSP5_53.set('fieldAliases', {'fid': 'fid', 'OBJECTID': 'OBJECTID', 'PFI': 'PFI', 'SCHEME_COD': 'SCHEME_COD', 'LGA_CODE': 'LGA_CODE', 'LGA': 'LGA', 'ZONE_NUM': 'ZONE_NUM', 'ZONE_STATU': 'ZONE_STATU', 'ZONE_CODE': 'ZONE_CODE', 'ZONE_DESCR': 'ZONE_DESCR', 'GAZ_BEGIN_': 'GAZ_BEGIN_', 'PFI_CREATE': 'PFI_CREATE', 'UFI': 'UFI', 'UFI_CREATE': 'UFI_CREATE', 'ZONE_CODE_': 'ZONE_CODE_', 'ZONE_COD_1': 'ZONE_COD_1', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', });
lyr_SSP3_54.set('fieldAliases', {'fid': 'fid', 'OBJECTID': 'OBJECTID', 'PFI': 'PFI', 'SCHEME_COD': 'SCHEME_COD', 'LGA_CODE': 'LGA_CODE', 'LGA': 'LGA', 'ZONE_NUM': 'ZONE_NUM', 'ZONE_STATU': 'ZONE_STATU', 'ZONE_CODE': 'ZONE_CODE', 'ZONE_DESCR': 'ZONE_DESCR', 'GAZ_BEGIN_': 'GAZ_BEGIN_', 'PFI_CREATE': 'PFI_CREATE', 'UFI': 'UFI', 'UFI_CREATE': 'UFI_CREATE', 'ZONE_CODE_': 'ZONE_CODE_', 'ZONE_COD_1': 'ZONE_COD_1', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', });
lyr_SSP2_55.set('fieldAliases', {'fid': 'fid', 'OBJECTID': 'OBJECTID', 'PFI': 'PFI', 'SCHEME_COD': 'SCHEME_COD', 'LGA_CODE': 'LGA_CODE', 'LGA': 'LGA', 'ZONE_NUM': 'ZONE_NUM', 'ZONE_STATU': 'ZONE_STATU', 'ZONE_CODE': 'ZONE_CODE', 'ZONE_DESCR': 'ZONE_DESCR', 'GAZ_BEGIN_': 'GAZ_BEGIN_', 'PFI_CREATE': 'PFI_CREATE', 'UFI': 'UFI', 'UFI_CREATE': 'UFI_CREATE', 'ZONE_CODE_': 'ZONE_CODE_', 'ZONE_COD_1': 'ZONE_COD_1', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', });
lyr_LGA_57.set('fieldAliases', {'LGA_CODE24': 'LGA_CODE24', 'LGA_NAME24': 'LGA_NAME24', 'STE_CODE21': 'STE_CODE21', 'STE_NAME21': 'STE_NAME21', 'AUS_CODE21': 'AUS_CODE21', 'AUS_NAME21': 'AUS_NAME21', 'AREASQKM': 'AREASQKM', 'LOCI_URI21': 'LOCI_URI21', });
lyr_GreaterBendigoProperties_58.set('fieldAliases', {'fid': 'fid', 'OBJECTID': 'OBJECTID', 'PROP_PFI': 'PROP_PFI', 'PROP_LGA_CODE': 'PROP_LGA_CODE', 'PROP_PROPNUM': 'PROP_PROPNUM', 'PROP_PROPERTY_TYPE': 'PROP_PROPERTY_TYPE', 'PROP_MULTI_ASSESSMENT': 'PROP_MULTI_ASSESSMENT', 'PROP_STATUS': 'PROP_STATUS', 'ADD_EZI_ADDRESS': 'ADD_EZI_ADDRESS', 'ADD_IS_PRIMARY': 'ADD_IS_PRIMARY', 'ADD_HOUSE_NUMBER_1': 'ADD_HOUSE_NUMBER_1', 'ADD_HOUSE_SUFFIX_1': 'ADD_HOUSE_SUFFIX_1', 'ADD_ROAD_NAME': 'ADD_ROAD_NAME', 'ADD_ROAD_TYPE': 'ADD_ROAD_TYPE', 'ADD_ROAD_SUFFIX': 'ADD_ROAD_SUFFIX', 'ADD_LOCALITY_NAME': 'ADD_LOCALITY_NAME', 'ADD_STATE': 'ADD_STATE', 'ADD_POSTCODE': 'ADD_POSTCODE', 'ADD_NUM_ROAD_ADDRESS': 'ADD_NUM_ROAD_ADDRESS', 'Shape_Length': 'Shape_Length', 'Shape_Area': 'Shape_Area', });
lyr_Suburb_59.set('fieldAliases', {'LC_PLY_PID': 'LC_PLY_PID', 'LOC_PID': 'LOC_PID', 'DT_CREATE': 'DT_CREATE', 'LOC_NAME': 'LOC_NAME', 'LOC_CLASS': 'LOC_CLASS', 'STATE': 'STATE', });
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
lyr_AboriginalCulturalHeritageSensitivity_19.set('fieldImages', {'fid': '', 'OBJECTID': '', 'SENSITIVIT': '', 'Shape_Leng': '', 'Shape_Area': '', });
lyr_RegisteredAboriginalParties_20.set('fieldImages', {'OBJECTID': 'TextEdit', 'ID': 'TextEdit', 'NAME': 'TextEdit', 'ADDRESS': 'TextEdit', 'TELEPHONE': 'TextEdit', 'REG_DATE': 'DateTime', 'CONTACT': 'TextEdit', 'EMAIL': 'TextEdit', 'AREA_': 'TextEdit', 'SHORT_NAME': 'TextEdit', 'SHORT': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_HeritageInventory_21.set('fieldImages', {'fid': '', 'OBJECTID': '', 'VDPID': '', 'UFI': '', 'HERMES_NUM': '', 'VHR_NUM': '', 'VHI_NUM': '', 'HERITAGE_O': '', 'SITE_NAME': '', 'ID': '', 'UFI_CREATE': '', 'Shape_Leng': '', 'Shape_Area': '', });
lyr_RecognitionandSettlementAgreement_22.set('fieldImages', {'fid': '', 'OBJECTID': '', 'ID': '', 'NAME': '', 'LABEL_NAME': '', 'CATEGORY': '', 'SUB_CATEGO': '', 'LEGISLATIO': '', 'DATE_COMME': '', 'OFFICIAL_A': '', 'VERSION_DA': '', 'Shape_Leng': '', 'Shape_Area': '', });
lyr_AEOAirportEnvironsOverlay_23.set('fieldImages', {'fid': '', 'OBJECTID': '', 'PFI': '', 'SCHEME_COD': '', 'LGA_CODE': '', 'LGA': '', 'ZONE_NUM': '', 'ZONE_STATU': '', 'ZONE_CODE': '', 'ZONE_DESCR': '', 'GAZ_BEGIN_': '', 'PFI_CREATE': '', 'UFI': '', 'UFI_CREATE': '', 'ZONE_CODE_': '', 'ZONE_COD_1': '', 'Shape_Leng': '', 'Shape_Area': '', });
lyr_CLPOCityLinkProjectOverlay_24.set('fieldImages', {'fid': '', 'OBJECTID': '', 'PFI': '', 'SCHEME_COD': '', 'LGA_CODE': '', 'LGA': '', 'ZONE_NUM': '', 'ZONE_STATU': '', 'ZONE_CODE': '', 'ZONE_DESCR': '', 'GAZ_BEGIN_': '', 'PFI_CREATE': '', 'UFI': '', 'UFI_CREATE': '', 'ZONE_CODE_': '', 'ZONE_COD_1': '', 'Shape_Leng': '', 'Shape_Area': '', });
lyr_DCPODevelopmentContributionsPlanOverlay_25.set('fieldImages', {'fid': '', 'OBJECTID': '', 'PFI': '', 'SCHEME_COD': '', 'LGA_CODE': '', 'LGA': '', 'ZONE_NUM': '', 'ZONE_STATU': '', 'ZONE_CODE': '', 'ZONE_DESCR': '', 'GAZ_BEGIN_': '', 'PFI_CREATE': '', 'UFI': '', 'UFI_CREATE': '', 'ZONE_CODE_': '', 'ZONE_COD_1': '', 'Shape_Leng': '', 'Shape_Area': '', });
lyr_DDODesignandDevelopmentOverlay_26.set('fieldImages', {'fid': '', 'OBJECTID': '', 'PFI': '', 'SCHEME_COD': '', 'LGA_CODE': '', 'LGA': '', 'ZONE_NUM': '', 'ZONE_STATU': '', 'ZONE_CODE': '', 'ZONE_DESCR': '', 'GAZ_BEGIN_': '', 'PFI_CREATE': '', 'UFI': '', 'UFI_CREATE': '', 'ZONE_CODE_': '', 'ZONE_COD_1': '', 'Shape_Leng': '', 'Shape_Area': '', });
lyr_DPODevelopmentPlanOverlay_27.set('fieldImages', {'fid': '', 'OBJECTID': '', 'PFI': '', 'SCHEME_COD': '', 'LGA_CODE': '', 'LGA': '', 'ZONE_NUM': '', 'ZONE_STATU': '', 'ZONE_CODE': '', 'ZONE_DESCR': '', 'GAZ_BEGIN_': '', 'PFI_CREATE': '', 'UFI': '', 'UFI_CREATE': '', 'ZONE_CODE_': '', 'ZONE_COD_1': '', 'Shape_Leng': '', 'Shape_Area': '', });
lyr_EAOEnvironmentalAuditOverlay_28.set('fieldImages', {'fid': '', 'OBJECTID': '', 'PFI': '', 'SCHEME_COD': '', 'LGA_CODE': '', 'LGA': '', 'ZONE_NUM': '', 'ZONE_STATU': '', 'ZONE_CODE': '', 'ZONE_DESCR': '', 'GAZ_BEGIN_': '', 'PFI_CREATE': '', 'UFI': '', 'UFI_CREATE': '', 'ZONE_CODE_': '', 'ZONE_COD_1': '', 'Shape_Leng': '', 'Shape_Area': '', });
lyr_EMOErosionManagementOverlay_29.set('fieldImages', {'fid': '', 'OBJECTID': '', 'PFI': '', 'SCHEME_COD': '', 'LGA_CODE': '', 'LGA': '', 'ZONE_NUM': '', 'ZONE_STATU': '', 'ZONE_CODE': '', 'ZONE_DESCR': '', 'GAZ_BEGIN_': '', 'PFI_CREATE': '', 'UFI': '', 'UFI_CREATE': '', 'ZONE_CODE_': '', 'ZONE_COD_1': '', 'Shape_Leng': '', 'Shape_Area': '', });
lyr_ICOInfrastructureContributionsOverlay_30.set('fieldImages', {'fid': '', 'OBJECTID': '', 'PFI': '', 'SCHEME_COD': '', 'LGA_CODE': '', 'LGA': '', 'ZONE_NUM': '', 'ZONE_STATU': '', 'ZONE_CODE': '', 'ZONE_DESCR': '', 'GAZ_BEGIN_': '', 'PFI_CREATE': '', 'UFI': '', 'UFI_CREATE': '', 'ZONE_CODE_': '', 'ZONE_COD_1': '', 'Shape_Leng': '', 'Shape_Area': '', });
lyr_IPOIncorporatedPlanOverlay_31.set('fieldImages', {'fid': '', 'OBJECTID': '', 'PFI': '', 'SCHEME_COD': '', 'LGA_CODE': '', 'LGA': '', 'ZONE_NUM': '', 'ZONE_STATU': '', 'ZONE_CODE': '', 'ZONE_DESCR': '', 'GAZ_BEGIN_': '', 'PFI_CREATE': '', 'UFI': '', 'UFI_CREATE': '', 'ZONE_CODE_': '', 'ZONE_COD_1': '', 'Shape_Leng': '', 'Shape_Area': '', });
lyr_MAEOMelbourneAirportEnvironsOverlay_32.set('fieldImages', {'fid': '', 'OBJECTID': '', 'PFI': '', 'SCHEME_COD': '', 'LGA_CODE': '', 'LGA': '', 'ZONE_NUM': '', 'ZONE_STATU': '', 'ZONE_CODE': '', 'ZONE_DESCR': '', 'GAZ_BEGIN_': '', 'PFI_CREATE': '', 'UFI': '', 'UFI_CREATE': '', 'ZONE_CODE_': '', 'ZONE_COD_1': '', 'Shape_Leng': '', 'Shape_Area': '', });
lyr_NCONeighbourhoodCharacterOverlay_33.set('fieldImages', {'fid': '', 'OBJECTID': '', 'PFI': '', 'SCHEME_COD': '', 'LGA_CODE': '', 'LGA': '', 'ZONE_NUM': '', 'ZONE_STATU': '', 'ZONE_CODE': '', 'ZONE_DESCR': '', 'GAZ_BEGIN_': '', 'PFI_CREATE': '', 'UFI': '', 'UFI_CREATE': '', 'ZONE_CODE_': '', 'ZONE_COD_1': '', 'Shape_Leng': '', 'Shape_Area': '', });
lyr_POParkingOverlay_34.set('fieldImages', {'fid': '', 'OBJECTID': '', 'PFI': '', 'SCHEME_COD': '', 'LGA_CODE': '', 'LGA': '', 'ZONE_NUM': '', 'ZONE_STATU': '', 'ZONE_CODE': '', 'ZONE_DESCR': '', 'GAZ_BEGIN_': '', 'PFI_CREATE': '', 'UFI': '', 'UFI_CREATE': '', 'ZONE_CODE_': '', 'ZONE_COD_1': '', 'Shape_Leng': '', 'Shape_Area': '', });
lyr_PSBProtectedSettlementBoundary_35.set('fieldImages', {'fid': '', 'OBJECTID': 'TextEdit', 'PFI': 'TextEdit', 'SCHEME_COD': 'TextEdit', 'LGA_CODE': 'TextEdit', 'LGA': 'TextEdit', 'ZONE_NUM': 'TextEdit', 'ZONE_STATU': 'TextEdit', 'ZONE_CODE': 'TextEdit', 'ZONE_DESCR': 'TextEdit', 'GAZ_BEGIN_': 'TextEdit', 'PFI_CREATE': 'TextEdit', 'UFI': 'TextEdit', 'UFI_CREATE': 'TextEdit', 'ZONE_CODE_': 'TextEdit', 'ZONE_COD_1': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_RFORuralFloodwayOverlay_36.set('fieldImages', {'fid': '', 'OBJECTID': '', 'PFI': '', 'SCHEME_COD': '', 'LGA_CODE': '', 'LGA': '', 'ZONE_NUM': '', 'ZONE_STATU': '', 'ZONE_CODE': '', 'ZONE_DESCR': '', 'GAZ_BEGIN_': '', 'PFI_CREATE': '', 'UFI': '', 'UFI_CREATE': '', 'ZONE_CODE_': '', 'ZONE_COD_1': '', 'Shape_Leng': '', 'Shape_Area': '', });
lyr_SBOSpecialBuildingOverlay_37.set('fieldImages', {'fid': '', 'OBJECTID': '', 'PFI': '', 'SCHEME_COD': '', 'LGA_CODE': '', 'LGA': '', 'ZONE_NUM': '', 'ZONE_STATU': '', 'ZONE_CODE': '', 'ZONE_DESCR': '', 'GAZ_BEGIN_': '', 'PFI_CREATE': '', 'UFI': '', 'UFI_CREATE': '', 'ZONE_CODE_': '', 'ZONE_COD_1': '', 'Shape_Leng': '', 'Shape_Area': '', });
lyr_SCOSpecificControlsOverlay_38.set('fieldImages', {'fid': '', 'OBJECTID': '', 'PFI': '', 'SCHEME_COD': '', 'LGA_CODE': '', 'LGA': '', 'ZONE_NUM': '', 'ZONE_STATU': '', 'ZONE_CODE': '', 'ZONE_DESCR': '', 'GAZ_BEGIN_': '', 'PFI_CREATE': '', 'UFI': '', 'UFI_CREATE': '', 'ZONE_CODE_': '', 'ZONE_COD_1': '', 'Shape_Leng': '', 'Shape_Area': '', });
lyr_SMOSalinityManagementOverlay_39.set('fieldImages', {'fid': '', 'OBJECTID': '', 'PFI': '', 'SCHEME_COD': '', 'LGA_CODE': '', 'LGA': '', 'ZONE_NUM': '', 'ZONE_STATU': '', 'ZONE_CODE': '', 'ZONE_DESCR': '', 'GAZ_BEGIN_': '', 'PFI_CREATE': '', 'UFI': '', 'UFI_CREATE': '', 'ZONE_CODE_': '', 'ZONE_COD_1': '', 'Shape_Leng': '', 'Shape_Area': '', });
lyr_BAOBufferAreaOverlay_40.set('fieldImages', {'fid': '', 'OBJECTID': '', 'PFI': '', 'SCHEME_COD': '', 'LGA_CODE': '', 'LGA': '', 'ZONE_NUM': '', 'ZONE_STATU': '', 'ZONE_CODE': '', 'ZONE_DESCR': '', 'GAZ_BEGIN_': '', 'PFI_CREATE': '', 'UFI': '', 'UFI_CREATE': '', 'ZONE_CODE_': '', 'ZONE_COD_1': '', 'Shape_Leng': '', 'Shape_Area': '', });
lyr_BMOBushfireManagementOverlay_41.set('fieldImages', {'fid': '', 'OBJECTID': '', 'PFI': '', 'SCHEME_COD': '', 'LGA_CODE': '', 'LGA': '', 'ZONE_NUM': '', 'ZONE_STATU': '', 'ZONE_CODE': '', 'ZONE_DESCR': '', 'GAZ_BEGIN_': '', 'PFI_CREATE': '', 'UFI': '', 'UFI_CREATE': '', 'ZONE_CODE_': '', 'ZONE_COD_1': '', 'Shape_Leng': '', 'Shape_Area': '', });
lyr_ESOEnvironmentalSignificanceOverlay_42.set('fieldImages', {'fid': '', 'OBJECTID': '', 'PFI': '', 'SCHEME_COD': '', 'LGA_CODE': '', 'LGA': '', 'ZONE_NUM': '', 'ZONE_STATU': '', 'ZONE_CODE': '', 'ZONE_DESCR': '', 'GAZ_BEGIN_': '', 'PFI_CREATE': '', 'UFI': '', 'UFI_CREATE': '', 'ZONE_CODE_': '', 'ZONE_COD_1': '', 'Shape_Leng': '', 'Shape_Area': '', });
lyr_PAOPublicAcquisitionOverlay_43.set('fieldImages', {'fid': '', 'OBJECTID': '', 'PFI': '', 'SCHEME_COD': '', 'LGA_CODE': '', 'LGA': '', 'ZONE_NUM': '', 'ZONE_STATU': '', 'ZONE_CODE': '', 'ZONE_DESCR': '', 'GAZ_BEGIN_': '', 'PFI_CREATE': '', 'UFI': '', 'UFI_CREATE': '', 'ZONE_CODE_': '', 'ZONE_COD_1': '', 'Shape_Leng': '', 'Shape_Area': '', });
lyr_RORestructureOverlay_44.set('fieldImages', {'fid': '', 'OBJECTID': '', 'PFI': '', 'SCHEME_COD': '', 'LGA_CODE': '', 'LGA': '', 'ZONE_NUM': '', 'ZONE_STATU': '', 'ZONE_CODE': '', 'ZONE_DESCR': '', 'GAZ_BEGIN_': '', 'PFI_CREATE': '', 'UFI': '', 'UFI_CREATE': '', 'ZONE_CODE_': '', 'ZONE_COD_1': '', 'Shape_Leng': '', 'Shape_Area': '', });
lyr_RXORoadClosureOverlay_45.set('fieldImages', {'fid': '', 'OBJECTID': '', 'PFI': '', 'SCHEME_COD': '', 'LGA_CODE': '', 'LGA': '', 'ZONE_NUM': '', 'ZONE_STATU': '', 'ZONE_CODE': '', 'ZONE_DESCR': '', 'GAZ_BEGIN_': '', 'PFI_CREATE': '', 'UFI': '', 'UFI_CREATE': '', 'ZONE_CODE_': '', 'ZONE_COD_1': '', 'Shape_Leng': '', 'Shape_Area': '', });
lyr_SLOSignificantLandscapeOverlay_46.set('fieldImages', {'fid': '', 'OBJECTID': '', 'PFI': '', 'SCHEME_COD': '', 'LGA_CODE': '', 'LGA': '', 'ZONE_NUM': '', 'ZONE_STATU': '', 'ZONE_CODE': '', 'ZONE_DESCR': '', 'GAZ_BEGIN_': '', 'PFI_CREATE': '', 'UFI': '', 'UFI_CREATE': '', 'ZONE_CODE_': '', 'ZONE_COD_1': '', 'Shape_Leng': '', 'Shape_Area': '', });
lyr_SROStateResourceOverlay_47.set('fieldImages', {'fid': '', 'OBJECTID': '', 'PFI': '', 'SCHEME_COD': '', 'LGA_CODE': '', 'LGA': '', 'ZONE_NUM': '', 'ZONE_STATU': '', 'ZONE_CODE': '', 'ZONE_DESCR': '', 'GAZ_BEGIN_': '', 'PFI_CREATE': '', 'UFI': '', 'UFI_CREATE': '', 'ZONE_CODE_': '', 'ZONE_COD_1': '', 'Shape_Leng': '', 'Shape_Area': '', });
lyr_FOFloodwayOverlay_48.set('fieldImages', {'fid': '', 'OBJECTID': '', 'PFI': '', 'SCHEME_COD': '', 'LGA_CODE': '', 'LGA': '', 'ZONE_NUM': '', 'ZONE_STATU': '', 'ZONE_CODE': '', 'ZONE_DESCR': '', 'GAZ_BEGIN_': '', 'PFI_CREATE': '', 'UFI': '', 'UFI_CREATE': '', 'ZONE_CODE_': '', 'ZONE_COD_1': '', 'Shape_Leng': '', 'Shape_Area': '', });
lyr_HOHeritageOverlay_49.set('fieldImages', {'fid': '', 'OBJECTID': '', 'PFI': '', 'SCHEME_COD': '', 'LGA_CODE': '', 'LGA': '', 'ZONE_NUM': '', 'ZONE_STATU': '', 'ZONE_CODE': '', 'ZONE_DESCR': '', 'GAZ_BEGIN_': '', 'PFI_CREATE': '', 'UFI': '', 'UFI_CREATE': '', 'ZONE_CODE_': '', 'ZONE_COD_1': '', 'Shape_Leng': '', 'Shape_Area': '', });
lyr_LSIOLandSubjecttoInundationOverlay_50.set('fieldImages', {'fid': '', 'OBJECTID': '', 'PFI': '', 'SCHEME_COD': '', 'LGA_CODE': '', 'LGA': '', 'ZONE_NUM': '', 'ZONE_STATU': '', 'ZONE_CODE': '', 'ZONE_DESCR': '', 'GAZ_BEGIN_': '', 'PFI_CREATE': '', 'UFI': '', 'UFI_CREATE': '', 'ZONE_CODE_': '', 'ZONE_COD_1': '', 'Shape_Leng': '', 'Shape_Area': '', });
lyr_VPOVegetationProtectionOverlay_51.set('fieldImages', {'fid': '', 'OBJECTID': 'TextEdit', 'PFI': 'TextEdit', 'SCHEME_COD': 'TextEdit', 'LGA_CODE': 'TextEdit', 'LGA': 'TextEdit', 'ZONE_NUM': 'TextEdit', 'ZONE_STATU': 'TextEdit', 'ZONE_CODE': 'TextEdit', 'ZONE_DESCR': 'TextEdit', 'GAZ_BEGIN_': 'TextEdit', 'PFI_CREATE': 'TextEdit', 'UFI': 'TextEdit', 'UFI_CREATE': 'TextEdit', 'ZONE_CODE_': 'TextEdit', 'ZONE_COD_1': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_HeritageRegister_52.set('fieldImages', {'fid': '', 'OBJECTID': '', 'VDPID': '', 'UFI': '', 'HERMES_NUM': '', 'VHR_NUM': '', 'VHI_NUM': '', 'HERITAGE_O': '', 'SITE_NAME': '', 'ID': '', 'UFI_CREATE': '', 'Shape_Leng': '', 'Shape_Area': '', });
lyr_SSP5_53.set('fieldImages', {'fid': '', 'OBJECTID': '', 'PFI': '', 'SCHEME_COD': '', 'LGA_CODE': '', 'LGA': '', 'ZONE_NUM': '', 'ZONE_STATU': '', 'ZONE_CODE': '', 'ZONE_DESCR': '', 'GAZ_BEGIN_': '', 'PFI_CREATE': '', 'UFI': '', 'UFI_CREATE': '', 'ZONE_CODE_': '', 'ZONE_COD_1': '', 'Shape_Leng': '', 'Shape_Area': '', });
lyr_SSP3_54.set('fieldImages', {'fid': '', 'OBJECTID': '', 'PFI': '', 'SCHEME_COD': '', 'LGA_CODE': '', 'LGA': '', 'ZONE_NUM': '', 'ZONE_STATU': '', 'ZONE_CODE': '', 'ZONE_DESCR': '', 'GAZ_BEGIN_': '', 'PFI_CREATE': '', 'UFI': '', 'UFI_CREATE': '', 'ZONE_CODE_': '', 'ZONE_COD_1': '', 'Shape_Leng': '', 'Shape_Area': '', });
lyr_SSP2_55.set('fieldImages', {'fid': '', 'OBJECTID': '', 'PFI': '', 'SCHEME_COD': '', 'LGA_CODE': '', 'LGA': '', 'ZONE_NUM': '', 'ZONE_STATU': '', 'ZONE_CODE': '', 'ZONE_DESCR': '', 'GAZ_BEGIN_': '', 'PFI_CREATE': '', 'UFI': '', 'UFI_CREATE': '', 'ZONE_CODE_': '', 'ZONE_COD_1': '', 'Shape_Leng': '', 'Shape_Area': '', });
lyr_LGA_57.set('fieldImages', {'LGA_CODE24': 'TextEdit', 'LGA_NAME24': 'TextEdit', 'STE_CODE21': 'TextEdit', 'STE_NAME21': 'TextEdit', 'AUS_CODE21': 'TextEdit', 'AUS_NAME21': 'TextEdit', 'AREASQKM': 'TextEdit', 'LOCI_URI21': 'TextEdit', });
lyr_GreaterBendigoProperties_58.set('fieldImages', {'fid': '', 'OBJECTID': '', 'PROP_PFI': '', 'PROP_LGA_CODE': '', 'PROP_PROPNUM': '', 'PROP_PROPERTY_TYPE': '', 'PROP_MULTI_ASSESSMENT': '', 'PROP_STATUS': '', 'ADD_EZI_ADDRESS': '', 'ADD_IS_PRIMARY': '', 'ADD_HOUSE_NUMBER_1': '', 'ADD_HOUSE_SUFFIX_1': '', 'ADD_ROAD_NAME': '', 'ADD_ROAD_TYPE': '', 'ADD_ROAD_SUFFIX': '', 'ADD_LOCALITY_NAME': '', 'ADD_STATE': '', 'ADD_POSTCODE': '', 'ADD_NUM_ROAD_ADDRESS': '', 'Shape_Length': '', 'Shape_Area': '', });
lyr_Suburb_59.set('fieldImages', {'LC_PLY_PID': 'TextEdit', 'LOC_PID': 'TextEdit', 'DT_CREATE': 'DateTime', 'LOC_NAME': 'TextEdit', 'LOC_CLASS': 'TextEdit', 'STATE': 'TextEdit', });
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
lyr_AboriginalCulturalHeritageSensitivity_19.set('fieldLabels', {'fid': 'no label', 'OBJECTID': 'no label', 'SENSITIVIT': 'no label', 'Shape_Leng': 'no label', 'Shape_Area': 'no label', });
lyr_RegisteredAboriginalParties_20.set('fieldLabels', {'OBJECTID': 'no label', 'ID': 'no label', 'NAME': 'no label', 'ADDRESS': 'no label', 'TELEPHONE': 'no label', 'REG_DATE': 'no label', 'CONTACT': 'no label', 'EMAIL': 'no label', 'AREA_': 'no label', 'SHORT_NAME': 'no label', 'SHORT': 'no label', 'Shape_Leng': 'no label', 'Shape_Area': 'no label', });
lyr_HeritageInventory_21.set('fieldLabels', {'fid': 'no label', 'OBJECTID': 'no label', 'VDPID': 'no label', 'UFI': 'no label', 'HERMES_NUM': 'no label', 'VHR_NUM': 'no label', 'VHI_NUM': 'no label', 'HERITAGE_O': 'no label', 'SITE_NAME': 'no label', 'ID': 'no label', 'UFI_CREATE': 'no label', 'Shape_Leng': 'no label', 'Shape_Area': 'no label', });
lyr_RecognitionandSettlementAgreement_22.set('fieldLabels', {'fid': 'no label', 'OBJECTID': 'no label', 'ID': 'no label', 'NAME': 'no label', 'LABEL_NAME': 'no label', 'CATEGORY': 'no label', 'SUB_CATEGO': 'no label', 'LEGISLATIO': 'no label', 'DATE_COMME': 'no label', 'OFFICIAL_A': 'no label', 'VERSION_DA': 'no label', 'Shape_Leng': 'no label', 'Shape_Area': 'no label', });
lyr_AEOAirportEnvironsOverlay_23.set('fieldLabels', {'fid': 'hidden field', 'OBJECTID': 'hidden field', 'PFI': 'hidden field', 'SCHEME_COD': 'hidden field', 'LGA_CODE': 'hidden field', 'LGA': 'hidden field', 'ZONE_NUM': 'hidden field', 'ZONE_STATU': 'hidden field', 'ZONE_CODE': 'hidden field', 'ZONE_DESCR': 'hidden field', 'GAZ_BEGIN_': 'hidden field', 'PFI_CREATE': 'hidden field', 'UFI': 'hidden field', 'UFI_CREATE': 'hidden field', 'ZONE_CODE_': 'hidden field', 'ZONE_COD_1': 'hidden field', 'Shape_Leng': 'hidden field', 'Shape_Area': 'hidden field', });
lyr_CLPOCityLinkProjectOverlay_24.set('fieldLabels', {'fid': 'hidden field', 'OBJECTID': 'hidden field', 'PFI': 'hidden field', 'SCHEME_COD': 'hidden field', 'LGA_CODE': 'hidden field', 'LGA': 'hidden field', 'ZONE_NUM': 'hidden field', 'ZONE_STATU': 'hidden field', 'ZONE_CODE': 'hidden field', 'ZONE_DESCR': 'hidden field', 'GAZ_BEGIN_': 'hidden field', 'PFI_CREATE': 'hidden field', 'UFI': 'hidden field', 'UFI_CREATE': 'hidden field', 'ZONE_CODE_': 'hidden field', 'ZONE_COD_1': 'hidden field', 'Shape_Leng': 'hidden field', 'Shape_Area': 'hidden field', });
lyr_DCPODevelopmentContributionsPlanOverlay_25.set('fieldLabels', {'fid': 'hidden field', 'OBJECTID': 'hidden field', 'PFI': 'hidden field', 'SCHEME_COD': 'hidden field', 'LGA_CODE': 'hidden field', 'LGA': 'hidden field', 'ZONE_NUM': 'hidden field', 'ZONE_STATU': 'hidden field', 'ZONE_CODE': 'hidden field', 'ZONE_DESCR': 'hidden field', 'GAZ_BEGIN_': 'hidden field', 'PFI_CREATE': 'hidden field', 'UFI': 'hidden field', 'UFI_CREATE': 'hidden field', 'ZONE_CODE_': 'hidden field', 'ZONE_COD_1': 'hidden field', 'Shape_Leng': 'hidden field', 'Shape_Area': 'hidden field', });
lyr_DDODesignandDevelopmentOverlay_26.set('fieldLabels', {'fid': 'hidden field', 'OBJECTID': 'hidden field', 'PFI': 'hidden field', 'SCHEME_COD': 'hidden field', 'LGA_CODE': 'hidden field', 'LGA': 'hidden field', 'ZONE_NUM': 'hidden field', 'ZONE_STATU': 'hidden field', 'ZONE_CODE': 'hidden field', 'ZONE_DESCR': 'hidden field', 'GAZ_BEGIN_': 'hidden field', 'PFI_CREATE': 'hidden field', 'UFI': 'hidden field', 'UFI_CREATE': 'hidden field', 'ZONE_CODE_': 'hidden field', 'ZONE_COD_1': 'hidden field', 'Shape_Leng': 'hidden field', 'Shape_Area': 'hidden field', });
lyr_DPODevelopmentPlanOverlay_27.set('fieldLabels', {'fid': 'hidden field', 'OBJECTID': 'hidden field', 'PFI': 'hidden field', 'SCHEME_COD': 'hidden field', 'LGA_CODE': 'hidden field', 'LGA': 'hidden field', 'ZONE_NUM': 'hidden field', 'ZONE_STATU': 'hidden field', 'ZONE_CODE': 'hidden field', 'ZONE_DESCR': 'hidden field', 'GAZ_BEGIN_': 'hidden field', 'PFI_CREATE': 'hidden field', 'UFI': 'hidden field', 'UFI_CREATE': 'hidden field', 'ZONE_CODE_': 'hidden field', 'ZONE_COD_1': 'hidden field', 'Shape_Leng': 'hidden field', 'Shape_Area': 'hidden field', });
lyr_EAOEnvironmentalAuditOverlay_28.set('fieldLabels', {'fid': 'hidden field', 'OBJECTID': 'hidden field', 'PFI': 'hidden field', 'SCHEME_COD': 'hidden field', 'LGA_CODE': 'hidden field', 'LGA': 'hidden field', 'ZONE_NUM': 'hidden field', 'ZONE_STATU': 'hidden field', 'ZONE_CODE': 'hidden field', 'ZONE_DESCR': 'hidden field', 'GAZ_BEGIN_': 'hidden field', 'PFI_CREATE': 'hidden field', 'UFI': 'hidden field', 'UFI_CREATE': 'hidden field', 'ZONE_CODE_': 'hidden field', 'ZONE_COD_1': 'hidden field', 'Shape_Leng': 'hidden field', 'Shape_Area': 'hidden field', });
lyr_EMOErosionManagementOverlay_29.set('fieldLabels', {'fid': 'hidden field', 'OBJECTID': 'hidden field', 'PFI': 'hidden field', 'SCHEME_COD': 'hidden field', 'LGA_CODE': 'hidden field', 'LGA': 'hidden field', 'ZONE_NUM': 'hidden field', 'ZONE_STATU': 'hidden field', 'ZONE_CODE': 'hidden field', 'ZONE_DESCR': 'hidden field', 'GAZ_BEGIN_': 'hidden field', 'PFI_CREATE': 'hidden field', 'UFI': 'hidden field', 'UFI_CREATE': 'hidden field', 'ZONE_CODE_': 'hidden field', 'ZONE_COD_1': 'hidden field', 'Shape_Leng': 'hidden field', 'Shape_Area': 'hidden field', });
lyr_ICOInfrastructureContributionsOverlay_30.set('fieldLabels', {'fid': 'hidden field', 'OBJECTID': 'hidden field', 'PFI': 'hidden field', 'SCHEME_COD': 'hidden field', 'LGA_CODE': 'hidden field', 'LGA': 'hidden field', 'ZONE_NUM': 'hidden field', 'ZONE_STATU': 'hidden field', 'ZONE_CODE': 'hidden field', 'ZONE_DESCR': 'hidden field', 'GAZ_BEGIN_': 'hidden field', 'PFI_CREATE': 'hidden field', 'UFI': 'hidden field', 'UFI_CREATE': 'hidden field', 'ZONE_CODE_': 'hidden field', 'ZONE_COD_1': 'hidden field', 'Shape_Leng': 'hidden field', 'Shape_Area': 'hidden field', });
lyr_IPOIncorporatedPlanOverlay_31.set('fieldLabels', {'fid': 'hidden field', 'OBJECTID': 'hidden field', 'PFI': 'hidden field', 'SCHEME_COD': 'hidden field', 'LGA_CODE': 'hidden field', 'LGA': 'hidden field', 'ZONE_NUM': 'hidden field', 'ZONE_STATU': 'hidden field', 'ZONE_CODE': 'hidden field', 'ZONE_DESCR': 'hidden field', 'GAZ_BEGIN_': 'hidden field', 'PFI_CREATE': 'hidden field', 'UFI': 'hidden field', 'UFI_CREATE': 'hidden field', 'ZONE_CODE_': 'hidden field', 'ZONE_COD_1': 'hidden field', 'Shape_Leng': 'hidden field', 'Shape_Area': 'hidden field', });
lyr_MAEOMelbourneAirportEnvironsOverlay_32.set('fieldLabels', {'fid': 'hidden field', 'OBJECTID': 'hidden field', 'PFI': 'hidden field', 'SCHEME_COD': 'hidden field', 'LGA_CODE': 'hidden field', 'LGA': 'hidden field', 'ZONE_NUM': 'hidden field', 'ZONE_STATU': 'hidden field', 'ZONE_CODE': 'hidden field', 'ZONE_DESCR': 'hidden field', 'GAZ_BEGIN_': 'hidden field', 'PFI_CREATE': 'hidden field', 'UFI': 'hidden field', 'UFI_CREATE': 'hidden field', 'ZONE_CODE_': 'hidden field', 'ZONE_COD_1': 'hidden field', 'Shape_Leng': 'hidden field', 'Shape_Area': 'hidden field', });
lyr_NCONeighbourhoodCharacterOverlay_33.set('fieldLabels', {'fid': 'hidden field', 'OBJECTID': 'hidden field', 'PFI': 'hidden field', 'SCHEME_COD': 'hidden field', 'LGA_CODE': 'hidden field', 'LGA': 'hidden field', 'ZONE_NUM': 'hidden field', 'ZONE_STATU': 'hidden field', 'ZONE_CODE': 'hidden field', 'ZONE_DESCR': 'hidden field', 'GAZ_BEGIN_': 'hidden field', 'PFI_CREATE': 'hidden field', 'UFI': 'hidden field', 'UFI_CREATE': 'hidden field', 'ZONE_CODE_': 'hidden field', 'ZONE_COD_1': 'hidden field', 'Shape_Leng': 'hidden field', 'Shape_Area': 'hidden field', });
lyr_POParkingOverlay_34.set('fieldLabels', {'fid': 'hidden field', 'OBJECTID': 'hidden field', 'PFI': 'hidden field', 'SCHEME_COD': 'hidden field', 'LGA_CODE': 'hidden field', 'LGA': 'hidden field', 'ZONE_NUM': 'hidden field', 'ZONE_STATU': 'hidden field', 'ZONE_CODE': 'hidden field', 'ZONE_DESCR': 'hidden field', 'GAZ_BEGIN_': 'hidden field', 'PFI_CREATE': 'hidden field', 'UFI': 'hidden field', 'UFI_CREATE': 'hidden field', 'ZONE_CODE_': 'hidden field', 'ZONE_COD_1': 'hidden field', 'Shape_Leng': 'hidden field', 'Shape_Area': 'hidden field', });
lyr_PSBProtectedSettlementBoundary_35.set('fieldLabels', {'fid': 'hidden field', 'OBJECTID': 'hidden field', 'PFI': 'hidden field', 'SCHEME_COD': 'hidden field', 'LGA_CODE': 'hidden field', 'LGA': 'hidden field', 'ZONE_NUM': 'hidden field', 'ZONE_STATU': 'hidden field', 'ZONE_CODE': 'hidden field', 'ZONE_DESCR': 'hidden field', 'GAZ_BEGIN_': 'hidden field', 'PFI_CREATE': 'hidden field', 'UFI': 'hidden field', 'UFI_CREATE': 'hidden field', 'ZONE_CODE_': 'hidden field', 'ZONE_COD_1': 'hidden field', 'Shape_Leng': 'hidden field', 'Shape_Area': 'hidden field', });
lyr_RFORuralFloodwayOverlay_36.set('fieldLabels', {'fid': 'hidden field', 'OBJECTID': 'hidden field', 'PFI': 'hidden field', 'SCHEME_COD': 'hidden field', 'LGA_CODE': 'hidden field', 'LGA': 'hidden field', 'ZONE_NUM': 'hidden field', 'ZONE_STATU': 'hidden field', 'ZONE_CODE': 'hidden field', 'ZONE_DESCR': 'hidden field', 'GAZ_BEGIN_': 'hidden field', 'PFI_CREATE': 'hidden field', 'UFI': 'hidden field', 'UFI_CREATE': 'hidden field', 'ZONE_CODE_': 'hidden field', 'ZONE_COD_1': 'hidden field', 'Shape_Leng': 'hidden field', 'Shape_Area': 'hidden field', });
lyr_SBOSpecialBuildingOverlay_37.set('fieldLabels', {'fid': 'hidden field', 'OBJECTID': 'hidden field', 'PFI': 'hidden field', 'SCHEME_COD': 'hidden field', 'LGA_CODE': 'hidden field', 'LGA': 'hidden field', 'ZONE_NUM': 'hidden field', 'ZONE_STATU': 'hidden field', 'ZONE_CODE': 'hidden field', 'ZONE_DESCR': 'hidden field', 'GAZ_BEGIN_': 'hidden field', 'PFI_CREATE': 'hidden field', 'UFI': 'hidden field', 'UFI_CREATE': 'hidden field', 'ZONE_CODE_': 'hidden field', 'ZONE_COD_1': 'hidden field', 'Shape_Leng': 'hidden field', 'Shape_Area': 'hidden field', });
lyr_SCOSpecificControlsOverlay_38.set('fieldLabels', {'fid': 'hidden field', 'OBJECTID': 'hidden field', 'PFI': 'hidden field', 'SCHEME_COD': 'hidden field', 'LGA_CODE': 'hidden field', 'LGA': 'hidden field', 'ZONE_NUM': 'hidden field', 'ZONE_STATU': 'hidden field', 'ZONE_CODE': 'hidden field', 'ZONE_DESCR': 'hidden field', 'GAZ_BEGIN_': 'hidden field', 'PFI_CREATE': 'hidden field', 'UFI': 'hidden field', 'UFI_CREATE': 'hidden field', 'ZONE_CODE_': 'hidden field', 'ZONE_COD_1': 'hidden field', 'Shape_Leng': 'hidden field', 'Shape_Area': 'hidden field', });
lyr_SMOSalinityManagementOverlay_39.set('fieldLabels', {'fid': 'hidden field', 'OBJECTID': 'hidden field', 'PFI': 'hidden field', 'SCHEME_COD': 'hidden field', 'LGA_CODE': 'hidden field', 'LGA': 'hidden field', 'ZONE_NUM': 'hidden field', 'ZONE_STATU': 'hidden field', 'ZONE_CODE': 'hidden field', 'ZONE_DESCR': 'hidden field', 'GAZ_BEGIN_': 'hidden field', 'PFI_CREATE': 'hidden field', 'UFI': 'hidden field', 'UFI_CREATE': 'hidden field', 'ZONE_CODE_': 'hidden field', 'ZONE_COD_1': 'hidden field', 'Shape_Leng': 'hidden field', 'Shape_Area': 'hidden field', });
lyr_BAOBufferAreaOverlay_40.set('fieldLabels', {'fid': 'hidden field', 'OBJECTID': 'hidden field', 'PFI': 'hidden field', 'SCHEME_COD': 'hidden field', 'LGA_CODE': 'hidden field', 'LGA': 'hidden field', 'ZONE_NUM': 'hidden field', 'ZONE_STATU': 'hidden field', 'ZONE_CODE': 'hidden field', 'ZONE_DESCR': 'hidden field', 'GAZ_BEGIN_': 'hidden field', 'PFI_CREATE': 'hidden field', 'UFI': 'hidden field', 'UFI_CREATE': 'hidden field', 'ZONE_CODE_': 'hidden field', 'ZONE_COD_1': 'hidden field', 'Shape_Leng': 'hidden field', 'Shape_Area': 'hidden field', });
lyr_BMOBushfireManagementOverlay_41.set('fieldLabels', {'fid': 'hidden field', 'OBJECTID': 'hidden field', 'PFI': 'hidden field', 'SCHEME_COD': 'hidden field', 'LGA_CODE': 'hidden field', 'LGA': 'hidden field', 'ZONE_NUM': 'hidden field', 'ZONE_STATU': 'hidden field', 'ZONE_CODE': 'hidden field', 'ZONE_DESCR': 'hidden field', 'GAZ_BEGIN_': 'hidden field', 'PFI_CREATE': 'hidden field', 'UFI': 'hidden field', 'UFI_CREATE': 'hidden field', 'ZONE_CODE_': 'hidden field', 'ZONE_COD_1': 'hidden field', 'Shape_Leng': 'hidden field', 'Shape_Area': 'hidden field', });
lyr_ESOEnvironmentalSignificanceOverlay_42.set('fieldLabels', {'fid': 'hidden field', 'OBJECTID': 'hidden field', 'PFI': 'hidden field', 'SCHEME_COD': 'hidden field', 'LGA_CODE': 'hidden field', 'LGA': 'hidden field', 'ZONE_NUM': 'hidden field', 'ZONE_STATU': 'hidden field', 'ZONE_CODE': 'hidden field', 'ZONE_DESCR': 'hidden field', 'GAZ_BEGIN_': 'hidden field', 'PFI_CREATE': 'hidden field', 'UFI': 'hidden field', 'UFI_CREATE': 'hidden field', 'ZONE_CODE_': 'hidden field', 'ZONE_COD_1': 'hidden field', 'Shape_Leng': 'hidden field', 'Shape_Area': 'hidden field', });
lyr_PAOPublicAcquisitionOverlay_43.set('fieldLabels', {'fid': 'hidden field', 'OBJECTID': 'hidden field', 'PFI': 'hidden field', 'SCHEME_COD': 'hidden field', 'LGA_CODE': 'hidden field', 'LGA': 'hidden field', 'ZONE_NUM': 'hidden field', 'ZONE_STATU': 'hidden field', 'ZONE_CODE': 'hidden field', 'ZONE_DESCR': 'hidden field', 'GAZ_BEGIN_': 'hidden field', 'PFI_CREATE': 'hidden field', 'UFI': 'hidden field', 'UFI_CREATE': 'hidden field', 'ZONE_CODE_': 'hidden field', 'ZONE_COD_1': 'hidden field', 'Shape_Leng': 'hidden field', 'Shape_Area': 'hidden field', });
lyr_RORestructureOverlay_44.set('fieldLabels', {'fid': 'hidden field', 'OBJECTID': 'hidden field', 'PFI': 'hidden field', 'SCHEME_COD': 'hidden field', 'LGA_CODE': 'hidden field', 'LGA': 'hidden field', 'ZONE_NUM': 'hidden field', 'ZONE_STATU': 'hidden field', 'ZONE_CODE': 'hidden field', 'ZONE_DESCR': 'hidden field', 'GAZ_BEGIN_': 'hidden field', 'PFI_CREATE': 'hidden field', 'UFI': 'hidden field', 'UFI_CREATE': 'hidden field', 'ZONE_CODE_': 'hidden field', 'ZONE_COD_1': 'hidden field', 'Shape_Leng': 'hidden field', 'Shape_Area': 'hidden field', });
lyr_RXORoadClosureOverlay_45.set('fieldLabels', {'fid': 'hidden field', 'OBJECTID': 'hidden field', 'PFI': 'hidden field', 'SCHEME_COD': 'hidden field', 'LGA_CODE': 'hidden field', 'LGA': 'hidden field', 'ZONE_NUM': 'hidden field', 'ZONE_STATU': 'hidden field', 'ZONE_CODE': 'hidden field', 'ZONE_DESCR': 'hidden field', 'GAZ_BEGIN_': 'hidden field', 'PFI_CREATE': 'hidden field', 'UFI': 'hidden field', 'UFI_CREATE': 'hidden field', 'ZONE_CODE_': 'hidden field', 'ZONE_COD_1': 'hidden field', 'Shape_Leng': 'hidden field', 'Shape_Area': 'hidden field', });
lyr_SLOSignificantLandscapeOverlay_46.set('fieldLabels', {'fid': 'hidden field', 'OBJECTID': 'hidden field', 'PFI': 'hidden field', 'SCHEME_COD': 'hidden field', 'LGA_CODE': 'hidden field', 'LGA': 'hidden field', 'ZONE_NUM': 'hidden field', 'ZONE_STATU': 'hidden field', 'ZONE_CODE': 'hidden field', 'ZONE_DESCR': 'hidden field', 'GAZ_BEGIN_': 'hidden field', 'PFI_CREATE': 'hidden field', 'UFI': 'hidden field', 'UFI_CREATE': 'hidden field', 'ZONE_CODE_': 'hidden field', 'ZONE_COD_1': 'hidden field', 'Shape_Leng': 'hidden field', 'Shape_Area': 'hidden field', });
lyr_SROStateResourceOverlay_47.set('fieldLabels', {'fid': 'hidden field', 'OBJECTID': 'hidden field', 'PFI': 'hidden field', 'SCHEME_COD': 'hidden field', 'LGA_CODE': 'hidden field', 'LGA': 'hidden field', 'ZONE_NUM': 'hidden field', 'ZONE_STATU': 'hidden field', 'ZONE_CODE': 'hidden field', 'ZONE_DESCR': 'hidden field', 'GAZ_BEGIN_': 'hidden field', 'PFI_CREATE': 'hidden field', 'UFI': 'hidden field', 'UFI_CREATE': 'hidden field', 'ZONE_CODE_': 'hidden field', 'ZONE_COD_1': 'hidden field', 'Shape_Leng': 'hidden field', 'Shape_Area': 'hidden field', });
lyr_FOFloodwayOverlay_48.set('fieldLabels', {'fid': 'hidden field', 'OBJECTID': 'hidden field', 'PFI': 'hidden field', 'SCHEME_COD': 'hidden field', 'LGA_CODE': 'hidden field', 'LGA': 'hidden field', 'ZONE_NUM': 'hidden field', 'ZONE_STATU': 'hidden field', 'ZONE_CODE': 'hidden field', 'ZONE_DESCR': 'hidden field', 'GAZ_BEGIN_': 'hidden field', 'PFI_CREATE': 'hidden field', 'UFI': 'hidden field', 'UFI_CREATE': 'hidden field', 'ZONE_CODE_': 'hidden field', 'ZONE_COD_1': 'hidden field', 'Shape_Leng': 'hidden field', 'Shape_Area': 'hidden field', });
lyr_HOHeritageOverlay_49.set('fieldLabels', {'fid': 'hidden field', 'OBJECTID': 'hidden field', 'PFI': 'hidden field', 'SCHEME_COD': 'hidden field', 'LGA_CODE': 'hidden field', 'LGA': 'hidden field', 'ZONE_NUM': 'hidden field', 'ZONE_STATU': 'hidden field', 'ZONE_CODE': 'hidden field', 'ZONE_DESCR': 'hidden field', 'GAZ_BEGIN_': 'hidden field', 'PFI_CREATE': 'hidden field', 'UFI': 'hidden field', 'UFI_CREATE': 'hidden field', 'ZONE_CODE_': 'hidden field', 'ZONE_COD_1': 'hidden field', 'Shape_Leng': 'hidden field', 'Shape_Area': 'hidden field', });
lyr_LSIOLandSubjecttoInundationOverlay_50.set('fieldLabels', {'fid': 'hidden field', 'OBJECTID': 'hidden field', 'PFI': 'hidden field', 'SCHEME_COD': 'hidden field', 'LGA_CODE': 'hidden field', 'LGA': 'hidden field', 'ZONE_NUM': 'hidden field', 'ZONE_STATU': 'hidden field', 'ZONE_CODE': 'hidden field', 'ZONE_DESCR': 'hidden field', 'GAZ_BEGIN_': 'hidden field', 'PFI_CREATE': 'hidden field', 'UFI': 'hidden field', 'UFI_CREATE': 'hidden field', 'ZONE_CODE_': 'hidden field', 'ZONE_COD_1': 'hidden field', 'Shape_Leng': 'hidden field', 'Shape_Area': 'hidden field', });
lyr_VPOVegetationProtectionOverlay_51.set('fieldLabels', {'fid': 'hidden field', 'OBJECTID': 'hidden field', 'PFI': 'hidden field', 'SCHEME_COD': 'hidden field', 'LGA_CODE': 'hidden field', 'LGA': 'hidden field', 'ZONE_NUM': 'hidden field', 'ZONE_STATU': 'hidden field', 'ZONE_CODE': 'hidden field', 'ZONE_DESCR': 'hidden field', 'GAZ_BEGIN_': 'hidden field', 'PFI_CREATE': 'hidden field', 'UFI': 'hidden field', 'UFI_CREATE': 'hidden field', 'ZONE_CODE_': 'hidden field', 'ZONE_COD_1': 'hidden field', 'Shape_Leng': 'hidden field', 'Shape_Area': 'hidden field', });
lyr_HeritageRegister_52.set('fieldLabels', {'fid': 'no label', 'OBJECTID': 'no label', 'VDPID': 'no label', 'UFI': 'no label', 'HERMES_NUM': 'no label', 'VHR_NUM': 'no label', 'VHI_NUM': 'no label', 'HERITAGE_O': 'no label', 'SITE_NAME': 'no label', 'ID': 'no label', 'UFI_CREATE': 'no label', 'Shape_Leng': 'no label', 'Shape_Area': 'no label', });
lyr_SSP5_53.set('fieldLabels', {'fid': 'no label', 'OBJECTID': 'no label', 'PFI': 'no label', 'SCHEME_COD': 'no label', 'LGA_CODE': 'no label', 'LGA': 'no label', 'ZONE_NUM': 'no label', 'ZONE_STATU': 'no label', 'ZONE_CODE': 'no label', 'ZONE_DESCR': 'no label', 'GAZ_BEGIN_': 'no label', 'PFI_CREATE': 'no label', 'UFI': 'no label', 'UFI_CREATE': 'no label', 'ZONE_CODE_': 'no label', 'ZONE_COD_1': 'no label', 'Shape_Leng': 'no label', 'Shape_Area': 'no label', });
lyr_SSP3_54.set('fieldLabels', {'fid': 'no label', 'OBJECTID': 'no label', 'PFI': 'no label', 'SCHEME_COD': 'no label', 'LGA_CODE': 'no label', 'LGA': 'no label', 'ZONE_NUM': 'no label', 'ZONE_STATU': 'no label', 'ZONE_CODE': 'no label', 'ZONE_DESCR': 'no label', 'GAZ_BEGIN_': 'no label', 'PFI_CREATE': 'no label', 'UFI': 'no label', 'UFI_CREATE': 'no label', 'ZONE_CODE_': 'no label', 'ZONE_COD_1': 'no label', 'Shape_Leng': 'no label', 'Shape_Area': 'no label', });
lyr_SSP2_55.set('fieldLabels', {'fid': 'no label', 'OBJECTID': 'no label', 'PFI': 'no label', 'SCHEME_COD': 'no label', 'LGA_CODE': 'no label', 'LGA': 'no label', 'ZONE_NUM': 'no label', 'ZONE_STATU': 'no label', 'ZONE_CODE': 'no label', 'ZONE_DESCR': 'no label', 'GAZ_BEGIN_': 'no label', 'PFI_CREATE': 'no label', 'UFI': 'no label', 'UFI_CREATE': 'no label', 'ZONE_CODE_': 'no label', 'ZONE_COD_1': 'no label', 'Shape_Leng': 'no label', 'Shape_Area': 'no label', });
lyr_LGA_57.set('fieldLabels', {'LGA_CODE24': 'hidden field', 'LGA_NAME24': 'hidden field', 'STE_CODE21': 'hidden field', 'STE_NAME21': 'hidden field', 'AUS_CODE21': 'hidden field', 'AUS_NAME21': 'hidden field', 'AREASQKM': 'hidden field', 'LOCI_URI21': 'hidden field', });
lyr_GreaterBendigoProperties_58.set('fieldLabels', {'fid': 'hidden field', 'OBJECTID': 'hidden field', 'PROP_PFI': 'hidden field', 'PROP_LGA_CODE': 'hidden field', 'PROP_PROPNUM': 'hidden field', 'PROP_PROPERTY_TYPE': 'hidden field', 'PROP_MULTI_ASSESSMENT': 'hidden field', 'PROP_STATUS': 'hidden field', 'ADD_EZI_ADDRESS': 'header label - visible with data', 'ADD_IS_PRIMARY': 'hidden field', 'ADD_HOUSE_NUMBER_1': 'hidden field', 'ADD_HOUSE_SUFFIX_1': 'hidden field', 'ADD_ROAD_NAME': 'hidden field', 'ADD_ROAD_TYPE': 'hidden field', 'ADD_ROAD_SUFFIX': 'hidden field', 'ADD_LOCALITY_NAME': 'hidden field', 'ADD_STATE': 'hidden field', 'ADD_POSTCODE': 'hidden field', 'ADD_NUM_ROAD_ADDRESS': 'hidden field', 'Shape_Length': 'hidden field', 'Shape_Area': 'hidden field', });
lyr_Suburb_59.set('fieldLabels', {'LC_PLY_PID': 'hidden field', 'LOC_PID': 'hidden field', 'DT_CREATE': 'hidden field', 'LOC_NAME': 'hidden field', 'LOC_CLASS': 'hidden field', 'STATE': 'hidden field', });
lyr_Suburb_59.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});