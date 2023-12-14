"use client";

import clsx from "clsx";
import Link from "next/link";
import { usePathname } from "next/navigation";

type Props = {};

const links = [
  {
    name: "Personal Info",
    href: "/",
    step: "STEP 1",
    title: "YOUR INFO",
  },
  {
    name: "Select plan",
    href: "/select",
    step: "STEP 2",
    title: "SELECT PLAN",
  },
  {
    name: "Add-Ons",
    href: "/add-ons",
    step: "STEP 3",
    title: "ADD-ONS",
  },
  {
    name: "Summary",
    href: "/summary",
    step: "STEP 4",
    title: "SUMMARY",
  },
];

const Navbar = (props: Props) => {
  const pathname = usePathname();
  return (
    <div
      className="flex justify-center items-start py-10 
            bg-navbar-mobile h-[172px] bg-cover 
            md:bg-navbar-desktop md:h-[568px] 
            md:w-[274px] md:flex-col md:justify-start md:space-y-6"
    >
      {links.map((link, i) => {
        return (
          <div className="flex ml-2 md:ml-6 ">
            <Link
              id="link"
              key={link.name}
              href={link.href}
              className={clsx(
                "border-2 text-white px-3 py-1 md:py rounded-full hover:bg-white hover:text-black",
                {
                  "bg-white text-black": pathname === link.href,
                }
              )}
            >
              {i + 1}
            </Link>
            <div className="hidden md:flex md:flex-col ml-3 tracking-wider">
              <p className="text-xs text-gray-400">{link.step}</p>
              <h2 className="font-bold text-white text-sm">{link.title}</h2>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Navbar;
