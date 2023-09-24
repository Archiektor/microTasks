import React, {useState, MouseEvent} from 'react';
import './App.css';
import NewComponent from './components/NewComponent/NewComponent';


// const students: Array<StudentType> = [{
//     id: 1,
//     name: 'Vasya',
//     age: 25
// }, {
//     id: 2,
//     name: 'Vika',
//     age: 30
// }]
// Deep Copy
// @ts-ignore
// const clone = (items: any) => items.map(item => Array.isArray(item) ? clone(item) : item);
// var arrayCopy = JSON.parse(JSON.stringify(nestedArray));


function App() {
    const [money, setMoney] = useState([
        {banknote: "dollar", nominal: 100, number: "a123456789"},
        {banknote: "dollar", nominal: 50, number: "b123456789"},
        {banknote: "ruble", nominal: 100, number: "c123456789"},
        {banknote: "dollar", nominal: 100, number: "d123456789"},
        {banknote: "dollar", nominal: 50, number: "e123456789"},
        {banknote: "ruble", nominal: 100, number: "f123456789"},
        {banknote: "dollar", nominal: 50, number: "j123456789"},
        {banknote: "ruble", nominal: 50, number: "h123456789"}
    ])

    const [filter, setFilter] = useState('all')
    //console.log('after filter assigning')

    let currentMoney = money;
    if (filter === 'dollar') {
        currentMoney = money.filter(el => el.banknote === 'dollar')
    }
    if (filter === 'ruble') {
        currentMoney = money.filter(el => el.banknote === 'ruble')
    }


    const onParentClickHandler = (action: 'ruble' | `dollar` | 'reset') => {
        setFilter(action);
    }


    return (
        <div>
            <NewComponent currentMoney={currentMoney} onParentClickHandler={onParentClickHandler}/>
        </div>
    );
}

export default App;

// const buttonHandler = (subscriber: string, age: number) => {
//     // return () => console.log(`Welcome ${subscriber}`)
//     console.log(`Welcome ${subscriber}, ${age}`)
// }
//
// const buttonHandler2 = () => {
//     // return () => console.log(`Welcome ${subscriber}`)
//     console.log(`I'm stupid button`)
// }
