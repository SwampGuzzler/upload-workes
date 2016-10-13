// @flow
import MapView from 'js/components/MapView';
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
      </div>
    );
  }

}
