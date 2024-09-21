import { SvgIcon } from '@mui/material';

export type MuiIcon = typeof SvgIcon;

export type SelectableOption = {
  icon: MuiIcon;
  label: string;
};
