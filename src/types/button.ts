import { ButtonHTMLAttributes, ReactNode } from 'react';

export type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  text: string;
  leftIcon?: ReactNode;
  className?: string;
};

export type ButtonVariant = 'contained' | 'outlined' | 'text';
