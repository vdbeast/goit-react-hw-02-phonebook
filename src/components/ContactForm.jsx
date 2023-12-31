import React, { Component } from "react";
import PropTypes from 'prop-types';

class ContactForm extends Component {
    static propTypes = {
        onSubmit: PropTypes.func.isRequired,
    };

    state = {
        name: '',
        number: ''
    };

    handleSubmit = (event) => {
        event.preventDefault();
        const { name, number } = this.state;
        this.props.onSubmit(name, number);
        this.setState({ name: '', number: '' });
    };

    handleChange = (event) => {
        const { name, value } = event.target;
        this.setState({ [name]: value });
    };

    render() {
        const { name, number } = this.state;
        return (
            <form
                onSubmit={this.handleSubmit}
                className="submit_form">
                <label className="label">
                    Name
                    <input
                        type="text"
                        name="name"
                        value={name}
                        onChange={this.handleChange}
                        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                        required
                    />
                </label>
                <label className="label">
                    Number
                    <input
                        type="tel"
                        name="number"
                        value={number}
                        onChange={this.handleChange}
                        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                        required
                    />
                </label>
                <button type="submit" className="submit_btn">Add contact</button>
            </form>
        )
    };
};

export default ContactForm;