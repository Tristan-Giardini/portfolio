"use client";

import { useEffect } from "react";
import Work from "@/components/work";
import Image from "next/image";
import Technologies from "@/components/technologies";

export default function Home() {

  return (
    <>
      <div className="py-40 w-8/12">
        <p className="text-3xl">
        A full-stack developer based in Montreal, dedicated to creating user-centric and accessible websites that have a positive impact.
        </p>
      </div>
      <div className="text-xl mb-10">Featured work</div>
      <div className="flex flex-col w-full gap-60">
        <div className="flex flex-row gap-28 px-20 ml-24">
        <Work
          link="#"
          title="KBD Insurance Quoter - HRVST"
          subtitle="Fullstack development - application redesign"
          tech="TypeScript, CSS, Node.js, Express, MongoDB, Heroku"
          image="/image1.jpeg"
          className="self-end"
          speed={-2}
          id="parallax"
          margin="mt-20"
        />
        <Work
          image="/image3.jpeg"
          link="#"
          title="Surf Custom - HRVST"
          subtitle="Front-end development - custom designer, application integration"
          tech="React, CSS, Vite, Shopify Liquid"
          className="self-end"
          speed={1}
          id="parallax"
          margin="mb-12"
        />
        </div>
        <div className="flex flex-row gap-28 px-20 ml-24">
        <Work
          image="/image1.jpeg"
          link="#"
          title="Westmount Florist - HRVST"
          subtitle="Front-end development - custom checkout flow"
          tech="React, CSS, Vite, Shopify Liquid"
          className="self-end"
          speed={-6}
          id="parallax"
          margin="mt-20"
        />
        <Work
          image="/image3.jpeg"
          link="#"
          title="BathroomsMTL"
          subtitle="Fullstack development - application design/development"
          tech="React, CSS, Node.js, Express, MongoDB, OnRender"
          className="self-end"
          speed={-0.5}
          id="parallax"
        />
        </div>
        <div className="flex flex-row gap-28 px-20 ml-24 w-6/12">
        <Work
          image="/image1.jpeg"
          link="#"
          title="Westmount Florist - HRVST"
          subtitle="Front-end development - custom checkout flow"
          tech="React, CSS, Vite, Shopify Liquid"
          className="self-end"
          speed={-12}
          id="parallax"
        />
        </div>
      </div>
      <div className="technologies mb-20">
        <Technologies />
      </div>
    </>
  );
}
