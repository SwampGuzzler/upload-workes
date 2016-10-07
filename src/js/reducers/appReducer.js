// @flow
import {viewCreated, selectLanguage, selectTopic, toggleInitialModal, toggleLocateModal, toggleShareModal, getItemInfo} from 'js/reducers/mapReducers';
import {combineReducers} from 'redux';

// This is my state model and each reducer maps to each store property
export default combineReducers({
  initialModalVisible: toggleInitialModal,
  locateModalVisible: toggleLocateModal,
  shareModalVisible: toggleShareModal,
  viewReady: viewCreated,
  // resetApplication: resetApp,
  topic: selectTopic,
  language: selectLanguage,
  itemInfo: getItemInfo
});
