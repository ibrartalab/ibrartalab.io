

function Button({className, handler, mouseMove,mouseOut, children }) {
    return (

        <button
        id="btn"
            style={{backgroundColor:'black',color:'white'}}
            className={className}
            onClick={handler}
            onMouseOver={mouseMove}
            onMouseOut={mouseOut}
        >
            {children}
        </button>

    )
}

export default Button
