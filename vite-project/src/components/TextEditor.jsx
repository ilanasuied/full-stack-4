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


  //add char to the text
  const handleKeyPress = (key) => {
    setText(prevText => prevText + key);
  };

  //remove the last char from the text
  const handleRemovePress = () => {
    setText(prevText => prevText.substring(0, prevText.length - 1))
  };

  //remove all the text
  const handleRemoveAllPress = () => {
    setText(prevText => '')
  };

  //change all the text to be in upper case
  const toUpperCase = () => {
    setText(prevText => prevText.toUpperCase())
  };

  //change all the text to be in lower case
  const toLowerCase = () => {
    setText(prevText => prevText.toLowerCase())
  }

  //increase the zise
  const increaseFontSize = () => {
    setFontSize(prevSize => prevSize + 2 < 100 ? prevSize + 2 : prevSize);
  };

  //descease the size
  const decreaseFontSize = () => {
    setFontSize(prevSize => prevSize - 2 > 10 ? prevSize - 2 : prevSize);
  };

  //change the color to be the new color
  const colorChange = (newColor) => {
    setColor(prevColor => newColor)
  };

  //change the font to be the new font family
  const handleFontChange = (fontFamilyChoosen) => {
    setFontFamily(prevFontFamily => fontFamilyChoosen)
  };

  //bold and debold the text
  const toggleBold = (e) => {
    //if isBold is true, changethe text to be bold
    setIsBold(prevIsBold => prevIsBold === 'bold' ? 'normal' : 'bold');
    const imgElement = e.target.querySelector('img');

    //change the image bold and unbold 
    if (isBold === 'bold') {
      e.target.style.backgroundColor = '#fff';
      imgElement.src = './src/image/bold.png';
    } else {
      imgElement.src = './src/image/unbold.png';
    }
  };

  return (
    <div className={styles.editorContainer}>
      <div className={styles.header}>
        <h1 className={styles.title}>Text Edito...</h1>
      </div>
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
      //changes the text and its style according to the values
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
