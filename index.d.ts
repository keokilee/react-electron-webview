/// <reference types="electron" />

import { Component } from 'react';

export interface WebViewProps extends React.HTMLAttributes<Electron.WebViewElement>, React.ClassAttributes<WebView> {
  src: string

  autosize?: string;
  minwidth?: string;
  minheight?: string;
  maxwidth?: string;
  maxheight?: string;
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
  onPageTitleUpdated?: EventListener
  onPageFaviconUpdated?: EventListener
  onEnterHtmlFullScreen?: EventListener
  onLeaveHtmlFullScreen?: EventListener
  onConsoleMessage?: EventListener
  onFoundInPage?: EventListener
  onNewWindow?: EventListener
  onWillNavigate?: EventListener
  onDidNavigate?: EventListener
  onDidNavigateInPage?: EventListener
  onDestroyed?: EventListener
  onMediaStartedPlaying?: EventListener
  onMediaPaused?: EventListener
  onDidChangeThemeColor?: EventListener
  onUpdateTargetUrl?: EventListener
  onDevtoolsOpened?: EventListener
  onDevtoolsClosed?: EventListener
  onDevtoolsFocused?: EventListener
  onClose?: EventListener
  onIpcMessage?: EventListener
  onCrashed?: EventListener
  onGpuCrashed?: EventListener
  onPluginCrashed?: EventListener
}
interface WebViewState {
  loaded: boolean
  webview: Electron.WebViewElement
}
export default class WebView extends Component<WebViewProps, WebViewState> {}
