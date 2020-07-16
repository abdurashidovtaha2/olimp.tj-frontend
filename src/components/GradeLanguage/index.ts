import { GradeLanguageView } from "./GradeLanguageView";
import { GradeLanguageViewProps, GradeLanguageProps } from "./model";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { takeTestFieldChange, doTakeTest } from "../../store/actions/takeTest";
import { IRootState } from "../../store";

export const GradeLanguage: React.FC<GradeLanguageProps> = (props) => {
    const [oneLanguage, setOneLanguage] = useState<boolean>(false)
    const dispatch = useDispatch();
    const { grade, items_id } = useSelector((state: IRootState) => state.takeTestState);
    useEffect(() => {
        if (props.languages && props.languages.length <= 1 && typeof props.languages[0][1] === "number") {
            setOneLanguage(true);
            const name: string = "items_id";
            const value: number = props.languages[0][1];
            dispatch(takeTestFieldChange(name, value));
        }
    }, [props]);

    const handleSubmit = (): void => {
        if (!grade || !items_id) {
            alert("Илтимос маълумотро пур кунед");
            return;
        }
        dispatch(doTakeTest());
    }
    const handleChange = (evt: React.ChangeEvent<HTMLInputElement>): void => {
        const { name, value } = evt.target;
        const finalValue = parseInt(value, 10);
        dispatch(takeTestFieldChange(name, finalValue));
    }

    const stateProps: GradeLanguageViewProps = {
        languages: props.languages,
        grades: props.grades,
        oneLanguage,
        handleChange
    }

    return GradeLanguageView(stateProps);
}
