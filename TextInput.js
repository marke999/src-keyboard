import React from 'react';
import './TextInput.css';

const TextInput = () => {
    return (
        <div className="textinput">
            <textarea
                rows={6} // Set the number of visible rows for the textarea
                className="custom-textarea"
                value={content}
                readOnly // To prevent user input in the textarea
                />
        </div>
    );
}


export default TextInput;
