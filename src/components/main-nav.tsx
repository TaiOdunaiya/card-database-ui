import { cn } from '@/lib/utils';
import { Link } from '@/components/ui/link';
import { Car as Cards, LayoutDashboard, Library, Scale, Search, Store } from 'lucide-react';

export function MainNav({
  className,
  ...props
}: React.HTMLAttributes<HTMLElement>) {
  return (
    <nav
      className={cn('flex items-center space-x-4 lg:space-x-6', className)}
      {...props}
    >
      <Link
        href="/"
        className="text-sm font-medium transition-colors hover:text-primary"
      >
        <LayoutDashboard className="h-4 w-4" />
        <span className="ml-2">Dashboard</span>
      </Link>
      <Link
        href="/library"
        className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
      >
        <Library className="h-4 w-4" />
        <span className="ml-2">Library</span>
      </Link>
      <Link
        href="/decks"
        className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
      >
        <Cards className="h-4 w-4" />
        <span className="ml-2">Decks</span>
      </Link>
      <Link
        href="/grading"
        className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
      >
        <Scale className="h-4 w-4" />
        <span className="ml-2">Grading</span>
      </Link>
      <Link
        href="/trade"
        className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
      >
        <Store className="h-4 w-4" />
        <span className="ml-2">Trade</span>
      </Link>
    </nav>
  );
}