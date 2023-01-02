import styled from 'styled-components';

const Wrapper = styled.section`
  width: 440px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 3%;
  margin-bottom: 1.3rem;

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
  }
`;
export default Wrapper;
