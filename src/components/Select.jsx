/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/prop-types */
import { useId } from 'react';
import React from 'react'

function Select({
    options,
    label,
    className = '',
    ...props
}, ref) {
    const id = useId();
    return (
        <div className="w-full">
            {label && <label
                htmlFor={id}
                className={`${className}`}>{label}</label>}
            <select
                {...props}
                id={id}
                ref={ref}
            >
                {options?.map((option) =>(<option key={option} value={option}>{option}</option>)


                )}

            </select>
        </div>
    )
}

export default React.forwardRef(Select);
