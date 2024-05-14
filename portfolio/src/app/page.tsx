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
      <div className="py-40 w-8/12">
        <p className="text-4xl">
        A full-stack developer based in Montreal, dedicated to creating user-centric and accessible websites.
        </p>
        <p className="text-4xl">
          
        </p>
      </div>
      <div className="text-xl mb-10">Work & Projects</div>
      <div className="flex flex-col w-full lg:gap-60 gap-28">
      <div className="flex flex-col lg:flex-row gap-28 px-8 sm:px-20 lg:ml-24">
        <Work
          link="https://app.kbdinsurance.com/"
          title="KBD Insurance Quoter"
          company="HRVST"
          subtitle="Full-stack Development - Reskin & Refactor"
          tech="TypeScript, CSS, Node.js, Express, MongoDB, Heroku"
          image="/kbdinsurance.png"
          className="self-end"
          speed={screenWidth > 1024 ? -1 : 0}
          id="parallax"
          margin="mt-20"
        />
        <Work
          image="/surf2.png"
          link="https://surfcustom.com/products/surfboard"
          title="Surf Custom"
          company="HRVST"
          subtitle="Front-end Development - PDP Custom Integration"
          tech="React, CSS, Vite, Shopify Liquid"
          className="self-end"
          speed={screenWidth > 1024 ? 1 : 0}
          id="parallax"
          margin={screenWidth > 1024 ? "mb-12" : ""}
        />
        </div>
        <div className="flex flex-col lg:flex-row gap-28 px-8 sm:px-20 lg:ml-24">
        <Work
          image="/wf.png"
          link="https://westmountflorist.com/"
          title="Westmount Florist"
          company="HRVST"
          subtitle="Front-end Development - Custom Checkout Extension"
          tech="React, CSS, Vite, Shopify Liquid"
          className="self-end"
          speed={screenWidth > 1024 ? -3 : 0}
          id="parallax"
          margin={screenWidth > 1024 ? "mt-20" : ""}
        />
        <Work
          image="/brmtl.png"
          link="https://www.bathroomsmtl.ca/"
          title="BathroomsMTL"
          company="Project"
          subtitle="Full-stack Development - Design & Development"
          tech="React, CSS, Node.js, Express, MongoDB, OnRender"
          className="self-end"
          speed={screenWidth > 1024 ? 1 : 0}
          id="parallax"
          margin=""
        />
        </div>
        <div className="flex flex-row gap-28 px-8 sm:px-20 lg:ml-24 lg:w-6/12">
        <Work
          image="/beccs.png"
          link="https://rebecca-website.vercel.app"
          title="Rebecca Storm"
          company="Freelance"
          subtitle="Front-end Development - Design & Development"
          tech="React, CSS, Vercel"
          className="self-end"
          speed={screenWidth > 1024 ? -14 : 0}
          id="parallax"
          margin={screenWidth > 1024 ? "mb-20" : ""}
        />
        </div>
      </div>
      <div className="technologies mb-40">
        <Technologies />
      </div>
    </>
  );
}
