import React, { useEffect } from "react";

function Icon() {

    useEffect(() => {
        const star = document.getElementById('star') as HTMLElement;
        if (!star) return;
        window.addEventListener('scroll', () => {
            const scrollProgress = window.scrollY / (document.body.scrollHeight - window.innerHeight);
            star.style.transform = `rotate(${scrollProgress * 360}deg)`;
        });
    }, []);

  return (
    <svg
    id="star"
    className="fixed w-10 h-10 right-5 bottom-5 z-40"
      xmlns="http://www.w3.org/2000/svg"
      x="0"
      y="0"
      version="1.1"
      viewBox="0 0 600 600"
      xmlSpace="preserve"
    >
      <path
        d="M299 557.3c-2.7-.4-5.5-.7-8.2-1.2-17.8-3.7-28.4-15.2-34-32-3.6-10.9-3.9-22.1-3.4-33.4.9-23.3 6.1-45.7 13.2-67.8 4.8-15 9.9-29.8 14.4-44.9 4.6-15.8 6.6-32.1 7.6-48.5.1-2.4.3-4.9.5-7.8-1.8 1.2-3.2 2.1-4.5 3-15.6 10.2-30.4 21.5-43.3 35.2-10.3 11-20.2 22.5-30.4 33.6-17.2 18.9-36.2 35.7-58.5 48.4-10.7 6-21.9 10.2-34.3 10.1-19.7-.2-33.2-10.3-41.2-27.8-8.1-17.6-4.6-33.8 7.5-48.4 8.1-9.8 18.8-16.2 30-21.9 20.9-10.8 43.2-17.2 66.1-22.2 16.9-3.7 33.9-7.2 50.7-11.6 15.7-4.1 30.3-11.3 44.8-18.6.2-.1.4-.3.8-.6-.8-.5-1.4-.9-2.1-1.2-24.5-12.8-50.5-21.3-77.8-26.2-19.7-3.5-39.1-7.9-58-14.8-14.4-5.3-28.3-11.5-40.9-20.3-10.4-7.2-18.9-16.2-23-28.4-5.7-16.7-1.2-31.6 9.5-44.7 10.8-13.1 25.1-17.2 41.5-14.9 12.5 1.8 23.5 7.5 34 14.1 19.7 12.4 36.5 28 52 45.1 11 12.1 21.8 24.5 33.1 36.3 12.6 13.2 27.5 23.6 42.7 33.6.2.1.4.2 1 .4-.1-1.6-.2-2.9-.3-4.3-1-29.9-8.7-58.3-18.7-86.3-6.1-17-11.1-34.4-13.9-52.3-2.4-15.4-4-30.8-2.1-46.3 1.7-13.8 6.5-26.2 17.3-35.6 8.6-7.5 18.9-10.4 30.2-10.3 12.1.1 22.8 3.7 31.5 12.4 7.7 7.6 11.9 17.1 14 27.6 2.6 12.4 1.9 25 .8 37.5-2.3 26.2-10.2 51-18.7 75.6-5.2 15.1-10.2 30.3-12.5 46.2-1.7 11.8-2.8 23.6-4.1 35.4.2.1.5.2.7.4.8-.5 1.5-1 2.3-1.5 24-15.1 44.4-34.1 62.7-55.7 13.1-15.5 27-30.4 42.9-43.2 11.5-9.3 23.5-17.8 37-23.9 9.5-4.3 19.5-6.7 30-5.7 14.8 1.4 25.8 8.7 33.6 21.2 12.3 19.7 9.6 41.3-6.8 58-9.2 9.4-20.6 15.6-32.2 21.3-20.9 10.1-43.1 16-65.6 20.7-16.6 3.4-33.3 6.3-49.4 11.5-14.3 4.6-27.8 10.9-41.2 17.5-.3.2-.6.4-1.3.8 1.5.7 2.7 1.3 3.8 1.9 24 12.6 49.6 20.6 76.3 25.4 19.6 3.6 39.2 7.9 58 14.8 15 5.6 29.6 12.1 42.6 21.6 10 7.3 17.9 16.3 21.6 28.3 5 16.1.7 30.4-9.6 43-11.7 14.4-27.2 18.2-44.8 14.9-12.8-2.4-23.9-8.8-34.6-15.9-18.3-12-34-26.8-48.6-42.9-11.1-12.2-21.9-24.6-33.3-36.5-12.5-13-27.3-23.4-42.4-33.2-.2-.2-.5-.2-1.1-.5.3 3.7.6 7.1.7 10.5 1.3 27.2 8.7 53 17.7 78.5 6.2 17.6 11.5 35.4 14.5 53.8 2.5 15.4 4 30.8 2.2 46.3-1.3 11.5-5 22.1-12.7 31-7.8 9.1-17.8 13.7-29.7 14.7-.9.1-1.8.3-2.8.5-1.2.2-2.5.2-3.8.2z"
        className="fill-white"
      ></path>
    </svg>
  );
}

export default Icon;
