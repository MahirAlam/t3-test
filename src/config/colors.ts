import tailwindColors from 'tailwindcss/colors';

/**
 * Extend default Tailwind color palette with missing Mantine colors
 * NOTE: Mantine supports only 10 colors in each color-shade
 */
const colors = {
  ...tailwindColors,
  // Mantine colors, that's missing in tw palette
  dark: {
    50: '#F2F2F2',
    100: '#E6E6E6',
    200: '#CCCCCC',
    300: '#B0B0B0',
    400: '#969696',
    500: '#7D7D7D',
    600: '#636363',
    700: '#474747',
    800: '#2E2E2E',
    900: '#141414',
  },
  grape: {
    50: '#f8f0fc',
    100: '#f3d9fa',
    200: '#eebefa',
    300: '#e599f7',
    400: '#da77f2',
    500: '#cc5de8',
    600: '#be4bdb',
    700: '#ae3ec9',
    800: '#9c36b5',
    900: '#862e9c',
  },
  // Override some Tailwind colors
  amber: {
    // https://tailwind.simeongriggs.dev/amber/FFDA7C
    50: '#fffbf0',
    100: '#fff8e5',
    200: '#fff1cc',
    300: '#ffe9b3',
    400: '#ffe194',
    500: '#ffda7c', // primary
    600: '#ffc42e',
    700: '#e6a400',
    800: '#996e00',
    900: '#4d3700',
  },
  green: {
    // https://tailwind.simeongriggs.dev/green/58DD4D
    50: '#f3fdf2',
    100: '#e7fae5',
    200: '#cbf4c7',
    300: '#abeea5',
    400: '#83e67a',
    500: '#58dd4d',
    600: '#34c926',
    700: '#2eb422',
    800: '#27961d',
    900: '#1c6b14',
  },
  rose: {
    // https://tailwind.simeongriggs.dev/red/FE7375 (lightness, min: 15)
    50: '#fff0f0',
    100: '#ffe1e1',
    200: '#ffc7c8',
    300: '#fea9aa',
    400: '#fe9091',
    500: '#fe7375',
    600: '#fe393d',
    700: '#f80206',
    800: '#c00105',
    900: '#840103',
  },
};

export default colors;
