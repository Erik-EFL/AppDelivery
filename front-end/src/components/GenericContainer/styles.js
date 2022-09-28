import styled from 'styled-components';
import themes from '../themes/themes';

export const Container = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  margin-top: .5rem;
  flex-direction: column;

  header {
    width: 80%;
    margin: 0 auto;
    padding: 16px;
    font-size: ${themes.typography.textSize.lg};
  }

  main {
    position: relative;
    width: 80%;
    margin: 0 auto;
    margin-bottom: 4rem;
    height: 77vh;
    background: ${themes.bgPrimary.white};
    border: 1px solid ${themes.bgPrimary.gray};
    box-shadow: 0px 4px 4px ${themes.bgPrimary.blackShadow};
  }
`;

export const OrderDetails = styled.table`
  background-color: ${themes.bgPrimary.lightGray};
  justify-content: space-between;
  width: 100%;
  justify-content: center;
  align-content: center;
  align-items: baseline;
  padding: .5rem;

  .peopleName {
    margin-left: 5px;

    display: flex;
    flex-direction: row;
  }

  .date {
    display: block;
    height: 2.63rem;
    width: 13.2rem;
    border-radius: .5rem;
    background-color: ${themes.bgPrimary.iceWhite};
  }
`;

export const TH3 = styled.h3`
  font-size: 2rem;
  font-family: 'Roboto', sans-serif;
  font-weight: 700;
`;

export const TSPAN = styled.span`
  width: 30rem;
  font-size: 2rem;
  font-family: 'Roboto', sans-serif;
  font-weight: 400;
`;

export const Box = styled.div`
  display: flex;
  justify-content: space-between;
  width: 90%;
  flex-direction: ${(props) => (props.direction === 'row' ? 'row' : 'column')};
  padding: .5rem;
`;
