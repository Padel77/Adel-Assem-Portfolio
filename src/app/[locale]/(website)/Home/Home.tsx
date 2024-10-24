"use client";
import { Cursor, useTypewriter } from "react-simple-typewriter";

function TypedEffect() {
  const words = ["Hi all, I'm Adel Assem"];
  const [text] = useTypewriter({
    words,
    loop: 1,
    typeSpeed: 100,
    deleteSpeed: 80,
  });
  const [text2] = useTypewriter({
    words: ["Front End Developer","Mearn Stack Developer", "ReactJs Developer" ,"NextJs Developer" ],
    loop: true,
    typeSpeed: 120,
    deleteSpeed: 80,
  });
  return (
    <>
      <div className="px-5 mx-auto my-3 text-center flex flex-col gap-8 tracking-wider font-semibold relative top-[150px] sm:top-0">
        <h1 className="text-3xl sm:text-5xl capitalize text-[#6fc3c5]">
          {text}
          <span>
            <Cursor cursorStyle="" />
          </span>
        </h1>
        <h2 className="text-xl sm:text-3xl capitalize text-[#3e6e6f]">
          {" "}
          {text2}
        </h2>
        <p className="md:text-[17px] text-[13px] capitalize text-[#3e6e6f]">Interactive, Responsive, User-Friendly, Dynamic, Modern.</p>
      </div>
    </>
  );
}

export default TypedEffect;