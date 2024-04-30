import { type MantineColorsTuple, createTheme, em } from '@mantine/core';

import colors from '@/config/colors';
import { PrimaryColor } from '@/config/siteSettings';

type CustomColors = keyof typeof colors;

declare module '@mantine/core' {
  export interface MantineThemeColorsOverride {
    colors: Record<CustomColors, MantineColorsTuple>;
  }
}

const mantineColors = Object.fromEntries(
  Object.entries(colors)
    .filter(([v]) => typeof v !== 'string')
    .map(([k, v]) => [k, Object.values(v)]),
);
// Do not forget to pass theme to MantineProvider
export const theme = createTheme({
  primaryColor: PrimaryColor(),
  colors: mantineColors,
  breakpoints: {
    sm: em('480px'),
    // => @media (min-width: 480px) { ... }

    md: em('768px'),
    // => @media (min-width: 768px) { ... }

    lg: em('1024px'),
    // => @media (min-width: 1024px) { ... }

    xl: em('1280px'),
    // => @media (min-width: 1280px) { ... }
  },
});
