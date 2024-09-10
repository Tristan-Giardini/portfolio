"use client";

import Work from "@/components/work";
import Image from "next/image";
import Technologies from "@/components/technologies";
import useSize from "@/hooks/useSize";

export default function Home() {
  const screenWidth: number = useSize();

  return (
    <>
      <div className="flex items-center lg:justify-normal lg:items-start lg:flex-row lg:pt-32 lg:pb-36 pt-14 pb-20 pr-0 pl-0 lg:pl-0 lg:w-[800px] gap-8">
        <p className="lg:text-4xl md:text-3xl text-2xl">
          A full-stack developer based in Montreal, dedicated to creating
          user-centric, accessible websites.
        </p>
      </div>
      <div className="flex flex-row text-xl lg:text-2xl mb-10 md:mb-16 lg:mb-20 gap-2">
        <p className="font-semibold">Work & Projects</p>
        <p className="finger pt-1">👇</p>
      </div>
      <div className="flex flex-col-reverse lg:flex-row w-full pl-0 pr-0 md:pl-10 md:pr-10 lg:pl-40 lg:pr-10  gap-12 md:gap-20 lg:gap-0 md:mb-0 lg:mb-96">
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
            isNew={false}
          />
          <Work
            image="/brmtl.png"
            link="https://www.bathroomsmtl.ca/"
            title="BathroomsMTL"
            company="Project"
            subtitle="Full-stack Development"
            work="Design & Development"
            tech="React, Styled Components, Node.js, Express, MongoDB"
            className="self-end"
            speed={screenWidth > 1024 ? -2 : 0}
            margin={screenWidth > 1024 ? "mt-20" : ""}
            id="parallax"
            screen={screenWidth}
            isNew={false}
          />
          <Work
            image="/beccs.png"
            link="https://rebecca-storm.com"
            title="Rebecca Storm"
            company="Freelance"
            subtitle="Front-end Development"
            work="Design & Development"
            tech="React, CSS"
            className="self-end"
            speed={screenWidth > 1024 ? -4 : 0}
            margin={screenWidth > 1024 ? "mb-20" : ""}
            id="parallax"
            screen={screenWidth}
            isNew={false}
          />
        </div>
        <div className="flex flex-col gap-12 md:gap-20 lg:gap-32 px-5 lg:px-10">
          <Work
            image="/aprilapril.png"
            link="https://aprilapril.gallery"
            title="april april"
            company="Freelance"
            subtitle="Font-end Development"
            work="Custom Website Build"
            tech="Next.js, TypeScript, Tailwind, Sanity"
            className="self-end"
            speed={screenWidth > 1024 ? 1 : 0}
            margin={screenWidth > 1024 ? "mb-12" : ""}
            id="parallax"
            screen={screenWidth}
            isNew={true}
          />
          <Work
            image="/surf2.png"
            link="https://surfcustom.com/products/surfboard"
            title="Surf Custom"
            company="HRVST"
            subtitle="Front-end Development"
            work="PDP Custom Integration"
            tech="React, CSS, Shopify Liquid, Vite"
            className="self-end"
            speed={screenWidth > 1024 ? 1 : 0}
            margin={screenWidth > 1024 ? "mb-12" : ""}
            id="parallax"
            screen={screenWidth}
            isNew={false}
          />
          <Work
            image="/wf.png"
            link="https://westmountflorist.com/"
            title="Westmount Florist"
            company="HRVST"
            subtitle="Front-end Development"
            work="Custom Checkout Extension"
            tech="React, CSS, Shopify Liquid, Vite"
            className="self-end"
            speed={screenWidth > 1024 ? 1 : 0}
            margin=""
            id="parallax"
            screen={screenWidth}
            isNew={false}
          />
        </div>
      </div>
      <div className="technologies mb-20">
        <Technologies />
      </div>
    </>
  );
}
