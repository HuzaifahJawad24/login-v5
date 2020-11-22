import React from 'react';
import '../css/checkbox.css'


const Checkbox = ({label, name, onChange, checked}) => (
    <label className="container">{label}
        <input type="checkbox" checked={checked} id="customCheck1" name={name} onChange={onChange}/>
        <span className="checkmark"></span>
    </label>
)

export default Checkbox;





