// @flow
import React, {Component} from 'react';
import {leftPanelText} from 'js/config';
import {resetApp} from 'js/actions/mapActions';
import appStore from 'js/appStore';
import TopicOneHeader from 'js/components/LeftPanel/TopicOneHeader';
import TopicOnePageOne from 'js/components/LeftPanel/TopicOnePageOne';
import TopicOnePageTwo from 'js/components/LeftPanel/TopicOnePageTwo';
import TopicOnePageThree from 'js/components/LeftPanel/TopicOnePageThree';

export type TopicProps = {
  language: string
};

export default class TopicOne extends Component {

  props: TopicProps;
  displayName: 'TopicOne';

  constructor (props) {
    super(props);
    this.state = {
      activeStep: 'first'
    };
  }

  changeStep:Function = (evt) => {
    this.setState({activeStep: evt.target.id});
  }

  render () {
    return (
      <div className='topic-panel'>
        <TopicOneHeader language={this.props.language} activeStep={this.state.activeStep} changeStep={this.changeStep} />
        <p>{leftPanelText.title1[this.props.language]}</p>
        <TopicOnePageOne activeStep={this.state.activeStep} />
        <TopicOnePageTwo activeStep={this.state.activeStep} />
        <TopicOnePageThree activeStep={this.state.activeStep} />
      </div>
    );
  }

}
