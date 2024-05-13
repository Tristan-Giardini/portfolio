'use client'

import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { ReactNode, useEffect, useRef } from "react"
import { useWindowSize } from "@darkroom.engineering/hamo";


interface FeaturedParallaxProps {
    className: string,
    children: ReactNode;
    speed: number,
    id: string
}

const Parallax = ({className, children, speed=1, id="parallax"}: FeaturedParallaxProps) => {
    const trigger = useRef<HTMLDivElement>(null);
    const target = useRef<HTMLDivElement>(null);
    const timeline = useRef<gsap.core.Timeline | undefined>();
    const {width: windowWidth} = useWindowSize()

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);
        const y = windowWidth * speed * 0.1;

        const setY = gsap.quickSetter(target.current, "y", "px")

        timeline.current = gsap.timeline({
            scrollTrigger: {
                id:id,
                trigger: trigger.current,
                scrub: true,
                start: "top bottom",
                end: "bottom top",
                onUpdate: (e) => {
                    setY(e.progress * y)
                }
            }
        })

        return () => {
            timeline.current?.kill()
        }
    }, [id, speed, windowWidth])
    
    return (
        <div ref={trigger} className={className}>
            <div ref={target}>
                {children}
            </div>
        </div>
    )
}

export default Parallax;