import React, { useState } from 'react';
import styles from './FontFamilyPicker.module.css';

const fonts = ['Arial', 'Courier New', 'Georgia', 'Times New Roman', 'Verdana'];

export default function FontFamilyPicker({ onFontPress }) {
    const [isOpen, setIsOpen] = useState(false);

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className={styles.fontPicker}>
            <button className={styles.dropdownButton} onClick={toggleDropdown}>
                Select Font
            </button>
            {isOpen && (
                <div className={styles.fontPickerContainer}>
                    {fonts.map((font) => (
                        <button
                            className={styles.fontButton}
                            onClick={() => {
                                onFontPress(font);
                                setIsOpen(false);
                            }}
                            key={font}
                            style={{ fontFamily: font }}
                        >
                            {font}
                        </button>
                    ))}
                </div>
            )}
        </div>
    );
}
