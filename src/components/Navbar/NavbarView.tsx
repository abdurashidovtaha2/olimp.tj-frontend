import React from 'react';
import { NavbarViewProps } from './model';
import style from './index.module.css';

export const NavbarView: React.FC<NavbarViewProps> = (props) => {
    return (
        <nav className={style.navbar}>
            <div>
                <p>АСОСӢ</p>
            </div>
            <div>
                <p>ОЗМУНҲО</p>
            </div>
            <div>
                <p onClick={props.linkMMT}>ММТ</p>
            </div>
            <div>
                <p>МАВОДҲО</p>
            </div>
            <div>
                <p>КУРСҲО</p>
            </div>
            <div>
                <p>ТАМОС</p>
            </div>
            <div>
                <p>СУРОҒА</p>
            </div>
            <div>
                <p>ГУРӮҲИ КОРӢ</p>
            </div>
            {/* <button onClick={props.linkMMT}>MMT</button> */}
        </nav>
    )
}
