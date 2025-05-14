// src/components/Contact/Contact.jsx
import React from 'react';
import styles from './Contact.module.css';

const Contact = ({ contact, onDelete }) => {
  return (
    <li className={styles.item}>
      <span>{contact.name}: {contact.number}</span>
      <button onClick={() => onDelete(contact.id)}>Delete</button>
    </li>
  );
};

export default Contact;
