import React, { FC, useEffect } from 'react'
import withClassName from './withClassName'

type Props = {
    className: string
}

const Medium: FC<Props> = ({ className }) => {
    
    return (
        <>
            <div className={className} >
                <h3>Medium</h3>
            </div>
        </>
    )
}

export default withClassName(Medium)