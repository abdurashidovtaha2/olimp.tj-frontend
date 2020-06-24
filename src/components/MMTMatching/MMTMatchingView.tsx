import React from 'react'
import { MMTMatchingViewProps } from './model'

export const MMTMatchingView: React.FC<MMTMatchingViewProps> = (props) => {
    return (
        <form>
            <p>Мазмуни савол</p>
            <textarea name="question" id="" cols={50} rows={2} onChange={props.handleChange}></textarea>
            <p>Ваё</p>
            <input type="file" name="question" id="" onChange={props.handleChangeFile}/>
            <p>Вариантхо:</p>
            <p>A)</p>
            <textarea name="a" id="" cols={50} rows={1} onChange={props.handleChange}></textarea>
            <p>Ваё</p>
            <input type="file" name="a" id="" onChange={props.handleChangeFile}/>
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
            <p>1)</p>
            <textarea name="one" id="" cols={50} rows={1} onChange={props.handleChange}></textarea>
            <p>Ваё</p>
            <input type="file" name="one" id="" onChange={props.handleChangeFile}/>
            <p>2)</p>
            <textarea name="two" id="" cols={50} rows={1} onChange={props.handleChange}></textarea>
            <p>Ваё</p>
            <input type="file" name="two" id="" onChange={props.handleChangeFile}/>
            <p>3)</p>
            <textarea name="three" id="" cols={50} rows={1} onChange={props.handleChange}></textarea>
            <p>Ваё</p>
            <input type="file" name="three" id="" onChange={props.handleChangeFile}/>
            <p>4)</p>
            <textarea name="four" id="" cols={50} rows={1} onChange={props.handleChange}></textarea>
            <p>Ваё</p>
            <input type="file" name="four" id="" onChange={props.handleChangeFile}/>
            <p>5)</p>
            <textarea name="five" id="" cols={50} rows={1} onChange={props.handleChange}></textarea>
            <p>Ваё</p>
            <input type="file" name="five" id="" onChange={props.handleChangeFile}/>
            <strong><p>Чавобхо:</p></strong>
            <p>A)</p>
            <textarea name="ans_A" id="" cols={50} rows={1} onChange={props.handleChange}></textarea>
            <p>Ваё</p>
            <input type="file" name="ans_A" id="" onChange={props.handleChangeFile}/>
            <p>B)</p>
            <textarea name="ans_B" id="" cols={50} rows={1} onChange={props.handleChange}></textarea>
            <p>Ваё</p>
            <input type="file" name="ans_B" id="" onChange={props.handleChangeFile}/>
            <p>C)</p>
            <textarea name="ans_C" id="" cols={50} rows={1} onChange={props.handleChange}></textarea>
            <p>Ваё</p>
            <input type="file" name="ans_C" id="" onChange={props.handleChangeFile}/>
            <p>D)</p>
            <textarea name="ans_D" id="" cols={50} rows={1} onChange={props.handleChange}></textarea>
            <p>Ваё</p>
            <input type="file" name="ans_D" id="" onChange={props.handleChangeFile}/>
            <br/>
        </form>
    )
}
