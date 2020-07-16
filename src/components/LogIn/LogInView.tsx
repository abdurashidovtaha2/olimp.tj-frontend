import React from 'react';
import { LogInViewProps } from './model';
import style from './index.module.css';

export const LogInView: React.FC<LogInViewProps> = (props) => {
    return (
        <div className={style.logIn}>
            <p className={style.exit} onClick={() => props.triggerModal(null)}>
                Ақиб
            </p>
            <h1 className={style.title}>Ваколат</h1>
            <form onSubmit={props.handleSubmit}>
                <input type="text" placeholder="Номи корбарӣ" name="login" onChange={props.handleChange} />
                <input type="password" placeholder="Рамз" name="password" onChange={props.handleChange} />
                <button>Даромад</button>
            </form>
            <p className={style.question}>Ҳанӯз ба қайд нагирифтаед?</p>
            <p className={style.tosignup} onClick={() => props.triggerModal("signUp")}>Ба қайд гирифтан</p>
        </div>
    )
}
