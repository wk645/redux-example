import React from 'react';
import { connect } from 'react-redux';
import { addBook } from '../actions/books';

class BooksForm extends React.Component {

	state = {
		book: ""
	}

	handleSubmit = (event) => {
		event.preventDefault();

		this.props.add(this.state.book);
		this.setState({
			book: ""
		})
	}

	handleInputChange = (event) => {
		this.setState({
			book: event.target.value
		})
	}

	render() {
		// console.log("form", this.props)
		return (
			<form onSubmit={this.handleSubmit}>
				<input type="text" onChange={this.handleInputChange} value={this.state.book} />
				<input type="submit" value="Submit" />
			</form>
		)
	}
}

function mapDispatchToProps(dispatch) {
	return {
		add: (book) => {
			dispatch(addBook(book))
		}
	}
}

// null bc there is no mapStateToProps in this js
export default connect(null, mapDispatchToProps)(BooksForm)