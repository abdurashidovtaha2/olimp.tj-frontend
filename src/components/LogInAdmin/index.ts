import React from 'react'
import { LogInAdminView } from './LogInAdminView'
import { useDispatch, useSelector } from 'react-redux';
import { LogInAdminViewProps } from './model';
import { doLogIn, logInFieldChange } from '../../store/actions/logIn';
import { IRootState } from '../../store';

export const LogInAdmin: React.FC = () => {
    const { token } = useSelector((state: IRootState) => state.userState);
    const dispatch = useDispatch();

    const handleChange = (evt: React.ChangeEvent<HTMLInputElement>): void => {
        const { name, value } = evt.target;
        dispatch(logInFieldChange(name, value, true));
    }
    const handleSubmit = (evt: React.FormEvent): void => {
        evt.preventDefault();
        dispatch(doLogIn());
    }

    const stateProps: LogInAdminViewProps = {
        handleChange,
        handleSubmit,
    }

    if (token) {
        return null
    }
    return LogInAdminView(stateProps);
}
