import React from 'react';

const FormControl = ({ name, placeholder, type, value, handleChange }) => {
  return (
    <div className="form-control">
      <input
        id={name}
        name={name}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={handleChange}
      />
    </div>
  );
};

export default FormControl;
