/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./content/**/*.md", "./layouts/**/*.html", "./assets/**/*.css", "./partials/**/*.html"],
  theme: {
    extend: {
      container: {
        center: true,
        padding: '1rem',
      },
      fontFamily: {
        'rubrikBold': ['RubrikEdgeNew Bold', 'sans-serif'],
        'rubrikRegular': ['RubrikEdgeNew Regular', 'sans-serif'],
        'rubrikLight': ['RubrikEdgeNew Light', 'sans-serif'],
      },
      colors: {
        primary: 'var(--primary-color)',
        secondary: 'var(--secondary-color)',
        footer: 'var(--secondary-color)',
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
        'navbar-odoo': 'var(--odoo-navbar-height)',
        navbar: 'var(--navbar-height)',
      },
      backgroundImage: {
        'custom-gradient': 'linear-gradient(rgba(0, 0, 0, 0.5) 0%, rgba(0, 0, 0, 0.369) 19%, rgba(0, 0, 0, 0.2705) 34%, rgba(0, 0, 0, 0.191) 47%, rgba(0, 0, 0, 0.139) 56.5%, rgba(0, 0, 0, 0.097) 65%, rgba(0, 0, 0, 0.063) 73%, rgba(0, 0, 0, 0.0375) 80.2%, rgba(0, 0, 0, 0.021) 86.1%, rgba(0, 0, 0, 0.0105) 91%, rgba(0, 0, 0, 0.004) 95.2%, rgba(0, 0, 0, 0.001) 98.2%, rgba(0, 0, 0, 0) 100%)'
      },
      aspectRatio: {
        '4/3': '4 / 3',
      },
    },
    screens: {
      xs: '576px',
      sm: '640px',
      md: '768px',
      lg: '992px',
      xl: '1200px',
    },
  },
  plugins: [],
};