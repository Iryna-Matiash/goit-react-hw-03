

import React from 'react';
import styles from './SearchBox.module.css';

const SearchBox = ({ value, onChange }) => {
  return (
    <div className={styles.box}>
      <label htmlFor="search" className={styles.label}>Find contacts by name</label>
      <input
        id="search"
        className={styles.input}
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
    </div>
  );
};

export default SearchBox;
