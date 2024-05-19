import React, { useState } from 'react';
import styles from './Keyboard.module.css';

const languages = {
  en: ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', ' '],
  he: ['א', 'ב', 'ג', 'ד', 'ה', 'ו', 'ז', 'ח', 'ט', 'י', 'כ', 'ל', 'מ', 'נ', 'ס', 'ע', 'פ', 'צ', 'ק', 'ר', 'ש', 'ת', ' '],
  emoji: ['😊', '😂', '😍', '🤔', '👍', '🙌', '🎉', '💔', '🔥', '✨', '🎁', '🎄']
};

const Keyboard = ({ onKeyPress }) => {
  const [currentLanguage, setCurrentLanguage] = useState('en');

  const handleLanguageChange = () => {
    const nextLanguage = currentLanguage === 'en' ? 'he' : currentLanguage === 'he' ? 'emoji' : 'en';
    setCurrentLanguage(nextLanguage);
  };

  return (
    <div className={styles.keyboardContainer}>
      <button className={styles.languageButton} onClick={handleLanguageChange}>
        <img className={styles.languageImg} src='./src/image/language.png'></img>
      </button>
      {languages[currentLanguage].map((key, index) => (
        <button key={index} className={styles.keyButton} onClick={() => onKeyPress(key)}>
            {key === ' ' ? (currentLanguage === 'he' ? 'רווח' : 'Space') : key}
        </button>
      ))}
    </div>
  );
};

export default Keyboard;
