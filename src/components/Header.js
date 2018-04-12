import React from 'react'

// we need to say hey header data is coming into you from somewhere
// somewhere = App

function Header(props) {

  console.log(props);
  return (
    <h1>Hello world</h1>
  )
}

export default Header
