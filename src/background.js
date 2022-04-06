//API https://looch.io/enrich?linkedin_url=linkedin.com/in/mblack99

chrome.tabs.onActivated.addListener(activeInfo => {
  chrome.tabs.get(activeInfo.tabId, tab =>
    chrome.tabs.sendMessage(tab.id, { url: tab.url })
  );
  console.log('ActivatedTab:', activeInfo.tabId);
});

chrome.tabs.onUpdated.addListener((_, __, tab) => {
  chrome.tabs.sendMessage(tab.id, { url: tab.url })
  console.log('UpdatedTab: ', tab.id);
});


  // chrome.storage.sync.set({ tabUrl: tab.url });
  // chrome.tabs.get(activeInfo.tabId, tab => chrome.storage.sync.set({ tabUrl: tab.url }));
  // chrome.runtime.onConnect.addListener(port => {
  //   port.postMessage({ msg: 'Hi' })
  // })
  // const port = chrome.runtime.connect()
  // port.onMessage.addListener(msg => console.log(msg))