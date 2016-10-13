// @flow
export const initialState:AppState = {
  initialModalVisible: true,
  locateModalVisible: false,
  shareModalVisible: false,
  topic: '',
  viewReady: false,
  itemInfo: {},
  language: 'spanish',
  panelMinimized: true
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
