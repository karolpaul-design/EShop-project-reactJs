import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
*{
  margin: 0;
  box-sizing: border-box;
  
}
body {
  font-family: 'Open Sans Condensed';
  padding: 20px 50px;
  background: linear-gradient(to right,rgb(130 201 201),rgb(205 221 225));
  @media screen and (max-width: 800px){
      padding: 10px;
  }
}
a{
  text-decoration: none;
  color: black;
}

`;
