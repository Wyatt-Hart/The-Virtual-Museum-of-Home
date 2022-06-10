import Def from './default'
const React = require('react')

export default function Exhibit () {
    /* Carousel */
    const items = document.querySelector(".carousel-items");
    const dots = document.querySelectorAll(".dot");
    const prev = document.querySelector(".prev");
    const next = document.querySelector(".next");
    const total = items.children.length - 1;
    const active = "active";
    let current = 0;

    const setActiveDot = () => {
        dots.forEach((button, i) => {
        i === current
            ? button.classList.add(active)
            : button.classList.remove(active);
        });
    };

    const scrollToCurrent = () => {
        items.style.transform = `translateX(${current * -100}%`;
        setActiveDot();
    };

    const scrollPrev = () => {
        if (current === 0) return;
        current--;
        scrollToCurrent();
    };

    const scrollNext = () => {
        if (current === total) return;
        current++;
        scrollToCurrent();
    };

    prev.addEventListener("click", scrollPrev);
    next.addEventListener("click", scrollNext);

    return (
        <Def>

            <div class="exhibit">
                <h2 class="exhibit-title">Abraham Lincoln</h2>

                <div class="carousel-viewport">

                    <ul class="carousel-items">

                        <li class="carousel-item">
                            <img src={require('../images/lentries/Abraham_Lincoln1.jpg')} alt=''/>
                        </li>
                        <li class="carousel-item">
                            <img src={require('../images/lentries/Abraham_Lincoln2.jpg')} alt=''/>
                        </li>
                        <li class="carousel-item">
                            <img src={require('../images/lentries/Abraham_Lincoln3.gif')} alt=''/>
                        </li>
                        <li class="carousel-item">
                            <img src={require('../images/lentries/Abraham_Lincoln4.jpg')} alt=''/>
                        </li>

                    </ul>
                </div>

                <button class="carousel-control prev" title="Go to previous item">

                    <svg viewBox="0 0 256 512">
                    <path d="M31.7 239l136-136c9.4-9.4 24.6-9.4 33.9 0l22.6 22.6c9.4 9.4 9.4 24.6 0 33.9L127.9 256l96.4 96.4c9.4 9.4 9.4 24.6 0 33.9L201.7 409c-9.4 9.4-24.6 9.4-33.9 0l-136-136c-9.5-9.4-9.5-24.6-.1-34z" />
                    </svg>

                </button>

                <button class="carousel-control next" title="Go to next item">

                    <svg viewBox="0 0 256 512">
                    <path d="M224.3 273l-136 136c-9.4 9.4-24.6 9.4-33.9 0l-22.6-22.6c-9.4-9.4-9.4-24.6 0-33.9l96.4-96.4-96.4-96.4c-9.4-9.4-9.4-24.6 0-33.9L54.3 103c9.4-9.4 24.6-9.4 33.9 0l136 136c9.5 9.4 9.5 24.6.1 34z" />
                    </svg>

                </button>

                <ol class="carousel-dots">

                    <li class="dot active">1</li>
                    <li class="dot">2</li>
                    <li class="dot">3</li>
                    <li class="dot">4</li>

                </ol>

            </div>

        </Def>
    )

}