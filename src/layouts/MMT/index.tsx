import React from 'react';
import { MMTCreateQuestion } from '../../components/MMTCreateQuestion';
import { useSelector } from 'react-redux';
import { IRootState } from '../../store';
import { SectionsHeader } from '../../shared/components/SectionsHeader';
import { Lessons } from '../../components/Lessons';
import { Route } from 'react-router-dom';
import { Routes } from '../../routes';
import MMTQuestion from '../MMTQuestion';
import { MMTChooseCategory } from '../../components/MMTChooseCategory';

const MMT: React.FC = () => {
    const { token } = useSelector((state: IRootState) => state.userState);
    const { admin } = useSelector((state: IRootState) => state.userState.user);
    const MMTGrades = [9, 11];

    if (!token) {
        return (
            <p>Илтимос ба аккаунти худ дароед</p>
        )
    }

    return (
        <div>
            <SectionsHeader lastPage="САҲИФАИ АВВАЛ" currentPage="МАРКАЗИ МИЛЛИИ ТЕСТӢ" lastPagePath={Routes.root}/>
            {admin ? <Route exact path={Routes.mmt} component={MMTCreateQuestion}/> : null}
            {admin ? <Route exact path={Routes.category} component={MMTChooseCategory} />: null}
            {admin ? <Route path={Routes.question} component={MMTQuestion} />: null}
            <Route path={Routes.mmt} render={() => <Lessons grades={MMTGrades} />} />
        </div>
    )
}

export default MMT
