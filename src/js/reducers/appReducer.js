// @flow
import {viewCreated, selectLanguage, selectTopic, toggleInitialModal, toggleLocateModal, toggleShareModal, getItemInfo} from 'js/reducers/mapReducers';
import {combineReducers} from 'redux';

// This is my state model and each reducer maps to each store property
// export default combineReducers({
const appReducer = combineReducers({
  initialModalVisible: toggleInitialModal,
  locateModalVisible: toggleLocateModal,
  shareModalVisible: toggleShareModal,
  viewReady: viewCreated,
  topic: selectTopic,
  language: selectLanguage,
  itemInfo: getItemInfo
});

const rootReducer = (state:State, action:Action) => {
  if (action.type === 'RESET_APP') {
    state = undefined; //passes in initialState by default!
  }
  return appReducer(state, action);
};

export default rootReducer;
