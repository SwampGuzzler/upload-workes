// @flow
import React, {Component} from 'react';
import {leftPanelText} from 'js/config';
import {resetApp, togglePanel} from 'js/actions/mapActions';
import appStore from 'js/appStore';

export type HeaderProps = {
  language: string,
  activeStep: string
};

export default class TopicOnePageTwo extends Component {

  props: HeaderProps;
  displayName: 'TopicOnePageTwo';

  // reset:Function = () => {
  //   appStore.dispatch(resetApp({}));
  // }

  render () {
    return (
      <div className={`topic-one-page-two ${this.props.activeStep === 'second' ? '' : 'hidden'}`}>
        <span className={`topic-one-page-two-span ${this.props.activeStep === 'second' ? 'active' : ''}`} >Topic One Page Two</span>
      </div>
    );
  }
}
