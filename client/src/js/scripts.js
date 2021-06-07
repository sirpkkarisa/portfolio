(()=> {
	const toPosts = document.getElementById('to-posts');

	const ajaxGetRequest = (path, callback) => {
		const request = new XMLHttpRequest();
		request.onreadystatechange = ()=> {
			if (request.readyState === 4 && request.status === 200) {
				callback(request.response);
			}
		}
		request.open('GET', path);
		request.send(null);
	};

	const posts = (response) => {
		const data = JSON.parse(response);
		console.log(data)
	};
	
	toPosts.addEventListener('click',(evt) => {
		evt.preventDefault();
		ajaxGetRequest('/posts', posts);
	});
})();