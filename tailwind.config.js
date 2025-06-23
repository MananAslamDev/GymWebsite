/** @type {import('tailwindcss').Config} */
   module.exports = {
     content: [
       "./src/**/*.{jsx,js,tsx,ts}",
     ],
     theme: {
       extend: {
         colors: {
           primary: '#FF3A3A',
           secondary: '#00F0FF',
           background: '#1A1A1A',
           card: '#222',
         },
         borderRadius: {
           button: '9999px',
         },
       },
     },
     plugins: [],
   }