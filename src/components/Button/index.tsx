import { FC } from 'react';
import { ButtonVariant, ButtonProps } from '@/types/button';
import OutlinedButton from './Outlined';
import TextButton from './Text';
import ContainedButton from './Contained';

type ButtonWrapperProps = ButtonProps & {
  variant?: ButtonVariant;
};

const Button: FC<ButtonWrapperProps> = (props) => {
  switch (props.variant) {
    case 'outlined':
      return <OutlinedButton {...props} />;
    case 'text':
      return <TextButton {...props} />;
    default:
      return <ContainedButton {...props} />;
  }
};

export default Button;
