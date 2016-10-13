// @flow
import React, {Component} from 'react';
import {leftPanelText} from 'js/config';
import {resetApp, togglePanel} from 'js/actions/mapActions';
import appStore from 'js/appStore';

export type HeaderProps = {
  topic: string,
  language: string,
  panelMinimized: bool
};

export default class PanelHeader extends Component {

  props: HeaderProps;
  displayName: 'PanelHeader';

  reset:Function = () => {
    appStore.dispatch(resetApp({}));
  }

  toggle:Function = () => {
    appStore.dispatch(togglePanel({panelMinimized: !this.props.panelMinimized}));
  };

  render () {
    return (
      <div className={`panel-header ${this.props.topic ? 'backgroundFill' : ''}`}>
        <div onClick={this.toggle} className={`panel-toggle ${!this.props.panelMinimized ? 'open' : ''}`}>{this.props.panelMinimized ? '>' : '<'}</div>
        <p className={`reset-app ${this.props.topic ? '' : 'hidden'}`} onClick={this.reset}>{leftPanelText.reset[this.props.language]}</p>
      </div>
    );
  }

}
