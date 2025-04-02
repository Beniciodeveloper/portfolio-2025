console.log("Tailwind config carregado");
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#111B89',
      },
      screens: {
        'sm': '640px',
        'md': '968px', // Modificado
        'lg': '1162px', // Modificado
        'xl': '1280px',
      }
    },
  },
  plugins: [],
};