import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/app/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "navbar-desktop": "url('/bg-sidebar-desktop.svg')",
        "navbar-mobile": "url('/bg-sidebar-mobile.svg')",
      },
    },
  },
  plugins: [],
};
export default config;
