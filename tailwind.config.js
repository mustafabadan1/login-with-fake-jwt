module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      // colors: {
      //   gray: { ...defaultTheme.colors.gray, 600: '#64748b' },
      // },

      colors: {
       
        'gray600': '#64748b',
   
      },

      spacing: {
        '2px': '2px',
        7: '1.75rem',
        9: '2.25rem',
        80: '20rem',
      },

      borderRadius: {
        md: '.375rem',
      },
      boxShadow: {
        outline: ' 0 0 0 rgba(66,153,225,0.25)',
      },
     
    },
  },
  plugins: [],
};
