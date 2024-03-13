/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  mode: "jit",
  theme: {
    extend: {
      fontFamily: {
        inter: ["Inter", "sans-serif"],
      },
      colors: {
        "primary-black": {
          DEFAULT: "#23252B",
          100: "#23252B",
          200: "#02071D",
          900: "#000000"
        },
        "light-grey": {
          DEFAULT: "#747A88",
          100: "#617587",
          200: "#E6E9F2",
          300: "#D4D3EB",
          400: "#7B7B7B",
        },
        "light-white": {
          DEFAULT: "#FFFFFF",
          100: "#FAFAFA"
        },
        "light-green": {
          DEFAULT: "#E1EDD9",
          100: "#E1EDD9"
        },
        "light-red": {
          DEFAULT: "#FADFE4",
          100: "#FADFE4"
        },
        "primary-blue": {
          DEFAULT: "#29627F",
          100: "#29627F"
        },
      },
      fontWeight: {
        'semi-bold-plus': '800',
      },
      borderRadius: {
        'custom': '25px',
        "custom-two": "30px"
      },
      height: {
        "custom": "530px",
        "custom-sm": "750px",
        "custom-one": "430px",
        "custom-two": "300px",
        "custom-full": "100%",
        "custom-four": "600px"
      },
      width: {
        "custom": "350px",
        "custom-two": "345px",
        "custom-three": "250px",
        "custom-xs": "150px",
        "custom-full": "100%",
        "custom-four": "300px"
      },
      fontSize: {
        "xsmall": "9px",
        "small": "10px",
        "semi-small": "11px",
      }
    },
  },
  plugins: [],
};
