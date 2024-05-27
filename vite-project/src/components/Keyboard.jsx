import React, { useState } from 'react';
import styles from './Keyboard.module.css';

const Keyboard = ({ onKeyPress }) => {
  const languages = {
    en: ['1234567890', 'qwertyuiop', 'asdfghjkl', 'zxcvbnm'],
    he: ['1234567890', "/'קראטוןםפ", 'שדגכעיחלךף', 'זסבהנמצתץ?'],
    emoji: [
      '😊😂😍🤔👍🙌😘😎', // Emotions
      '🌟🚀💼🍔🌈🎈', // Objects
      '📁📂📅📆📇📈📉📋📌', // Activities
      '💡📚🎵🎉💔🔥✨🎁🎄',
    ],
  };
  const [currentLanguage, setCurrentLanguage] = useState('en');

  //change the language
  const handleLanguageChange = () => {
    const nextLanguage = currentLanguage === 'en' ? 'he' : currentLanguage === 'he' ? 'emoji' : 'en';
    setCurrentLanguage(nextLanguage);
  };

  return (
    <div className={styles.keyboardContainer}>
      {languages[currentLanguage].map((row, rowIndex) => (
        <div key={rowIndex} className={styles.row}>
          {[...row].map((key, keyIndex) => (
            <button
              key={keyIndex}
              className={styles.keyButton}
              onClick={() => onKeyPress(key)}
            >
              {key}
            </button>
          ))}
        </div>
      ))}
      <div className={styles.row}>
        <button className={styles.languageButton} onClick={handleLanguageChange}>
          <img className={styles.languageImg} src='./src/image/language.png' alt="Language" />
        </button>
        <button className={`${styles.keyButton} ${styles.spaceButton}`} onClick={() => onKeyPress(' ')}>
          Space
        </button>
      </div>
    </div>
  );
};

export default Keyboard;
