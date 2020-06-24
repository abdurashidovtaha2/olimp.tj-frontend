import React from 'react';
import { LogInViewProps } from './model';
import { Link } from 'react-router-dom';
import { Routes } from '../../routes';

export const LogInView: React.FC<LogInViewProps> = (props) => {
    return (
        <>
            <form onSubmit={props.handleSubmit}>
                <input type="text" placeholder="Логин" name="login" onChange={props.handleChange} />
                <input type="password" placeholder="Пароль" name="password" onChange={props.handleChange} />
                <button>Даромад</button>
            </form>
            <Link to={Routes.admin}>AdminLogIn</Link><br />
            <Link to={Routes.signup}>signup</Link>
        </>
    )
}
