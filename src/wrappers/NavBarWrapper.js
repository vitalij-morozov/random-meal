import styled from 'styled-components';

const Wrapper = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: var(--primary-100);
  padding: 0.4rem 4%;

  margin-bottom: 2%;
  .logo {
    width: 10rem;
  }
  .profile {
    border: 4px solid var(--primary-600);
    border-radius: 50%;
    padding: 2.5rem;
    margin-right: 3rem;
  }
  .auth-nav {
    background-color: var(--primary-400);
    padding: 0.7rem 1.3rem;
    border: none;
    font-family: inherit;
    letter-spacing: 1px;
    font-size: 1rem;
    border-radius: 10px;
    font-weight: bold;
    text-transform: uppercase;
    transition: var(--transition);
    cursor: pointer;
    color: var(--grey-100);
  }
  .auth-nav:hover {
    background-color: var(--primary-600);
  }
`;
export default Wrapper;
