import React from 'react';
import { SectionsHeaderView } from './SectionsHeaderView';
import { SectionsHeaderViewProps, SectionsHeaderProps } from './model';
import history from '../../../history';

export const SectionsHeader: React.FC<SectionsHeaderProps> = (props) => {
    const handlePush = (): void => {
        history.push(props.lastPagePath);
    }

    const stateProps: SectionsHeaderViewProps = {
        currentPage: props.currentPage,
        lastPage: props.lastPage,
        handlePush
    }

    return SectionsHeaderView(stateProps)
}
