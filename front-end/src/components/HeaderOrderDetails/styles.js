import styled from 'styled-components';
import themes from '../themes/themes';

export const OrderDetails = styled.section`
  position: relative;
  box-sizing: border-box;
  background-color: ${themes.bgPrimary.lightGray};
  justify-content: space-between;
  width: 100%;
  justify-content: center;
  align-content: center;
  align-items: baseline;
  padding: .5rem;

  .peopleName {
    margin-left: 5px;
    width: 70%;
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 10px;
  }

  .date {
    display: block;
    text-align: center;
    height: 2.63rem;
    width: 13.2rem;
    border-radius: .5rem;
    background-color: ${themes.bgPrimary.iceWhite};
    font-size: 2rem;
    font-weight: 700;
  }

  .leftContainer {
    font-family: 'Roboto', sans-serif;
    font-size: 2rem;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    gap: 10px;

    .badgesContainer {
      gap: 15px;
      display: flex;
      flex-direction: row;
      align-items: center;
    }
  }
`;

export const TH3 = styled.h3`
  font-family: 'Roboto', sans-serif;
  font-weight: 700;
`;

export const TSPAN = styled.span`
  font-size: 2rem;
  font-weight: 400;
`;
