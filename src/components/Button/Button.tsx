import React from 'react';
import './Button.css';

type ButtonType = {
    name: string
    callBack: () => void
}

const Button: React.FC<ButtonType> = ({name, callBack}) => {
    const onClickHandler = () => {
        callBack();
    }

    return (
        <button className={`btn`} onClick={() => onClickHandler()}>{name}</button>
    )
}

export default Button;