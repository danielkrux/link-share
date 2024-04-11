import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      darkgray: "#333333",
      gray: "#737373",
      borders: "#D9D9D9",
      lightgray: "#FAFAFA",
      white: "#FFFFFF",
      purple: "#633CFF",
      lilac: "#BEADFF",
      lightpurple: "#EFEBFF",
      red: "#FF3939",
      transparant: "rgba(0, 0, 0, 0)",
    },
    fontSize: {
      "heading-l": [
        "32px",
        {
          lineHeight: "150%",
          fontWeight: "700",
        },
      ],
      "heading-m": [
        "24px",
        {
          lineHeight: "150%",
          fontWeight: "700",
        },
      ],
      "heading-s": [
        "16px",
        {
          lineHeight: "150%",
          fontWeight: "700",
        },
      ],
      base: [
        "16px",
        {
          lineHeight: "150%",
          fontWeight: "400",
        },
      ],
      button: [
        "16px",
        {
          lineHeight: "150%",
          fontWeight: "600",
        },
      ],
      "body-s": [
        "12px",
        {
          lineHeight: "150%",
          fontWeight: "400",
        },
      ],
    },

    extend: {
      boxShadow: {
        "purple-blur": "0px 0px 32px rgba(99, 60, 255, 0.25)",
      },
    },
  },
  plugins: [],
};
export default config;
