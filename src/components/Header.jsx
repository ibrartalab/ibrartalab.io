import { Link } from 'react-router-dom'
import Button from './Button'
import { MdFavorite } from "react-icons/md";
import Morphing from './Morphing';

function Header() {
    return (
        <>
        
        <aside className='lg:w-60 lg:h-screen bg-white fixed drop-shadow-2xl z-40'>
        {/* <Morphing className={' w-8 h-40 top-4  -z-10'}/> */}
            <div className="wrapper">
                <div className="profile bg-slate-100 m-auto mt-4 rounded-full lg:w-40">
                    <img src="/src/assets/ib.png" alt="profile" className='object-cover w-full h-full rounded-full ' />
                </div>
                <hr className='w-40 m-auto border-slate-300 mt-8' />
                <div className="nav mt-14 ">
                    <ul className='flex flex-col justify-center items-center text-center gap-4'>
                        <li><Link>Home</Link></li>
                        <li><Link>Projects</Link></li>
                        <li><Link>Contact</Link></li>
                    </ul>
                </div>
                <div className="connect"></div>
            </div>
        </aside>
        <div className="top-bar w-full h-14 border-b  flex justify-end items-center gap-8 pe-14 fixed">
            <MdFavorite className='text-3xl'/>
            <Button className={'bg-amber-500 w-32 h-10'}>Hire Me</Button>
        </div>
        </>
    )
}


function HumburgerIcon() {
    return (
        <div className={`outer w-10 h-14  rounded-full pt-5 ps-2 flex flex-col flex-nowrap gap-2 `}
            style={{ backgroundColor: '#1e1e1e' }}
        >
            <div className='w-6 h-0.5 bg-white'></div>
            <div className='w-4 h-0.5  bg-white'></div>

        </div>

    )
}


export default Header
