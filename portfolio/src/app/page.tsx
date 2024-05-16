"use client";

import { useEffect } from "react";
import Work from "@/components/work";
import Image from "next/image";
import Technologies from "@/components/technologies";
import useSize from "@/hooks/useSize";

export default function Home() {

  const screenSize: [number, number] = useSize()
  const screenWidth: number = screenSize[0]

  return (
    <>
      <div className="flex justify-between items-center lg:justify-normal lg:items-start lg:flex-row lg:pt-32 lg:pb-20 pt-14 pb-20 pr-0 pl-0 lg:pl-0 lg:pr-40 gap-8">
        <p className="lg:text-4xl md:text-3xl text-2xl">
        A full-stack developer based in Montreal, dedicated to creating user-centric and accessible websites.
        </p>
        <div >
          {screenWidth > 768 ? 
        <Image className="rounded-full" src="/square.png" alt="portrait" width={650} height={650}></Image> : ''}
        </div>
      </div>
      <div className="text-xl lg:text-2xl mb-10 md:mb-16 lg:mb-20">Work & Projects 👇</div>
      <div className="flex flex-col w-full gap-12 md:gap-20 xl:gap-60 lg:gap-28">
      <div className="flex flex-col lg:flex-row gap-12 md:gap-20 lg:gap-28 px-0 sm:px-10 md:px-20 lg:ml-40">
        <Work
          link="https://app.kbdinsurance.com/"
          title="KBD Insurance Quoter"
          company="HRVST"
          subtitle="Full-stack Development"
          work="Reskin & Refactor"
          tech="TypeScript, CSS, Node.js, Express, MongoDB, Heroku"
          image="/kbdinsurance.png"
          className="self-end"
          speed={screenWidth > 1024 ? -1 : 0}
          id="parallax"
          margin="mt-20"
          screen={screenWidth}
        />
        <Work
          image="/surf2.png"
          link="https://surfcustom.com/products/surfboard"
          title="Surf Custom"
          company="HRVST"
          subtitle="Front-end Development"
          work="PDP Custom Integration"
          tech="React, CSS, Vite, Shopify Liquid"
          className="self-end"
          speed={screenWidth > 1024 ? 1 : 0}
          id="parallax"
          margin={screenWidth > 1024 ? "mb-12" : ""}
          screen={screenWidth}
        />
        </div>
        <div className="flex flex-col lg:flex-row gap-12 md:gap-20 lg:gap-28 px-0 sm:px-10 md:px-20 lg:ml-24">
        <Work
          image="/wf.png"
          link="https://westmountflorist.com/"
          title="Westmount Florist"
          company="HRVST"
          subtitle="Front-end Development"
          work="Custom Checkout Extension"
          tech="React, CSS, Vite, Shopify Liquid"
          className="self-end"
          speed={screenWidth > 1024 ? -3 : 0}
          id="parallax"
          margin={screenWidth > 1024 ? "mt-20" : ""}
          screen={screenWidth}
        />
        <Work
          image="/brmtl.png"
          link="https://www.bathroomsmtl.ca/"
          title="BathroomsMTL"
          company="Project"
          subtitle="Full-stack Development"
          work="Design & Development"
          tech="React, CSS, Node.js, Express, MongoDB, OnRender"
          className="self-end"
          speed={screenWidth > 1024 ? 1 : 0}
          id="parallax"
          margin=""
          screen={screenWidth}
        />
        </div>
        <div className="flex flex-row md:gap-20 lg:gap-28 px-0 sm:px-10 md:px-20 lg:ml-24 lg:w-6/12">
        <Work
          image="/beccs.png"
          link="https://rebecca-website.vercel.app"
          title="Rebecca Storm"
          company="Freelance"
          subtitle="Front-end Development"
          work="Design & Development"
          tech="React, CSS, Vercel"
          className="self-end"
          speed={screenWidth > 1024 ? -14 : 0}
          id="parallax"
          margin={screenWidth > 1024 ? "mb-20" : ""}
          screen={screenWidth}
        />
        </div>
      </div>
      <div className="technologies mb-20 lg:mb-40">
        <Technologies />
      </div>
    </>
  );
}
