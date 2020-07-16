import React from 'react';
import { GradeLanguageViewProps } from './model';

export const GradeLanguageView: React.FC<GradeLanguageViewProps> = (props) => {
    return (
        <div>
            <p>Ба ақиб</p>
            <p>Лутфан синфатонро муайян кунед</p>
            {props.grades.map((o, i) =>
                <div key={i}>
                    <input type="radio" value={o} name="grade" onChange={props.handleChange} />
                    <p>{o}</p>
                </div>
            )}
            <p>Бо кадом забон мехоҳед имтиҳонро супоред</p>
            {props.languages && !props.oneLanguage ?
                props.languages.map((o, i) =>
                    <div key={i}>
                        <input type="radio" value={o[1]} name="items_id" onChange={props.handleChange} />
                        <p>{o[0]}</p>
                    </div>
                )
                :
                null
            }
            <button>Ба имтиҳон!</button>
        </div>
    )
}
