import React from 'react'
import { Link } from 'react-router-dom';
import { Routes } from '../../routes';
import { MMTQuestionTypesViewProps } from './model';

export const MMTQuestionTypesView: React.FC<MMTQuestionTypesViewProps> = (props) => {
    return (
        <div>
            <Link to={Routes.category}>Back to category</Link>
            <p>Choose the question type</p>
            <Link to={Routes.test} onClick={() => props.handleClick(1)}>Тести</Link>
            <Link to={Routes.straightQues} onClick={() => props.handleClick(2)}>Саволи</Link>
            <Link to={Routes.matching} onClick={() => props.handleClick(3)}>Монандкуни</Link>
            <Link to={Routes.filling} onClick={() => props.handleClick(4)}>Пур куни</Link>
        </div>
    )
}
