import React from 'react';


const TextField = ({label, name,  placeholder, value, onChange, type, holderClass, labelClass, inputClass, children}) => (
    <div className={`text-field ${holderClass}`}>
        <label className={labelClass}>{label}</label>
        <input type={type} name={name} className={inputClass} placeholder={placeholder} value={value} onChange={onChange}/>
        {children}
    </div>
)

export default TextField;
