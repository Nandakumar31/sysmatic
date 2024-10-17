<<<<<<< HEAD

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./src/components/**/*.{js,jsx,ts,tsx}",
    "./src/Screens/**/*.{js,jsx,ts,tsx}",
    "./src/assets/**/*.{js,jsx,ts,tsx,png,jpg,jpeg,svg,gif}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#0B2464',
        'custom-blue': '#1059b7',
        'custom-word':'#406594',
        'custom-footcolor':'#294E95',
      },
      keyframes: {
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'bottom-to-top': {
          '0%': { transform: 'translateY(100%)', opacity: 0 },
          '100%': { transform: 'translateY(0)', opacity: 1 },
        },
      },
      animation: {
        fadeInUp: 'fadeInUp 0.5s ease-out',
      },
    }
  },
  plugins: [],
}

=======

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./src/components/**/*.{js,jsx,ts,tsx}",
    "./src/Screens/**/*.{js,jsx,ts,tsx}",
    "./src/assets/**/*.{js,jsx,ts,tsx,png,jpg,jpeg,svg,gif}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#0B2464',
        'custom-blue': '#1059b7',
        'custom-word':'#406594',
        'custom-footcolor':'#294E95',
      },
      keyframes: {
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'bottom-to-top': {
          '0%': { transform: 'translateY(100%)', opacity: 0 },
          '100%': { transform: 'translateY(0)', opacity: 1 },
        },
      },
      animation: {
        fadeInUp: 'fadeInUp 0.5s ease-out',
      },
    }
  },
  plugins: [],
}

>>>>>>> bc10b2e43c35a9f46b7b6372e526e75bfbf8d47c
