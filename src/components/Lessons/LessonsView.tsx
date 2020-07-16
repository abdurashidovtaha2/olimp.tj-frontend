import React from 'react';
import { LessonsViewProps } from './model';
import { LessonView } from './Lesson/LessonView';
import style from './index.module.css';
import { Modal } from '../../shared/components/Modal';
import { GradeLanguage } from '../GradeLanguage';

export const LessonsView: React.FC<LessonsViewProps> = (props) => {
    return (
        <>
            <Modal isModal={props.isModal}>
                <GradeLanguage languages={props.languages} grades={props.grades}/>
            </Modal>
            <div className={style.lessons}>
                {props.items.map(o => <LessonView key={o.id} item={o} selectLesson={props.selectLesson}/>)}
            </div>
        </>
    )
}
