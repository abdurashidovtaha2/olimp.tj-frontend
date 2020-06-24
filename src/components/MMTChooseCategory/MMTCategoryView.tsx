import React from 'react'
import { MMTChooseCategoryViewProps } from './model'

export const MMTChooseCategoryView: React.FC<MMTChooseCategoryViewProps> = (props) => {
    return (
        <div>
            <label htmlFor="mmtCategory">Choose the question category</label>
            <form id="mmtCategory" onSubmit={props.handleSubmit}>
                <p>Which component</p>
                <input type="radio" id="a" value={11} name="grade" onChange={props.handleChange} 
                    checked={props.grade === 11}/>
                <label htmlFor="a">A</label>
                <input type="radio" id="b" value={9} name="grade" onChange={props.handleChange}
                    checked={props.grade === 9} />
                <label htmlFor="b">B</label>
                <br />
                <select name="items_id" id="lesson"
                        onChange={props.handleChange} 
                        value={props.items_id === 0 ? 'default' : props.items_id}>
                    <option value="default" disabled>Дарсро интихоб намоед</option>
                    <option value={1}>Математика</option>
                    <option value={2}>Химия</option>
                    <option value={3}>Физика</option>
                    <option value={4}>Забони тоҷикӣ</option>
                    <option value={5}>География</option>
                    <option value={6}>Забони англисӣ</option>
                    <option value={7}>Таърих</option>
                    <option value={8}>Ҳуқуқ</option>
                    <option value={9}>Биология</option>
                    <option value={10}>Адабиёти тоҷик</option>
                    <option value={11}>Забон ва адабиёти рус</option>
                    <option value={12}>Математика(Русӣ)</option>
                    <option value={13}>Химия(Русӣ)</option>
                    <option value={14}>Физика(Русӣ)</option>
                    <option value={15}>География(Русӣ)</option>
                    <option value={16}>Таърих(Русӣ)</option>
                    <option value={17}>Ҳуқуқ(Русӣ)</option>
                    <option value={18}>Биология(Русӣ)</option>
                </select>
                <br />
                <button>Create the question</button>
            </form>
            {props.fillBlanks ? <div>ҷойхои нопурраро пур кунед</div> : null}
        </div>
    )
}
