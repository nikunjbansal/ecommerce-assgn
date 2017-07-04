export const api = (()=>{

	const endpoint = "http://localhost:3000/items";
	const headers = {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    }

	return {
		get: () => (
			fetch(endpoint)
				.then(res => res.json())
				.then(json => json)
				.catch(er => Promise.reject(Error('error fetching items: ' + er)))
		),
		put: (resourceId, payLoad) => {
			let url = endpoint+"/"+resourceId;
			return fetch(url, {
				method: 'PUT',
				headers: headers, 
				body: JSON.stringify(payLoad)
			}).then(res => res.json())
				.then(json => json)
				.catch(er => Promise.reject(Error('error updating item: ' + er)))
		}
	}
})()