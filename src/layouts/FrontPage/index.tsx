import React from 'react';
import { useSelector } from 'react-redux';
import { IRootState } from '../../store';
import { Navbar } from '../../components/Navbar';
import { Auth } from '../../components/Auth';

const FrontPage: React.FC = () => {
    const { token } = useSelector((state: IRootState) => state.userState);
    
    return (
        <>
            <Navbar />
            {!token ? <Auth /> : null}
        </>
    )
}

export default FrontPage
