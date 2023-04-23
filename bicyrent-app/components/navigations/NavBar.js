import Link from 'next/link'
import { Logo } from '@/components'
import useUserStore from '@/stores/userStore'

import { signOut } from 'next-auth/react'
import { shallow } from 'zustand/shallow'

const NEXT_PUBLIC_API_URL_SERVER = process.env.NEXT_PUBLIC_API_URL_SERVER

export const NavBar = () => {
  const {
    user,
    setCleaningUser
  } = useUserStore(state => ({
    user: state.user,
    setCleaningUser: state.setCleaningUser
  }), shallow)

  const handleSessionLogout = async () => {
    try {
      const response = await fetch(`${NEXT_PUBLIC_API_URL_SERVER}/api/users/logout`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          email: user.email
        })
      })
      if (response.ok) {
        setCleaningUser()
        signOut()
      }
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <header className='sticky top-0 h-12 z-[9999] | bg-orange-600 text-white shadow-lg'>
      <div className='l-wrapper flex justify-between items-center h-full'>
        <Logo />

        <nav>
          <ul className='flex gap-6 items-center'>
            <li>
              <Link href="/">Inicio</Link>
            </li>
            <li>
              <Link href="/about-us">Nosotros</Link>
            </li>
            <li>
              <Link href="/bicycles">Bicicletas</Link>
            </li>
            <li>
              {user
                ? (
                  <button onClick={handleSessionLogout} className='px-2 py-1 bg-orange-900 rounded-md'>Cerrar sesión</button>
                )
                : (
                  <Link href="/sign-in" className='p-2 bg-orange-700 rounded-md'>Iniciar sesión</Link>
                )}

            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}
