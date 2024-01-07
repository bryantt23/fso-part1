import React from 'react'
import Course from './Course'
function Content({ parts }) {
    return (
        <div>
            {parts.map(part => <Course part={part} />)}
        </div>
    )
}

export default Content