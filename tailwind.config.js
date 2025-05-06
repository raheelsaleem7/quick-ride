/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './src/**/*.{js,ts,jsx,tsx}', // Your own components
        './node_modules/@shadcn/ui/**/*.{js,ts,jsx,tsx}' // ShadCN UI's components
    ],
    theme: {
        extend: {
            fontFamily: {
                montserrat: ['var(--font-montserrat)', 'sans-serif']
            }
        }
    },
    plugins: []
};
