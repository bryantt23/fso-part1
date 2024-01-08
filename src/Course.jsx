import React from 'react'

function Course({ course: { name, parts } }) {
    return (
        <div>
            <h1>
                {name}
            </h1>

            <p>
                {parts.map(({ name, exercises, id }) => <p key={id}>{name} {exercises}</p>)}

            </p>
        </div>
    )
}

export default Course