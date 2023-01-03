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
  .title {
    color: var(--primary-400);
    margin-right: 0.3rem;
    font-size: 1.25rem;
    text-decoration: underline;
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
  .btn {
    width: 80%;
    span {
      margin-right: 0.3rem;
    }
  }
`;

export default Wrapper;
