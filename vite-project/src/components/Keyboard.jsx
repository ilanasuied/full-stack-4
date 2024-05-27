import React, { useState } from 'react';
import styles from './Keyboard.module.css';


const Keyboard = ({ onKeyPress }) => {
  const languages = {
    en: ['1234567890','qwertyuiop', 'asdfghjkl', 'zxcvbnm', ' '],
    he: ['1234567890',"/'קראטוןםפ", 'שדגכעיחלךף', 'זסבהנמצתץ?', ' '],
    emoji: [
      '😊😂😍🤔👍🙌🎉💔🔥✨🎁🎄', // Emotions
      '😎🌟😘🚀💼🍔🌈🎈💡📚🎵', // Objects
      '📁📂📅📆📇📈📉📊📋📌', // Activities
      ' '
    ],
  };
  const [currentLanguage, setCurrentLanguage] = useState('en');

  const handleLanguageChange = () => {
    const nextLanguage = currentLanguage === 'en' ? 'he' : currentLanguage === 'he' ? 'emoji' : 'en';
    setCurrentLanguage(nextLanguage);
  };

  return (
    <div className={styles.keyboardContainer}>
      <button className={styles.languageButton} onClick={handleLanguageChange}>
        <img className={styles.languageImg} src='./src/image/language.png' alt="Language" />
      </button>
      {languages[currentLanguage].map((row, rowIndex) => (
        <div key={rowIndex} className={styles.row}>
          {[...row].map((key, keyIndex) => (
               <button
               key={keyIndex}
               className={`${styles.keyButton} ${key === ' ' ? styles.spaceButton : ''}`} // Apply special class to space button
               onClick={() => onKeyPress(key)}
             >
               {key === ' ' ? 'Space' : key}
             </button>
          ))}
        </div>
      ))}
    </div>
  );
};

export default Keyboard;
