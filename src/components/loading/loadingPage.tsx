import Image from "next/image";
import styles from "./loader.module.css";
import load from "@../../../public/assets/load.gif";

export default function LoadingPage() {
  return (
  
    <div className="flex  w-full items-center content-center justify-center">
      <div >
          <Image src={load} alt="loading" width={200} height={200}/>
      </div>
    </div>
  );
}
