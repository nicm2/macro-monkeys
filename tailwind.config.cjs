/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{html,js,svelte,ts}',
    './pages/**/*.{html,js}',
    './components/**/*.{html,js}',
],
  theme: [],
  daisyui: {
    themes: [
      {
        mytheme: {
        
          "primary": "#fde047",
                  
          "secondary": "#92400e",
                  
          "accent": "#1FB2A5",
                  
          "neutral": "#191D24",
                  
          "base-100": "#2A303C",
                  
          "info": "#3ABFF8",
                  
          "success": "#36D399",
                  
          "warning": "#FBBD23",
                  
          "error": "#F87272",
        },
      },
    ],
  },
  plugins: [
    require('daisyui')
  ],
}
