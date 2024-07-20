import React from 'react';
import { useState } from "react";
import './checkbox.css';

type CheckboxProps = {
  label: string;
};

const Checkbox = ({ label }: CheckboxProps) => {
  const [isChecked, setIsChecked] = useState(false);

  const checkedClass = isChecked ? 'checked' : '';
  return (
    <div className={`${checkedClass} checkbox-wrapper`}>
      <label className='checkbox-label'>
        <input type='checkbox' checked={isChecked} className={checkedClass} onChange={() => setIsChecked((prev) => !prev)}/>
        <span>{label}</span>
      </label>
    </div>
  );
};
export default Checkbox;