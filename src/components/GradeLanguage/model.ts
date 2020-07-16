export interface GradeLanguageProps {
    languages?: Array<Array<string | number>> | null;
    grades: Array<number>;
}

export interface GradeLanguageViewProps {
    languages?: Array<Array<string | number>> | null;
    grades: Array<number>;
    oneLanguage: boolean;
    handleChange: (evt: React.ChangeEvent<HTMLInputElement>) => void;
}
