import Header from "../components/Header"
import Morphing from "../components/Morphing"


function Home() {
    return (
        <>
            <main>
                <Header />
                <Morphing className={'ml-96 w-48 h-40 top-40 left-48 -z-10'}/>
                <div className="wrapper-home w-full h-screen  ps-80 text-center pt-40 z-40 top-2">
                    <h1 className="text-5xl">Hey,It's Ibrar Khan. <br />Full stck Developer</h1>
                    <p className="w-3/4 text-center m-auto pt-4">I'm a passionate full-stack web developer with a strong interest in technology and a focus on web development. I thrive on transforming ideas into interactive and user-friendly web applications. I'm actively learning and staying updated with the latest web technologies to deliver cutting-edge solutions. I'm open to collaborations on various web development projects, whether it's enhancing the client-side experience with sleek interfaces or diving into the server-side to make applications run smoothly. Let's build the web together!</p>
                </div>
            </main>
        </>
    )
}



export default Home
