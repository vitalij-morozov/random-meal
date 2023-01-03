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
  h3 {
    margin: 0;
    color: var(--primary-600);
    transition: var(--transition);
    font-size: 1.6rem;
  }
  h3:hover {
    color: var(--black);
  }
  .profile {
    background-image: url('https://cdn-icons-png.flaticon.com/512/25/25634.png');
    background-color: white;
    border: 4px solid var(--primary-600);
    border-radius: 50%;
    padding: 2rem;
    background-position: center center;
    background-size: cover;
    transition: var(--transition);
  }
  .profile:hover {
    border-color: var(--black);
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
  .user {
    display: flex;
    align-items: center;
    gap: 1.4rem;
  }
  .btn {
    color: #222;
    font-weight: bold;
    svg {
      margin-right: 0.2rem;
      font-size: 1.2rem;
    }
  }
  @media (max-width: 662px) {
    .user {
      .username {
        display: none;
      }
    }
    .profile {
      padding: 1.7rem;
    }
  }
  @media (max-width: 430px) {
    .logo {
      width: 7rem;
    }
    .btn {
      span {
        display: none;
      }
    }
  }
  @media screen and (max-width: 290px) {
    flex-direction: column;
  }
`;
export default Wrapper;
