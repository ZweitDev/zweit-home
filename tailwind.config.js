/** @type {import('tailwindcss').Config} */
export default {
    content: ["./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            fontFamily: {
                sans: ["Inter", "system-ui", "sans-serif"],
                geist: ["Geist", "sans-serif"],
            },
            colors: {
                magenta: {
                    50: "#fdf2f8",
                    100: "#fce7f3",
                    200: "#fbcfe8",
                    300: "#f9a8d4",
                    400: "#f472b6",
                    500: "#9d174d",
                    600: "#831843",
                    700: "#6b1339",
                    800: "#500f2c",
                    900: "#3d0b22",
                },
            },
            animation: {
                "fade-in": "fadeIn 0.5s ease-in-out",
                "slide-up": "slideUp 0.5s ease-in-out",
            },
            keyframes: {
                fadeIn: {
                    "0%": { opacity: "0" },
                    "100%": { opacity: "1" },
                },
                slideUp: {
                    "0%": { transform: "translateY(20px)", opacity: "0" },
                    "100%": { transform: "translateY(0)", opacity: "1" },
                },
            },
        },
    },
    plugins: [],
};
