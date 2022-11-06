import { useState, useEffect } from "react";
import { RepoItem } from "./RepoItem";
import "../styles/reposiitories.scss"

const URL_BASE = "https://api.github.com/orgs/rocketseat/repos"


interface Repository {
  name: string;
  description: string;
  html_url: string;
}

export function RepoList() {
  const [repos, setRepos] = useState<Repository[]>([])

  function getRepos() {
    fetch(URL_BASE)
      .then(response => response.json())
      .then(data => setRepos(data))
  }

  useEffect(() => {
    getRepos()
  }, [])

  return (
    <section className="repository-list">
      <h1>Lista de Repositórios</h1>
      <ul>
        {repos.map(repository => {
          return <RepoItem key={repository.name}
            repository={repository} />
        })
        }
      </ul>
    </section>
  )
}
