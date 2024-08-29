/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/lib/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {},
  },
  plugins: [],
  corePlugins: {
    preflight: false,
  },
  prefix: 'nako-',
};
