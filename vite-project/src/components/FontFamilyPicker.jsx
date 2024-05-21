import React, { useState } from 'react';
import styles from './FontFamilyPicker.module.css'

const fonts = ['Arial', 'Courier New', 'Georgia', 'Times New Roman', 'Verdana'];

export default function FontFamilyPicker({onFontPress}) {
    

    return (
        <div>
            {fonts.map((font)=>(
                <button
                className={styles.fontButton} 
                onClick={() => onFontPress(font)} 
                key={font}
                style={{ }}
                >
                {font}
                </button>
            ))}
        </div>
    );
}