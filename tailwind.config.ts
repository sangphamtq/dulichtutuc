// tailwind.config.ts
import type { Config } from 'tailwindcss';

const config: Config = {
    content: ['./src/**/*.{ts,tsx}'],
    theme: {
        extend: {
            colors: {
                // --- Ramps ---
                primary: {
                    DEFAULT: '#059669',
                    50: '#eaf7f0',
                    100: '#b8e8d0',
                    200: '#7dcfaa',
                    300: '#3dae80',
                    400: '#059669', // primary
                    500: '#047857',
                    600: '#065f46',
                    700: '#064e3b',
                    800: '#043a2c',
                    900: '#022619',
                },
                ocean: {
                    50: '#e0f4fb',
                    100: '#b3e5f8',
                    200: '#7dd3f0',
                    300: '#38bdf8',
                    400: '#0ea5e9', // secondary
                    500: '#0284c7',
                    600: '#0369a1',
                    700: '#075985',
                    800: '#0c4a6e',
                    900: '#082f49',
                },
                sunset: {
                    50: '#fff7e6',
                    100: '#fde68a',
                    200: '#fbbf24',
                    300: '#f59e0b', // accent
                    400: '#d97706',
                    500: '#b45309',
                    600: '#92400e',
                    700: '#78350f',
                    800: '#5c2800',
                    900: '#3d1a00',
                },
                coral: {
                    50: '#fff0ed',
                    100: '#ffd0c4',
                    200: '#ffaa93',
                    300: '#ff7c5c',
                    400: '#f05035',
                    500: '#c93d24',
                    600: '#a62d17',
                    700: '#84210e',
                    800: '#611507',
                    900: '#3e0c03',
                },
                stone: {
                    50: '#f8f7f4', // background
                    100: '#eceae3',
                    200: '#d6d3c8',
                    300: '#b3afa3',
                    400: '#857f74',
                    500: '#605a50', // subtext / link
                    600: '#4a4540',
                    700: '#35302c',
                    800: '#231f1c',
                    900: '#131110', // text
                },

                // --- Semantic tokens ---
                //primary: '#059669', // forest-400
                secondary: '#0ea5e9', // ocean-400
                accent: '#f59e0b', // sunset-300
                link: '#605a50', // stone-500
                'link-hover': '#35302c', // stone-700
                subtext: '#605a50', // stone-500
            },

            backgroundColor: {
                page: '#f8f7f4', // stone-50
                surface: '#ffffff',
            },
        },
    },
    plugins: [],
};

export default config;
