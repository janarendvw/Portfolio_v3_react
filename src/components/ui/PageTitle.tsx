import { useEffect } from 'react'

type Props = {
    title: string
}

function PageTitle({ title }: Props) {

    useEffect(() => {
    const elements = document.querySelectorAll('.slide-on-scroll') as NodeListOf<HTMLElement>;
    window.addEventListener('scroll', () => {
        const scrolled = window.scrollY;
        const rate = scrolled * -0.5;
        elements.forEach((element) => {
            element.style.transform = `translateX(${rate * 2}px)`;
            element.style.opacity = `${1 - scrolled / 1000}`;
        });
    });
}, []);

    return (

            <h1
                className="bg-blue text-[15vw] text-text m-auto inline text-center leading-none page-title"
            >
                {title}
            </h1>


    )
}

export default PageTitle