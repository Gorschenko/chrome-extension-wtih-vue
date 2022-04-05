//API https://looch.io/enrich?linkedin_url=linkedin.com/in/mblack99

// В фоновом режиме отслеживает на каком сайте находится пользователь при смене вкладки браузера
chrome.tabs.onActivated.addListener(activeInfo => {
  chrome.tabs.get(activeInfo.tabId, tab => chrome.storage.sync.set({tabUrl: tab.url}));
  console.log('ActivatedTab:', activeInfo.tabId);
  }
);
// --//-- при обновлении вкладки браузера
chrome.tabs.onUpdated.addListener((_, __, tab) => {
  chrome.storage.sync.set({tabUrl: tab.url});
  console.log('UpdatedTab: ', tab.id);
});