import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class List extends Component {
    static propTypes = {
        contacts: PropTypes.array.isRequired
    }
    state = {filteredText: ''}
    render() {
        const handleChange = (event) => {
            //console.log("INPUT Event=>",event.target.value)
            this.setState({
                filteredText: event.target.value
            })
        }
        const filteredContacts = this.props.contacts.filter(item => {
            return item.name.toLowerCase().indexOf(this.state.filteredText.toLowerCase()) !== -1
                ||
                item.phone.toLowerCase().indexOf(this.state.filteredText.toLowerCase()) !== -1
        })

        return (
            <div>
                <input type="text" placeholder="Filter Contacts..." onChange={handleChange} />
                {
                    filteredContacts.map((contact, index) => (
                        <div key={index + 1}>
                            {contact.name} - {contact.phone}
                        </div>
                    ))
                }
            </div>
        )
    }
}
