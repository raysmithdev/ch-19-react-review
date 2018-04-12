import React from 'react'

function Form(props) {

  return (
    <div>
        <button onClick={() => {
          console.log('Clicked');
        }}>
        <input type="text" onChange={() => console.log('Changing')} />
          Click me
        </button>
    </div>
  )
}


export default Form
