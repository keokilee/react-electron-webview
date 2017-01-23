import React from 'react';
import { findDOMNode } from 'react-dom';
import camelCase from 'camelcase';

const EVENTS = [
  'load-commit',
  'did-finish-load',
  'did-fail-load',
  'did-frame-finish-load',
  'did-start-loading',
  'did-stop-loading',
  'did-get-response-details',
  'did-get-redirect-request',
  'dom-ready',
  'page-title-updated',
  'page-favicon-updated',
  'enter-html-full-screen',
  'leave-html-full-screen',
  'console-message',
  'found-in-page',
  'new-window',
  'will-navigate',
  'did-navigate',
  'did-navigate-in-page',
  'close',
  'ipc-message',
  'crashed',
  'gpu-crashed',
  'plugin-crashed',
  'destroyed',
  'media-started-playing',
  'media-paused',
  'did-change-theme-color',
  'update-target-url',
  'devtools-opened',
  'devtools-closed',
  'devtools-focused'
];

const HANDLERS = EVENTS.map(event => camelCase(`on-${event}`));

const EVENTS_HANDLERS = EVENTS.map((event, i) => ({ event, handler: HANDLERS[i] }));

function filterKeys(object, filterFunc) {
  return Object.keys(object)
    .filter(filterFunc)
    .reduce((filtered, key) => {
      filtered[key] = object[key];
      return filtered;
    }, {});
}

export default class WebView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {loaded: false, webview: null};
  }

  componentDidMount() {
    // Set up listeners.
    const node = findDOMNode(this);

    this._bindEvents(node);
    this._assignMethods(node);
    this.setState({loaded: true, webview: node});
  }

  render() {
    const tagProps = filterKeys(this.props, propName => !(propName in eventPropTypes))
    return (<webview {...tagProps}></webview>);
  }

  // Private methods
  _bindEvents(node) {
    for (const { event, handler } of EVENTS_HANDLERS) {
      node.addEventListener(event, this.props[handler]);
    }
  }

  _assignMethods(node) {
    node.addEventListener('dom-ready', () => {
      Object.getOwnPropertyNames(node)
            .filter(prop => typeof prop === 'function')
            .forEach(method => this[method] = node[method]);
    });
  }
}

const tagPropTypes = {
  autosize: React.PropTypes.string,
  disablewebsecurity: React.PropTypes.bool,
  httpreferrer: React.PropTypes.string,
  nodeintegration: React.PropTypes.bool,
  plugins: React.PropTypes.bool,
  preload: React.PropTypes.string,
  src: React.PropTypes.string,
  useragent: React.PropTypes.string,
  partition: React.PropTypes.string,
  allowpopups: React.PropTypes.bool,
  webpreferences: React.PropTypes.string,
  blinkfeatures: React.PropTypes.string,
  disableblinkfeatures: React.PropTypes.string,
  guestinstance: React.PropTypes.string,
  minwidth: React.PropTypes.string,
  minheight: React.PropTypes.string,
  maxwidth: React.PropTypes.string,
  maxheight: React.PropTypes.string
};

const eventPropTypes = EVENTS_HANDLERS.reduce((propTypes, { event, handler }) => {
  propTypes[handler] = React.PropTypes.func;
  return propTypes;
}, {});

WebView.propTypes = Object.assign({}, tagPropTypes, eventPropTypes);
