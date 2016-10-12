// @flow
export const initialState:AppState = {
  initialModalVisible: true,
  locateModalVisible: false,
  shareModalVisible: false,
  topic: '',
  viewReady: false,
  itemInfo: {},
  language: 'spanish'
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
  reset: 'Reset App',
  title1: 'Left Panel1',
  title2: 'Left Panel2',
  title3: 'Left Panel3',
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
