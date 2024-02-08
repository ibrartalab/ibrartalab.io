
import Hero from './Hero'
import NavButtons from '../NavButtons'

function Lyout({ children }) {
    return (
        <div className='flex'>
            <div style={{ height: '100dvh', color: 'black'}} className='bg-white'><Hero /></div>
            <div className='lg:w-full'>
                <NavButtons />
                <div className='border-t-2 mt-6'>{children}</div>
            </div>
        </div>
    )
}

export default Lyout
