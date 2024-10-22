import { FaCode, FaExternalLinkAlt } from "react-icons/fa";
import Link from "next/link";
import React from "react";
import projecyData from "../Data";
interface projectProps {
  params: {
    id: number;
  };
}

export default async function projectDetailsPage({
  params: { id },
}: projectProps) {
  return (
    <div className="container mx-auto p-3">
      {projecyData.map(
        (item) =>
          item.id === id.toString() && (
            <div
              key={item.id}
              className="flex items-center justify-start flex-col text-2xl gap-4 text-white px-10 md:20"
            >
              <div className="w-full flex gap-4 flex-wrap">
                <Link
                  href={item.link}
                  className="flex items-center gap-2 text-[15px] bg-orange-400 w-fit py-2 px-4 cursor-pointer"
                >
                  Live Demo <FaExternalLinkAlt />
                </Link>
                <Link
                  href={item.github}
                  className="flex items-center gap-2 text-[15px] bg-orange-400 w-fit py-2 px-4 cursor-pointer"
                >
                  Code <FaCode />
                </Link>
              </div>
              <div className="w-full">
                <span className="text-gray-500 text-[17px]">PROJECT</span>
                <p className="text-xl font-bold">{item.title}</p>
                <p className="text-[15px] md:text-[17px]">{item.details}</p>
              </div>
              <div className="m-16 text-center">
                <p className="p-4">TOOLS</p>
                <div className="flex justify-center flex-wrap items-center text-2xl gap-4 text-white">
                  {item.tools.map((e, index) => (
                    <p className="btn" key={index}>
                      {e}
                    </p>
                  ))}
                </div>
              </div>
            </div>
          )
      )}
    </div>
  );
}
