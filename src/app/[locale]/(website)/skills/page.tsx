import { IoLogoHtml5 } from "react-icons/io5";
import { FaCss3Alt } from "react-icons/fa6";
import { IoLogoJavascript } from "react-icons/io5";
import { IoLogoReact } from "react-icons/io5";
import { FaBootstrap } from "react-icons/fa";
import { RiTailwindCssLine } from "react-icons/ri";
import { IoLogoSass } from "react-icons/io";
import { TbBrandAbstract, TbBrandAngular, TbBrandNextjs, TbBrandNodejs, TbBrandRedux, TbBrandThreejs } from "react-icons/tb";
import { VscSymbolClass } from "react-icons/vsc";
import { useMemo } from "react";
export default function Skills() {
  const skillsData = useMemo(
    () => [
      { id: 1, text: "javascript", icon: <IoLogoJavascript /> },
      { id: 2, text: "OOP", icon: <VscSymbolClass /> },
      { id: 3, text: "react", icon: <IoLogoReact /> },
      { id: 4, text: "nextjs", icon: <TbBrandNextjs /> },
      { id: 5, text: "angular", icon: <TbBrandAngular /> },
      { id: 6, text: "nodejs", icon: <TbBrandNodejs /> },
      { id: 7, text: "tailwind", icon: <RiTailwindCssLine /> },
      { id: 8, text: "Threejs", icon: <TbBrandThreejs /> },
      { id: 9, text: "Abstract", icon: <TbBrandAbstract /> },
      { id: 10, text: "redux-toolkit", icon: <TbBrandRedux /> },
      { id: 11, text: "html", icon: <IoLogoHtml5 /> },
      { id: 12, text: "css", icon: <FaCss3Alt /> },
      { id: 13, text: "sass", icon: <IoLogoSass /> },
      { id: 14, text: "bootstrap", icon: <FaBootstrap /> },
      
    ],
    []
  );
  return (
    <div className="relative lg:top-[-100px] mb-[80px] lg:mb-5 container mx-auto px-4">
      <div className="flex flex-wrap w-full gap-8 justify-center">
        {skillsData.map((item) => (
          <div
            key={item.id}
            className="w-3/4 md:w-1/4 border-2 border-cyan-700 rounded-2xl text-center p-12 flex justify-center items-center flex-col gap-4"
          >
            <span className="text-7xl text-[#28d6d9]">{item.icon}</span>
            <span className="text-2xl font-semibold text-[#b1b1b1] capitalize tracking-widest text-center">
              {item.text}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
