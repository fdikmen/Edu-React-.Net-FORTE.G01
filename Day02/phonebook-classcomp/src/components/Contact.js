import React, { Component } from 'react'
import List from './List'
import Form from './Form'

export default class Contact extends Component {
    state = {
        contacts: [
            { id: 1, name: 'John Doe', phone: '555-555-5555' },
            { id: 2, name: 'Karen Williams', phone: '444-444-4444' },
            { id: 3, name: 'Henry Johnson', phone: '333-333-333' }
        ]
    }
addContact = (contact) => {
    /*const { contacts } = this.state
    contacts.push(contact)
    this.setState({ contacts })*/

    /*const newContacts = this.state.contacts.push(contact)
    this.setState({ contacts:newContacts })*/

    this.setState({ contacts: [...this.state.contacts, contact] })
}

  render() {
    return (
      <div>
        <h1>Phonebook</h1>
        <List contacts={this.state.contacts} />
        <Form addContact={this.addContact} />
      </div>
    )
  }
}
