// @flow
import { VIEW_READY, TOGGLE_PANEL, TOGGLE_BASEMAP, TOGGLE_UPLOAD, SELECT_LANGUAGE, RESET_APP, SELECT_TOPIC, TOGGLE_INITIAL, TOGGLE_SHARE, TOGGLE_LOCATE, FETCH_ITEM_INFO } from 'js/constants/actionTypes';
import api from 'js/utils/api';

// Types
type ModalActionArgs = {
  visible: bool
}
type topicArgs = {
  topic: string
}
type languageArgs = {
  language: string
}
type panelSizeArgs = {
  panelMinimized: bool
}
type basemapSelectArgs = {
  basemapSelector: bool
}

export function viewCreated (): Action {
  return { type: VIEW_READY };
}

export function resetApp (): Action {
  return { type: RESET_APP };
}

export function selectTopic (data: topicArgs): Action {
  return { type: SELECT_TOPIC, data };
}

export function selectLanguage (data: languageArgs): Action {
  return { type: SELECT_LANGUAGE, data };
}

export function togglePanel (data: panelSizeArgs): Action {
  return { type: TOGGLE_PANEL, data };
}

export function toggleInitialModal (data: ModalActionArgs): Action {
  return { type: TOGGLE_INITIAL, data };
}

export function toggleUploadModal (data: ModalActionArgs): Action {
  return { type: TOGGLE_UPLOAD, data };
}

export function toggleBasemapSelector (data: basemapSelectArgs): Action {
  return { type: TOGGLE_BASEMAP, data };
}

export function toggleShareModal (data: ModalActionArgs): Action {
  return { type: TOGGLE_SHARE, data };
}

export function toggleLocateModal (data: ModalActionArgs): Action {
  return { type: TOGGLE_LOCATE, data };
}

/**
* Example Async Action
*/
export function getItemInfo (appid: string): AsyncAction {
  return (dispatch: BaseDispatch) => {
    api.getItemInfo(appid).then((response:{[key:string]: Object}) => {
      dispatch({ type: FETCH_ITEM_INFO, data: response.data });
    });
  };
}
