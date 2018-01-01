export function addBook(book) {
	return {
		type: "ADD_BOOK",
		payload: book
	}
}

export function removeBook(title) {
	return {
		type: "REMOVE_BOOK",
		payload: title
	}
}

export function fetchAPI() {
	return function(dispatch) {
		// dispatch({ type: ''});
		return fetch('', {
			method: 'get',
			headers: {
				"Content-Type": "application/json",
				"Accept": "application/json"
			}
		})
		.then(res => res.json())
		.then(data => dispatch({ type: "", data}));
		// .then(data => {
			// dispatch({ type: "FETCHED_SOURCE", payload: json })
		// })
	}
}