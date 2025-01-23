/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,ts,jsx,tsx}", "./index.html"],
  theme: {
    extend: {
      boxShadow: {
        custom: "rgba(0, 0, 0, 0.1) 0px 4px 12px",
      },
      animation: {
        "scroll-loop": "scroll-loop linear 20s infinite",
      },
      keyframes: {
        "scroll-loop": {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(-100%)" },
        },
      },
      screens: {
        xxs: "300px",
        xs: "400px",
        md: "880px",
      },
      transitionProperty: {
        height: "height",
      },
      transitionDuration: {
        400: "400ms",
      },
      transitionTimingFunction: {
        "ease-in-out-custom": "cubic-bezier(0.4, 0, 0.2, 1)",
      },
      transitionDelay: {
        200: "200ms",
      },

      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
    },
  },
  plugins: [require("tailwind-scrollbar")],
};
