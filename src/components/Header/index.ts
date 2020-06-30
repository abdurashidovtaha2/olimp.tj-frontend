import { HeaderView } from './HeaderView';
import { useSelector } from 'react-redux';
import { IRootState } from '../../store';
import { HeaderViewProps } from './model';

export const Header: React.FC = () => {
    const { token } = useSelector((state: IRootState) => state.userState);
    const { username } = useSelector((state: IRootState) => state.userState.user);

    const stateProps: HeaderViewProps = {
        token,
        username
    }

    return HeaderView(stateProps);
}
