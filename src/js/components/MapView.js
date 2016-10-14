// @flow
import {viewCreated, getItemInfo, toggleBasemapSelector} from 'js/actions/mapActions';
import LocateModal from 'js/components/modals/Locate';
import LeftPanel from 'js/components/LeftPanel/LeftPanel';
import ShareModal from 'js/components/modals/Share';
import InitialModal from 'js/components/modals/Initial';
import UploadModal from 'js/components/modals/Upload';
import Basemap from 'js/components/modals/Basemap';
import Spinner from 'js/components/shared/Spinner';
import {mapOptions, viewOptions} from 'js/config';
import Controls from 'js/components/Controls';
import React, {Component} from 'react';
import appStore from 'js/appStore';
import MapView from 'esri/views/MapView';
// import BasemapToggle from 'esri/widgets/BasemapToggle';
import EsriMap from 'esri/Map';

// let toggle;

export default class Map extends Component {

  displayName: 'Map';

  state: AppState = appStore.getState();
  unsubscribe: () => void;
  view: EsriView = {};


  componentDidMount() {
    // Subscribe to the store for updates
    this.unsubscribe = appStore.subscribe(this.storeDidUpdate);

    // Create our map view
    const promise:Promise<Object> = new MapView({
      container: this.refs.mapView,
      map: new EsriMap(mapOptions),
      ...viewOptions
    });

    promise.then(view => {
      this.view = view;
      appStore.dispatch(viewCreated());
      //- Webmap from https://developers.arcgis.com/javascript/latest/api-reference/esri-WebMap.html
      appStore.dispatch(getItemInfo('e691172598f04ea8881cd2a4adaa45ba'));
      // toggle = new BasemapToggle({
      //   // 2 - Set properties
      //   view: view, // view that provides access to the map's 'topo' basemap
      //   nextBasemap: 'hybrid' // allows for toggling to the 'hybrid' basemap
      // });
      // // 3 - Call startup on the widget
      // toggle.startup();
      //
      // // Add the BasemapToggle widget to the top right corner of the view
      // view.ui.add(toggle, 'top-right');
      // toggle.visible = this.state.basemapSelectorVisible;
      //
      // toggle.on('toggle', () => {
      //   appStore.dispatch(toggleBasemapSelector({ basemapSelector: false }));
      //   // setTimeout( () => {
      //   //   this.view.map.basemap = 'streets';
      //   // }, 2000);
      // });

    });
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.selectBasemapOption !== this.state.selectBasemapOption) {
      this.view.map.basemap = this.state.selectBasemapOption;
    }

  }

  componentWillUnmount() {
    this.unsubscribe();
  }

  storeDidUpdate:Function = () => {
    this.setState(appStore.getState());
  };

  render () {
    const {shareModalVisible, selectBasemapOption, locateModalVisible, initialModalVisible, uploadModalVisible, basemapSelectorVisible} = this.state;

    return (
      <div ref='mapView' className='map-view'>
        <LeftPanel />
        <Controls view={this.view} />
        <Spinner active={!this.view.ready} />
        <ShareModal visible={shareModalVisible} />
        <LocateModal visible={locateModalVisible} />
        <InitialModal visible={initialModalVisible} />
        <Basemap activeBasemap={selectBasemapOption} visible={basemapSelectorVisible} />
        <UploadModal visible={uploadModalVisible} map={this.view.map} />
      </div>
    );
  }
}
