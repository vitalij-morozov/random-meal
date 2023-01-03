import styled from 'styled-components';

const Wrapper = styled.div`
  width: 640px;
  margin-bottom: 2%;
  .ingr {
    padding: 0.5rem 0;
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    border-bottom: 1px solid var(--grey-100);
  }
  .ingr-measure,
  .ingr-name {
    font-weight: 700;
  }
  @media (max-width: 662px) {
    width: 100%;
  }
`;
export default Wrapper;
