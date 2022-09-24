import styled from 'styled-components';
import themes from '../themes/themes';

export const Container = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;

  header {
    width: 80%;
    margin: 0 auto;
    padding: 16px;
    font-size: ${themes.typography.textSize.lg};

  }

  main {
    position: relative;
    width: 90%;
    margin: 0 auto;
    margin-bottom: 4rem;
    height: 70.45rem;
    background: ${themes.bgPrimary.white};
    border: 1px solid ${themes.bgPrimary.gray};
    box-shadow: 0px 4px 4px ${themes.bgPrimary.blackShadow};
  }
`;

const userRoleDefine = (role) => {
  switch (role) {
  case 'vendedor':
    return `
        repeat(5, 1fr)
      `;
  default:
    return `
        repeat(4, 1fr)
      `;
  }
};

export const OrderDetails = styled.table`
/*   display: grid;
  grid-template-columns: ${(props) => userRoleDefine(props.repeat)}; */

  background-color: ${themes.bgPrimary.lightGray};
  justify-content: space-between;
  width: 100%;
  justify-content: center;
  align-content: center;
  align-items: baseline;
  padding: .5rem;

  .peopleName {
    display: flex;
    flex-direction: row;
    margin-left: 1rem;
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
  display: inline;
  font-size: 2rem;
  font-family: 'Roboto', sans-serif;
  font-weight: 700;
`;

export const TSPAN = styled.span`
  margin-left: 1.2rem;
  font-family: 'Roboto', sans-serif;
  font-weight: 400;
`;
