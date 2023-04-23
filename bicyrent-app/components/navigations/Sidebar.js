import { shallow } from 'zustand/shallow'

import useUiStore from '@/stores/uiStore'
import { BicycleForm } from '../forms'
import useBicycleStore from '@/stores/bicycleStore'
import useUserStore from '@/stores/userStore'

const NEXT_PUBLIC_API_URL_SERVER = process.env.NEXT_PUBLIC_API_URL_SERVER

export const Sidebar = () => {
  const { user } = useUserStore(state => ({ user: state.user }))
  const { setSidebar } = useUiStore(state => ({ setSidebar: state.setSidebar }))
  const {
    bicycle,
    setBicycle,
    setDispatchBicycle
  } = useBicycleStore(state => ({
    bicycle: state.bicycle,
    setBicycle: state.setBicycle,
    setDispatchBicycle: state.setDispatchBicycle
  }), shallow)

  const closeSidebar = () => {
    setBicycle(null)
    setSidebar(false)
  }

  const handleCreateBicycle = async () => {
    try {
      const response = await fetch(`${NEXT_PUBLIC_API_URL_SERVER}/api/bicycles`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${user.auth_token}`
        },
        body: JSON.stringify(bicycle)
      })
      if (response.ok) {
        const bicycleCreated = await response.json()
        setSidebar(false)
        setDispatchBicycle(bicycleCreated)
      }
    } catch (error) {
      console.log(error)
    }

    setBicycle(null)
  }

  return (
    <aside
      className="fixed top-0 right-0 w-1/2 max-w-screen-sm h-full p-8 shadow-lg z-[9999] | after:content-[''] after:absolute after:inset-0 after:backdrop-blur-md after:bg-opacity-5 after:z-[1] after:h-full after:bg-slate-50"
    >
      <section className='relative z-10'>
        <h2 className="text-center text-2xl font-bold mb-4">Crea una nueva Bicicleta</h2>

        <BicycleForm
          onCreateBicycle={handleCreateBicycle}
          onCancel={closeSidebar}
        />
      </section>

    </aside>
  )
}
