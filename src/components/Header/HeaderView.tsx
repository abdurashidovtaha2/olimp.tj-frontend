import React from 'react';
import style from './index.module.css';
import logo from '../../shared/images/logo.jpg';
import signIn from '../../shared/images/signIn.jpg';
import signUp from '../../shared/images/signUp.jpg';
import { HeaderViewProps } from './model';

export const HeaderView: React.FC<HeaderViewProps> = (props) => {
    console.log(props.token)
    return (
        <header className={style.header}>
            <img src={logo} alt="Браузерро нав кунед" />
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

                        </div>
                        <div className={style.logOut}>

                        </div>
                    </div>
                    :
                    <div className={style.authorization}>
                        <div className={style.signIn}>
                            <img src={signIn} alt=""/>
                            <p>ДОХИЛ ШУДАН</p>
                        </div>
                        <div className={style.signUp}>
                            <img src={signUp} alt=""/>
                            <p>Аз КАЙД ГУЗАШТАН</p>
                        </div>
                    </div>
            }
        </header>
    )
}
