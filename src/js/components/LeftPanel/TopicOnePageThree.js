// @flow
import React, {Component} from 'react';
import {leftPanelText} from 'js/config';
import {resetApp, togglePanel} from 'js/actions/mapActions';
import appStore from 'js/appStore';

export type HeaderProps = {
  language: string,
  activeStep: string
};

export default class TopicOnePageThree extends Component {

  props: HeaderProps;
  displayName: 'TopicOnePageThree';

  // reset:Function = () => {
  //   appStore.dispatch(resetApp({}));
  // }

  render () {
    return (
      <div className={`topic-one-page-three ${this.props.activeStep === 'third' ? '' : 'hidden'}`}>
        <span className={`topic-one-page-three-span ${this.props.activeStep === 'third' ? 'active' : ''}`} >Topic One Page Three</span>
      </div>
    );
  }
}
