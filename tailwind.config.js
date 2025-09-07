/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: {
        // Main theme colors
        primary: '#371931',   // Purple Burgundy
        secondary: '#FECD8A', // Peach Beige

        // Light palette
        light: {
          100: '#F8E9D2',     // Softest beige
          200: '#F3D8BE',     // Gentle cream
          300: '#EBD1C1',     // Muted pinkish beige
        },

        // Dark palette
        dark: {
          100: '#2C1127',     // Deep plum
          200: '#1F0B19',     // Rich wine
          300: '#14060F',     // Almost black with burgundy hint
        },

        accent: '#B37BA4',     // Soft plum lavender
        success: '#A8FFCB',    // Mint green for "XP gained"
        alert: '#FF8080',      // Soft red for alerts
        info: '#89CFF0',       // Pastel blue for tips/info
      },
    },
  },
  plugins: [],
}
