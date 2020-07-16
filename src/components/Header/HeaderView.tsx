import React from 'react';
import style from './index.module.css';
import logo from '../../shared/images/logo-min.png';
import logIn from '../../shared/images/logIn-min.jpg';
import signUp from '../../shared/images/signUp-min.jpg';
import { HeaderViewProps } from './model';
import { Routes } from '../../routes';

export const HeaderView: React.FC<HeaderViewProps> = (props) => {
    return (
        <header className={style.header}>
            <img src={logo} className={style.logo} alt="Браузерро нав кунед" onClick={() => props.handlePush(Routes.root)} />
            <div className={style.search}>
                <div className={style.input}>
                    <input type="text" />
                </div>
                <div className={style.btn}>
                    <button>Чустучу</button>
                </div>
            </div>
            {
                props.token
                    ?
                    <div className={style.authorized}>
                        <div className={style.greeting}>
                            <p>
                                Салом <span className={style.username}>{props.username}</span>
                            </p>
                        </div>
                        <div className={style.logOut}>
                            <button onClick={props.handleLogOut}>Баромад</button>
                        </div>
                    </div>
                    :
                    <div className={style.authorization}>
                        <div className={style.logIn} onClick={() => props.triggerModal("logIn")}>
                            <img src={logIn} alt="" />
                            <p>ДОХИЛ ШУДАН</p>
                        </div>
                        <div className={style.signUp} onClick={() => props.triggerModal("signUp")}>
                            <img src={signUp} alt="" />
                            <p>АЗ КАЙД ГУЗАШТАН</p>
                        </div>
                    </div>
            }
        </header>
    )
}
