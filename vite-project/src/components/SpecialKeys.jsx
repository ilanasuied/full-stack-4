import styles from './SpecialKeys.module.css';


const  SpecialKeys = ({onUndo, onRemovePress, onRemoveAllPress, onIncreaseFontSize, onDecreaseFontSize, onUpperCase, onLowerCase, onBoldPress}) => {
    return(
        <div className={styles.specialKeysContainer}>

            <button className={styles.buttons} onClick={(e)=> onBoldPress(e)} >
                <img className={styles.buttonsImage} src="./src/image/bold.png" alt="to upper case image"/>
            </button>
            <button className={styles.buttons} onClick={() => onUpperCase()}>
                <img className={styles.buttonsImage} src="./src/image/uppercase-interface-button.png" alt="to upper case image" />
            </button>
            <button className={styles.buttons} onClick={() => onLowerCase()}>
                <img className={styles.buttonsImage} src="./src/image/lowercase-interface-symbol.png" alt="to lower case image" />
            </button>
            <button className={styles.buttons} onClick={() => onDecreaseFontSize()}>
                <img className={styles.buttonsImage} src="./src/image/decrease.jpg" alt="decrease font size image" />
            </button>
            <button className={styles.buttons} onClick={() => onIncreaseFontSize()}>
                <img className={styles.buttonsImage} src="./src/image/increase.jpg" alt="increase font size image" />
            </button>
            <button className={styles.buttons} onClick={() => onRemovePress()} onDoubleClick={() => onRemoveAllPress()}>
                <img className={styles.buttonsImage} src="./src/image/trash.png" alt="remove image" />
            </button>
            <button className={styles.buttons} onClick={() => onUndo()}>
                <img className={styles.buttonsImage} src="./src/image/undo.png" alt="undo image" />
            </button>
        </div>
    );
};

export default SpecialKeys;
