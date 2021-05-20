import React from 'react'

const Plus = (props) => {
    const {increment} = props
    return (
        <div>
            <button onClick={increment} id='plus'>WELCOME +</button>
        </div>
    )
}
export default Plus