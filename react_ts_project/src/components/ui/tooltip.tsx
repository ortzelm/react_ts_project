// src/components/ui/tooltip.tsx
import { Tooltip } from '@chakra-ui/react';
import { ReactNode } from 'react';

type Props = {
  label: string;
  children: ReactNode;
};

const CustomTooltip = ({ label, children }: Props) => {
  return (
    <Tooltip label={label} hasArrow>
      {children}
    </Tooltip>
  );
};

export default CustomTooltip;