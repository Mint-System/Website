/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./content/**/*.md", "./layouts/**/*.html", "./assets/**/*.css", "./partials/**/*.html"],
  theme: {
    extend: {
      container: {
        center: true,
        padding: '1rem',
        screens: {
          'sm': '100%',
          'md': '100%',
          'lg': '1140px',
          'xl': '1140px',
        },
      },
      fontFamily: {
        'rubrikBold': ['RubrikEdgeNew Bold', 'sans-serif'],
        'rubrikRegular': ['RubrikEdgeNew Regular', 'sans-serif'],
        'rubrikLight': ['RubrikEdgeNew Light', 'sans-serif'],
      },
      colors: {
        // Custom colors using CSS variables
        primary: 'var(--primary-color)',
        secondary: 'var(--secondary-color)',
        'text-dark': 'var(--text-dark-color)',
        'text-normal': 'var(--text-normal-color)',
        'text-light': 'var(--text-light-color)',
        'text-grey': 'var(--text-grey-color)',
        'text-inverted': 'var(--text-inverted-color)',
        shadow: 'var(--shadow-hue)',
        button: {
          DEFAULT: 'var(--button-background-color)',
          hover: 'var(--button-background-hover-color)',
          transparent: 'var(--button-background-transparent-color)',
        },
        link: {
          active: 'var(--link-active-color)',
          hover: 'var(--link-hover-color)',
          border: 'var(--link-border-color)',
          'border-active': 'var(--link-border-active-color)',
          'border-hover': 'var(--link-border-hover-color)',
          dot: 'var(--link-dot-color)',
          'dot-hover': 'var(--link-dot-hover-color)',
        },
        form: {
          'input-border': 'var(--form-input-border-color)',
          'input-focus': 'var(--form-input-focus-hue)',
        },
      },
      spacing: {
        // Spacing values using CSS variables
        xs: 'var(--padding-xs)', // or use as margin: 'var(--margin-xs)'
        sm: 'var(--padding-sm)',
        md: 'var(--padding-md)',
        lg: 'var(--padding-lg)',
        xl: 'var(--padding-xl)',
      },
      borderRadius: {
        // Border radius values using CSS variables
        DEFAULT: 'var(--default-border-radius)',
        image: 'var(--image-border-radius)',
        button: 'var(--button-border-radius)',
        form: 'var(--form-input-border-radius)',
      },
      fontSize: {
        // Font sizes using CSS variables
        h1: 'var(--font-size-header1)',
        h2: 'var(--font-size-header2)',
        h3: 'var(--font-size-header3)',
        h4: 'var(--font-size-header4)',
        h5: 'var(--font-size-header5)',
        h6: 'var(--font-size-header6)',
        text: 'var(--font-size-text)',
        'text-sm': 'var(--font-size-text-small)',
        nav: 'var(--font-size-nav)',
        button: 'var(--font-size-button)',
      },
      height: {
        // Custom heights using CSS variables
        'navbar-odoo': 'var(--odoo-navbar-height)',
        navbar: 'var(--navbar-height)',
      },
    },
    screens: {
      xs: { min: 'var(--breakpoint-min-xs)' },
      sm: { min: 'var(--breakpoint-min-sm)' },
      md: { min: 'var(--breakpoint-min-md)' },
      lg: { min: 'var(--breakpoint-min-lg)' },
      xl: { max: 'var(--breakpoint-min-xl)' },
      'max-xs': { max: 'var(--breakpoint-max-xs)' },
      'max-sm': { max: 'var(--breakpoint-max-sm)' },
      'max-md': { max: 'var(--breakpoint-max-md)' },
      'max-lg': { max: 'var(--breakpoint-max-lg)' },
      'max-xl': { max: 'var(--breakpoint-max-xl)' },
    },
  },
  plugins: [],
};