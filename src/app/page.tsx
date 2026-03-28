import Image from "next/image";
import Links from "@/components/link";

import formalPhoto from "../../public/formalPicture.png";
import locationSVG from "../../public/location.svg";
import portfolioSVG from "../../public/portfolio.svg";
import linkedinSVG from "../../public/linkedin.svg";
import xSVG from "../../public/x.svg";
import githubSVG from "../../public/github.svg";
import codolioSVG from "../../public/codolio.svg";
import leetcodeSVG from "../../public/leetcode.svg";
import codeforcesSVG from "../../public/codeforces.svg";
import resumeSVG from "../../public/resume.svg";
import gmailSVG from "../../public/gmail.svg";
import whatsappSVG from "../../public/whatsapp.svg";

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
            name="Linkedin"
            icon={linkedinSVG}
            href="https://www.linkedin.com/in/ks-iitjmu/"
          />
          <Links
            name="X"
            icon={xSVG}
            href="https://x.com/ksiitjmu"
          />
          <Links
            name="Github"
            icon={githubSVG}
            href="https://github.com/ks-iitjmu"
          />
          <Links
            name="Codolio"
            icon={codolioSVG}
            href="https://codolio.com/profile/ksiitjmu"
          />
          <Links
            name="Leetcode"
            icon={leetcodeSVG}
            href="https://leetcode.com/u/kunalsharma02/"
          />
          <Links
            name="Codeforces"
            icon={codeforcesSVG}
            href="https://codeforces.com/profile/ks-iitjmu"
          />
          <Links
            name="Resume"
            icon={resumeSVG}
            href="https://drive.google.com/file/d/1NFNRh2SLGEXkF8-x-V_738SNDj8IA6FB/view?usp=sharing"
          />
          <Links
            name="Gmail"
            icon={gmailSVG}
            href="mailto:2023uma0221@iitjammu.ac.in"
          />
          <Links
            name="Whatsapp"
            icon={whatsappSVG}
            href="https://wa.me/919541712485"
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
