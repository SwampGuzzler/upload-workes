// @flow
import React, {Component} from 'react';
import {leftPanelText} from 'js/config';
import {resetApp} from 'js/actions/mapActions';
import appStore from 'js/appStore';

export default class LeftPanel extends Component {

  displayName: 'LeftPanel';

  state: AppState = appStore.getState();
  unsubscribe: () => void;

  componentDidMount() {
    // Subscribe to the store for updates
    this.unsubscribe = appStore.subscribe(this.storeDidUpdate);
  }

  componentWillUnmount() {
    this.unsubscribe();
  }

  storeDidUpdate:Function = () => {
    this.setState(appStore.getState());
  };

  reset:Function = () => {
    appStore.dispatch(resetApp({}));
    //appStore.dispatch(toggleInitialModal({ visible: false }));
  }

  render () {
    return (
      <div className='left-panel'>
      <p onClick={this.reset}>{leftPanelText.title1}</p>

        {this.state.topic === 'topic1' ? <p>{leftPanelText.title1}</p> : null}
        {this.state.topic === 'topic2' ? <p>{leftPanelText.title2}</p> : null}
        {this.state.topic === 'topic3' ? <p>{leftPanelText.title3}</p> : null}
      </div>
    );
  }

}
