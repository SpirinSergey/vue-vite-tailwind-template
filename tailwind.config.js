/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontSize: {
        "h1-xl": [
          "4rem",
          {
            lineHeight: "4.625rem",
            fontWeight: "500",
          },
        ],
        "h1-md": [
          "3.375rem",
          {
            lineHeight: "4rem",
            fontWeight: "500",
          },
        ],
        h1: [
          "2.75rem",
          {
            lineHeight: "3.375rem",
            fontWeight: "500",
          },
        ],
        "h2-xl": [
          "3rem",
          {
            lineHeight: "3.625rem",
            fontWeight: "500",
          },
        ],
        "h2-md": [
          "2.5rem",
          {
            lineHeight: "3.125rem",
            fontWeight: "500",
          },
        ],
        h2: [
          "2rem",
          {
            lineHeight: "2.625rem",
            fontWeight: "500",
          },
        ],

        "h3-xl": [
          "1.5rem",
          {
            lineHeight: "1.785rem",
            fontWeight: "500",
          },
        ],
        "h3-md": [
          "1.25rem",
          {
            lineHeight: "1.625rem",
            fontWeight: "500",
          },
        ],
        h3: [
          "1.125rem",
          {
            lineHeight: "1.5rem",
            fontWeight: "500",
          },
        ],

        "h4-xl": [
          "1.5rem",
          {
            lineHeight: "1.785rem",
            fontWeight: "400",
          },
        ],
        "h4-md": [
          "1.25rem",
          {
            lineHeight: "1.625rem",
            fontWeight: "400",
          },
        ],
        h4: [
          "1.125rem",
          {
            lineHeight: "1.5rem",
            fontWeight: "400",
          },
        ],

        "p1-xl": [
          "1.125rem",
          {
            lineHeight: "2.375rem",
            fontWeight: "500",
          },
        ],
        "p1-md": [
          "1rem",
          {
            lineHeight: "2.25rem",
            fontWeight: "500",
          },
        ],
        p1: [
          "0.875rem",
          {
            lineHeight: "2.125rem",
            fontWeight: "500",
          },
        ],

        "p2-xl": [
          "1.125rem",
          {
            lineHeight: "1.75rem",
            fontWeight: "400",
          },
        ],
        "p2-md": [
          "1rem",
          {
            lineHeight: "1.625rem",
            fontWeight: "400",
          },
        ],
        p2: [
          "0.875rem",
          {
            lineHeight: "1.5rem",
            fontWeight: "400",
          },
        ],

        "p3-xl": [
          "1rem",
          {
            lineHeight: "1.625rem",
            fontWeight: "400",
          },
        ],
        "p3-md": [
          "0.875rem",
          {
            lineHeight: "1.5rem",
            fontWeight: "400",
          },
        ],
        p3: [
          "0.75rem",
          {
            lineHeight: "1.375rem",
            fontWeight: "400",
          },
        ],
      },
      fontFamily: {
        "Unbounded-Medium": "Unbounded-Medium",
        "Unbounded-Blond": "Unbounded-Blond",
      },
    },
  },
  variants: {
    extend: {
      container: {
        center: true,
        // padding: '2rem',
      },
    },
  },
  plugins: [],
};
