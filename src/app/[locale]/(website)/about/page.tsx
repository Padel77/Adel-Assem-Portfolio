import Image from "next/image";
import { FiDownload } from "react-icons/fi";
import type { Metadata } from "next";

import man_working from "@../../../public/assets/man_working.png";
import wired_lineal from "@../../../public/assets/wired-lineal-268-avatar-man.gif";
import wired_lineal_18 from "@../../../public/assets/wired-lineal-18-location-pin.gif";
import wired_lineal_1676 from "@../../../public/assets/wired-lineal-1676-telephone-call-hand.gif";
import wired_lineal_1141 from "@../../../public/assets/wired-lineal-1141-email.gif";
import wired_lineal_245 from "@../../../public/assets/wired-lineal-245-edit-document.gif";
import Link from "next/link";
export const metadata: Metadata & {
  title: { template: string; default: string };
  description: string;
} = {
  title: {
    template: "%s | Adel Assem Portfolio | MERN Stack Developer",
    default: "Adel Assem Portfolio | MERN Stack Developer | Full-Stack Development Services",
  },
  description:
    "Welcome to Adel Assem's portfolio. I am a MERN stack developer specializing in building high-quality web applications. Explore my projects and get in touch for collaboration.",
};
export default function About() {
  return (
    <div className="relative lg:top-[-120px] mb-[80px] lg:mb-5">
      <div className="container mx-auto px-5 md:px-14 justify-center items-center lg:items-start gap-4">
        <div className="flex flex-col justify-center items-center gap-4">
          <p className="md:w-[70%] tracking-wider px-3  mx-auto text-2xl text-center leading-10 text-white ">
            With a solid foundation from the Information Technology Institute as
            a Full Stack Developer and a diploma in human resources management,
            my journey through the tech landscape has been marked by a
            commitment to excellence and innovation. we leveraged my expertise
            in React and Next.js to deliver seamless and responsive user
            interfaces, enhancing the digital experience for our clients.
          </p>
          <div className="flex items-center flex-col lg:flex-row justify-center gap-2 mx-auto">
            <div>
              <Image
                src={man_working}
                alt="man"
                style={{ color: "transparent" }}
              />
            </div>
            <ul className="flex justify-start flex-col gap-2 p-4 w-full md:w-[70%] text-white">
              <li
                className="flex gap-3 items-center 
            text-lg md:text-xl text-wrap"
              >
                <Image
                  src={wired_lineal}
                  alt="logo"
                  style={{ color: "transparent" }}
                  height={50}
                  width={50}
                />
                Adel Assem Mahmmed
              </li>
              <li className="flex gap-3 items-center text-lg md:text-xl text-wrap ">
                <Image
                  src={wired_lineal_18}
                  alt="logo"
                  style={{ color: "transparent" }}
                  height={50}
                  width={50}
                />
                Egypt
              </li>
              <li className="flex gap-3 items-center text-lg md:text-xl text-wrap ">
                <Link
                  href="tel:01050112675"
                  className="flex items-center gap-3"
                >
                  <Image
                    src={wired_lineal_1676}
                    alt="logo"
                    style={{ color: "transparent" }}
                    height={50}
                    width={50}
                  />
                  01050112675
                </Link>
              </li>
              <li className="flex gap-3 items-center text-lg md:text-xl text-wrap ">
                <Link
                  href="mailto:adelassem99@gmail.com"
                  className="flex items-center gap-3"
                >
                  <Image
                    src={wired_lineal_1141}
                    alt="logo"
                    style={{ color: "transparent" }}
                    height={50}
                    width={50}
                  />
                  adelassem99@gmail.com
                </Link>
              </li>
              <li className="flex gap-3 items-center text-lg md:text-xl text-wrap ">
                <Image
                  src={wired_lineal_245}
                  alt="logo"
                  style={{ color: "transparent" }}
                  height={50}
                  width={50}
                />
                <a
                  download="Adel_Assem_Mohamed_Resume.pdf"
                  href="/assets/Adel_Assem_Mohamed.pdf"
                  className="flex items-center gap-2"
                >
                  Download CV <FiDownload />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
