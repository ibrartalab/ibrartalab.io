import Header from "../components/Header"


function Home() {
    return (
        <>
            <main>
                <Header />
                <div className="hero w-full relative "
                >
                    <div className="profile lg:w-60 lg:h-80 rounded-t-full bg-lime-400 m-auto ">
                        <div className="pt-4 m-auto">
                            <img src="/src/assets/ib.png" alt="" className="w-96  h-full object-cover" />
                        </div>
                        <div className="heading  lg:w-600 lg:absolute lg:left-96 lg:top-60 text-center">
                            <h1 className="lg:text-6xl lg:w-full ">Hey, It's Ibrar Khan. <br />Full stack Developer</h1>
                            <p className="">I've working as a full stack developer for 1 year. <br /> I am based on Pakistan.</p>
                        </div>
                    </div>
                   
                    {/* <div className="heading m-auto lg:w-full lg:ps-96 ">
                        <h1 className="lg:text-6xl lg:w-full lg:m-auto">Hey, It's Ibrar Khan. <br />Full stack Developer</h1>
                        <p className="">I've working as a full stack developer for 1 year. <br /> I am based on Pakistan.</p>
                    </div> */}
                </div>
            </main>
        </>
    )
}



export default Home
