import styled from 'styled-components';
import themes from '../themes/themes';

export const NavBarContainer = styled.div`
  width: 100%;
  height: 5rem;
  background-color: ${themes.bgPrimary.darkGreen};
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const UsernameTextContainer = styled.div`
  height: 90%;
  padding: 0.25rem 2rem;
  background-color: ${themes.bgPrimary.violet};
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const UsernameText = styled.p`
  font-size: 1.8rem;
  color: ${themes.typography.textColor.white};
  `;

export const SimpleButton = styled.a`
  font-size: 1.4rem;
  color: ${themes.typography.textColor.white};
  height: 90%;
  padding: ${(props) => (props.variant === 'logout' ? '0.25rem 2.5rem' : '0.25rem 4rem')};
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  background-color: ${(props) => (props.variant === 'logout'
    ? `${themes.bgPrimary.blue}`
    : `${themes.bgPrimary.darkGreen}`)};
`;

export const Box = styled.div`
  display: flex;
  height: 100%;
  flex-direction: ${(props) => (props.direction === 'row' ? 'row' : 'column')};
`;
