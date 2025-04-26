export type ColorMode = 'light' | 'dark';

// Brand color palette
export const brandColors = {
  primary: {
    50: '#f0f9ff',
    100: '#e0f2fe',
    200: '#bae6fd',
    300: '#7dd3fc',
    400: '#38bdf8',
    500: '#0ea5e9',
    600: '#0284c7',
    700: '#0369a1',
    800: '#075985',
    900: '#0c4a6e',
    950: '#082f49',
  },
  secondary: {
    50: '#f5f3ff',
    100: '#ede9fe',
    200: '#ddd6fe',
    300: '#c4b5fd',
    400: '#a78bfa',
    500: '#8b5cf6',
    600: '#7c3aed',
    700: '#6d28d9',
    800: '#5b21b6',
    900: '#4c1d95',
    950: '#2e1065',
  },
  neutral: {
    50: '#f8fafc',
    100: '#f1f5f9',
    200: '#e2e8f0',
    300: '#cbd5e1',
    400: '#94a3b8',
    500: '#64748b',
    600: '#475569',
    700: '#334155',
    800: '#1e293b',
    900: '#0f172a',
    950: '#020617',
  },
};

// Semantic tokens for light mode
export const lightTheme = {
  background: {
    primary: brandColors.neutral[50],
    secondary: brandColors.neutral[100],
    tertiary: brandColors.neutral[200],
  },
  foreground: {
    primary: brandColors.neutral[900],
    secondary: brandColors.neutral[700],
    tertiary: brandColors.neutral[500],
    disabled: brandColors.neutral[400],
  },
  border: {
    default: brandColors.neutral[200],
    focus: brandColors.primary[500],
    hover: brandColors.neutral[300],
  },
  action: {
    primary: brandColors.primary[600],
    primaryHover: brandColors.primary[700],
    secondary: brandColors.secondary[600],
    secondaryHover: brandColors.secondary[700],
    disabled: brandColors.neutral[300],
  },
  feedback: {
    success: '#10b981',
    warning: '#f59e0b',
    error: '#ef4444',
    info: '#3b82f6',
  },
};

// Semantic tokens for dark mode
export const darkTheme = {
  background: {
    primary: brandColors.neutral[950],
    secondary: brandColors.neutral[900],
    tertiary: brandColors.neutral[800],
  },
  foreground: {
    primary: brandColors.neutral[50],
    secondary: brandColors.neutral[200],
    tertiary: brandColors.neutral[400],
    disabled: brandColors.neutral[600],
  },
  border: {
    default: brandColors.neutral[700],
    focus: brandColors.primary[400],
    hover: brandColors.neutral[600],
  },
  action: {
    primary: brandColors.primary[500],
    primaryHover: brandColors.primary[400],
    secondary: brandColors.secondary[500],
    secondaryHover: brandColors.secondary[400],
    disabled: brandColors.neutral[700],
  },
  feedback: {
    success: '#059669',
    warning: '#d97706',
    error: '#dc2626',
    info: '#2563eb',
  },
};

// Typography tokens
export const typography = {
  fontFamily: {
    sans: 'Inter, system-ui, sans-serif',
    heading: 'Inter, system-ui, sans-serif',
    mono: 'monospace',
  },
  fontSize: {
    xs: '0.75rem',    // 12px
    sm: '0.875rem',   // 14px
    base: '1rem',     // 16px
    lg: '1.125rem',   // 18px
    xl: '1.25rem',    // 20px
    '2xl': '1.5rem',  // 24px
    '3xl': '1.875rem', // 30px
    '4xl': '2.25rem',  // 36px
    '5xl': '3rem',     // 48px
    '6xl': '3.75rem',  // 60px
  },
  fontWeight: {
    thin: '100',
    extralight: '200',
    light: '300',
    normal: '400',
    medium: '500',
    semibold: '600',
    bold: '700',
    extrabold: '800',
    black: '900',
  },
  lineHeight: {
    none: '1',
    tight: '1.25',
    snug: '1.375',
    normal: '1.5',
    relaxed: '1.625',
    loose: '2',
  },
  letterSpacing: {
    tighter: '-0.05em',
    tight: '-0.025em',
    normal: '0',
    wide: '0.025em',
    wider: '0.05em',
    widest: '0.1em',
  },
}; 