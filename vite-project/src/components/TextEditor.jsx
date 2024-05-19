import React, { useState } from 'react';
import styles from './TextEditor.module.css';
import Keyboard from './Keyboard';
import SpecialKeys from './SpecialKeys.jsx';


const TextEditor = () => {
  const [text, setText] = useState('');
  const [fontSize, setFontSize] = useState(18); 

  const handleKeyPress = (key) => {
    setText(prevText => prevText + key);
  };

  const handleRemovePress = () => {
      setText(prevText => prevText.substring(0, prevText.length - 1))
  };

  const handleRemoveAllPress = () => {
    setText(prevText => '')
  };

  const increaseFontSize = () => {
    setFontSize(prevSize => prevSize + 2 < 100 ? prevSize + 2: prevSize); 
  };

  const decreaseFontSize = () => {
    setFontSize(prevSize => prevSize - 2 > 10 ? prevSize - 2: prevSize); 
  };

  
  return (
    <div className={styles.editorContainer}>
      <textarea 
        className={styles.textArea} 
        value={text} 
        readOnly
        style={{ fontSize: `${fontSize}px` }}
      />
      <SpecialKeys onRemovePress={handleRemovePress} onRemoveAllPress={handleRemoveAllPress} onIncreaseFontSize={increaseFontSize} onDecreaseFontSize={decreaseFontSize}/>
      <Keyboard onKeyPress={handleKeyPress} />
    </div>
  );
};

export default TextEditor;
