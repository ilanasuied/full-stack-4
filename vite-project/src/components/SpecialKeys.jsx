

const  SpecialKeys = ({onRemovePress, onRemoveAllPress}) => {
    return(
        <>
            <button onClick={() => onRemovePress()}>back</button>
            <button onClick={() => onRemoveAllPress()}>deleteAll</button>
        </>
    );
};

export default SpecialKeys;
