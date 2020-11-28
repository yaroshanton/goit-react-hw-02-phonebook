import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './ContactEditor.css'

export default class ContactEditor extends Component {
    static = {
        onAddContact: PropTypes.func.isRequired,
    }

    state = {
        name: '',
        number: ''
    }

    handleSubmit = (e) => {
        e.preventDefault();

        this.props.onAddContact(this.state)
        this.setState({
            name: '',
            number: ''
        })
    }

    handleChange = (e) => {
        const { name, value } = e.target

        this.setState({
            [name]: value,
        })
    }

    render() {
        const { name, number } = this.state
        return (
            <div className="contactForm" >
                <form onSubmit={this.handleSubmit} >
                    <label><p>Name</p>
                        <input
                            type="text"
                            value={name}
                            onChange={this.handleChange}
                            name="name"
                        />
                    </label>
                    <label><p>Number</p>
                        <input
                            type="number"
                            value={number}
                            onChange={this.handleChange}
                            name="number"
                        />
                    </label>
                    <button className="buttonForm" type="submit">Add contact</button>
                </form>
            </div>
        )
    }

}