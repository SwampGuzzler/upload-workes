// @flow
import React, {Component} from 'react';
import PanelHeader from 'js/components/LeftPanel/PanelHeader';
import TopicOne from 'js/components/LeftPanel/TopicOne';
import TopicTwo from 'js/components/LeftPanel/TopicTwo';
import TopicThree from 'js/components/LeftPanel/TopicThree';
import {leftPanelText} from 'js/config';
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

  render () {
    return (
      <div className={`left-panel ${this.state.topic && this.state.panelMinimized === false ? 'expanded' : ''}`}>
        <PanelHeader panelMinimized={this.state.panelMinimized} language={this.state.language} topic={this.state.topic} />

        {this.state.topic === 'topic1' ? <TopicOne language={this.state.language} /> : null}
        {this.state.topic === 'topic2' ? <TopicTwo language={this.state.language} /> : null}
        {this.state.topic === 'topic3' ? <TopicThree language={this.state.language} /> : null}

      </div>
    );
  }

}
