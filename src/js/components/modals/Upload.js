// @flow
import {toggleUploadModal} from 'js/actions/mapActions';
import Wrapper from 'js/components/modals/Wrapper';
import Loader from 'js/components/Loader';
import {uploadConfig} from 'js/config';
import React, { Component } from 'react';
import appStore from 'js/appStore';
import esriRequest from 'esri/request';
import FeatureLayer from 'esri/layers/FeatureLayer';
import Point from 'esri/geometry/Point';
// Type Import
import type {ModalProps} from './Types';
import shp from 'js/libs/shp';
import cw from 'catiline';


const worker = cw({
    init: function(scope) {
      debugger
        // importScripts('jam/require.js');
        // require.config({
        //     baseUrl: this.base
        // });
        // require(['shp'], function(shp) {
        scope.shp = shp;
        console.log(scope);
        // });
    },
    data: function(data, cb, scope) {
      console.log(data);
        this.shp(data).then(function(geoJson){
          console.log(geoJson);
            if (Array.isArray(geoJson)){
                geoJson.forEach(function(geo){
                    scope.json([geo, geo.fileName, true], true, scope);
                });
            } else {
                scope.json([geoJson, geoJson.fileName, true], true, scope);
            }
        }, function(e) {
            console.log('shit', e);
        });

    },
    color: function(s){
      //from http://stackoverflow.com/a/15710692
      importScripts('js/colorbrewer.js');
      return colorbrewer.Spectral[11][Math.abs(JSON.stringify(s).split("").reduce(function(a,b){a=((a<<5)-a)+b.charCodeAt(0);return a&a},0)) % 11];
    },
    makeString: function(buffer) {
      var array = new Uint8Array(buffer);
      var len = array.length;
      var outString = '';
      var i = 0;
      while (i < len) {
          outString += String.fromCharCode(array[i++]);
      }
      return outString;
    },
    json: function(data, cb, scope) {
      console.log('worker json');
      // importScripts('js/topojson.v1.min.js');
      var name = data[1];
      //console.log(name);
      var json = data.length === 2 ? JSON.parse(scope.makeString(data[0])) : data[0];
      var nom;
      if (json.type === 'Topology') {
          for (nom in json.objects) {
              scope.layer(topojson.feature(json, json.objects[nom]), nom, scope);
          }
      } else {
          scope.layer(json, name, scope);
      }
    }, layer: function(json, name, scope){

      json.features.forEach(function(feature){
          feature.properties.__color__ = scope.color(feature);
      });
      scope.fire('json', [json, name]);
    },
    base: cw.makeUrl('.')
});

worker.on('json', function(e) {
    console.log(e);
    debugger
    // lc.addOverlay(L.geoJson(e[0], options).addTo(m), e[1]);
});

worker.on('error', function(e) {
    console.warn(e);
});

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
    // const type = TYPE.SHAPEFILE;
    // console.log(this.props.map);

    // const params = uploadConfig.shapefileParams(file.name, this.props.map.spatialReference);
    // const content = uploadConfig.shapefileContent(JSON.stringify(params), type);
    const input = this.refs.fileInput;
    input.files = evt.dataTransfer.files;
    // console.log(input);
    // const path = input.files[0]; //.name;
    // console.log(path);


    const inputFile = input.files[0];

    if (inputFile.name.slice(-3) === 'zip') {
        this.handleZipFile(inputFile);
    } else {
      var reader = new FileReader();
      reader.onload = function() {
          let ext;
          if (reader.readyState !== 2 || reader.error) {
              return;
          } else {
            // debugger
              ext = inputFile.name.split('.');
              ext = ext[ext.length - 1];

              console.log(worker.json);
              worker.json([reader.result, inputFile.name.slice(0, (0 - (ext.length + 1)))], [reader.result]);
          }
      };
      reader.readAsArrayBuffer(inputFile);
    }

    // shp(path).then(function(geojson){
    //   console.log(geojson);
    //     //do something with your geojson
    // });

    // this.getData(path)
    //   .then(this.createGraphics) // then send it to the createGraphics() method
    //   .then(this.createLayer) // when graphics are created, create the layer
    //   .otherwise(this.errback);
  };

  handleZipFile = (file) => {
    const reader = new FileReader();
    console.log(file);
    console.log(reader);
    // debugger
    // reader.onload = this.readerLoad;
    reader.onload = function () {
        const data = reader.result;
        console.log(data);
        // const array = new Int8Array(data);
        // output.value = JSON.stringify(array, null, '  ');
        // window.setTimeout(ReadFile, 1000);
    };
    // reader.onload = () => {
    //   var data = reader.result;
    //   console.log('data', data);
    //   // var array = new Int8Array(data);
    //   // console.log('array', array);
    //   // const value = JSON.stringify(array, null, '  ');
    //   // console.log('value', value);
    //   // this.readerLoad(data);
    //   worker.data(data, [data]);
    // };

    reader.readAsArrayBuffer(file);
    //I think I need reader.result!
  }

  readerLoad = (data) => {
    console.log(data);
    console.log(arguments);

    // shp(data).then(function(geoJson){
    //   console.log(geoJson);
    //   debugger
      // if(Array.isArray(geoJson)){
      //     geoJson.forEach(function(geo){
      //         scope.json([geo, geo.fileName, true],true,scope);
      //     });
      // } else {
      //     scope.json([geoJson, geoJson.fileName, true],true,scope);
      // }
    // });

    // if (this.readyState !== 2 || this.error) {
    //     return;
    // } else {
    // worker.json([reader.result, file.name.slice(0, (0 - (ext.length + 1)))], [reader.result]);
    worker.data(this.result, [this.result]);
    // }
  }

  getData = (url) => {
  //   esriRequest({
  //    url: url,
  //   //  form: form,
  //   //  content: content,
  //    handleAs: 'json'
  //  });
   return esriRequest(url, {
     responseType: 'json'
   });
  }

  createGraphics = (response) => {
    // raw GeoJSON data
    const geoJson = response.data;

    // Create an array of Graphics from each GeoJSON feature
    return geoJson.forEach(geoJson.features, (feature, i) => {
      return {
        geometry: new Point({
          x: feature.geometry.coordinates[0],
          y: feature.geometry.coordinates[1]
        }),
        // select only the attributes you care about
        attributes: {
          ObjectID: i,
          title: feature.properties.title,
          // type: feature.properties.type,
          // place: feature.properties.place,
          // depth: feature.geometry.coordinates[2] + " km",
          // time: feature.properties.time,
          // mag: feature.properties.mag,
          // mmi: feature.properties.mmi,
          // felt: feature.properties.felt,
          // sig: feature.properties.sig,
          url: feature.properties.url
        }
      };
    });
  }

  errback = (error) => {
    console.error('Creating legend failed. ', error);
  }

  createLayer = (graphics) => {
    const fields = [];

    graphics[0].attributes.forEach(attribute => {
      console.log(attribute);
      fields.push(attribute);
    });

    const newLayer = new FeatureLayer({
      source: graphics, // autocast as an array of esri/Graphic
      // create an instance of esri/layers/support/Field for each field object
      fields: fields, // This is required when creating a layer from Graphics
      objectIdField: 'ObjectID', // This must be defined when creating a layer from Graphics
      // renderer: quakesRenderer, // set the visualization on the layer
      spatialReference: {
        wkid: 4326
      },
      geometryType: 'point'//, // Must be set when creating a layer from Graphics
      // popupTemplate: pTemplate
    });

        this.props.map.add(newLayer);
        // return lyr;
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
