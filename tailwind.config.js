/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './public/**/*.{html,js}',
  ],
  theme:{
    extend:{
      backgroundImage:{
        "capa-mobile": "url('../img/mobile/capa.jpeg')",
        "capa-desktop": "url('../img/capa-desktop.webp')",
        "sofa": "url('../img/sofa_desktop.jpg')",
        "sofa-mobile": "url('../img/mobile/sofa_mobile.jpg')",
        "gabriola": "url('../img/mobile/gabriola.jpeg')",
        "kalok": "url('../img/mobile/kalok.jpg')",
        "sven": "url('../img/mobile/sven.jpg')",
        "chicago": "url('../img/chicago.png')",
        "seating": "url('../img/Seating.jpg')",
        "table": "url('../img/table.jpg')",
        "storage": "url('../img/storage.png')",
      },
      backgroundColor: theme => ({
        ...theme('color'),
        'primary': '#CC2D4A',
        'secondary': '#8FA206',
        'terciary': '#61AEC9'
      }),
      textColor:{
        'primary': '#CC2D4A',
        'secondary': '#8FA206',
        'terciary': '#61AEC9'
      }, fontFamily:{
        Montserrat: ["Montserrat", "sans-serif"]
      }
    }
  }
}