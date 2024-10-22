import Link from "next/link";
import { FaLinkedin } from "react-icons/fa";
import { FaSquareGithub } from "react-icons/fa6";
import { FaSquareWhatsapp } from "react-icons/fa6";
export default function SocialLinks() {
  return (
    <ul className="fixed left-2 z-10 top-[40%]">
      <li className="text-3xl hover:opacity-40 text-blue-600 py-1 text-[34px]">
        <Link
          href={
            "https://www.linkedin.com/in/adel-assem-667b39174/"
          }
          target="_blank"
          aria-label="Linkedin"
        >
          <FaLinkedin />
        </Link>
      </li>
      <li className="text-3xl hover:opacity-40 text-secondary py-1 text-[34px]">
        <Link href={"https://github.com/Padel77"} target="_blank"
        aria-label="Github">
          <FaSquareGithub />
        </Link>
      </li>
      <li className="text-3xl hover:opacity-40 text-green-600 py-1 text-[34px]">
        <Link
          href={
            "https://api.whatsapp.com/send/?phone=2001050112675&text&type=phone_number&app_absent=0"
          }
          target="_blank"
          aria-label="Whatsapp"
        >
          <FaSquareWhatsapp />
        </Link>
      </li>
    </ul>
  );
}
