import React from 'react'

const ContactList = ({ contacts }) => (
    <>
        <h2>Contacts</h2>
        <ul>

            {contacts.map(contact => (
                <li key={contact.id}>
                    <p>{contact.text}: {contact.number}</p>
                </li>
            ))}
        </ul>
    </>
)

export default ContactList;