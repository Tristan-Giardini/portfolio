'use client'

import Link from "next/link";
import Image from "next/image";
// import useSize from "@/hooks/useSize";
import dynamic from "next/dynamic"

const MediaQuery = dynamic(() => import("react-responsive"), {
    ssr: false
})

// <MediaQuery maxWidth={767}><MobileHome/></MediaQuery>
// <MediaQuery minWidth={768}><DesktopHome/></MediaQuery>


export default function Header() {

  // const screenSize: [number, number] = useSize()
  // const screenWidth: number = screenSize[0]

  // const screenWidth: number = useSize()

  return (
    <>
    {/* {screenWidth > 768 ? */}
    {/* <MediaQuery minWidth={768}>
      <div className="header flex gap-3 text-l font-semibold flex-row justify-between w-full">
        <div>Tristan Giardini</div>
        <div className="relative">
          <Link href="mailto:tristangiaridni@gmail.com" className="link-hover">Contact</Link>
        </div>
      </div> 
      </MediaQuery>
      <MediaQuery maxWidth={767}> */}
      {/* : */}
      <div className="flex flex-row justify-between w-full">
        <div className="header flex flex-col font-semibold text-l">
          <div>Tristan Giardini</div>
          <div className="relative">
            <Link href="mailto:tristangiaridni@gmail.com" className="link-hover">Contact</Link>
          </div>
        </div> 
        <div>
          <Image className="rounded-full" src="/square.png" alt="portrait" width={100} height={100}></Image>
        </div>
      </div>
      {/* </MediaQuery> */}
    {/* } */}
    </>
  );
}
