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
  margin: string
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
  margin
}: FeaturedWorkProps) {

  return (
    <>
    <Parallax speed={speed} className={className} id={id}>
    <div className={`project-card w-full p-10 rounded-lg ${margin} bg-gray-50`}>
      <Image src={image} alt="project image" width={800} height={800} className="rounded-lg"></Image>
      <div className="mt-10 flex flex-col gap-1">
        <p>{title}</p>
        <p>{subtitle}</p>
        <p>{tech}</p>
        <Link href={link} className="mt-4">See here</Link>
      </div>
    </div>
    </Parallax>
    </>
  );
}
