import { Link } from "react-router-dom"

function NavButtons() {
    return (
        <>
        <div className="flex">
            <div className="page-btn lg:w-20 lg:h-8 lg:mt-6 lg:ml-6 lg:p-1 rounded-md">
              <Link to={'/'}>All</Link>
            </div>
            <div className="page-btn lg:w-20 lg:h-8 lg:mt-6 lg:ml-6 lg:p-1 rounded-md ">
              <Link to={'/about'}>About</Link>
            </div>
            <div className="page-btn lg:w-20 lg:h-8 lg:mt-6 lg:ml-6 lg:p-1 rounded-md ">
              <Link>Projects</Link>
            </div>
          </div>
        </>
    )
}

export default NavButtons
