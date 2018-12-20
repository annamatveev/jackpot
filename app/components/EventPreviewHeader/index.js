import React from 'react';
import MaterialIcon from 'material-icons-react';
import styled from 'styled-components';

const Header = styled.div`
  background: rgba(5, 211, 240, 0.2)
    linear-gradient(
      -90deg,
      rgba(38, 46, 54, 0) 3%,
      rgba(53, 64, 75, 0.51),
      #3b404d
    );
  padding: 16px;

  i {
    margin-right: 4px;
    vertical-align: sub;
  }
`;

function getIcon(word) {
  const iconMappings = { Mail: 'mail', Calendar: 'calendar' };
  return iconMappings[word];
}

export default ({ text }) => (
  <Header>
    <MaterialIcon icon={getIcon(text)} invert />
    <span>{text}</span>
  </Header>
);
