import { type ReactNode } from 'react';

import MantineProvider from './MantineProvider';
import TRPCProvider from './TrpcProvider';

interface ProvidersProps {
  children: ReactNode;
}

const Providers = ({ children }: ProvidersProps) => {
  return (
    <TRPCProvider>
      <MantineProvider>{children}</MantineProvider>
    </TRPCProvider>
  );
};

export default Providers;
