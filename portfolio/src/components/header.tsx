'use client'

import Link from "next/link";
import Image from "next/image";
import useSize from "@/hooks/useSize";

export default function Header() {

  const screenSize: [number, number] = useSize()
  const screenWidth: number = screenSize[0]

  return (
    <>
    {screenWidth > 768 ?
      <div className="header flex gap-3 text-l font-semibold flex-row justify-between w-full">
        <div>Tristan Giardini</div>
        <div className="relative">
          <Link href="mailto:tristangiaridni@gmail.com" className="link-hover">Contact</Link>
        </div>
      </div> 
      :
      <div className="flex flex-row justify-between w-full">
        <div className="header flex flex-col font-semibold text-l w-full">
          <div>Tristan Giardini</div>
          <div className="relative">
            <Link href="mailto:tristangiaridni@gmail.com" className="link-hover">Contact</Link>
          </div>
        </div> 
        <div>
          <Image className="rounded-full" src="/square.png" alt="portrait" width={80} height={80}></Image>
        </div>
      </div>
    }
    </>
  );
}
