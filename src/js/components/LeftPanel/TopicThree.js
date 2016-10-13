// @flow
import React, {Component} from 'react';
import {leftPanelText} from 'js/config';
import {resetApp} from 'js/actions/mapActions';
import appStore from 'js/appStore';

export type TopicProps = {
  language: string
};

export default class TopicThree extends Component {

  props: TopicProps;
  displayName: 'TopicThree';

  render () {
    return (
      <div className='topic-panel'>
        <p>{leftPanelText.title3[this.props.language]}</p>
      </div>
    );
  }

}
