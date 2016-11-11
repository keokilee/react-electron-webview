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
  'page-title-set',
  'page-favicon-updated',
  'enter-html-full-screen',
  'leave-html-full-screen',
  'console-message',
  'new-window',
  'close',
  'ipc-message',
  'crashed',
  'gpu-crashed',
  'plugin-crashed',
  'destroyed'
];

const HANDLERS = EVENTS.map(event => camelCase(`on-${event}`));

const EVENTS_HANDLERS = EVENTS.map((event, i) => ({ event, handler: HANDLERS[i] }));

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
    return (<webview {...this.props}></webview>);
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
  autosize: React.PropTypes.bool,
  disablewebsecurity: React.PropTypes.bool,
  httpreferrer: React.PropTypes.string,
  nodeintegration: React.PropTypes.bool,
  plugins: React.PropTypes.bool,
  preload: React.PropTypes.string,
  src: React.PropTypes.string,
  useragent: React.PropTypes.string
};

const eventPropTypes = EVENTS_HANDLERS.reduce((propTypes, { event, handler }) => {
  propTypes[handler] = React.PropTypes.func;
  return propTypes;
}, {});

WebView.propTypes = Object.assign({}, tagPropTypes, eventPropTypes);
