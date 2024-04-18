import React, { useRef, useEffect } from 'react';
import TextFieldComp from '../TextField/TextFieldComp';

export const UncontrolledComponent = () => {
    const inputRef = useRef(null);

    const handleSubmit = (event) => {
        if (event) {
            event.preventDefault(); // Prevents the default form submission behavior
        }
        const inputValue = inputRef.current.value;
        console.log('Submitted value:', inputValue);
    };
    return (
        <>
            <form onSubmit={handleSubmit}>
                <TextFieldComp
                    type="text"
                    label="Uncontrolled Component"
                    ref={inputRef}
                />
                <button type="submit">Submit</button>
            </form>
        </>
    );
};
