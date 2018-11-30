import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  html,
  body {
    height: 100%;
    width: 100%;
  }

  body {
    font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
  }

  body.fontLoaded {
    font-family: 'Open Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;
  }

  #app {
    background-color: #fafafa;
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
    font-size: 16px;
    color: #222;
    background: #eee;
    padding: 0 3rem 1rem 3rem;
    font-family: 'Muli', 'sans serif';
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

.light {
    color: #AAA;
}

.drop {
    cursor: pointer;
}

footer p {
    text-align: center;
    color: #888;
    font-size: .8rem;
}

`;

export default GlobalStyle;
