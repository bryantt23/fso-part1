import React from 'react'

function Course({ part: { name, exercises } }) {
    return (
        <p>
            {name} {exercises}
        </p>
    )
}

export default Course