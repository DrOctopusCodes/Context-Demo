import React, { useContext } from 'react';
import styles from './UserDisplay.module.css';
import { Context } from '../context/Context';

export const UserDisplay = () => {
  const { state } = useContext(Context);
  const stringified = JSON.stringify(state, undefined, 2);

  return (
    <div>
      <h4 style={{ textAlign: 'center', marginBottom: '12px' }}>User Display</h4>
      <pre className={styles.container}>
        {stringified}
      </pre>
    </div>
  );
};

export default UserDisplay;
