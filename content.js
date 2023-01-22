chrome.runtime.onMessage.addListener(gotMsg)

function gotMsg(request, sender, sendResponse) {
	console.log('hehyhyhe')
	if (request.blockPage) {
		const mainContent = document.getElementById('contents')
		mainContent.innerHTML = ''
		const photo =
			'https://cdn.dribbble.com/users/1731254/screenshots/12927989/media/d61dac53c342228884a1b8fd50be8077.png?compress=1&resize=1600x1200&vertical=top'
		const imgElement = document.createElement('img')
		imgElement.src = photo
		imgElement.style = 'width:1151px;'
		mainContent.appendChild(imgElement)
	}
}

const button = document.getElementById('logo')
button.removeChild(button.firstChild)
