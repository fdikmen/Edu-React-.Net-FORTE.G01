import React, { useState } from 'react'
import List from './List'
import Form from './Form'

export default function Contact() {
    const [contacts, setContacts] = useState(
        [
            { id: 1, name: 'John Doe', phone: '555-555-5555' },
            { id: 2, name: 'Karen Williams', phone: '444-444-4444' },
            { id: 3, name: 'Henry Johnson', phone: '333-333-333' }
        ]
    )

   const addContact = (newcontact) => {
        setContacts([...contacts, newcontact])
    }
    return (
        <div>
            <h1 style={{ textAlign: 'center' }}>Phonebook</h1>
            <List contacts={contacts} />
            <Form addContact={addContact} />
        </div>
    )
}
