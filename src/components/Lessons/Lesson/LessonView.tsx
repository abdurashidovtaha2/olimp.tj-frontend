import React from 'react';
import { LessonViewProps } from '../model';
import style from './index.module.css';

export const LessonView: React.FC<LessonViewProps> = (props) => {
    return (
        <div className={style.lessonBlock}>
            <div className={style.lesson} onClick={() => props.selectLesson(props.item.id)}>
                <img src={`../${props.item.imgUrl}`} className={style.lessonImg} alt="" />
                <p>{props.item.lessonName}</p>
            </div>
        </div>
    )
}
