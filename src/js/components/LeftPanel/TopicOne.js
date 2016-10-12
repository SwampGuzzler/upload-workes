// @flow
import React, {Component} from 'react';
import {leftPanelText} from 'js/config';
import {resetApp} from 'js/actions/mapActions';
import appStore from 'js/appStore';

export type TopicProps = {
  language: string
};

export default class PanelHeader extends Component {

  props: TopicProps;
  displayName: 'PanelHeader';

  // reset:Function = () => {
  //   appStore.dispatch(resetApp({}));
  // }

  render () {
    return (
      <div className='topic-panel'>
        <p>{leftPanelText.title1[this.props.language]}</p>
      </div>
    );
  }

}
