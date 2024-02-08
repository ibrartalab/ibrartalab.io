
import Hero from './Hero'
import NavButtons from '../NavButtons'

function Lyout({children}) {
    return (
        <div className='flex'>
            <div style={{height:'100vh'}} className=''><Hero/></div>
            <div>
            <NavButtons/>
            <div>{children}</div>
            </div>
        </div>
    )
}

export default Lyout
