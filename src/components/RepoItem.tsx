interface RepoItemProps {
  repository: {
    name: string;
    description: string;
    html_url: string;
  }
}

export function RepoItem({ repository }: RepoItemProps) {
  return (
    <>
      <li>
        <strong>{repository.name}</strong>
        <p>{repository.description}</p>
        <a href={repository.html_url}
          title={repository.name}
          target='_blank'>Acessar repositório</a>
      </li>
    </>
  )
}
