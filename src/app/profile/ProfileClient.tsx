'use client'

import { useEffect, useState } from 'react'

type Role = {
  authority: string
}

type CurrentUser = {
  username: string
  roles: Role[]
}

export default function ProfileClient() {
  const [user, setUser] = useState<CurrentUser | null>(null)

  useEffect(() => {
    fetch('http://localhost:8081/api/auth/me', {
      credentials: 'include',
    })
      .then(res => (res.ok ? res.json() : null))
      .then((data: CurrentUser | null) => {
        setUser(data)
      })
  }, [])

  if (!user) return <div>Unauthorized</div>

  return (
    <div>
      <div>Welcome {user.username}</div>
      <div>
        Roles: {user.roles.map(r => r.authority).join(', ')}
      </div>
    </div>
  )
}
