// @flow
import {viewCreated, getItemInfo} from 'js/actions/mapActions';
import LocateModal from 'js/components/modals/Locate';
import ShareModal from 'js/components/modals/Share';
import Spinner from 'js/components/shared/Spinner';
import {mapOptions} from 'js/config';
import Controls from 'js/components/Controls';
import React, {Component} from 'react';
import appStore from 'js/appStore';
import EsriMap from 'esri/map';

export default class Map extends Component {

  displayName: 'Map';

  state: AppState = appStore.getState();
  unsubscribe: () => void;

  componentDidMount() {
    // Subscribe to the store for updates
    this.unsubscribe = appStore.subscribe(this.storeDidUpdate);
    // Create our map view
    const map = new EsriMap('map', mapOptions);
    console.log(mapOptions);

    // promise.then(view => {
    //   this.view = view;
    //   appStore.dispatch(viewCreated());
    //   //- Webmap from https://developers.arcgis.com/javascript/latest/api-reference/esri-WebMap.html
    //   appStore.dispatch(getItemInfo('e691172598f04ea8881cd2a4adaa45ba'));
    // });
  }

  componentWillUnmount() {
    this.unsubscribe();
  }

  storeDidUpdate:Function = () => {
    this.setState(appStore.getState());
  };

  render () {
    const {shareModalVisible, locateModalVisible} = this.state;
    //<Spinner active={!this.ready} />
    return (
      <div className='map-view'>
        <Controls />
        <div id='map'></div>
        <ShareModal visible={shareModalVisible} />
        <LocateModal visible={locateModalVisible} />
      </div>
    );
  }
}
