import { ReactNode } from "react";
import Header from "./Header";
import Footer from "./Footer";
import PartyBackground from "@/components/PartyBackground";

interface PageLayoutProps {
  children: ReactNode;
}

const PageLayout = ({ children }: PageLayoutProps) => {
  return (
    <div className="min-h-screen flex flex-col heritage-pattern relative">
      {/* Animated BJP party background */}
      <PartyBackground />

      {/* All content sits above the canvas */}
      <div className="content-layer flex flex-col min-h-screen">
        <Header />
        <main className="flex-1">
          {children}
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default PageLayout;

