declare type EsriView = Object | {
  goTo: () => void,
  zoom: number,
  ready: bool
};

declare module 'esri/request' {
  declare function exports(url: string, options: Object): Promise<Object>;
}
