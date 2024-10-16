import { SvgIcon } from '@mui/material';
import { ReactNode } from 'react';

export type MuiIcon = typeof SvgIcon;

export type SelectableOption<T> = {
  icon: MuiIcon;
  label: string;
  value: T;
};

export type NavbarLinkConfig = {
  label: string;
  route: string;
  icon: MuiIcon;
};

export type AuthedScreenContainerProps = {
  children: ReactNode;
  title?: string;
  actionItem?: ReactNode;
};
