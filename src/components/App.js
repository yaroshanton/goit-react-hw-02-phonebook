import React, { Component } from 'react'
import ContactEditor from './ContactEditor/ContactEditor'
import ContactList from './ContactList/ContactList'
import { v4 as uuidv4 } from 'uuid';

export default class App extends Component {
    state = {
        contacts: [],
    }

    addContact = ({ text, number }) => {
        const contact = {
            id: uuidv4(),
            text,
            number,
        };

        this.setState(prevState => {
            return {
                contacts: [...prevState.contacts, contact]
            }
        })
    }

    render() {
        return (
            <>
                <ContactEditor onAddContact={this.addContact} />
                {this.state.contacts.length > 0 && <ContactList contacts={this.state.contacts} />}
            </>
        )
    }
}
