// @flow
import {toggleInitialModal, selectTopic, togglePanel} from 'js/actions/mapActions';
import Wrapper from 'js/components/modals/Wrapper';
import React, { Component } from 'react';
import appStore from 'js/appStore';
// Type Import
import type {ModalProps} from './Types';

export default class InitialModal extends Component {

  props: ModalProps;

  close:Function = () => {
    appStore.dispatch(toggleInitialModal({ visible: false }));
  };

  selectTopic:Function = (evt) => {
    this.close();
    appStore.dispatch(selectTopic({ topic: evt.target.id }));
    appStore.dispatch(togglePanel({panelMinimized: false}));
  };

  render () {
    const {visible} = this.props;

    return (
      <Wrapper theme='initial-modal' visible={visible} close={this.close}>
        <h3>Init Something</h3>
        <span id='topic1' onClick={this.selectTopic} className='initial-choice'>View1</span>
        <span id='topic2' onClick={this.selectTopic} className='initial-choice'>View2</span>
        <span id='topic3' onClick={this.selectTopic} className='initial-choice'>View3</span>
      </Wrapper>
    );
  }
}
