import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 260px;
  h4,
  h5 {
    margin: 0;
    font-weight: 700;
  }
  a {
    color: blue;
    transition: var(--transition);
    font-size: 1.1rem;
  }
  a:hover {
    color: var(--primary-600);
  }
  p {
    margin: 0;
    padding: 0;
    border: none;
  }
`;

export default Wrapper;
