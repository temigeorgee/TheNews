import React from "react";
import styled from "styled-components";

const InputField = styled.input`
  width: 21rem;
  padding: 0.3em 1em;
  border-radius: 12px;
  font-size: 18px;
  color: black;
  background: #ffffff;
  outline: none;
  box-shadow: none;
  border: 1px solid #c2c2c2;
  transition: all 0.3s ease-out;
  position: relative;
  height: 2.78rem;
  font-size: 16px;
  font-weight: 500;
  &:focus {
    border: 2px solid rgba(0, 0, 0, 0.2);
  }
  &[type="file"] {
    color: rgba(169, 169, 169, 0.99);

    // font-size: 12px;
  }
  &::-webkit-file-upload-button {
    background: var(--primary-color);
    color: #ffff;
    border: 0;
    font-size: 14px;
    padding: 0.3rem;
    border-radius: 3px;
    // visibility: hidden;
  }
`;

const Input = ({ value, type, id, onChange, placeholder, name, accept }) => {
  return (
    <>
      <InputField
        type={type}
        id={id}
        required
        autoComplete="off"
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        accept={accept}
      />
    </>
  );
};

export default Input;
