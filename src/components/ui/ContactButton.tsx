import { useEffect } from 'react'

function ContactButton() {
    useEffect(() => {
        const btns = document.querySelectorAll('.magnetic-btn') as NodeListOf<HTMLDivElement>

        btns.forEach((btn) => {
            btn.addEventListener('mousemove', (e) => {
                const position = btn.getBoundingClientRect()
                const x = e.clientX - position.left - (position.width / 2)
                const y = e.clientY - position.top - (position.height / 2)
                const childElement = btn.children[0] as HTMLElement;


                childElement.style.transform = `translate(${x * 0.3}px, ${y * 0.3}px)`;
                childElement.style.transitionDuration = `0ms`;
            })
        })
        
        btns.forEach((btn: HTMLElement) => {
            btn.addEventListener('mouseleave', () => {
                const childElement = btn.children[0] as HTMLElement;
                childElement.style.transform = `translate(0px, 0px)`;
                childElement.style.transitionDuration = `300ms`;
            })
        }
        )

    }, [])

    return (
        <div
	className="magnetic-btn pointer-events-auto box-border rounded-full w-fit fixed -right-10 -top-10 z-40"
>
	<button
		className="border-2 m-20 p-4 text-sm font-bold border-accent hover:bg-accent text-accent hover:text-accentText hover:border-[#0000]"
		>CONTACT
	</button>
</div>
    )
}

export default ContactButton