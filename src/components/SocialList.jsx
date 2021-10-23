import styled from 'styled-components'

import { useContext } from 'react'
import { SocialsContext } from '../SocialsContext'

const List = styled.ul`
  margin-top: 4rem;
  padding: 0;

  list-style: none;

  display: flex;
  gap: 0.5rem;
  justify-content: center;
  align-items: center;

  li a img {
    transition: all 0.3s;
    &:hover {
      filter: brightness(1.2);
    }
  }
`

export function SocialList() {
  const { links } = useContext(SocialsContext)

  return (
    <List>
      {links.map(social => (
        <li key={Object.keys(social)}>
          <a
            href={`https://${Object.keys(social)}.com/${
              social[Object.keys(social)]
            }`}
            target="_blank"
          >
            <img
              src={`../../images/${Object.keys(social)}.svg`}
              alt={`Ícone ${Object.keys(social)}`}
            />
          </a>
        </li>
      ))}
    </List>
  )
}

export default SocialList
