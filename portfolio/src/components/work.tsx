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
  screen: number;
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
  work,
  screen
}: FeaturedWorkProps) {

  return (
    <>
    <Parallax speed={speed} className={className} id={id}>
    <div className={`project-card w-full p-6 md:p-10 rounded-lg lg:${margin} bg-gray-50`}>
      <Link target="_blank" href={link}><Image src={image} alt="project image" width={800} height={800} className="rounded-lg"></Image></Link>
      <div className="mt-10 mb-4 flex flex-col gap-1">
        <p><span className="font-semibold">{title}</span> - <span className="italic">{company}</span></p> 
        {screen > 768 ? 
        <p className="text-sm mt-2"><span>{subtitle}</span> - <span>{work}</span></p>
        : 
        <>
        <p className="text-sm mt-2">{subtitle}</p>
        <p className="text-sm">{work}</p>
        </>
        }
        <p className="text-xs">{tech}</p>
      </div>
      <div className="flex font-semibold flex-row gap-2 see-div">
        <Link target="_blank" href={link}>See more</Link><span className="finger-ani">👈</span>
      </div>
    </div>
    </Parallax>
    </>
  );
}
