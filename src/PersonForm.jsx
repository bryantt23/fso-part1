import { useState } from 'react'

function PersonForm({ handleSubmit }) {
    const [newName, setNewName] = useState('')
    const [newTelephoneNumber, setNewTelephoneNumber] = useState('')

    const localHandleSubmit = e => {
        e.preventDefault()
        handleSubmit(newName, newTelephoneNumber)
        setNewName("")
        setNewTelephoneNumber("")
    }

    return (<form onSubmit={localHandleSubmit}>
        <div>
            name: <input type="text" value={newName} onChange={e => setNewName(e.target.value)} />
        </div>
        <div>
            number: <input type="tel" value={newTelephoneNumber} onChange={e => setNewTelephoneNumber(e.target.value)} />
        </div>
        <div>
            <button type="submit">add</button>
        </div>
    </form>
    )
}

export default PersonForm