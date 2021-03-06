// @flow
import {viewCreated, togglePanel, selectNewBasemap, toggleBasemapSelector, toggleUploadModal, selectLanguage, selectTopic, toggleInitialModal, toggleLocateModal, toggleShareModal, getItemInfo} from 'js/reducers/mapReducers';
import {combineReducers} from 'redux';

// This is my state model and each reducer maps to each store property
// export default combineReducers({
const appReducer = combineReducers({
  initialModalVisible: toggleInitialModal,
  locateModalVisible: toggleLocateModal,
  shareModalVisible: toggleShareModal,
  uploadModalVisible: toggleUploadModal,
  basemapSelectorVisible: toggleBasemapSelector,
  viewReady: viewCreated,
  topic: selectTopic,
  language: selectLanguage,
  itemInfo: getItemInfo,
  panelMinimized: togglePanel,
  selectBasemapOption: selectNewBasemap
});

const rootReducer = (state:State, action:Action) => {
  if (action.type === 'RESET_APP') {
    state = undefined; //passes in initialState by default!
  }
  return appReducer(state, action);
};

export default rootReducer;
