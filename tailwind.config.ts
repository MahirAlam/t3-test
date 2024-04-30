import { type Config } from 'tailwindcss';

import colors from './src/config/colors';

export default {
  content: ['./src/**/*.tsx'],
  theme: {
    colors,
    extend: {
      animation: {
        'blink-fast': 'blink 1s linear infinite',
      },
      keyframes: {
        blink: {
          '50%': {
            fill: 'transparent',
          },
        },
      },
    },
  },
  corePlugins: {
    preflight: false,
  },
  darkMode: ['class', '[data-mantine-color-scheme="dark"]'],
  daisyui: {
    themes: [],
  },
  plugins: [require('daisyui')],
} satisfies Config;
