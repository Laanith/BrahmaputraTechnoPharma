/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {

    extend: {
      colors : {
        primary : "#65A47A",
        textPrimary : "#fff",
        textBlack : "#000",
        primaryBg : "#f6f6f6",
        primaryYellow : "#ffe768"
      }, 
      backgroundImage: {
        // "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        // "gradient-conic":
        //   "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },

      fontSize : {
        base : ['18px', '28px']
      },
      
      textColor : {
      }
    },
  },
  plugins: [],
};
