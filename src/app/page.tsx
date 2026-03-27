import Image from "next/image";
import formalPhoto from "../../public/formalPicture.png";
import locationSVG from "../../public/location.svg";
import portfolioSVG from "../../public/portfolio.svg";
import Links from "@/components/link";

export default function Home() {
  return (
    <div className="flex justify-center">
      <div className="flex flex-col w-175 px-15">
        <Image
          src={formalPhoto}
          width={70}
          height={70}
          alt="formal photo"
          className="grayscale pt-30 pb-8"
        />
        <div className="text-black text-5xl tracking-tighter font-bold uppercase py-2">
          Kunal Sharma
        </div>
        <div className="text-gray-600 tracking-wide font-medium uppercase  py-2">
          Full Stack Developer & ML Engineer
        </div>
        <div className="flex items-center gap-2 pb-20">
          <Image
            src={locationSVG}
            width={15}
            height={15}
            alt="location svg"
            className="text-gray-600"
          ></Image>
          <p className="text-gray-600 font-normal text-xs uppercase tracking-wider">
            Ludhiana, Punjab, India
          </p>
        </div>
        <div className="pb-20">
          <Links
            name="Portfolio"
            icon={portfolioSVG}
            href="https://ksiitjmu.vercel.app/"
          />
          <Links
            name="Portfolio"
            icon={portfolioSVG}
            href="https://ksiitjmu.vercel.app/"
          />
        </div>
        <div className="flex items-center justify-between pb-20">
          <p className="uppercase text-xs tracking-wider text-gray-600">
            Last Updated on
          </p>
          <p className="uppercase text-xs tracking-wider text-gray-600">
            28/03/2026
          </p>
        </div>
      </div>
    </div>
  );
}
