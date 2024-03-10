import { defineConfig } from "@pandacss/dev";

export default defineConfig({
  // Whether to use css reset
  preflight: true,

  // Where to look for your css declarations
  include: ["./src/**/*.{js,jsx,ts,tsx}", "./pages/**/*.{js,jsx,ts,tsx}"],

  // Files to exclude
  exclude: [],

  // Useful for theme customization
  theme: {
    extend: {
      tokens: {
        colors: {
          blueAccent: {
            default: {
              value: "#4850F3",
            },
            50: {
              value: "#EEEFFF",
            },
            100: {
              value: "#E1E2FF",
            },
            200: {
              value: "#C9CBFF",
            },
            300: {
              value: "#8E94FF",
            },
            400: {
              value: "#6B72FC",
            },
            500: {
              value: "#4850F3",
            },
            600: {
              value: "#3941E5",
            },
            700: {
              value: "#323AD4",
            },
            800: {
              value: "#2A31BC",
            },
            900: {
              value: "#2A31BC",
            },
          },
        },
      },
      semanticTokens: {
        colors: {
          fg: {
            default: {
              value: {
                base: "{colors.blueAccent.500}",
                _dark: "{colors.blueAccent.500}",
              },
            },
          },
        },
      },
    },
  },

  // The output directory for your css system
  outdir: "styled-system",
});
