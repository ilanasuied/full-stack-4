import React, { useState } from 'react';
import styles from './ColorPicker.module.css'
import { SketchPicker } from 'react-color'


const ColorPicker = ({ onColorChoosen }) => {

    const [showColorPicker, setShowColorPicker] = useState(false);
    const [selectedColor, setSelectedColor] = useState('');


    const handleColorPickerChange = (color) => {
        setSelectedColor(color.hex);
        onColorChoosen(color.hex);
    };

    return (
        <div className={styles.colorPickerContainer}>
            <div className={styles.colorPickerWrapper}>
                <button className={styles.toggleColorPickerButton} onClick={() => setShowColorPicker(!showColorPicker)}>
                    {showColorPicker ? 'Hide Color Picker' : 'Show Color Picker'}
                </button>
                {showColorPicker && (
                    <div className={styles.sketchPickerContainer}>
                        <SketchPicker
                            color={selectedColor}
                            onChange={handleColorPickerChange}
                        />
                    </div>
                )}
            </div>
        </div>
    );
};

export default ColorPicker;
