import Link from "next/link"

export default function NotFound() {
    return <>
    <div className="flex flex-col justify-center items-center gap-4 h-screen">
        <p className="lg:text-9xl md:text-8xl text-7xl">404</p>
        <p className="lg:text-4xl md:text-3xl text-2xl">Page not found!</p>
        <p className="md:text-2xl text-1xl">Return <span className="relative"><Link href="/" className="link-hover-home font-semibold">home</Link>.</span></p>
    </div>
    </>
}