
function parallax() {
    const parallaxObjects = document.querySelectorAll('.parallax') as NodeListOf<HTMLElement>
    window.addEventListener('scroll', () => {
        parallaxObjects.forEach(parallaxObject => {
            if(!parallaxObject.dataset.speed) return
            const speed = parallaxObject.dataset.speed
            const yPos = (window.scrollY / Number(speed))
            parallaxObject.style.transform = `translateY(${yPos}px)`
        })
    })
}

export default parallax