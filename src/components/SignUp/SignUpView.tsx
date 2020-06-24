import React from 'react'
import { SignUpViewProps } from './model'
import { Link } from 'react-router-dom'
import { Routes } from '../../routes'

export const SignUpView: React.FC<SignUpViewProps> = (props) => {
    return (
        <>
            <form onSubmit={props.handleSubmit}>
                <input type="text" placeholder="Лакаб" name="username" onChange={props.handleChange} />
                <input type="text" placeholder="Логин" name="login" onChange={props.handleChange} />
                <input type="password" placeholder="Пароль" name="password" onChange={props.handleChange} />
                <input type="text" placeholder="Шахр" name="town" onChange={props.handleChange} />
                <input type="text" placeholder="Мактаб" name="school" onChange={props.handleChange} />
                <button>Даромад</button>
            </form>
            <Link to={Routes.root}>login</Link>
        </>
    )
}
