import Link from "next/link"

export default function Header() {
    return (
        <div className="flex justify-center content-center">
            <div className="py-4 px-4 md:py-6 md:px-6 w-full max-w-175 md:w-175 flex justify-between bg-gray-100">
                <h1 className="uppercase text-base md:text-lg font-bold">K.Shxrma</h1>
                <Link href="https://www.linkedin.com/in/ks-iitjmu/" target="_blank" className="uppercase text-base md:text-lg font-bold hover:text-gray-500 ease-in-out duration-200 transition-colors">info</Link>
            </div>
        </div>
    )
}
