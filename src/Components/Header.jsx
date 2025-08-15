import React from 'react'
import PropTypes from 'prop-types'

export default function Header(props) { //props is used to pass data i.e. title here from parent component Header to child component
  //it is mentioned in the App.js file where we use the Header component
  return (
    <div></div>
  )
}

Header.defaultProps = { //default props are used to set default values for the props passed to the component
  //if the props are not passed from the parent component, these values will be used
  title : "Your Title Here",
  searchBar : true
}

Header.propTypes = {
  title : PropTypes.string, //checks the type of the props passed to the component
  searchBar : PropTypes.bool.isRequired //using isRequired makes it a non nullable component
}
 