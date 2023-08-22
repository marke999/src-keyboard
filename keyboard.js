import React from 'react';
import './keyboard.css';
import TextInput from './TextInput';

const KeyboardApp = () => {
    const characters = "QWERTYUIOPASDFGHJKLZXCVBNM0123456789-=!@#$%^&*()_+[]{}|:;',./<>?";
    const [generatedContent, setGeneratedContent] = useState('');

    // Function to fetch content from the file
    const fetchContentFromFile = async () => {
        try {
            const response = await fetch('/content.txt');
            const content = await response.text();
            setGeneratedContent(content);
        } catch (error) {
            console.error('Error fetching content:', error);
        }
    };

    // Handle the key press
    const handleKeyPress = (char) => {
        console.log("Pressed:", char);
    };

    return (
        <div className="keyboard">
            {characters.split('').map((char) => (
                <button key={char} onClick={() => handleKeyPress(char)}>
                    {char}
                </button>
            ))}
            <button onClick={fetchContentFromFile}>Generate</button>
            <TextInput content={generatedContent} /> {/* Pass the generatedContent to the TextInput component */}
        </div>
    );
};

export default KeyboardApp;