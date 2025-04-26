import React from 'react';
import { useTheme } from '../../../theme/ThemeProvider';
import { ThemeToggle } from '../theme-toggle/theme-toggle';

export interface ThemeExampleProps {
  /**
   * Optional CSS class name
   */
  className?: string;
}

/**
 * Component that demonstrates the use of theming in the application
 */
export const ThemeExample: React.FC<ThemeExampleProps> = ({ className = '' }) => {
  const { colorMode, theme } = useTheme();

  return (
    <div 
      className={`p-6 rounded-lg shadow-md ${className}`}
    >
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-xl font-semibold">Theme Example</h3>
        <ThemeToggle />
      </div>
      
      <div className="space-y-4 mb-6">
        <p>Current theme: <strong>{colorMode}</strong></p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <h4 className="font-medium">Background Colors</h4>
            <div className="flex flex-col gap-2">
              <div className="p-3 bg-background border border-border rounded">Primary Background</div>
              <div className="p-3 bg-card border border-border rounded">Card Background</div>
              <div className="p-3 bg-muted border border-border rounded">Muted Background</div>
            </div>
          </div>
          
          <div className="space-y-2">
            <h4 className="font-medium">Text Colors</h4>
            <div className="flex flex-col gap-2">
              <p className="text-foreground">Primary Text</p>
              <p className="text-muted-foreground">Muted Text</p>
              <p className="text-primary">Primary Brand Text</p>
              <p className="text-secondary">Secondary Brand Text</p>
            </div>
          </div>
        </div>
      </div>
      
      <div className="space-y-4">
        <h4 className="font-medium">Brand Colors</h4>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          <div className="bg-primary text-primary-foreground p-3 rounded">Primary</div>
          <div className="bg-secondary text-secondary-foreground p-3 rounded">Secondary</div>
          <div className="bg-destructive text-destructive-foreground p-3 rounded">Destructive</div>
          <div className="bg-success text-success-foreground p-3 rounded">Success</div>
        </div>
      </div>
    </div>
  );
}; 