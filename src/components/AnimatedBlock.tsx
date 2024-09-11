import { motion, AnimationProps } from 'framer-motion';
import { ReactNode } from 'react';

type AnimatedBlockProps<T extends keyof JSX.IntrinsicElements> =
  JSX.IntrinsicElements[T] & {
    children?: ReactNode;
    tag?: keyof JSX.IntrinsicElements;
    className?: string;
    animationProps?: AnimationProps;
  };

const AnimatedBlock = <T extends keyof JSX.IntrinsicElements>({
  tag = 'div',
  children,
  animationProps = {},
  className,
  ...rest
}: AnimatedBlockProps<T>) => {
  const MotionTag = motion(tag);

  return (
    <MotionTag className={className} {...animationProps} {...rest}>
      {children}
    </MotionTag>
  );
};

export default AnimatedBlock;
