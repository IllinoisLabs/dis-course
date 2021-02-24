import { createGlobalStyle } from 'styled-components';

/**
 * Global styles
 */
const GlobalStyles = createGlobalStyle`
  body {
    font-family: ${({ theme }: any) => theme.fonts};
    color: ${({ theme }) => theme.text};
    margin: 0;
    padding: 0;

    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
`;

/**
 * Default theme variables
 */
const theme = {
  fonts:
    '"Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif;',
  // text colors
  text: '#232323',
  secondaryText: '#2323237D',
  // backgrounds
  background: '#FFFFFF',
  // palette
  orange: '#FF7426',
  blue: '#397BFC',
};

export default GlobalStyles;
export { theme };
