import { Link } from "react-router-dom";

function NavBar() {

    const sweepBg = document.querySelector('.sweep-bg') as HTMLElement;
    const handleNavScroll = () => {
        const percentageScrolled = window.scrollY / (document.body.scrollHeight - window.innerHeight);
        sweepBg.style.background = `conic-gradient(#fff ${percentageScrolled * 360}deg, #00000000 0deg)`;
    }

    window.addEventListener('scroll', handleNavScroll);

    return (<>
        <nav className="main-nav fixed sweep-bg p-px inline-flex gap-4 items-center top-20 right-1/2 translate-x-1/2 z-20">
            <div className=" bg-background backdrop-blur-lg text-text p-4 flex gap-4 shadow-md">
                <Link to="/">home</Link>/
                <Link to="/about">about</Link>/
                <Link to="/projects">projects</Link>
            </div>
        </nav>
    </>
    )
}

export default NavBar