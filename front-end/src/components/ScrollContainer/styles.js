import styled from 'styled-components';
import themes from '../themes/themes';

const ScrollContainer = styled.div`
  margin: 0 auto;
  width: 98%;
  height: 65%;
  overflow-y: scroll;

  /* Works on Firefox */
  scrollbar-width: thin;
  scrollbar-color: blue orange;

  /* Works on Chrome, Edge, and Safari */
  &::-webkit-scrollbar {
    width: 12px;
  }

  &::-webkit-scrollbar-track {
    border-radius: 20px;
  }

  &::-webkit-scrollbar-thumb {
    background-color: ${themes.bgPrimary.gray};
    border-radius: 20px;
    border: 3px solid ${themes.bgPrimary.violet};
  }
`;

export default ScrollContainer;
