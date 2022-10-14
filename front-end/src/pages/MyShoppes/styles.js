import styled from 'styled-components';
import themes from '../../components/themes/themes';

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  max-width: 1000px;
  margin: 0 auto;
  margin-top: 50px;
  row-gap: 30px;
  column-gap: 20px;

  @media (max-width: 768px) {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  a {
    text-decoration: none;
    color: ${themes.typography.textColor.black};
  }
`;

export const Box = styled.div``;
