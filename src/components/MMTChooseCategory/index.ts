import React, { useState } from 'react';
import { MMTChooseCategoryView } from './MMTCategoryView';
import { MMTChooseCategoryViewProps } from './model';
import history from '../../history';
import { Routes } from '../../routes';
import { useSelector, useDispatch } from 'react-redux';
import { IRootState } from '../../store';
import { MMTChangeQuestionCategory } from '../../store/actions/mmtQuestion';

export const MMTChooseCategory: React.FC = () => {
    const dispatch = useDispatch();
    const [fillBlanks, setFillBlanks] = useState<boolean>(false);
    const { grade, items_id } = useSelector((state: IRootState) => state.mmtQuestionState);

    const handleSubmit = (evt: React.FormEvent): void => {
        evt.preventDefault();
        if (grade === 0 || items_id === 0) {
            setFillBlanks(true);
            return;
        }
        history.push(Routes.question);
    }
    const handleChange = (evt: React.ChangeEvent<HTMLSelectElement | HTMLInputElement>): void => {
        const { name, value } = evt.target;
        const finalValue = parseInt(value, 10);
        dispatch(MMTChangeQuestionCategory(name, finalValue));
    }

    const stateProps: MMTChooseCategoryViewProps = {
        fillBlanks,
        grade,
        items_id,
        handleSubmit,
        handleChange,
    }

    return MMTChooseCategoryView(stateProps);
}
