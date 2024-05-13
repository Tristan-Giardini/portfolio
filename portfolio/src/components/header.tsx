import Link from "next/link";

export default function Header() {
  return (
    <div className="flex flex-col text-xl sm:flex-row justify-between w-full">
      <div>Tristan Giardini</div>
      <div>
        <Link href="mailto:tristangiaridni@gmail.com">Contact</Link>
      </div>
    </div>
  );
}
