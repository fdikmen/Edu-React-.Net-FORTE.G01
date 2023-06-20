import React, { Component } from 'react'

export default class Form extends Component {
    state = {
        username: '',
        userphone: ''
    }
  render() {
    /*const handleChangeName = (event) => {
        console.log("NAME INPUT Event=>",event.target.value)
        this.setState({name: event.target.value})
    }
    const handleChangePhone = (event) => {
        console.log("PHONE INPUT Event=>",event.target.value)
        this.setState({phone: event.target.value})
        // console.log("STATE=>",this.state)
    }*/

    const handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
            //username: event.target.value,
            //userphone: event.target.value
        })
        console.log("STATE=>",this.state)
    }

    const handleSubmit = (event) => {
        event.preventDefault() // prevent page refresh
        console.log("SUBMIT Event=>",event.target.value)
    }
    return (
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Name..." name='username' onChange={handleChange} />
        <input type="text" placeholder="Phone..." name='userphone' onChange={handleChange} />
        <button type='submit'>Add</button>
      </form>
    )
  }
}
