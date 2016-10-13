// @flow
import React, {Component} from 'react';
import {leftPanelText} from 'js/config';
import {resetApp} from 'js/actions/mapActions';
import appStore from 'js/appStore';

export type TopicProps = {
  language: string
};

export default class TopicOne extends Component {

  props: TopicProps;
  displayName: 'TopicOne';

  render () {
    return (
      <div className='topic-panel'>
        <p>{leftPanelText.title1[this.props.language]}</p>
      </div>
    );
  }

}
