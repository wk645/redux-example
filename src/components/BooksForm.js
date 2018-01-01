import React from 'react';
import { connect } from 'react-redux';
import * as BookActions from '../actions/books';
import { bindActionCreators } from 'redux';

class BooksForm extends React.Component {

	state = {
		book: ""
	}

	handleSubmit = (event) => {
		event.preventDefault();

		this.props.addBook(this.state.book);
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
		console.log("form", this.props)
		return (
			<form onSubmit={this.handleSubmit}>
				<input type="text" onChange={this.handleInputChange} value={this.state.book} />
				<input type="submit" value="Submit" />
			</form>
		)
	}
}

function mapDispatchToProps(dispatch) {
	// const { addBook, removeBook } = bindActionCreators(BookActions, dispatch);
	// return {
	// 	addBook, removeBook
	// }
	return bindActionCreators(BookActions, dispatch)

}

// null bc there is no mapStateToProps in this js
export default connect(null, mapDispatchToProps)(BooksForm)