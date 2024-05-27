import React, { useState } from 'react';
import styles from './TextEditor.module.css';
import Keyboard from './Keyboard';
import SpecialKeys from './SpecialKeys.jsx';
import ColorPicker from './ColorPicker.jsx';
import FontFamilyPicker from './FontFamilyPicker.jsx'

const TextEditor = () => {
  const [text, setText] = useState('');
  const [fontSize, setFontSize] = useState(18);
  const [color, setColor] = useState('white');
  const [fontFamily, setFontFamily] = useState('Arial');
  const [isBold, setIsBold] = useState('normal');


  const handleKeyPress = (key) => {
    setText(prevText => prevText + key);
  };

  const handleRemovePress = () => {
    setText(prevText => prevText.substring(0, prevText.length - 1))
  };

  const handleRemoveAllPress = () => {
    setText(prevText => '')
  };

  const toUpperCase = () => {
    setText(prevText => prevText.toUpperCase())
  };

  const toLowerCase = () => {
    setText(prevText => prevText.toLowerCase())
  }

  const increaseFontSize = () => {
    setFontSize(prevSize => prevSize + 2 < 100 ? prevSize + 2 : prevSize);
  };

  const decreaseFontSize = () => {
    setFontSize(prevSize => prevSize - 2 > 10 ? prevSize - 2 : prevSize);
  };

  const colorChange = (newColor) => {
    setColor(prevColor => newColor)
  };

  const handleFontChange = (fontFamilyChoosen) => {
    setFontFamily(prevFontFamily => fontFamilyChoosen)
  };

  const toggleBold = (e) => {
    setIsBold(prevIsBold => prevIsBold === 'bold' ? 'normal' : 'bold');
    const imgElement = e.target.querySelector('img');
    if (isBold === 'bold') {
      e.target.style.backgroundColor = '#fff';
      imgElement.src = './src/image/bold.png';
    } else {
      imgElement.src = './src/image/unbold.png';
    }
    console.log(e.target)
  };

  return (
    <div className={styles.editorContainer}>
      <div className={styles.specialKeysAndColorPicker}>
      <ColorPicker onColorChoosen={colorChange} />
      <FontFamilyPicker onFontPress={handleFontChange} />
        <SpecialKeys
          onRemovePress={handleRemovePress}
          onRemoveAllPress={handleRemoveAllPress}
          onIncreaseFontSize={increaseFontSize}
          onDecreaseFontSize={decreaseFontSize}
          onUpperCase={toUpperCase}
          onLowerCase={toLowerCase}
          onBoldPress={toggleBold}
        />
      </div>
      
      <textarea
        className={styles.textArea}
        value={text}
        readOnly
        style={{
          fontSize: `${fontSize}px`,
          color: `${color}`,
          fontFamily: `${fontFamily}`,
          fontWeight: `${isBold}`
        }}
      />

      <Keyboard onKeyPress={handleKeyPress} />
    </div>
  );
};

export default TextEditor;
