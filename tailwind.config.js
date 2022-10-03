/** @type {import('tailwindcss').Config} */
module.exports = {
    // content: ["./src/**/*.{html,js}"],
    content: ["./src/**/*.{html,js}", "./index.html", "./components/**/*.{html,js}",
        './pages/**/*.{html,js}'
    ],
    theme: {
        extend: {},
    },
    plugins: [],
}