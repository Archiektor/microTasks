import React from 'react';
import './NewComponent.css';

type NewComponentPropsType = {
    // students: StudentType[]
    students: Array<StudentType>
}

export type StudentType = {
    id: number
    name: string
    age: number
}

const NewComponent: React.FC<NewComponentPropsType> = ({students}) => {
    const topCars = [
        {manufacturer: 'BMW', model: 'm5cs'},
        {manufacturer: 'Mercedes', model: 'e63s'},
        {manufacturer: 'Audi', model: 'rs6'}
    ]


    return (
        <ul>
            {/*{students.map((student, idx) => <li key={student.id}>*/}
            {/*    <span>{`My name is ${student.name} and age - ${student.age}`}</span></li>)}*/}
            {topCars.map((car, idx) => <li
                key={idx + 1}>{`${car.manufacturer} ${car.model.charAt(0).toUpperCase()}${car.model.slice(1)}`}</li>)}
        </ul>
    )
}

// export default NewComponent;