'use client'

import Link from "next/link";
import Image from "next/image";
import dynamic from "next/dynamic"

const MediaQuery = dynamic(() => import("react-responsive"), {
    ssr: false
})


export default function Footer() {

  return (
    <>
    <MediaQuery minWidth={600}>
      <div className="text-l bottom-0 flex gap-3 align-center font-semibold flex-row justify-between w-full pt-8 lg:pt-20">
      <div>Tristan Giardini</div>
      <div className="relative">
      <Link target="_blank" rel="noopener noreferrer" href="/Tristan Giardini Resume.pdf" className="link-hover-footer" passHref>
          Resume/CV
      </Link>
      </div>
      <div className="flex flex-row gap-4 w-16 relative">
        <div className="social-hover">
        <Link href="https://www.linkedin.com/in/tristangiardini/" target="_blank">
        <Image src="/linked-in.svg" alt="linked-in link" width={30} height={30}></Image>
        </Link>
        </div>
        <div className="social-hover">
        <Link href="https://github.com/Tristan-Giardini" target="_blank">
        <Image src="/github.svg" alt="github link" width={30} height={30}></Image>
        </Link>
        </div>
      </div>
    </div>
    </MediaQuery>
    <MediaQuery maxWidth={599}>
    <div className="font-semibold text-l bottom-0 flex flex-col pt-8">
      <Link target="_blank" rel="noopener noreferrer" href="/Tristan Giardini Resume.pdf" className="link-hover-footer" passHref>
              Resume/CV
      </Link>
      <div className="flex align-center flex-row justify-between w-full">
        <div>Tristan Giardini</div>
        <div className="relative">
      </div>
      <div className="flex flex-row gap-4 w-16 relative">
        <div className="social-hover">
          <Link href="https://www.linkedin.com/in/tristangiardini/" target="_blank">
            <Image src="/linked-in.svg" alt="linked-in link" width={30} height={30}></Image>
          </Link>
        </div>
        <div className="social-hover">
          <Link href="https://github.com/Tristan-Giardini" target="_blank">
            <Image src="/github.svg" alt="github link" width={30} height={30}></Image>
          </Link>
        </div>
      </div>
      </div>
    </div>
    </MediaQuery>
    </>
  );
}
