export interface LessonsProps {
    grades: Array<number>;
}

export interface LessonsViewProps {
    items: LessonItemState[];
    languages: Array<Array<string | number>> | null;
    isModal: boolean;
    grades: Array<number>;
    selectLesson : (id: number) => void;
}

export interface LessonViewProps {
    item: LessonItemState;
    selectLesson : (id: number) => void;
}
interface LessonItemState {
    id: number;
    imgUrl: string;
    lessonName: string;
    languages: Array<Array<string | number>>;
}
