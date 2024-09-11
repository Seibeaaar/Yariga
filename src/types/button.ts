import { ButtonHTMLAttributes } from 'react';

export type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  text: string;
  leftIcon?: string;
};

export type ButtonVariant = 'contained' | 'outlined' | 'text';
