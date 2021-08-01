import React, { useState, useEffect, useContext } from 'react';
import { editUser } from '../context/Actions';
import { Context } from '../context/Context';
import styles from './UserEntry.module.css';

export const UserEntry = () => {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [country, setCountry] = useState('');
  const { dispatch } = useContext(Context);

  useEffect(() => {
    editUser(dispatch, 'name', name);
  }, [name]);

  useEffect(() => {
    editUser(dispatch, 'age', age);
  }, [age]);

  useEffect(() => {
    editUser(dispatch, 'country', country);
  }, [country]);
  return (
    <div className={styles.mainContainer}>
      <h4 className={styles.heading}>User Entry</h4>
      <div className={styles.row}>
        Name:
        <input className={styles.input} value={name} onChange={(e) => setName(e.target.value)} />
      </div>
      <div className={styles.row}>
        Age:
        <input className={styles.input} value={age} onChange={(e) => setAge(e.target.value)} />
      </div>
      <div className={styles.row}>
        Country:
        <input className={styles.input} onChange={(e) => setCountry(e.target.value)} />
      </div>
    </div>
  );
};

export default UserEntry;
