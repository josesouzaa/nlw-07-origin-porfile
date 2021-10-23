import { createContext, useEffect, useState } from 'react'

export const SocialsContext = createContext({})

export function SocialsProvider(props) {
  const [githubData, setGithubData] = useState({})

  const links = [
    { youtube: 'channel/UCHrDxaL4qaAh9rzjdA7Ezgg' },
    { facebook: 'jose.desouza.75470' },
    { instagram: 'jose_dsouza' },
    { twitter: 'jose_dsouza_' }
  ]

  const github = {
    user: 'josesouzaa',
    api: 'https://api.github.com/users/josesouzaa'
  }

  useEffect(() => {
    async function getGithubProfileInfos(url) {
      const response = await fetch(url)
      const userData = await response.json()
      setGithubData(userData)
    }
    getGithubProfileInfos(github.api)
  }, [])

  return (
    <SocialsContext.Provider value={{ links, githubData }}>
      {props.children}
    </SocialsContext.Provider>
  )
}
