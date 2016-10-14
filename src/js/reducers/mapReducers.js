// @flow
import { VIEW_READY, TOGGLE_PANEL, SELECT_BASEMAP, TOGGLE_BASEMAP, TOGGLE_UPLOAD, SELECT_LANGUAGE, RESET_APP, SELECT_TOPIC, TOGGLE_INITIAL, TOGGLE_SHARE, TOGGLE_LOCATE, FETCH_ITEM_INFO } from 'js/constants/actionTypes';
import {initialState} from 'js/config';

export function viewCreated (state:State = initialState.viewReady, action:Action):State {
  return action.type !== VIEW_READY ? state : true;
}

export function resetApp (state:State = initialState, action:Action):State {
  console.log(action.type !== RESET_APP);
  console.log(initialState);
  return action.type !== RESET_APP ? state : initialState;
}

export function toggleInitialModal (state:State = initialState.initialModalVisible, action:Action):State {
  const {type, data} = action;
  return type !== TOGGLE_INITIAL ? state : (
    data.visible
  );
}

export function toggleUploadModal (state:State = initialState.uploadModalVisible, action:Action):State {
  const {type, data} = action;
  return type !== TOGGLE_UPLOAD ? state : (
    data.visible
  );
}

export function toggleBasemapSelector (state:State = initialState.basemapSelectorVisible, action:Action):State {
  const {type, data} = action;
  return type !== TOGGLE_BASEMAP ? state : (
    data.basemapSelector
  );
}

export function selectTopic (state:State = initialState.topic, action:Action):State {
  const {type, data} = action;
  return type !== SELECT_TOPIC ? state : (
    data.topic
  );
}

export function selectNewBasemap (state:State = initialState.selectBasemapOption, action:Action):State {
  const {type, data} = action;
  return type !== SELECT_BASEMAP ? state : (
    data.basemapOption
  );
}

export function selectLanguage (state:State = initialState.language, action:Action):State {
  const {type, data} = action;
  return type !== SELECT_LANGUAGE ? state : (
    data.language
  );
}

export function togglePanel (state:State = initialState.panelMinimized, action:Action):State {
  const {type, data} = action;
  return type !== TOGGLE_PANEL ? state : (
    data.panelMinimized
  );
}

export function toggleShareModal (state:State = initialState.shareModalVisible, action:Action):State {
  const {type, data} = action;
  return type !== TOGGLE_SHARE ? state : (
    data.visible
  );
}

export function toggleLocateModal (state:State = initialState.locateModalVisible, action:Action):State {
  const {type, data} = action;
  return type !== TOGGLE_LOCATE ? state : (
    data.visible
  );
}

/**
* Reducer for the async action
*/
export function getItemInfo (state:State = initialState.itemInfo, action:AsyncAction):State {
  const {type, data} = action;
  return type !== FETCH_ITEM_INFO ? state : data;
}
