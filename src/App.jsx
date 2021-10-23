import { Avatar, Container } from './styles'

import Selo from '../images/build.svg'
import Github from '../images/github.svg'

import SocialList from './components/SocialList'

import { useContext } from 'react'
import { SocialsContext } from './SocialsContext'

function App() {
  const { githubData } = useContext(SocialsContext)
  const { avatar_url, html_url, name, bio, login } = githubData

  return (
    <Container>
      <Avatar>
        <span>
          <img src={Selo} alt="Selo Rocketseat" />
        </span>
        <img src={avatar_url} alt={name} />
      </Avatar>

      <h1>{name}</h1>
      <a href={html_url} target="_blank">
        <img src={Github} alt="Ícone github" />
        {login}
      </a>

      <p>{bio}</p>

      <SocialList />
    </Container>
  )
}

export default App
