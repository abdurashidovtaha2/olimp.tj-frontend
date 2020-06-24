import React from 'react';
import { NavbarViewProps } from './model';

export const NavbarView: React.FC<NavbarViewProps> = (props) => {
    return (
        <div>
            <button onClick={props.linkMMT}>MMT</button>
        </div>
    )
}
