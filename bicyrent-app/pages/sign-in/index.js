import { useEffect } from 'react'
import { useRouter } from 'next/router'

import { LoginLayout } from '@/layouts'
import { es } from '@/translations'
import useUserStore from '@/stores/userStore'

import { useSession, signIn } from 'next-auth/react'

const NEXT_PUBLIC_API_URL_SERVER = process.env.NEXT_PUBLIC_API_URL_SERVER

export default function SignInPage () {
  const router = useRouter()

  const { data: session } = useSession()
  const { singin } = es
  const { setUser } = useUserStore(state => ({ setUser: state.setUser }))

  const handleGoogleLogin = () => signIn('google')

  useEffect(() => {
    if (session) {
      fetch(`${NEXT_PUBLIC_API_URL_SERVER}/api/users/authenticate`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          email: session.user.email,
          full_name: session.user.name,
          avatar_url: session.user.image
        })
      })
        .then(response => response.json())
        .then(response => {
          setUser(response)
          router.replace('/')
        })
        .catch(console.error)
    }
  }, [session])

  return (
    <LoginLayout title='Inciar sesión'>
      <div className='l-wrapper text-center mb-6'>
        <h1 className='text-2xl'>{singin.title}</h1>
        <p>{singin.subtitle}</p>
      </div>

      <button onClick={handleGoogleLogin} className='px-4 py-2 rounded-md bg-orange-900 text-white border-2 border-orange-800'>{singin.button}</button>
    </LoginLayout>
  )
}
