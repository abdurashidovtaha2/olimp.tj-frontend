import React from 'react';
import { LogInView } from './LogInView';
import { useDispatch } from 'react-redux';
import { logInFieldChange, doLogIn } from '../../store/actions/logIn';
import { LogInViewProps } from './model';

export const LogIn: React.FC = () => {
    const dispatch = useDispatch();

    const handleChange = (evt: React.ChangeEvent<HTMLInputElement>): void => {
        const { name, value } = evt.target;
        dispatch(logInFieldChange(name, value, false));
    }
    const handleSubmit = (evt: React.FormEvent): void => {
        evt.preventDefault();
        dispatch(doLogIn());
    }

    const stateProps: LogInViewProps = {
        handleChange,
        handleSubmit,
    }

    return LogInView(stateProps);
}
