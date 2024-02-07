import React from 'react'

function GradientShadow({ className ,l}) {
    return (
        <div className={`w-40 h-20 bg-gradient-to-r from-slate-500 to-slate-100 absolute blur-3xl ${className}`}>
        </div>
    )
}

export default GradientShadow
