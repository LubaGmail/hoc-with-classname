import React, { FC} from 'react'
import withClassName from './withClassName'

type Props = {
    className: string
}

const Large: FC<Props> = ({ className }) => {

    return (
        <>
            <div className={className} 
            >
                <h1>Large</h1>
            </div>
        </>
    )
}

export default withClassName(Large)