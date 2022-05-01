import React, { useEffect, useState } from 'react'
import '../App.css';

const withClassName = (Component: any) => (props: any) => {
    const [className, setClassName] = useState('')

    useEffect(() => {
       setClassName('bright') 
    }, [])

    return <Component {...props} className={className} />
}

export default withClassName