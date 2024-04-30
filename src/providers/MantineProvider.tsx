import { MantineProvider as Provider } from '@mantine/core';

import { theme } from '@/lib/theme';
import '@mantine/core/styles.css';

export default function MantineProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Provider withCssVariables forceColorScheme="dark" theme={theme}>
      {children}
    </Provider>
  );
}
