import { SvgIcon } from '@mui/material';

export type MuiIcon = typeof SvgIcon;

export type SelectableOption<T> = {
  icon: MuiIcon;
  label: string;
  value: T;
};
