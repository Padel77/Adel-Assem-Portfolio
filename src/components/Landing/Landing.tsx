/* eslint-disable react/prop-types */
import "./land.css";
import React, { ReactNode } from "react";

interface LandingProps {
  children: ReactNode;
}

function Landing({ children }: LandingProps) {
  return (
    <>
      <div style={{ overflowX: "hidden" }} className="bg-[#0f202d] h-screen">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path
            fill="#2a5a78c7"
            fillOpacity="1"
            d="M0,64L20,90.7C40,117,80,171,120,165.3C160,160,200,96,240,74.7C280,53,320,75,360,90.7C400,107,440,117,480,117.3C520,117,560,107,600,96C640,85,680,75,720,101.3C760,128,800,192,840,181.3C880,171,920,85,960,80C1000,75,1040,149,1080,154.7C1120,160,1160,96,1200,112C1240,128,1280,224,1320,224C1360,224,1400,128,1420,80L1440,32L1440,0L1420,0C1400,0,1360,0,1320,0C1280,0,1240,0,1200,0C1160,0,1120,0,1080,0C1040,0,1000,0,960,0C920,0,880,0,840,0C800,0,760,0,720,0C680,0,640,0,600,0C560,0,520,0,480,0C440,0,400,0,360,0C320,0,280,0,240,0C200,0,160,0,120,0C80,0,40,0,20,0L0,0Z"
          ></path>
        </svg>
        {children}
      </div>
    </>
  );
}

export default Landing;
