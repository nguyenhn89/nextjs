import { cookies } from 'next/headers'

export async function getCurrentUser() {
  const cookieStore = await cookies()
  const accessToken = cookieStore.get('access_token')?.value

  if (!accessToken) return null

  const res = await fetch('http://localhost:8081/api/auth/me', {
    headers: {
      Cookie: `access_token=${accessToken}`,
    },
    cache: 'no-store',
  })

  if (!res.ok) return null
  return res.json()
}
