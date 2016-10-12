// @flow
import React, {Component} from 'react';
import {leftPanelText} from 'js/config';
import {resetApp} from 'js/actions/mapActions';
import appStore from 'js/appStore';

export type HeaderProps = {
  topic: string
};

export default class PanelHeader extends Component {

  props: HeaderProps;
  displayName: 'PanelHeader';

  reset:Function = () => {
    appStore.dispatch(resetApp({}));
  }

  render () {
    return (
      <div className='panel-header'>
        <p className={`reset-app ${this.props.topic ? '' : 'hidden'}`} onClick={this.reset}>{leftPanelText.reset}</p>
      </div>
    );
  }

}
