import React from 'react';
import camelCase from 'camelCase';

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

export default class WebView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {loaded: false, webview: null};
  }

  componentDidMount() {
    // Set up listeners.
    const node = React.findDOMNode(this);

    this._bindEvents(node);
    this._assignMethods(node);
    this.setState({loaded: true, webview: node});
  }

  render() {
    return (<webview {...props}></webview>);
  }

  // Private methods
  _bindEvents(node) {
    EVENTS.forEach(event => node.addEventListener(event, this.props[camelCase(event)]));
  }

  _assignMethods(node) {
    Object.getOwnPropertyNames(node)
          .filter(prop => typeof prop === 'function')
          .forEach(method => this[method] = node[method]);
  }
}

WebView.propTypes = {
  autosize: React.PropTypes.bool,
  disablewebsecurity: React.PropTypes.bool,
  httpreferrer: React.PropTypes.string,
  nodeintegration: React.PropTypes.bool,
  pageTitleSet: React.PropTypes.func,
  plugins: React.PropTypes.bool,
  preload: React.PropTypes.string,
  src: React.PropTypes.string,
  useragent: React.PropTypes.string
};
