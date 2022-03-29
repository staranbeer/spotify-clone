module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundColor: {
        spotifyGray: "#181818",
        spotifyGray400: "#121212",
        spotifyGray300: "#151515",
      },
    },
  },
  plugins: [require("tailwind-scrollbar")],
};
