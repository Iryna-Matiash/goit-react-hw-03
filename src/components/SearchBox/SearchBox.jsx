
// src/components/SearchBox/SearchBox.jsx
import React from 'react';
import styles from './SearchBox.module.css';

const SearchBox = ({ value, onChange }) => {
  return (
    <input
      className={styles.input}
      type="text"
      placeholder="Search contacts..."
      value={value}
      onChange={(e) => onChange(e.target.value)}
    />
  );
};

export default SearchBox;
