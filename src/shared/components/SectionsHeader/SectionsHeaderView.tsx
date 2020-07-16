import React from 'react';
import { SectionsHeaderViewProps } from './model';
import style from './index.module.css';

export const SectionsHeaderView: React.FC<SectionsHeaderViewProps> = (props) => {
    return (
        <div className={style.first}>
            <div className={style.sectionsHeader}>
                <p className={style.lastPage} onClick={props.handlePush}>{props.lastPage}</p>
                <p className={style.currentPage}>{props.currentPage}</p>
            </div>
        </div>
    )
}
