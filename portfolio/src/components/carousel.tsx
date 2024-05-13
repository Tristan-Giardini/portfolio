'use client'

import { useEffect } from "react";
import Image from "next/image";
import { Splide, SplideSlide } from '@splidejs/react-splide';
import { AutoScroll } from "@splidejs/splide-extension-auto-scroll";
import '@splidejs/react-splide/css';

export default function Carousel() {

    return (
        <>
    <Splide aria-label="my images" options={{
              type: 'loop',
              drag: 'free',
              arrows: false,
              pagination: false,
              perPage: 4,
              autoScroll: {
                pauseOnHover: false,
                pauseOnFocus: false,
                rewind: false,
                speed: 2,
              }
            }}
            extensions={{AutoScroll}}
    >
      <SplideSlide>
        <Image src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-plain.svg" alt="Slide 1" width="150" height="150"></Image>
      </SplideSlide>
      <SplideSlide>
        <Image src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/express/express-original.svg" alt="Slide 2" width="150" height="150"></Image>
      </SplideSlide>
      <SplideSlide>
        <Image src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg" alt="Slide 3" width="150" height="150"></Image>
      </SplideSlide>
      <SplideSlide>
        <Image src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/heroku/heroku-plain.svg" alt="Slide 3" width="150" height="150"></Image>
      </SplideSlide>
      <SplideSlide>
        <Image src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-plain.svg" alt="Slide 3" width="150" height="150"></Image>
      </SplideSlide>
      <SplideSlide>
        <Image src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-plain.svg" alt="Slide 3" width="150" height="150"></Image>
      </SplideSlide>
      <SplideSlide>
        <Image src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-plain-wordmark.svg" alt="Slide 3" width="150" height="150"></Image>
      </SplideSlide>
      <SplideSlide>
        <Image src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-plain.svg" alt="Slide 3" width="150" height="150"></Image>
      </SplideSlide>
      <SplideSlide>
        <Image src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-plain-wordmark.svg" alt="Slide 3" width="150" height="150"></Image>
      </SplideSlide>
      <SplideSlide>
        <Image src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original-wordmark.svg" alt="Slide 3" width="150" height="150"></Image>
      </SplideSlide>
      <SplideSlide>
        <Image src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/webflow/webflow-original.svg" alt="Slide 3" width="150" height="150"></Image>
      </SplideSlide>
    </Splide>
        </>
    )
} 