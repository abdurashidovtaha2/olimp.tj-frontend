import React from 'react';
import { SignUpView } from './SignUpView';
import { SignUpViewProps, SignUpProps } from './model';
import { useDispatch, useSelector } from 'react-redux';
import { signUpFieldChange, doSignUp } from '../../store/actions/signUp';
import { IRootState } from '../../store';

export const SignUp: React.FC<SignUpProps> = (props) => {
    const { token } = useSelector((state: IRootState) => state.userState)
    const dispatch = useDispatch();

    const handleChange = (evt: React.ChangeEvent<HTMLInputElement>): void => {
        const { name, value } = evt.target;
        dispatch(signUpFieldChange(name, value));
    }
    const handleSubmit = (evt: React.FormEvent): void => {
        evt.preventDefault();
        dispatch(doSignUp())
    }
    const triggerModal = (value: string | null): void => {
        props.triggerModal(value);
    }

    const stateProps: SignUpViewProps = {
        handleChange,
        handleSubmit,
        triggerModal
    }

    if (token) {
        return null;
    }
    return SignUpView(stateProps);
}
