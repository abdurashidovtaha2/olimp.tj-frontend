import React from 'react';
import { MMTCreateQuestionViewProps } from './model';

export const MMTCreateQuestionView: React.FC<MMTCreateQuestionViewProps> = (props) => {
    return (
        <div>
            <button onClick={props.handleClick}>Савол сохтан</button>
        </div>
    )
}
