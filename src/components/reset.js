import React from 'react'

const reset = (props) => {
    const {reset} =props
    return (
            <button className="reset" id='reset' onClick={reset}>Reset me</button>
    )
}

export default reset
