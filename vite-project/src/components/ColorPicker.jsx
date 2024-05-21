import React, { useState } from 'react';
import styles from './ColorPicker.module.css'

const colorNames = ['SaddleBrown', 'Chartreuse', 'SpringGreen', 'BlueViolet', 'CornflowerBlue', 'Aquamarine', 'Thistle', 'MistyRose', 'PapayaWhip'];

export default function ColorPicker({onColorChoosen}) {
    

    return (
        <div>
            {colorNames.map((colorName)=>(
                <button
                className={styles.colorButton} 
                onClick={() => onColorChoosen(colorName)} 
                key={colorName}
                style={{ backgroundColor: `${colorName}`, color: `${colorName}`}}
                >
                </button>
            ))}
        </div>
    );
}

