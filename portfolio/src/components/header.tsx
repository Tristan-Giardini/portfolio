import Link from "next/link";

export default function Header() {
  return (
    <div className="header flex flex-col gap-3 text-xl sm:flex-row justify-between w-full">
      <div>Tristan Giardini</div>
      <div className="relative">
        <Link href="mailto:tristangiaridni@gmail.com" className="link-hover">Contact</Link>
      </div>
    </div>
  );
}
