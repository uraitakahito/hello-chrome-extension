import message from './imported';

console.log('Service Worker Loaded...');
console.log(message);

chrome.runtime.onInstalled.addListener(() => {
  chrome.sidePanel.setPanelBehavior({ openPanelOnActionClick: true });
});
