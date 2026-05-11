/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#3D7A3A',
        'primary-light': '#5A9E56',
        'primary-dark': '#2C5A2A',
        accent: '#F5A623',
        'bg-cream': '#F9F6EF',
        'bg-light': '#F4FAF0',
        'text-dark': '#1A1A1A',
        'text-gray': '#6B7280',
        'card-bg': '#FFFFFF',
      },
      fontFamily: {
        heading: ['Playfair Display', 'Georgia', 'serif'],
        body: ['DM Sans', 'sans-serif'],
      },
      boxShadow: {
        card: '0 4px 24px rgba(61, 122, 58, 0.10)',
        'card-hover': '0 8px 32px rgba(61, 122, 58, 0.18)',
      },
    },
  },
  plugins: [],
}
