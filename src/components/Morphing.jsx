import React from 'react'

function Morphing({className}) {
    return (
        <div className={`div absolute bg-gradient-to-tr to-amber-400 from-purple-600 ps-96 blur-3xl rounded-full ${className}`}></div>
    )
}

export default Morphing
