/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        screens: {
            'sm': '640px',
            // => @media (min-width: 640px) { ... }

            'md': '768px',
            // => @media (min-width: 768px) { ... }

            'lg': '1366px',
            // => @media (min-width: 1024px) { ... }

            'xl': '1280px',
            // => @media (min-width: 1280px) { ... }

            '2xl': '1536px',
            // => @media (min-width: 1536px) { ... }
        },
        extend: {
            fontFamily: {
                'bullpen': ['bullpen', 'serif'],
                'kalam': ['kalam', 'sans-serif'],
                'homemade': ['homemade', 'serif'],
                'darumadrop': ['darumadrop', 'sans-serif'],
                'londrina': ['londrina', 'sans-serif'],
                'titan': ['titan', 'sans-serif']
            },
            dropShadow: {
                'custom': '1px 4px 3px rgba(100, 102, 292, 0.5)',
                'customm': '1px 4px 3px rgba(200, 202, 292, 0.5)',
                'customimg': '-6px -6px 0px #DDDDDD',
                'customimg2': '6px 6px 0px #DDDDDD',
                'customimgg': '-8px -8px 0px #DDDDDD',
                'customimg22': '8px 8px 0px #DDDDDD',
                'custom2': '1px 4px 3px #DDDDDD',
                'customshadow': '3px 3px 2px #DDDDDD',
                'custom3': '1px 3px 2px #6e723a',

            },
            backgroundImage: {
                'custom-gradient': 'linear-gradient(90deg,rgba(214,139,219,0.9010197829131653) 31%, rgba(148,146,233,0.8085828081232493) 100%)',
            },
        },
    },
    plugins: [],
}