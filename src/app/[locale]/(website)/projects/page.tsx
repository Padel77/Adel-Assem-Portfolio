"use client"
import "./Projects.css";
import projecyData from "./Data";
import { useState } from "react";
import load from "@../../../public/assets/load.gif";
import Image from "next/image";
import Link from "next/link";

export default function Projects() {
  const [typePro, setTypePro] = useState("all");
  const [loading, setLoading] = useState(true);

  // useEffect(() => {
  //   if (projecyData) {
  //     setLoading(false);
  //   }
  // }, []);

  setTimeout(() => {
    setLoading(false);
  }, 4000);

  const handleBtn = (type: string) => {
    setTypePro(type);
  };
  return (
    <div className="container mx-auto">
      {loading ? (
        <div className="flex justify-center items-center h-[300px]">
          <Image src={load} alt="loading" className="w-48" />
        </div>
      ) : (
        <>
          <div className="flex justify-center flex-wrap items-center text-2xl gap-4 text-white">
            <p
              className={typePro == "all" ? "btn active" : "btn"}
              onClick={() => handleBtn("all")}
            >
              All
            </p>
            <p
              className={typePro == "react" ? "btn active" : "btn"}
              onClick={() => handleBtn("react")}
            >
              ReactJs
            </p>
            <p
              className={typePro == "js" ? "btn active" : "btn"}
              onClick={() => handleBtn("js")}
            >
              Javascript
            </p>
          </div>
          <div
            className="flex flex-wrap justify-center items-center
    text-2xl text-white mt-5 w-full  md:w-[63%] h-[auto] mx-auto"
          >
            {projecyData.map(
              (items) =>
                (typePro == "all" || items.type == typePro) && (
                  <div
                    className="cartProject border p-4 sm:w-full lg:w-1/3 relative"
                    key={items.id}
                  >
                    <Link
                      href={`/projects/${items?.id}`}
                      className="image_project relative w-[280px] md:w-full
                h-[250px] max-h-[400px] inline-flex items-center justify-center
                rounded-md bg-white overflow-hidden border-2 border-cyan-700"
                    >
                      <Image
                        src={items.img}
                        alt="project"
                        className="image w-full"
                      />
                      <div className="mainClass">
                        <div className="flex items-center justify-center text-slate-950">
                          See More
                        </div>
                      </div>
                    </Link>
                  </div>
                )
            )}
          </div>
        </>
      )}
    </div>
  );
}
