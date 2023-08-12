/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    
    extend: {
      
      animation: {
        slideUpCubiBezier: "slideUp 1s cubic-bezier(0.165, 0.84, 0.44, 1)",
      },

      slideUp: {
        from: { transform: "translateY(100%)" },
        to: { transform: "translateY(0)" },
      },
    },
  },
  plugins: [],
}
