export function booksReducer(state = {
	books: [{id: 1, title: "LWW"}, 
	{id: 2, title: "Hunger"}]}, action) {

	switch(action.type) {
		case "ADD_BOOK":
		const newBook = {id: state.books.length + 1, title: action.payload}
			return Object.assign({}, state, {books: [...state.books, newBook]})
			// makes a copy. old state, and what you want to change. combine old state of books plus payload
		case "REMOVE_BOOK":
			const filteredArray = state.books.filter((book) => book.title !== action.payload)
			 return Object.assign({}, state, {books: filteredArray})
		default:
			return state;
	}
}

export default booksReducer

// case "REMOVE_BOOK":
// const filteredArray = state.list.filter((book) => book.title !== action.payload)
// return Object.assign({}, state, {list: filteredArray})