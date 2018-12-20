import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  html,
  body {
  	font-family: 'Titillium Web', sans-serif;
    height: 100%;
    width: 100%;
    background: #272E35;
    padding: 20px;
  }
  
  #app {
    min-height: 100%;
    min-width: 100%;
  }

  p,
  label {
    font-family: Georgia, Times, 'Times New Roman', serif;
    line-height: 1.5em;
  },
  * {
    margin: 0;
    padding: 0;
  }

  body {
      color: white;
      font-weight: bold;
      padding: 0 3rem 1rem 3rem;
  }
  
  a {
      color: #ff6e00;
      text-decoration: none;
  }
  
  a:hover {
      text-decoration: underline;
  }
  
  h1 {
      text-align: center;
      margin: 1.5rem auto 1rem;
      font-family: 'Josefin Sans', Serif;
      font-weight: normal;
      font-size: 3rem;
      color: #aaa;
  }
  
  p {
      line-height: 1.5;
  }
  
  .infos {
      text-align: center;
      margin-bottom: 1rem;
  }
  
  #zoomStart, #zoomEnd {
      display: inline-block;
      font-feature-settings: "tnum";
      font-variant-numeric: tabular-nums;
  }
  
  #zoomStart {
      text-align: right;
  }
  
  #zoomEnd {
      text-align: left;
  }
  
  .drop {
      cursor: pointer;
      &:hover {
        stroke: #b8b8a3;
        stroke-width: 1px;
        z-index: 999;
      }
      
  }
  
  .bound {
    font-size: 12px;
    color: #6EEDBC;
  }
  
  .axis {
    color: #a2a2a2;
    font-family: 'Titillium Web', sans-serif;
  }
  
  footer p {
      text-align: center;
      color: #888;
      font-size: .8rem;
  }

`;

export default GlobalStyle;
