import React from 'react'
import './index.css'

function Button(props) {
    
const {className, onClick} = props;

  return (
    <div>
        <button onClick={onClick} className={className}>
            SEE PRODUCT
        </button>
    </div>
  )
}

export default Button