import { NavbarView } from './NavbarView';
import { NavbarViewProps } from './model';
import history from '../../history';
import { Routes } from '../../routes';

export const Navbar = () => {
    const linkMMT = (): void => {
        history.push(Routes.mmt);
    }

    const stateProps: NavbarViewProps = {
        linkMMT
    }


    return NavbarView(stateProps);
}
