chrome.tabs.onUpdated.addListener(function (tabId, changeInfo, tab) {
	console.log(tab, 'tab')

	if (tab.url !== 'https://www.youtube.com/') {
		console.log('normal page')
	} else {
		let message = {
			blockPage: true,
		}
		chrome.tabs.sendMessage(tab.id, message)
	}
})
