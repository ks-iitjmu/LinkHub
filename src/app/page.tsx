import Image from "next/image";
import formalPhoto from "../../public/formalPicture.png";
import locationSVG from "../../public/location.svg";
import portfolioSVG from "../../public/portfolio.svg";
import Links from "@/components/link";

export default function Home() {
  return (
    <div className="flex justify-center">
      <div className="flex flex-col w-full max-w-175 px-4 md:w-175 md:px-15">
        <Image
          src={formalPhoto}
          width={70}
          height={70}
          alt="formal photo"
          className="grayscale pt-14 pb-6 md:pt-30 md:pb-8"
        />
        <div className="text-black text-3xl md:text-5xl tracking-tighter font-bold uppercase py-1.5 md:py-2">
          Kunal Sharma
        </div>
        <div className="text-gray-600 text-xs md:text-base tracking-wide font-medium uppercase py-1.5 md:py-2">
          Full Stack Developer & ML Engineer
        </div>
        <div className="flex items-center gap-2 pb-10 md:pb-20">
          <Image
            src={locationSVG}
            width={15}
            height={15}
            alt="location svg"
            className="text-gray-600"
          ></Image>
          <p className="text-gray-600 font-normal text-[10px] md:text-xs uppercase tracking-wider">
            Ludhiana, Punjab, India
          </p>
        </div>
        <div className="pb-10 md:pb-20">
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
        <div className="flex items-center justify-between pb-12 md:pb-20">
          <p className="uppercase text-[10px] md:text-xs tracking-wider text-gray-600">
            Last Updated on
          </p>
          <p className="uppercase text-[10px] md:text-xs tracking-wider text-gray-600">
            28/03/2026
          </p>
        </div>
      </div>
    </div>
  );
}
