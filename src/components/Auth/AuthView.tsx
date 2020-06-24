import React from 'react';
import { Route } from 'react-router-dom';
import { LogIn } from '../LogIn';
import { Routes } from '../../routes';

export const AuthView = () => {
    return (
        <>
            <Route exact path={Routes.root} component={LogIn}></Route>
        </>
    )
}
