import { MMTCreateQuestionView } from './MMTView';
import { MMTCreateQuestionViewProps } from './model';
import history from '../../history';
import { Routes } from '../../routes';

export const MMTCreateQuestion: React.FC = () => {
    const handleClick = (): void => {
        history.push(Routes.category);
    }

    const stateProps: MMTCreateQuestionViewProps = {
        handleClick
    }

    return MMTCreateQuestionView(stateProps);
}
