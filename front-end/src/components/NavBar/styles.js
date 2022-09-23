import styled from 'styled-components';

export const NavBarContainer = styled.div`
  width: 100%;
  height: 5rem;
  background-color: #036B52;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const UsernameTextContainer = styled.div`
  height: 90%;
  padding: 0.25rem 2rem;
  background-color: #421981;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const UsernameText = styled.p`
  font-size: 1.8rem;
  color: #F2FFFC;
  `;

export const SimpleButton = styled.a`
  font-size: 1.4rem;
  color: #F2FFFC;
  height: 90%;
  padding: ${(props) => (props.variant === 'logout' ? '0.25rem 2.5rem' : '0.25rem 4rem')};
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  background-color: ${(props) => (props.variant === 'logout' ? '#056CF9' : '#036B52')};
`;

export const Box = styled.div`
  display: flex;
  height: 100%;
  flex-direction: ${(props) => (props.direction === 'row' ? 'row' : 'column')};
`;
