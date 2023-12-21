/* eslint-disable react/prop-types */
import React,{useId, forwardRef} from 'react';


const Input = forwardRef(
  function Input({
    label,
    type = 'text',
    className = '',
    ...props
}, ref)  {
    const id = useId()
    return (
        <div className='w-full'>
            {label && <label
                className="inline-block mb-1 pl-1"
                htmlFor={id}>
                {label}

            </label>}
            <input type={type}
                className={`classes to be added from notes ${className}`}
                ref={ref}
                id={id}
                {...props} />
        </div>

    )

})
     


export default Input
