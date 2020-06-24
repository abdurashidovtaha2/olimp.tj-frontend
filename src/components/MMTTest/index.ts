import React from 'react';
import { MMTTestView } from './MMTTestView';
import { MMTTestViewProps } from './model';
import { fileUrl } from '../../shared/api';
import { useDispatch, useSelector } from 'react-redux';
import { MMTChangeQuestion } from '../../store/actions/mmtQuestion';
import { IRootState } from '../../store';

export const MMTTest: React.FC = () => {
    const { token } = useSelector((state: IRootState) => state.userState);
    const dispatch = useDispatch();
    let file: any = null;

    const handleChangeFile = async (evt: React.ChangeEvent<HTMLInputElement>) => {
        const { name } = evt.target;
        const formData = new FormData();
        //@ts-ignore
        file = evt.currentTarget.files['0'];
        formData.append("file", file);
        const body = JSON.stringify(file);
        try {
            const response = await fetch(`${fileUrl}/save`, {
                method: "POST",
                headers: {
                    'Content-Type': 'multipart/form-Data',
                    'Authorization': `Bearer ${token}`
                },
                body
            });
            const answer = await response.json();
            console.log(answer);
            if (answer.code !== 200) {
                throw new Error("error occured");
            }
            const mediaName: string = await answer;
            dispatch(MMTChangeQuestion(name, `${fileUrl}/media/${mediaName}`));
        } catch (error) {
            alert("error in adding file");
        }
    }
    const handleChange = (evt: React.ChangeEvent<HTMLTextAreaElement>): void => {
        const { name, value } = evt.target;
        dispatch(MMTChangeQuestion(name, value));
    }

    const stateProps: MMTTestViewProps = {
        handleChangeFile,
        handleChange
    }

    return MMTTestView(stateProps)
}
