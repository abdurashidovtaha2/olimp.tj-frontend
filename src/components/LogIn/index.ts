import React from 'react';
import { LogInView } from './LogInView';
import { useDispatch, useSelector } from 'react-redux';
import { logInFieldChange, doLogIn } from '../../store/actions/logIn';
import { LogInViewProps, LogInProps } from './model';
import { IRootState } from '../../store';

export const LogIn: React.FC<LogInProps> = (props) => {
    const { token } = useSelector((state: IRootState) => state.userState);
    const dispatch = useDispatch();

    const handleChange = (evt: React.ChangeEvent<HTMLInputElement>): void => {
        const { name, value } = evt.target;
        dispatch(logInFieldChange(name, value, false));
    }
    const handleSubmit = (evt: React.FormEvent): void => {
        evt.preventDefault();
        dispatch(doLogIn());
    }
    const triggerModal = (value: string | null): void => {
        props.triggerModal(value);
    }

    const stateProps: LogInViewProps = {
        handleChange,
        handleSubmit,
        triggerModal
    }

    if (token) {
        return null;
    }
    return LogInView(stateProps);
}
