// @flow
import React, {Component} from 'react';
import {leftPanelText} from 'js/config';
import {resetApp} from 'js/actions/mapActions';
import appStore from 'js/appStore';

export type TopicProps = {
  language: string
};

export default class TopicTwo extends Component {

  props: TopicProps;
  displayName: 'TopicTwo';

  render () {
    return (
      <div className='topic-panel'>
        <p>{leftPanelText.title2[this.props.language]}</p>
      </div>
    );
  }

}
