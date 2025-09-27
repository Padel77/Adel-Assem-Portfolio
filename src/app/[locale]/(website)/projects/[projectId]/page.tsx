import { FaCode, FaExternalLinkAlt } from "react-icons/fa";
import Link from "next/link";
import React from "react";
import projectData from "../Data";
import { Metadata } from "next";

interface projectProps {
  params: {
    projectId: number;
  };
}
export const metadata: Metadata & {
  title: { template: string; default: string };
  description: string;
} = {
  title: {
    template: "%s | Projects by Adel Assem | MERN Stack Portfolio ",
    default:
      "Explore the full-stack web projects built by Adel Assem using MongoDB, Express, React, and Node.js. Real-world web applications and personal work.",
  },
  description:
    "Explore the full-stack web projects built by Adel Assem using MongoDB, Express, React, and Node.js. Real-world web applications and personal work..",
};
export default async function projectDetailsPage({
  params: { projectId },
}: projectProps) {

  return (
    <div className="container mx-auto p-3">
      {projectData.map(
        (item) =>
          item.id == projectId.toString() && (
            <div
              key={item.id}
              className="flex items-center justify-start flex-col text-2xl gap-4 text-white px-10 md:20"
            >
              <div className="w-full flex gap-4 flex-wrap">
                <Link
                  href={item.link}
                  target="_blank"
                  className="flex items-center gap-2 text-[15px] bg-orange-400 w-fit py-2 px-4 cursor-pointer"
                >
                  Live Demo <FaExternalLinkAlt />
                </Link>
                <Link
                  href={item.github}
                  target="_blank"
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
                <div className="flex justify-center flex-wrap items-center bg-gray-800 text-2xl gap-4 text-white">
                  {item.tools.map((e, index) => (
                    <p className="bg-orange-400 p-1 " key={index}>
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
