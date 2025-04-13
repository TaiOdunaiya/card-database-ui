import { cn } from '@/lib/utils';

interface LinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  href: string;
  children: React.ReactNode;
}

export function Link({ href, children, className, ...props }: LinkProps) {
  return (
    <a
      href={href}
      className={cn(
        'flex items-center text-sm font-medium text-muted-foreground transition-colors hover:text-primary',
        className
      )}
      {...props}
    >
      {children}
    </a>
  );
}