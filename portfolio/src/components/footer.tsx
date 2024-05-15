'use client'

import Link from "next/link";
import Image from "next/image";
import GitIcon from "./GitIcon";
import LinkedIcon from "./LinkedIcon";
import useSize from "@/hooks/useSize";

export default function Footer() {
  const screenSize: [number, number] = useSize()
  const screenWidth: number = screenSize[0]

  return (
    <>
    {screenWidth > 600 ? <>
      <div className="text-xl bottom-0 flex gap-3 align-center flex-row justify-between w-full pt-8 lg:pt-20">
      <div>Tristan Giardini</div>
      <div className="relative">
      <Link target="_blank" rel="noopener noreferrer" href="/Tristan Giardini Resume.pdf" className="link-hover" passHref>
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
    </>
    : <>

          <div className="text-xl bottom-0 flex flex-col pt-8">
          <Link target="_blank" rel="noopener noreferrer" href="/Tristan Giardini Resume.pdf" className="link-hover" passHref>
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
    </>}
    </>
  );
}
