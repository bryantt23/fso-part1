import React from 'react'

function Filter({ nameSearch, setNameSearch }) {
    return (
        <div>
            filter shown with: <input type="text" value={nameSearch} onChange={e => setNameSearch(e.target.value)} />
        </div>
    )
}

export default Filter