/*eslint-disable */

// JavaScript Types
declare function requestAnimationFrame(callback: Function, timeout?: number): void;

// App specific types
declare type AppState = {
  locateModalVisible: bool,
  shareModalVisible: bool,
  uploadModalVisible: bool,
  initialModalVisible: bool,
  topic: string,
  itemInfo: Object,
  viewReady: bool,
  language: string
};
