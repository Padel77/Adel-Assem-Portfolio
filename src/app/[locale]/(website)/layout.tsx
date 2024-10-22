import Landing from "@/components/Landing/Landing";
import NavBar from "@/components/NavBar/NavBar";
import SocialLinks from "@/components/SocialLinks/SocialLinks";
import React from "react";

interface LayoutProps {
  children: React.ReactNode;
}
export default async function WebsiteLayout({ children }: LayoutProps) {
  return (
    <div>
      <Landing>
        <NavBar />
        {children}
        <SocialLinks />
      </Landing>
    </div>
  );
}
