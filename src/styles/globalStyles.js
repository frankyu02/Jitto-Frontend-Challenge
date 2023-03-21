const { createGlobalStyle } = require("styled-components");

const GlobalStyles = createGlobalStyle`
:root {
    --background-primary: #cb6ce6;
    --background-secondary: #ffde59;
}


html,
body {
  max-width: 100vw;
  overflow-x: hidden;
  background: white;
  color: black;
}



`;
export default GlobalStyles;
