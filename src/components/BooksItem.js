import React from 'react'
import { connect } from 'react-redux'
import { removeBook } from '../actions/books'


const BooksItem = (props) => {
  
  console.log(props)
  
  const handleClick = () => {
    // console.log(props.book)
    props.remove(props.book)
  }
  
  return (
    <li onClick={handleClick}>{props.book}</li>
  )
}


function mapDispatchToProps(dispatch) {
  return {
    remove: (title) => {
        dispatch(removeBook(title))
    }
  }
}

// pass up removed book action up 
export default connect(null, mapDispatchToProps)(BooksItem)
