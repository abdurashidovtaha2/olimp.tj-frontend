import React from 'react';
import { MMTSubmitView } from './MMTSubmitView'
import { MMTSubmitViewProps } from './model'
import { useDispatch } from 'react-redux'
import { MMTSubmitQuestion } from '../../store/actions/mmtQuestion'

export const MMTSubmit: React.FC = () => {
    const dispatch = useDispatch();
    
    const handleSubmit = (): void => {
        dispatch(MMTSubmitQuestion());
    }

    const stateProps: MMTSubmitViewProps = {
        handleSubmit
    }
    
    return MMTSubmitView(stateProps);
}
