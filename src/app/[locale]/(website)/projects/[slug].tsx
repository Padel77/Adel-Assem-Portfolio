"use client";
import { FaCode, FaExternalLinkAlt } from "react-icons/fa";
import projectData from "../projects/Data";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";

export default function ProjectDetails(): JSX.Element {
  const router = useRouter();
  const { slug } = router.query;

  const project = projectData.find((item: any) => item.id === slug);

  if (!project) {
    return <div>Project not found</div>;
  }

  return (
    <div className="container mx-auto p-3">
      <div
        key={project.id}
        className="flex items-center justify-start flex-col text-2xl gap-4 text-white px-10 md:20"
      >
        <div className="w-full flex gap-4 flex-wrap">
          <Link
            href={project.link}
            className="flex items-center gap-2 text-[15px] bg-orange-400 w-fit py-2 px-4 cursor-pointer"
          >
            Live Demo <FaExternalLinkAlt />
          </Link>
          <Link
            href={project.github}
            className="flex items-center gap-2 text-[15px] bg-orange-400 w-fit py-2 px-4 cursor-pointer"
          >
            Code <FaCode />
          </Link>
        </div>
        <div className="w-full">
          <span className="text-gray-500 text-[17px]">PROJECT</span>
          <p className="text-xl font-bold">{project.title}</p>
          <p className="text-[15px] md:text-[17px]">{project.details}</p>
        </div>
        <div className="m-16 text-center">
          <p className="p-4">TOOLS</p>
          <div className="flex justify-center flex-wrap items-center text-2xl gap-4 text-white">
            {project.tools.map((tool: any, index: number) => (
              <p className="btn" key={index}>
                {tool}
              </p>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
