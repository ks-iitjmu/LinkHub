import Link from "next/link"

export default function Header() {
    return (
        <div className="flex justify-center content-center">
            <div className="py-6 px-6 w-175 flex justify-between bg-gray-100">
                <h1 className="uppercase text-lg font-bold">K.Shxrma</h1>
                <Link href="https://www.linkedin.com/in/ks-iitjmu/" target="_blank" className="uppercase text-lg font-bold hover:text-gray-500 ease-in-out duration-200 transition-colors">info</Link>
            </div>
        </div>
    )
}
