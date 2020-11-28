import React from 'react'
import PropTypes from 'prop-types'
import './ContactList.css'

const ContactList = ({ contacts, onRemoveContact }) => (
    <>
        <ul className="nameList">
            {contacts.map(contact => (
                <li key={contact.id}>
                    <p>{contact.name}: {contact.number}<button type="button" className="buttonNameList" onClick={() => onRemoveContact(contact.id)}>Delete</button></p>

                </li>
            ))}
        </ul>
    </>
)

ContactList.propTypes = {
    contacts: PropTypes.array.isRequired,
    onRemoveContact: PropTypes.func.isRequired
}

export default ContactList;