import React, { useState } from 'react'

export default function List({ contacts }) {
    const [filteredText, setFilteredText] = useState('')

    const handleChange = (event) => {
        setFilteredText(event.target.value)
    }
    const filteredContacts = contacts.filter(item => {
        return item.name.toLowerCase().indexOf(filteredText.toLowerCase()) !== -1
            ||
            item.phone.toLowerCase().indexOf(filteredText.toLowerCase()) !== -1
    })

  return (
    <div className='ListComponent'>
        <input type="text" placeholder="Filter Contacts..." onChange={handleChange} />
       <ul>
        {
            filteredContacts.map((contact, index) => (
                <li key={index + 1}>
                    <span>{contact.name}</span>
                    <span>{contact.phone}</span>
                </li>
                
            ))
        }
       </ul>
    </div>
  )
}
