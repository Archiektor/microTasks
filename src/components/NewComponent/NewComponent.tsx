import React from 'react';

type MoneyType = {
    banknote: string
    nominal: number
    number: string
}

type NewComponentPropsType = {
    currentMoney: MoneyType[]
    onParentClickHandler: (action: "ruble" | "dollar" | "reset") => void
}
const NewComponent: React.FC<NewComponentPropsType> = ({currentMoney, onParentClickHandler}) => {
    const onClickFilterHandler = (action: 'ruble' | `dollar` | 'reset') => {
        onParentClickHandler(action);
    }

    return (
        <div>
            <ul>
                {currentMoney.map((objFromMoneyArr, idx) => {
                    return (
                        <li key={idx}>
                            <span>{objFromMoneyArr.banknote}</span>
                            <span>{objFromMoneyArr.nominal}</span>
                            <span>{objFromMoneyArr.number}</span>
                        </li>
                    )
                })}
            </ul>
            <button onClick={() => onClickFilterHandler('reset')}>Reset</button>
            <button onClick={() => onClickFilterHandler('ruble')}>Filter by rub</button>
            <button onClick={() => onClickFilterHandler('dollar')}>Filter by usd</button>
        </div>
    )
}

export default NewComponent;