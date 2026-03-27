import Image, { type StaticImageData } from "next/image";
import arrowSVG from "../../public/arrow.svg";
import Link from "next/link";

type LinkProps = {
  name: string;
  icon: string | StaticImageData;
  href: string;
};

export default function Links({ name, icon, href }: LinkProps) {
  return (
    <Link
      href={href}
      target="_blank"
      className="flex justify-between py-6 border-b border-gray-200 px-6 hover:bg-gray-100/80 duration-200 transition-colors ease-in-out group"
    >
      <div className="flex items-center gap-2">
        <Image
          src={icon}
          alt={`${name} icon`}
          width={20}
          height={20}
          className="transition-transform duration-200 ease-in-out group-hover:scale-[1.1]"
        />
        <span className="uppercase font-bold">{name}</span>
      </div>
      <Image
        src={arrowSVG}
        alt="arrow"
        width={20}
        height={20}
        className="transition-transform duration-200 ease-in-out group-hover:scale-[1.1]"
      ></Image>
    </Link>
  );
}
