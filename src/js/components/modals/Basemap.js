// @flow
import {toggleBasemapSelector, selectNewBasemap} from 'js/actions/mapActions';
import Wrapper from 'js/components/modals/Wrapper';
import React, { Component } from 'react';
import appStore from 'js/appStore';
// Type Import
import type {ModalProps} from './Types';

export default class BasemapModal extends Component {

  props: ModalProps;

  close:Function = () => {
    appStore.dispatch(toggleBasemapSelector({ basemapSelector: false }));
  };

  selectNewBasemap:Function = (evt) => {
    this.close();
    if (evt.target.id !== this.props.activeBasemap) {
      appStore.dispatch(selectNewBasemap({ basemapOption: evt.target.id }));
    }
  };

  render () {
    const {visible} = this.props;

    return (
      <Wrapper theme='basemap-modal' visible={visible} close={this.close}>
        <h3>Basemap Selector</h3>
        <span id='satellite' onClick={this.selectNewBasemap} className='basemap-selection'></span>
        <span id='dark-gray' onClick={this.selectNewBasemap} className='basemap-selection'></span>
        <span id='topo' onClick={this.selectNewBasemap} className='basemap-selection'></span>
      </Wrapper>
    );
  }
}
