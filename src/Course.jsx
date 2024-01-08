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
            <p>
                <strong>total of {parts.reduce((prev, cur) => {
                    return prev + cur.exercises
                }, 0)}</strong>

            </p>
        </div>
    )
}

export default Course