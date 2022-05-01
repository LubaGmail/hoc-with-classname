import React, { FC } from 'react'
import withClassName from './withClassName'

type Props = {
    className: string
}

const Small: FC<Props> = ({ className }) => {
    
    return (
        <>
            <div className={className}>
                <h5>Small</h5>
            </div>
        </>
    )
}

export default withClassName(Small)