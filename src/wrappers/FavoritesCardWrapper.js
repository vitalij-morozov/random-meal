import styled from 'styled-components';

const Wrapper = styled.div`
  padding: 0.4rem 0.6rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid var(--grey-100);
  h5 {
    margin: 0;
  }
  .buttons {
    display: flex;
    gap: 1rem;
    .btn {
      font-size: 0.5rem;
      background-color: var(--green-dark);
      svg {
        margin-right: 0.3rem;
        font-size: 0.9rem;
      }
    }
    .btn:hover {
      background-color: var(--primary-600);
    }
    .remove-btn {
      background-color: var(--red-dark);
    }
    .remove-btn:hover {
      background-color: #222;
    }
  }
  @media (max-width: 850px) {
    flex-direction: column;
    h5 {
      text-align: center;
      padding-bottom: 0.2rem;
    }
  }
  @media (max-width: 550px) {
    flex-direction: column;
    .btn {
      span {
        display: none;
      }
    }
  }
`;

export default Wrapper;
