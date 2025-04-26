import React, { ReactNode } from 'react';
import { ThemeToggle } from '../design-system/theme-toggle/theme-toggle';

interface PageLayoutProps {
  children: ReactNode;
}

export const PageLayout: React.FC<PageLayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen bg-background">
      <header className="border-b border-border">
        <div className="container mx-auto py-4 px-4 sm:px-6 flex justify-between items-center">
          <h1 className="text-lg font-semibold text-foreground">Design System</h1>
          <div className="flex items-center space-x-4">
            <ThemeToggle />
          </div>
        </div>
      </header>
      <main className="container mx-auto px-4 sm:px-6 py-6">
        {children}
      </main>
      <footer className="border-t border-border mt-auto">
        <div className="container mx-auto py-4 px-4 sm:px-6 text-center text-sm text-muted-foreground">
          <p>Design System © {new Date().getFullYear()}</p>
        </div>
      </footer>
    </div>
  );
};
 