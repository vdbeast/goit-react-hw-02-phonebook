import React from "react";
import PropTypes from 'prop-types';

const ContactList = ({ contacts, onDelete }) => {
    return (
        <ul>
            {contacts.map(({ id, name, number }) => (
                <li key={id}>
                    {name}: {number} <button className="delete_btn" onClick={() => onDelete(id)}>Delete</button>
                </li>
            ))}
        </ul>
    );
};

ContactList.propTypes = {
    contacts: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        number: PropTypes.string.isRequired,
    })).isRequired,
    onDelete: PropTypes.func.isRequired,
}

export default ContactList;