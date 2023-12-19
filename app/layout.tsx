import type { Metadata } from "next";
import { ubuntu } from "@/ui/fonts";
import "./globals.css";
import Navbar from "./ui/navbar";
import { store } from "./store/store";
import { Provider } from "react-redux";
import Footer from "./ui/step-btns";
import { StoreProvider } from "./store/StoreProvider";

export const metadata: Metadata = {
  title: "Multi-step app",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <StoreProvider>
      <html lang="en">
        <body className={`${ubuntu.className} antialiased bg-gray-200`}>
          <div
            className="flex flex-col h-screen md:flex-row md:mx-auto 
          md:max-w-3xl md:mt-20 md:p-4 bg-gray-200 rounded-lg md:w-full
          md:max-h-[600px] md:bg-white relative
        "
          >
            <Navbar />
            {children}
          </div>
        </body>
      </html>
    </StoreProvider>
  );
}
