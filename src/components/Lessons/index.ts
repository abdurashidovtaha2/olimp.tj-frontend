import { LessonsView } from './LessonsView';
import tajikLiterature from '../../shared/images/tajikLiterature-min.png';
import math from '../../shared/images/math-min.png';
import biology from '../../shared/images/biology-min.png';
import chemistry from '../../shared/images/chemistry-min.png';
import tajik from '../../shared/images/tajik-min.png';
import physics from '../../shared/images/physics-min.png';
import geography from '../../shared/images/geography-min.png';
import russian from '../../shared/images/russian-min.png';
import law from '../../shared/images/law-min.png';
import history from '../../shared/images/history-min.png';
import foreign from '../../shared/images/foreign-min.png';
import { LessonsViewProps, LessonsProps } from './model';
import { useState, useEffect } from 'react';

export const Lessons: React.FC<LessonsProps> = (props) => {
    const [selectedLesson, setSelectedLesson] = useState<null | number>(null);
    const [languages, setLanguages] = useState<null | Array<Array<string | number>>>(null);
    const [isModal, setIsModal] = useState<boolean>(false);
    const items = [
        {
            id: 1,
            imgUrl: tajikLiterature,
            lessonName: "Забон ва адабиёти тоҷик",
            languages: [
                ['Тоҷикӣ', 10]
            ]
        },
        {
            id: 2,
            imgUrl: math,
            lessonName: "Математика",
            languages: [
                ['Тоҷикӣ', 1], ['Русӣ', 12]
            ]
        },
        {
            id: 3,
            imgUrl: biology,
            lessonName: "Биология",
            languages: [
                ['Тоҷикӣ', 9], ['Русӣ', 18]
            ]
        },
        {
            id: 4,
            imgUrl: chemistry,
            lessonName: "Химия",
            languages: [
                ['Тоҷикӣ', 2], ['Русӣ', 13]
            ]
        },
        {
            id: 5,
            imgUrl: tajik,
            lessonName: "Забон тоҷикӣ",
            languages: [
                ['Тоҷикӣ', 4]
            ]
        },
        {
            id: 6,
            imgUrl: physics,
            lessonName: "Физика",
            languages: [
                ['Тоҷикӣ', 3], ['Русӣ', 14]
            ]
        },
        {
            id: 7,
            imgUrl: geography,
            lessonName: "География",
            languages: [
                ['Тоҷикӣ', 5], ['Русӣ', 15]
            ]
        },
        {
            id: 8,
            imgUrl: russian,
            lessonName: "Забон ва адабиёти рус",
            languages: [
                ['Русӣ', 11]
            ]
        },
        {
            id: 9,
            imgUrl: law,
            lessonName: "Асосҳои давлат ва ҳуқуқ",
            languages: [
                ['Тоҷикӣ', 8], ['Русӣ', 17]
            ]
        },
        {
            id: 10,
            imgUrl: history,
            lessonName: "Таърих",
            languages: [
                ['Тоҷикӣ', 7], ['Русӣ', 16]
            ]
        },
        {
            id: 11,
            imgUrl: foreign,
            lessonName: "Забонҳои хориҷӣ",
            languages: [
                ['Англисӣ', 6]
            ]
        }
    ];
    useEffect(() => {
        if (selectedLesson) {
            setLanguages(items[selectedLesson-1].languages);
            setIsModal(true);
        }
    }, [selectedLesson])

    const selectLesson = (id: number): void => {
        setSelectedLesson(id);
    }
    const stateProps: LessonsViewProps = {
        items,
        languages,
        isModal,
        grades: props.grades,
        selectLesson
    }

    return LessonsView(stateProps);
}
