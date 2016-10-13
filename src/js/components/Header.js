// @flow
import React, {Component} from 'react';
import {selectLanguage, toggleUploadModal} from 'js/actions/mapActions';
import appStore from 'js/appStore';
import {headerText} from 'js/config';

export default class Header extends Component {
  displayName: 'Header';

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

  languageToggle:Function = (evt) => {
    appStore.dispatch(selectLanguage({ language: evt.target.selectedOptions[0].id }));
  };

  upload:Function = () => {
    appStore.dispatch(toggleUploadModal({ visible: true }));
    // console.log(evt);
  };

  render () {
    const language = this.state.language ? this.state.language : 'english';
    const title = headerText.title[language];
    const subtitle = headerText.subtitle[language];

    return (
      <div className='app-header'>
        <h1 className='app-title'>{title}</h1>
        <h2 className='app-subtitle'>{subtitle}</h2>
        <select className='language-selector' onChange={this.languageToggle}>
          <option id='english' selected={language === 'english' ? 'selected' : ''}>English</option>
          <option id='spanish' selected={language === 'spanish' ? 'selected' : ''}>Espanol</option>
        </select>
        <span className='upload-shapefile' onClick={this.upload}>Upload</span>
      </div>
    );
  }
}
