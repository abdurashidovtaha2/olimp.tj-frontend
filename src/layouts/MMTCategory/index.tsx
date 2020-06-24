import React from 'react'
import { MMTChooseCategory } from '../../components/MMTChooseCategory'
import { useSelector } from 'react-redux'
import { IRootState } from '../../store'
import { Redirect } from 'react-router-dom'
import { Routes } from '../../routes'

const MMTCategory: React.FC = () => {
    const { admin } = useSelector((state: IRootState) => state.userState.user);

    if (!admin) {
        return (
            <Redirect to={Routes.root} />
        )
    }

    return (
        <div>
            <MMTChooseCategory />
        </div>
    )
}

export default MMTCategory
