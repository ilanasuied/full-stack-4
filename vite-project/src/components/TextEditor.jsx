import React, { useState } from 'react';
import styles from './TextEditor.module.css';
import Keyboard from './Keyboard';
import SpecialKeys from './SpecialKeys.jsx';


const TextEditor = () => {
  const [text, setText] = useState('');

  const handleKeyPress = (key) => {
    setText(prevText => prevText + key);
  };

  const handleRemovePress = () => {
      setText(prevText => prevText.substring(0, prevText.length - 1))
  }

  const handleRemoveAllPress = () => {
    setText(prevText => '')
  }
  return (
    <div className={styles.editorContainer}>
      <textarea className={styles.textArea} value={text} readOnly />
      <SpecialKeys onRemovePress={handleRemovePress} onRemoveAllPress={handleRemoveAllPress}/>
      <Keyboard onKeyPress={handleKeyPress} />
    </div>
  );
};

export default TextEditor;
