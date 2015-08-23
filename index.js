/* @flow */
import React from 'react';

export default class WebView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {loaded: false};
  }

  // Helper function for rendering props.
  _processProps() {
    let props = this.props;
    // Update boolean props.
    Object.keys(WebView.propTypes)
          .filter(prop => WebView.propTypes[prop] === React.PropTypes.boolean)
          .forEach(prop => {
            props[prop] = this.props[prop] ? 'on' : '';
          });

    return props;
  }
  render() {
    let props = this._processProps();

    return (<webview {...props}></webview>);
  }
}

WebView.propTypes = {
  src: React.PropTypes.string,
  autosize: React.PropTypes.boolean,
  nodeintegration: React.PropTypes.boolean,
  plugins: React.PropTypes.boolean,
  preload: React.PropTypes.string,
  httpreferrer: React.PropTypes.string,
  useragent: React.PropTypes.string,
  disablewebsecurity: React.PropTypes.boolean
};
