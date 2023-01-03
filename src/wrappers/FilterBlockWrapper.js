import styled from 'styled-components';

const Wrapper = styled.section`
  width: 440px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 1.5%;
  margin-bottom: 1.3rem;

  h3 {
    text-align: center;
    padding-bottom: 1rem;
    border-bottom: 2px solid var(--grey-200);
  }
  .form-row {
    width: 70%;
  }
  select {
    width: 100%;
    padding: 0.3rem;
    font-family: inherit;
    font-size: 1.2rem;
  }

  button {
    width: 70%;
    svg {
      font-size: 1.5rem;
      margin-left: 0.4rem;
    }
  }

  @media screen and (max-width: 662px) {
    width: 100%;
    margin: 1rem;
  }
`;
export default Wrapper;
