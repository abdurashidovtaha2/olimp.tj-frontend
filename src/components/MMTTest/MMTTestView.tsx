import React from 'react'
import { MMTTestViewProps } from './model'

export const MMTTestView: React.FC<MMTTestViewProps> = (props) => {
    return (
        <form action="">
            <p>Мазмуни савол</p>
            <textarea name="question" id="" cols={50} rows={2} onChange={props.handleChange}></textarea>
            <p>Ваё</p>
            <input type="file" name="question" id="" onChange={props.handleChangeFile}/>
            <p>A)</p>
            <textarea name="a" id="" cols={50} rows={1} onChange={props.handleChange}></textarea>
            <p>Ваё</p>
            <input type="file" name="a" id=""  onChange={props.handleChangeFile}/>
            <p>B)</p>
            <textarea name="b" id="" cols={50} rows={1} onChange={props.handleChange}></textarea>
            <p>Ваё</p>
            <input type="file" name="b" id="" onChange={props.handleChangeFile}/>
            <p>C)</p>
            <textarea name="c" id="" cols={50} rows={1} onChange={props.handleChange}></textarea>
            <p>Ваё</p>
            <input type="file" name="c" id="" onChange={props.handleChangeFile}/>
            <p>D)</p>
            <textarea name="d" id="" cols={50} rows={1} onChange={props.handleChange}></textarea>
            <p>Ваё</p>
            <input type="file" name="d" id="" onChange={props.handleChangeFile}/>
            <strong><p>Чавоб:</p></strong>
            <textarea name="answer" id="" cols={50} rows={1} onChange={props.handleChange}></textarea>
            <p>Ваё</p>
            <input type="file" name="answer" id="" onChange={props.handleChangeFile}/>
            <br/>
        </form>
    )
}
