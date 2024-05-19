import styles from './SpecialKeys.module.css';


const  SpecialKeys = ({onRemovePress, onRemoveAllPress}) => {
    return(
        <div className='specialKeysContainer'>
            <button className={styles.buttons} onClick={() => onRemovePress()}>
                <img className={styles.undoImage} src="./src/image/undo.png" alt="undo image" />
            </button>
            <button className={styles.buttons} onClick={() => onRemoveAllPress()}>
                <img className={styles.removeImage} src="./src/image/trash.png" alt="remove image" />
            </button>
        </div>
    );
};

export default SpecialKeys;
