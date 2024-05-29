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
  const [history, setHistory] = useState([]);

  //add the current state to the history
  const updateHistory = () => {
    setHistory((prevHistory) => [...prevHistory,
      {
        text,
        fontSize,
        color,
        fontFamily,
        isBold
      }
    ]);
  }

  //on handle undo action
  const handleUndo = () => {

    if(history.length > 0){//if the history is not empty
      const prevState = history[history.length - 1]; //keep the last state
      //update all values ​​to their previous state 
      setText(prevText => prevState.text);
      setFontSize(prevSize => prevState.fontSize);
      setColor(prevColor => prevState.color);
      setFontFamily(prevFontFamily => prevState.fontFamily);
      setIsBold(prevIsBold => prevState.isBold);

      //remove the last state from the history
      setHistory(prevHistory => prevHistory.slice(0, -1));
    }
  }

  //add char to the text
  const handleKeyPress = (key) => {
    setText(prevText => prevText + key);
    updateHistory();
  };

  //remove the last char from the text
  const handleRemovePress = () => {
    setText(prevText => prevText.substring(0, prevText.length - 1));
    updateHistory();
  };

  //remove all the text
  const handleRemoveAllPress = () => {
    setText(prevText => '');
    updateHistory();
  };

  //change all the text to be in upper case
  const toUpperCase = () => {
    setText(prevText => prevText.toUpperCase());
    updateHistory();
  };

  //change all the text to be in lower case
  const toLowerCase = () => {
    setText(prevText => prevText.toLowerCase());
    updateHistory();
  }

  //increase the zise
  const increaseFontSize = () => {
    setFontSize(prevSize => prevSize + 2 < 100 ? prevSize + 2 : prevSize);
    updateHistory();
  };

  //descease the size
  const decreaseFontSize = () => {
    setFontSize(prevSize => prevSize - 2 > 10 ? prevSize - 2 : prevSize);
    updateHistory();
  };

  //change the color to be the new color
  const colorChange = (newColor) => {
    setColor(prevColor => newColor);
    updateHistory();
  };

  //change the font to be the new font family
  const handleFontChange = (fontFamilyChoosen) => {
    setFontFamily(prevFontFamily => fontFamilyChoosen);
    updateHistory();
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
    updateHistory();
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
          onUndo={handleUndo}
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
