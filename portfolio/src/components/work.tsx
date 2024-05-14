import Image from "next/image";
import Link from "next/link";
import Parallax from "./Parallax";

interface FeaturedWorkProps {
  title: string;
  subtitle: string;
  tech: string;
  link: string;
  image: string;
  className: string;
  speed: number;
  id: string;
  margin: string;
  company: string;
  work: string;
}

export default function Work({
  title,
  subtitle,
  tech,
  link,
  image,
  className,
  speed,
  id,
  margin,
  company,
  work
}: FeaturedWorkProps) {

  return (
    <>
    <Parallax speed={speed} className={className} id={id}>
    <div className={`project-card w-full p-10 rounded-lg ${margin} bg-gray-50`}>
      <Link target="_blank" href={link}><Image src={image} alt="project image" width={800} height={800} className="rounded-lg"></Image></Link>
      <div className="mt-10 mb-4 flex flex-col gap-1">
        <p><span className="font-semibold">{title}</span> - <span className="italic">{company}</span></p>
        <p className="text-sm mt-2">{subtitle}</p>
        <p className="text-xs">{tech}</p>
      </div>
      <div className="flex flex-row gap-2 see-div">
        <Link target="_blank" href={link}>See here</Link><span className="finger-ani">👈</span>
      </div>
    </div>
    </Parallax>
    </>
  );
}
