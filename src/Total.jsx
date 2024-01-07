import React from 'react'

function Total({ parts }) {
    return (
        <p>Number of exercises {parts.reduce((prev, cur) => {
            return prev + cur.exercises
        }, 0)}</p>
    )
}

export default Total