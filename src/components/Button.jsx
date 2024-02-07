

function Button({ width = '80px', height = '30px', className, handler, mouseMove,mouseOut, children }) {
    return (

        <button
        id="btn"
            style={{ width: width, height: height,backgroundColor:'#dac3e8',color:'#6247aa'}}
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
