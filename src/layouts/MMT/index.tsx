import React from 'react'
import { MMTCreateQuestion } from '../../components/MMTCreateQuestion'
import { useSelector } from 'react-redux'
import { IRootState } from '../../store'
import { Redirect } from 'react-router-dom'
import { Routes } from '../../routes'

const MMT: React.FC = () => {
    const { token } = useSelector((state: IRootState) => state.userState);
    const { admin } = useSelector((state: IRootState) => state.userState.user);

    if (!token) {
        return (
            <Redirect to={Routes.root} />
        )
    }

    return (
        <div>
            {admin ? <MMTCreateQuestion /> : null}
        </div>
    )
}

export default MMT
