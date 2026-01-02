'use client'

export default function LoginPage() {
  const handleLogin = async () => {
    await fetch('http://localhost:8081/api/auth/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      credentials: 'include', 
      body: JSON.stringify({
        userName: 'hoangnguyen',
        password: '123456',
      }),
    })

    window.location.href = '/profile'
  }

  return (
    <button onClick={handleLogin}>
      Login
    </button>
  )
}
