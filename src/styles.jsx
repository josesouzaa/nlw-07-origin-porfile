import styled from 'styled-components'

export const Container = styled.div`
  max-width: 250px;
  margin: 0 auto;
  text-align: center;

  color: var(--grey);
  > h1 {
    margin-top: 1.5rem;
  }

  > a {
    color: var(--grey);
    text-decoration: none;

    margin-top: 0.25rem;

    display: flex;
    gap: 0.75rem;
    justify-content: center;
    align-items: center;
  }

  > p {
    margin-top: 2rem;
  }
`

export const Avatar = styled.div`
  width: 10rem;
  margin: 11.5rem auto 0;
  position: relative;

  span {
    position: absolute;
    top: -15px;
    z-index: 1;
  }

  > img {
    width: 10rem;
    height: 11.5rem;
    object-fit: cover;

    clip-path: polygon(50% 0, 100% 25%, 100% 75%, 50% 100%, 0 75%, 0 25%);
  }
`
