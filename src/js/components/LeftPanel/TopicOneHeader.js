// @flow
import React, {Component} from 'react';
import {leftPanelText} from 'js/config';
import {resetApp, togglePanel} from 'js/actions/mapActions';
import appStore from 'js/appStore';

export type HeaderProps = {
  language: string,
  changeStep: Function,
  activeStep: string
};

const bulletCode = 9679;

export default class TopicOneHeader extends Component {

  props: HeaderProps;
  displayName: 'TopicOneHeader';

  reset:Function = () => {
    appStore.dispatch(resetApp({}));
  }

  render () {
    return (
      <div className='topic-one-header'>
        <span id='first' className={`topic-one-header-item first ${this.props.activeStep === 'first' ? 'active' : ''}`} onClick={this.props.changeStep}>{String.fromCharCode(bulletCode)}</span>
        <span id='second' className={`topic-one-header-item second ${this.props.activeStep === 'second' ? 'active' : ''}`} onClick={this.props.changeStep}>{String.fromCharCode(bulletCode)}</span>
        <span id='third' className={`topic-one-header-item third ${this.props.activeStep === 'third' ? 'active' : ''}`} onClick={this.props.changeStep}>{String.fromCharCode(bulletCode)}</span>
      </div>
    );
  }
}
