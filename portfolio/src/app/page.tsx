"use client";

import Work from "@/components/work";
import Image from "next/image";
import Technologies from "@/components/technologies";
import useSize from "@/hooks/useSize";

export default function Home() {

  const screenSize: [number, number] = useSize()
  const screenWidth: number = screenSize[0]

  return (
    <>
      <div className="flex justify-between items-center lg:justify-normal lg:items-start lg:flex-row lg:pt-32 lg:pb-6 pt-14 pb-20 pr-0 pl-0 lg:pl-0 lg:pr-40 gap-8">
        <p className="lg:text-4xl md:text-3xl text-2xl">
        A full-stack developer based in Montreal, dedicated to creating user-centric and accessible websites.
        </p>
        <div >
          {screenWidth > 768 ? 
            <Image className="image rounded-full" src="/square.png" alt="portrait" width={650} height={650}></Image> : ''}
        </div>
      </div>
      <div className="flex flex-row text-xl lg:text-2xl mb-10 md:mb-16 lg:mb-20 gap-2"><p className="font-semibold">Work & Projects</p><p className="pt-1">👇</p></div>
      <div className="flex flex-col-reverse lg:flex-row w-full pl-0 pr-0 md:pl-10 md:pr-10 lg:pl-40 lg:pr-10  gap-12 md:gap-20 lg:gap-0">
      <div className="flex flex-col gap-12 md:gap-20 lg:gap-28 px-5 lg:px-20">
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
          margin="mt-20"
          id="parallax"
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
          speed={screenWidth > 1024 ? -3 : 0}
          margin={screenWidth > 1024 ? "mt-20" : ""}
          id="parallax"
          screen={screenWidth}
        />
        <Work
          image="/beccs.png"
          link="https://rebecca-website.vercel.app"
          title="Rebecca Storm"
          company="Freelance"
          subtitle="Front-end Development"
          work="Design & Development"
          tech="React, CSS, Vercel"
          className="self-end"
          speed={screenWidth > 1024 ? -9 : 0}
          margin={screenWidth > 1024 ? "mb-20" : ""}
          id="parallax"
          screen={screenWidth}
        />
        </div>
        <div className="flex flex-col gap-12 md:gap-20 lg:gap-32 px-5 lg:px-10">
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
              margin={screenWidth > 1024 ? "mb-12" : ""}
              id="parallax"
              screen={screenWidth}
            />
          <Work
            image="/wf.png"
            link="https://westmountflorist.com/"
            title="Westmount Florist"
            company="HRVST"
            subtitle="Front-end Development"
            work="Custom Checkout Extension"
            tech="React, CSS, Vite, Shopify Liquid"
            className="self-end"
            speed={screenWidth > 1024 ? 1 : 0}
            margin=""
            id="parallax"
            screen={screenWidth}
        />
        </div>
      </div>
      <div className="technologies mb-20">
        <Technologies />
      </div>
    </>
  );
}
