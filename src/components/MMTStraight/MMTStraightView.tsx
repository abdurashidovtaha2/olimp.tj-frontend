import React from 'react'
import { MMTStraightViewProps } from './model'

export const MMTStraightView: React.FC<MMTStraightViewProps> = (props) => {
    return (
        <form>
            <p>Мазмуни савол</p>
            <textarea name="question" id="" cols={50} rows={2} onChange={props.handleChange}></textarea>
            <p>Ваё</p>
            <input type="file" name="question" id="" onChange={props.handleChangeFile}/>
            <strong><p>Чавоб:</p></strong>
            <textarea name="answer" id="" cols={50} rows={1} onChange={props.handleChange}></textarea>
            <p>Ваё</p>
            <input type="file" name="answer" id="" onChange={props.handleChangeFile}/>
            <br/>
        </form>
    )
}
