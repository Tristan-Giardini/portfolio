'use client'

import Link from "next/link";
import Image from "next/image";


export default function Header() {

  return (
    <>
      <div className="flex flex-row justify-between w-full">
        <div className="header flex flex-col font-semibold text-l">
          <div>Tristan Giardini</div>
          <div className="relative">
            <Link href="mailto:tristangiardini@gmail.com" className="link-hover">Contact</Link>
          </div>
        </div> 
        <div>
          <Image className="rounded-full" src="/square.png" alt="portrait" width={100} height={100}></Image>
        </div>
      </div>
    </>
  );
}
