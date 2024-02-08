import React, { Children } from 'react'
import Hero from './Hero'

function Lyout({children}) {
    return (
        <div className='flex'>
            <div><Hero/></div>
            {children}
        </div>
    )
}

export default Lyout
