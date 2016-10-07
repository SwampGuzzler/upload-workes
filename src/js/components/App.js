// @flow
import MapView from 'js/components/MapView';
import LeftPanel from 'js/components/LeftPanel/LeftPanel';
import Header from 'js/components/Header';
import React, {Component} from 'react';

export default class App extends Component {

  displayName: 'App';
  props: any;

  render () {
    return (
      <div className='root'>
        <Header />
        <MapView />
        <LeftPanel />
      </div>
    );
  }

}
