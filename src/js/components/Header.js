// @flow
import React, {Component} from 'react';
import {selectLanguage, toggleUploadModal, toggleBasemapSelector} from 'js/actions/mapActions';
import appStore from 'js/appStore';
import {headerText} from 'js/config';
import Select from 'react-select';

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

  upload:Function = () => {
    appStore.dispatch(toggleUploadModal({ visible: true }));
    // console.log(evt);
  };

  toggleBasemapSelector:Function = () => {
    appStore.dispatch(toggleBasemapSelector({ basemapSelector: !this.state.basemapSelectorVisible }));
    // console.log(evt);
  };

  languageToggle:Function = (value) => {
    if (value.value !== this.state.language) {
      appStore.dispatch(selectLanguage({ language: value.value }));
    }
  };

  render () {
    const language = this.state.language ? this.state.language : 'english';
    const title = headerText.title[language];
    const subtitle = headerText.subtitle[language];

    var options = [
      { value: 'english', label: 'English' },
      { value: 'spanish', label: 'Spanish' }
    ];

    return (
      <div className='app-header'>
        <h1 className='app-title'>{title}</h1>
        <h2 className='app-subtitle'>{subtitle}</h2>
        <div className='language-selector'>
          <Select
            name='form-field-name'
            clearable={false}
            options={options}
            value = {language}
            onChange={this.languageToggle}
          />
        </div>
        <span className='basemap-selector' onClick={this.toggleBasemapSelector}>Basemap</span>
        <span className='upload-shapefile' onClick={this.upload}>Upload</span>
      </div>
    );
  }
}
