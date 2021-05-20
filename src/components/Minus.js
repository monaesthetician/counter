import React from 'react'

const Minus = (props) => {
    const {decrement} = props
    
    return (
                    <div id='sub'>
                   <button onClick={decrement} id='minus'>Goodbye -</button>
                    </div>
     
    )
}

export default Minus;

