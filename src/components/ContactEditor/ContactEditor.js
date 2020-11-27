import React, { Component } from 'react'

export default class ContactEditor extends Component {
    state = {
        text: '',
        number: ''
    }

    handleSubmit = (e) => {
        e.preventDefault();

        this.props.onAddContact(this.state)
    }

    handleChange = (e) => {
        const { name, value } = e.target

        this.setState({
            [name]: value,
        })
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit} >
                <label><p>Name</p>
                    <input
                        type="text"
                        value={this.state.text}
                        onChange={this.handleChange}
                        name="text"
                    />
                </label>
                <label><p>Number</p>
                    <input
                        type="number"
                        value={this.state.number}
                        onChange={this.handleChange}
                        name="number"
                    />
                </label>
                <button type="submit">Add contact</button>
            </form>
        )
    }

}