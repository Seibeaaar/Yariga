import { motion } from 'framer-motion';
import { ReactNode } from 'react';

type AnimatedBlockProps<T extends keyof JSX.IntrinsicElements> =
  JSX.IntrinsicElements[T] & {
    children: ReactNode;
    animated?: boolean;
    tag?: keyof JSX.IntrinsicElements;
    initial?: object;
    animate?: object;
    duration?: number;
    delay?: number;
    className?: string;
  };

const AnimatedBlock = <T extends keyof JSX.IntrinsicElements>({
  animated = true,
  tag = 'div',
  children,
  initial = {},
  animate = {},
  duration = 0,
  delay = 0,
  className,
}: AnimatedBlockProps<T>) => {
  const MotionTag = motion(tag);
  const animationProps = animated
    ? {
        initial,
        animate,
        transition: { duration, delay },
      }
    : {};

  return (
    <MotionTag className={className} {...animationProps}>
      {children}
    </MotionTag>
  );
};

export default AnimatedBlock;
