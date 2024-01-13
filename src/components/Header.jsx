import { Link } from 'react-router-dom'
import Button from './Button'

function Header() {
    return (
        <div className="header lg:h-20 lg:flex flex-nowrap lg:justify-between lg:text-center lg:items-center ">
            <div className="left lg:flex flex-nowrap lg:gap-4 lg:p-10 lg:text-center">
                <HumburgerIcon />
                <h1 className='pt-2'>ibrar <br /> Khan.</h1>
                {/* <ul className='flex gap-4'>
                <li><Link>Home</Link></li>
                <li><Link>Projects</Link></li>
                <li><Link>Contact</Link></li>
            </ul> */}
            </div>
            <div className="right lg:pe-14">
                <Button className={'lg:w-40 lg:h-10 text-black  bg-yellow-300'}>Hire Me</Button>
            </div>

        </div>
    )
}


function HumburgerIcon() {
    return (
        <div className={`outer w-10 h-14  rounded-full pt-5 ps-2 flex flex-col flex-nowrap gap-2 `}
        style={{backgroundColor:'#1e1e1e'}}
        >
            <div className='w-6 h-0.5 bg-white'></div>
            <div className='w-4 h-0.5  bg-white'></div>

        </div>

    )
}


export default Header
