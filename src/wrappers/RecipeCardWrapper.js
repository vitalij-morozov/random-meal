import styled from 'styled-components';

const Wrapper = styled.div`
  max-width: 500px;
  padding: 1rem 1.5rem;
  box-shadow: var(--shadow-3);
  background-color: var(--primary-800);
  border-radius: 1rem;
  h2 {
    font-size: 1.8rem;
    margin-bottom: 0.4rem;
    text-align: center;
    font-weight: bold;
  }
  img {
    width: 100%;
  }
  .buttons {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 0.7rem;
  }
  .card-link {
    padding: 0.5rem;
    width: 50%;
    font-size: 1rem;
    font-weight: 700;
    text-transform: uppercase;
    background-color: var(--primary-500);
    border: 1px solid var(--primary-500);
    color: var(--grey-100);
    letter-spacing: 0.1rem;
    cursor: pointer;
    transition: var(--transition);
  }
  .card-link:hover {
    background-color: var(--primary-600);
    border-color: var(--primary-600);
    color: var(--grey-50);
  }
`;

export default Wrapper;
