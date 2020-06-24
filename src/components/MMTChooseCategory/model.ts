import { FormEvent, ChangeEvent } from "react";

export interface MMTChooseCategoryViewProps {
    fillBlanks: boolean;
    grade: number;
    items_id: number;
    handleSubmit: (evt: FormEvent) => void;
    handleChange: (evt: ChangeEvent<HTMLSelectElement | HTMLInputElement>) => void;
}