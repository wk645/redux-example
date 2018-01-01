import React from 'react';
import BooksList from './BooksList';
import { connect } from 'react-redux';
import BooksForm from './BooksForm';

class BooksContainer extends React.Component {

	render() {
		// console.log(this.props);

		return (
			<div>
				<br />
				<BooksForm />
				<BooksList books={this.props.books} />
			</div>
		)
	}
}

function mapStateToProps(state) {
	console.log("booksContainer", state);

	return {
		books: state.books.booksList
		// go to the store and do something with it. Return a new object. 
	}
}

export default connect(mapStateToProps)(BooksContainer)