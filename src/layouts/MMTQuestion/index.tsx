import React from 'react'
import { MMTQuestionTypes } from '../../components/MMTQuestionTypes'
import { Route, Redirect } from 'react-router-dom'
import { Routes } from '../../routes'
import { MMTTest } from '../../components/MMTTest'
import { MMTStraight } from '../../components/MMTStraight'
import { MMTMatching } from '../../components/MMTMatching'
import { MMTFilling } from '../../components/MMTFilling'
import { MMTSubmit } from '../../components/MMTSubmit'
import { useSelector } from 'react-redux'
import { IRootState } from '../../store'
import { LoaderView } from '../../components/Loader/LoaderView'

const MMTQuestion: React.FC = () => {
    const { loading } = useSelector((state: IRootState) => state.mmtQuestionState);
    const { admin } = useSelector((state: IRootState) => state.userState.user);

    if (!admin) {
        return (
            <Redirect to={Routes.root} />
        )
    }

    if (loading) {
        return (
            <div>
                <MMTQuestionTypes />
                <LoaderView />
            </div>
        )
    }

    return (
        <div>
            <MMTQuestionTypes />
            <hr />
            <Route exact path={Routes.test} component={MMTTest} />
            <Route exact path={Routes.straightQues} component={MMTStraight} />
            <Route exact path={Routes.matching} component={MMTMatching} />
            <Route exact path={Routes.filling} component={MMTFilling} />
            <MMTSubmit />
        </div>
    )
}

export default MMTQuestion
