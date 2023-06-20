import React, { useState } from 'react'

export default function Form({ addContact }) {
    const [name, setName] = useState('')
    const [phone, setPhone] = useState('')

    /*const handleChangeName = (event) => {
     setName(event.target.value)
     }*/
    const handleChangePhone = (event) => {
        setPhone(event.target.value)
    }

    const handleSubmit = (event) => {
        event.preventDefault() // prevent page refresh
        // console.log("SUBMIT Event=>",event.target.value)
        addContact({ name, phone })
        setName('')
        setPhone('')
    }
    return (
        <form onSubmit={handleSubmit} className='FormComponent'>
            <input type="text" placeholder="Name..." name='name'
                value={name} onChange={(event) => setName(event.target.value)} />
            <input type="text" placeholder="Phone..." name='phone'
                value={phone} onChange={handleChangePhone} />
            <button type='submit'>Add</button>
        </form>
    )
}
