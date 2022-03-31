/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
/*!***************************!*\
  !*** ./src/background.js ***!
  \***************************/
// https://looch.io/enrich?linkedin_url=linkedin.com/in/mblack99
chrome.tabs.onActivated.addListener(activeInfo => {
  chrome.tabs.get(activeInfo.tabId, tab => chrome.storage.sync.set({
    tabUrl: tab.url
  }));
  console.log('ActivatedTab:', activeInfo.tabId);
  console.log('ONE');
});
chrome.tabs.onUpdated.addListener((_, __, tab) => {
  chrome.storage.sync.set({
    tabUrl: tab.url
  });
  console.log('UpdatedTab: ', tab.id);
});
/******/ })()
;
//# sourceMappingURL=background.bundle.js.map