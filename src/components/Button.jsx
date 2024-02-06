

function Button({ width = '80px', height = '30px', className, handler, mouseMove,mouseOut, children }) {
    return (

        <button
            style={{ width: width, height: height }}
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
