// @flow
import React, {Component} from 'react';
import {leftPanelText} from 'js/config';
import {resetApp, togglePanel} from 'js/actions/mapActions';
import appStore from 'js/appStore';

export type HeaderProps = {
  language: string,
  activeStep: string
};

export default class TopicOnePageOne extends Component {

  props: HeaderProps;
  displayName: 'TopicOnePageOne';

  // reset:Function = () => {
  //   appStore.dispatch(resetApp({}));
  // }

  render () {
    return (
      <div className={`topic-one-page-one ${this.props.activeStep === 'first' ? '' : 'hidden'}`}>
        <span className={`topic-one-page-one-span ${this.props.activeStep === 'first' ? 'active' : ''}`} >Topic One Page One</span>
      </div>
    );
  }
}
