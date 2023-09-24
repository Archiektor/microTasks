import React from 'react';
import './ButtonWrapper.css';

const ButtonWrapper = () => {
    return (
        <div>
            123
        </div>
    )
}

export default ButtonWrapper;

// const subscribe = (event: MouseEvent<HTMLButtonElement>) => {
//     debugger
//     console.log(`New subscriber was added`)
// }
//
// const addSecondSubscriber = (event: MouseEvent<HTMLButtonElement>) => {
//     debugger
//     console.log(`Second subscriber was added`)
// }

// const onClickHandler = function (name: string) {
//     return () => console.log(name);
// }


// const foo1 = () => {
//     console.log(`+ 100200`);
// }
//
// const foo2 = (num: number) => {
//     console.log(num);
// }

{/*<button onClick={(e) => console.log('Hello')} className={'btn'}>Click me !</button>*/
}
{/*<button onClick={onClickHandler('Vasya')} className={'btn'}>Click me 2!</button>*/
}
{/*<button onClick={onClickHandler('Petya')} className={'btn'}>Click me 3!</button>*/
}
// <button onClick={(event) => onClickHandler('Vasia')} className={'btn'}>Click me 1!</button>
// <button onClick={(event) => onClickHandler('Petya')} className={'btn'}>Click me 2 !</button>
{/*<button onClick={(event) => onClickHandler('Nikki')} className={'btn'}>Click me 4!</button>*/
}
{/*<button onClick={(e: React.MouseEvent<HTMLButtonElement>) => foo1()} className={'btn'}>1</button>*/
}
{/*<button onClick={(e: React.MouseEvent<HTMLButtonElement>) => foo2(100200)} className={'btn'}>2</button>*/
}