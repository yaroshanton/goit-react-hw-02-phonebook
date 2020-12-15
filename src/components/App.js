import React, { Component } from 'react'
import ContactEditor from './ContactEditor/ContactEditor'
import ContactList from './ContactList/ContactList'
import Filter from './Filter/Filter'
import { v4 as uuidv4 } from 'uuid';

export default class App extends Component {
    state = {
        contacts: [
            { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
            { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
            { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
            { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },],
        filter: ''
    }

    checkContact = (name) => {
        return this.state.contacts.some((contact) => {
            return contact.name === name;
        });
    };

    addContact = ({ name, number }) => {
        const contact = {
            id: uuidv4(),
            name,
            number,
        };

        this.setState(prevState => {
            if (this.checkContact(name)) {
                return alert(`${name} is already in contacts.`);
            } else {
                return {
                    contacts: [...prevState.contacts, contact]
                }
            }

        })
    }

    changeFilter = filter => {
        this.setState({ filter: filter.target.value })
    }

    getVisibleContacts = () => {
        return this.state.contacts.filter(contact =>
            contact.name.toLocaleLowerCase().includes(this.state.filter.toLocaleLowerCase()))
    }

    removeContact = id => {
        this.setState(prevState => {
            return {
                contacts: prevState.contacts.filter(contact => contact.id !== id)
            }
        })
    }

    render() {
        return (
            <>
                <h2>Phonebook</h2>
                <ContactEditor onAddContact={this.addContact} />
                <h2>Contacts</h2>
                <Filter value={this.state.filter} onChange={this.changeFilter} />
                {this.state.contacts.length > 0 &&
                    <ContactList onRemoveContact={this.removeContact} contacts={this.getVisibleContacts()} />}
            </>
        )
    }
}
