import React from 'react';

import styles from './Input.module.css';

interface InputProps extends React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> {}

export const Input: React.FC<InputProps> = ({placeholder, value, onChange, name}) => {
  return (
    <div className={styles.input}>
      <input 
        placeholder={placeholder}
        name={name}
        value={value}
        onChange={onChange}
      />
    </div>
  )
}