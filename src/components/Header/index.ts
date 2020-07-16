import { HeaderView } from './HeaderView';
import { useSelector, useDispatch } from 'react-redux';
import { IRootState } from '../../store';
import { HeaderViewProps, HeaderProps } from './model';
import history from '../../history';
import { doLogOut } from '../../store/actions/user';

export const Header: React.FC<HeaderProps> = (props) => {
    const dispatch = useDispatch();
    const { token } = useSelector((state: IRootState) => state.userState);
    const { username } = useSelector((state: IRootState) => state.userState.user);

    const handlePush = (path: string): void => {
        history.push(path);
    }
    const triggerModal = (value: string | null): void => {
        props.triggerModal(value);
    }
    const handleLogOut = (): void => {
        dispatch(doLogOut());
    }

    const stateProps: HeaderViewProps = {
        token,
        username,
        handlePush,
        handleLogOut,
        triggerModal
    }

    return HeaderView(stateProps);
}
