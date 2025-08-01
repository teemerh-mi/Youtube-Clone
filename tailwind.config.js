/** */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",

  ],
  theme: {
    extend: {
      height: {
        'header': '56px', 
      },
      width: {
        'sidebar-expanded': '280px', 
        'sidebar-collapsed': '72px', 
      },
      transitionDuration: {
        '300': '0.3s',
      },
      colors: {
        'primary-text': '#0f0f0f', 
        'secondary-text': 'rgb(96, 96, 96)', 
        'hover-bg': '#e5e5e5', 
        'active-category': 'rgb(3, 3, 3)', 
        'youtube-red': '#c00', 
        'youtube-red-hover': '#a00',
        'blue-button': '#065fd4',
        'blue-button-hover': '#044cb3',
      },
      fontFamily: {
        roboto: ['Roboto', 'Arial', 'sans-serif'],
      },
    },
  },
  plugins: [
    function({
      addUtilities

    }) {
      const newUtilities = {
        ".no-scrollbar::-webkit-scrollbar":{
          display:"none",
        },
        ".no-scrollbar":{
          "-ms-overflow-style":"none",
          "scrollbar-width":"none"
        },
      };
      addUtilities(newUtilities);
    }
  ],
};

// export default {
//   content: ['./index.html', './src/**/*.{js,jsx}'],
//   theme: {
//     extend: {
//       fontFamily: {
//         roboto: ['Roboto', 'Arial', 'sans-serif'],
//       },
//     },
//   },
//   corePlugins: {
//     preflight: true, 
//   },
//   plugins: [
//     function({
//       addUtilities

//     }) {
//       const newUtilities = {
//         ".no-scrollbar::-webkit-scrollbar":{
//           display:"none",
//         },
//         ".no-scrollbar":{
//           "-ms-overflow-style":"none",
//           "scrollbar-width":"none"
//         },
//       };
//       addUtilities(newUtilities);
//     }
//   ],
// }
