// @flow
export const initialState:AppState = {
  initialModalVisible: true,
  locateModalVisible: false,
  shareModalVisible: false,
  uploadModalVisible: false,
  topic: '',
  viewReady: false,
  itemInfo: {},
  language: 'spanish',
  panelMinimized: true,
  basemapSelectorVisible: false
};

export const headerText:{[key:string]: any} = {
  title: {
    english: 'WHO Malaria',
    spanish: 'WHO MalarIa'
  },
  subtitle: {
    english: 'Example with Malaria, Mosquitos, and more.',
    spanish: 'Ejemplo con Malaria, Mosquitos, y mas.'
  }
};

export const leftPanelText:{[key:string]: string} = {
  reset: {
    english: 'Reset App',
    spanish: 'App de Resetto'
  },
  title1: {
    english: 'Left Panel1',
    spanish: 'Panel de Lefto Uno'
  },
  title2: {
    english: 'Left Panel2',
    spanish: 'Panel de Lefto Dos'
  },
  title3: {
    english: 'Left Panel3',
    spanish: 'Panel de Lefto Trece'
  },
  subtitle: 'Example with Malria, Mosquitos, and more.'
};

export const mapOptions:{[key:string]: any} = {
  basemap: 'streets-navigation-vector'
};

export const viewOptions:{[key:string]: any} = {
  ui: { components: ['logo', 'attribution'] },
  center: [-35.55, 26.53],
  zoom: 2
};

export const urls = {
  itemInfo: (appid: string) => `//www.arcgis.com/sharing/rest/content/items/${appid}/data`
};

export const uploadConfig:{[key:string]: any} = {
   portal: 'http://www.arcgis.com/sharing/rest/content/features/generate',
   infoTemplate: {
     content: '<table><tr><td>Name: </td><td>${featureName}</td></tr></table>' +
       '<button>Subscribe</button>' +
       '<button>Remove</button>'
   },
   shapefileParams: (name, spatialReference) => {  //, extentWidth, mapWidth)
     return {
       'name': name,
       'generalize': true,
       'targetSr': spatialReference,
       'maxRecordCount': 1000,
       'reducePrecision': true,
       'numberOfDigitsAfterDecimal': 0,
       'enforceInputFileSizeLimit': true,
       'enforceOutputJsonSizeLimit': true,
       'maxAllowableOffset': 1000 //extentWidth / mapWidth
     };
   },
   shapefileContent: (params, filetype) => {
     return {
       'publishParameters': params,
       'callback.html': 'textarea',
       'filetype': filetype,
       'f': 'json'
     };
   }
 };
