import wiredLineal from "../../../public/assets/wired-lineal-63-home.gif";
import avatar from "../../../public/assets/wired-lineal-268-avatar-man.gif";
import avatar2 from "../../../public/assets/wired-lineal-153-bar-chart.gif";
import avatar3 from "../../../public/assets/wired-lineal-478-computer-display.gif";
import avatar4 from "../../../public/assets/wired-lineal-1676-telephone-call-hand.gif";
import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import { getLocale } from "next-intl/server";

export default async function NavBar() {
  const locale = await getLocale();
  return (
    <div className="flex justify-center fixed bottom-2 w-[100%] z-10">
      <ul className="flex justify-center items-center gap-5 bg-[#3a6f9573] p-4 rounded-xl border-2 border-cyan-800">
        <li>
          <Link href={"/"}>
            <Image
              src={wiredLineal}
              alt="logo"
              className="text-transparent"
              height={50}
              width={50}
            />
          </Link>
        </li>
        <li>
          <Link href={`/${locale}/about`}>
            <Image
              src={avatar}
              alt="logo"
              className="text-transparent"
              height={50}
              width={50}
            />
          </Link>
        </li>
        <li>
          <Link href={`/${locale}/skills`}>
            <Image
              src={avatar2}
              alt="logo"
              className="text-transparent"
              height={50}
              width={50}
            />
          </Link>
        </li>
        <li>
          <Link href={`/${locale}/projects`}>
            <Image
              src={avatar3}
              alt="logo"
              className="text-transparent"
              height={50}
              width={50}
            />
          </Link>
        </li>
        <li>
          <Link href={`/${locale}/contact`}>
            <Image
              src={avatar4}
              alt="logo"
              className="text-transparent"
              height={50}
              width={50}
            />
          </Link>
        </li>
      </ul>
    </div>
  );
}
