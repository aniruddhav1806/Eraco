'use client';

import { motion, HTMLMotionProps } from 'framer-motion';
import { cn } from '@/lib/utils';
import { ReactNode } from 'react';

interface ButtonProps extends Omit<HTMLMotionProps<'button'>, 'onAnimationStart' | 'onAnimationEnd'> {
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  children: ReactNode;
  className?: string;
}

export default function Button({
  variant = 'primary',
  size = 'md',
  children,
  className,
  ...props
}: ButtonProps) {
  const baseStyles = cn(
    'inline-flex items-center justify-center font-medium rounded-full transition-all duration-300',
    'focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2',
    'min-h-[44px] touch-manipulation', // Mobile-friendly touch target
    {
      'px-8 py-4 text-base': size === 'lg',
      'px-6 py-3 text-sm': size === 'md',
      'px-4 py-2 text-xs': size === 'sm',
    },
    {
      'bg-eraco-black text-white hover:bg-orange-500 btn-glow': variant === 'primary',
      'bg-white text-eraco-black border border-gray-200 hover:border-orange-500 hover:text-orange-500':
        variant === 'secondary',
      'bg-transparent text-eraco-black hover:text-orange-500': variant === 'outline',
    },
    className
  );

  return (
    <motion.button
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className={baseStyles}
      {...props}
    >
      {children}
    </motion.button>
  );
}
