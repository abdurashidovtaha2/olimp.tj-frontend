import React from 'react';
import { SignUpViewProps } from './model';
import style from './index.module.css';

export const SignUpView: React.FC<SignUpViewProps> = (props) => {
    return (
        <div className={style.signUp}>
            <p className={style.exit} onClick={() => props.triggerModal(null)}>
                Ақиб
            </p>
            <form onSubmit={props.handleSubmit}>
                <h1 className={style.title}>Ба қайд гирифтан</h1>
                <input type="text" placeholder="Лакаб" name="username" onChange={props.handleChange} />
                <input type="text" placeholder="Логин" name="login" onChange={props.handleChange} />
                <input type="password" placeholder="Пароль" name="password" onChange={props.handleChange} />
                <input type="text" placeholder="Шахр" name="town" onChange={props.handleChange} />
                <input type="text" placeholder="Мактаб" name="school" onChange={props.handleChange} />
                <button>Даромад</button>
            </form>
            <p className={style.question}>Аккаунт доред?</p>
            <p className={style.tologin} onClick={() => props.triggerModal("logIn")}>Логин</p>
        </div>
    )
}
