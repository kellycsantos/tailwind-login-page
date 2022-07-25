/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: ["./index.html","./src/**/*.{vue,js,ts,jxs,tsx}"],
  mode: "jit",
  content: [],
  theme: {
    extend:{
      backgroundImage:{
        'ios-image': "url('/src/assets/background/desktop-ios-image.jpg')"
      }
    }
  },
  plugins: [],
}

// desktop-ios-image