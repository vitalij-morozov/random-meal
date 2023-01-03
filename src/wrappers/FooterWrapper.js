import styled from 'styled-components';

const Wrapper = styled.footer`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: var(--black);
  color: var(--grey-50);
  margin-top: 2%;
  padding: 1.3rem 0;
  p {
    margin: 0;
    text-align: center;
    width: 50%;
  }
  a {
    color: var(--primary-600);
    transition: var(--transition);
    margin-left: 0.5rem;
  }
  a:hover {
    color: var(--primary-400);
  }
`;
export default Wrapper;
