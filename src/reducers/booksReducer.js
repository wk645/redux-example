export function booksReducer(state = {
	booksList: [{id: 1, title: "LWW"}, 
	{id: 2, title: "Hunger"}]}, action) {

	switch(action.type) {
		case "ADD_BOOK":
		const newBook = {id: state.booksList.length + 1, title: action.payload}
			return Object.assign({}, state, {booksList: [...state.booksList, newBook]})
			// makes a copy. old state, and what you want to change. combine old state of books plus payload
		case "REMOVE_BOOK":
			const filteredArray = state.booksList.filter((book) => book.title !== action.payload)
			 return Object.assign({}, state, {booksList: filteredArray})
		default:
			return state;
	}
}

export default booksReducer