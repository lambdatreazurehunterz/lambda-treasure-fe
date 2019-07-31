import { media } from './helpers';

const colors = {
  cream: 'hsl(39, 77%, 95%)',
  darkCream: 'hsl(39, 86%, 84%)',
  offBlack: '#222',
  orange: 'hsl(18, 84%, 44%)',
  gold: '#ffcf40'
};

const theme = {
  colors: {
    ...colors,
    background: colors.cream,
    foreground: colors.offBlack,
    primary: colors.orange
  },
  backgroundGradient: `radial-gradient(ellipse at center, transparent 50%, ${
    colors.darkCream
  } 100%);`,
  inputBorderRadius: `0.5rem`,
  font: "'Alegreya Sans', sans-serif",
  headingFont: "'Passion One', sans-serif",
  hudShadow: '0.25rem 0.25rem 1rem rgba(0, 0, 0, 0.2)',
  media
};

export default theme;
