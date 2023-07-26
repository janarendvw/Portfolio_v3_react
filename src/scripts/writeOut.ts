
export default function writeOut() {

    const elements = document.querySelectorAll('.write-out');

    const options = {
        root: null,
        rootMargin: '0px',
        threshold: 1, // Adjust the threshold as needed
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                const target = entry.target as HTMLElement;
                const text = target.innerText;
                typeOutText(target, text); // Call the typing function with the target element and its text
                observer.unobserve(target); // Stop observing after the text is typed out
            }
        });
    }, options);

    elements.forEach((element) => {
        observer.observe(element);
    });
}

const typeOutText = (element: HTMLElement, text: string) => {
    const typingInterval = 30; // Adjust the typing speed as needed
    const cursorChar = '|';
  
    let index = 0;
    const isCursorVisible = true;
  
    const updateText = () => {
      element.textContent = text.slice(0, index) + (isCursorVisible ? cursorChar : '');
    };
  
    const typingTimer = setInterval(() => {
      index++;
      updateText();
  
      if (index > text.length) {
        clearInterval(typingTimer);
        element.textContent = text; // Display the complete text without the cursor
      }
    }, typingInterval);
  

};
