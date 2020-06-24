import { MMTQuestionTypesView } from './MMTQuestionView';
import { useDispatch, useSelector } from 'react-redux';
import { MMTChangeQuestionCategory } from '../../store/actions/mmtQuestion';
import { IRootState } from '../../store';
import history from '../../history';
import { Routes } from '../../routes';
import { MMTQuestionTypesViewProps } from './model';

export const MMTQuestionTypes: React.FC = () => {
    const dispatch = useDispatch();
    const { grade, items_id } = useSelector((state: IRootState) => state.mmtQuestionState);

    if (grade === 0 || items_id === 0) {
        history.push(Routes.category);
    }

    const handleClick = (value: number): void => {
        const field: string = "test";
        dispatch(MMTChangeQuestionCategory(field, value));
    }

    const stateProps: MMTQuestionTypesViewProps = {
        handleClick
    }

    return MMTQuestionTypesView(stateProps);
}
