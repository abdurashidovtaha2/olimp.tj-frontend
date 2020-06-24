import React from 'react'
import { MMTSubmitViewProps } from './model'

export const MMTSubmitView: React.FC<MMTSubmitViewProps> = (props) => {
    return (
        <>
            <button onClick={props.handleSubmit}>Саволро дохил кун</button>
        </>
    )
}
