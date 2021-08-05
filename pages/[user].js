import { useRouter } from 'next/router'

export default function UserPlaylist() {
  const { query } = useRouter()

  return (
    <div className="flex flex-col">
      <div>User: {query.user}</div>
    </div>
  )
}
