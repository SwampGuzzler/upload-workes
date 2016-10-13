// @flow
import {toggleUploadModal} from 'js/actions/mapActions';
import Wrapper from 'js/components/modals/Wrapper';
import Loader from 'js/components/Loader';
import {uploadConfig} from 'js/config';
import React, { Component } from 'react';
import appStore from 'js/appStore';
import esriRequest from 'esri/request';
// Type Import
import type {ModalProps} from './Types';

const TYPE = {
  ZIP: 'application/zip',
  JSON: 'application/json',
  SHAPEFILE: 'shapefile',
  GEOJSON: 'geojson'
};

export default class UploadModal extends Component {

  props: ModalProps;

  constructor (props) {
   super(props);
   this.state = {
     dndActive: false,
     isUploading: false,
     fieldSelectionShown: false,
     showFields: false,
     fields: [],
     graphics: []
   };
 }

  close:Function = () => {
    appStore.dispatch(toggleUploadModal({ visible: false }));
  };

  prevent = (evt) => {
    evt.preventDefault();
    return false;
  };

  enter = (evt) => {
    this.prevent(evt);
    this.setState({ dndActive: true });
  };

  leave = (evt) => {
    this.prevent(evt);
    this.setState({ dndActive: false });
  };

  drop = (evt) => {
    console.log('drop');
    this.prevent(evt);

    const file = evt.dataTransfer &&
    evt.dataTransfer.files &&
    evt.dataTransfer.files[0];

    if (!file) {
      return;
    }

    //- Update the view
    this.setState({
      dndActive: false,
      isUploading: true
    });
    const type = TYPE.SHAPEFILE;
    console.log(this.props.map);
    const params = uploadConfig.shapefileParams(file.name, this.props.map.spatialReference);
    const content = uploadConfig.shapefileContent(JSON.stringify(params), type);
    const input = this.refs.fileInput;
    input.files = evt.dataTransfer.files;
    console.log(input.files);
  };

  request = () => {
    esriRequest({
     url: url,
     form: form,
     content: content,
     handleAs: 'json'
   });
  }

  // selectTopic:Function = (evt) => {
  //   this.close();
  //   appStore.dispatch(togglePanel({panelMinimized: false}));
  // };

  render () {
    const {visible} = this.props;

    return (
      <Wrapper theme='initial-modal' visible={visible} close={this.close}>
        <h3>Upload Something</h3>
        <form
        className={`analysis-instructions upload-container ${this.state.dndActive ? 'active' : ''}`}
        encType='multipart/form-data'
        onDragEnter={this.enter}
        onDragLeave={this.leave}
        onDragOver={this.prevent}
        onSubmit={this.drop}
        onChange={this.drop}
        onDrop={this.drop}
        name='upload'
        ref='upload'
        >
        <Loader active={this.state.isUploading} />
        <input type='file' name='file' ref='fileInput' />
        <input type='hidden' name='publishParameters' value='{}' />
        <input type='hidden' name='filetype' value='shapefile' />
        <input type='hidden' name='f' value='json' />
        </form>
      </Wrapper>
    );
  }
}
