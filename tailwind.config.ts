import type { Config } from "tailwindcss"

const config: Config = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        roc: ["Roc Grotesk", "sans-serif"], // 🔥 ajout de la police perso
      },
    },
  },
  plugins: [],
}

export default config
