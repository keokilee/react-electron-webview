/// <reference types="electron" />

import { Component } from 'react';

export interface WebViewProps extends React.HTMLProps<Electron.WebViewElement> {
  src: string
  
  autosize?: boolean
  disablewebsecurity?: boolean
  httpreferrer?: string
  nodeintegration?: boolean
  plugins?: boolean
  preload?: string
  useragent?: string
  partition?: string
  allowpopups?: boolean
  webpreferences?: string
  blinkfeatures?: string
  disableblinkfeatures?: string
  guestinstance?: string
  
  onLoadCommit?: EventListener
  onDidFinishLoad?: EventListener
  onDidFailLoad?: EventListener
  onDidFrameFinishLoad?: EventListener
  onDidStartLoading?: EventListener
  onDidStopLoading?: EventListener
  onDidGetResponseDetails?: EventListener
  onDidGetRedirectRequest?: EventListener
  onDomReady?: EventListener
  onPageTitleSet?: EventListener
  onPageFaviconUpdated?: EventListener
  onEnterHtmlFullScreen?: EventListener
  onLeaveHtmlFullScreen?: EventListener
  onConsoleMessage?: EventListener
  onNewWindow?: EventListener
  onClose?: EventListener
  onIpcMessage?: EventListener
  onCrashed?: EventListener
  onGpuCrashed?: EventListener
  onPluginCrashed?: EventListener
  onDestroyed?: EventListener
}
interface WebViewState {
  loaded: boolean
  webview: Electron.WebViewElement
}
export default class WebView extends Component<WebViewProps, WebViewState> {}  
