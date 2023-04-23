import { useEffect } from 'react'
import { shallow } from 'zustand/shallow'

import useUserStore from '@/stores/userStore'
import useBicycleStore from '@/stores/bicycleStore'
import useUiStore from '@/stores/uiStore'

import { MainLayout } from '@/layouts'
import { LeafletMap } from '@/components/Map'
import {
  BicyclePanelSection,
  BicycleSection,
  Sidebar
} from '@/components'

const NEXT_PUBLIC_API_URL_SERVER = process.env.NEXT_PUBLIC_API_URL_SERVER

export default function BicyclesPage () {
  const { user } = useUserStore(state => ({ user: state.user }))
  const { isOpensidebar } = useUiStore(state => ({
    isOpensidebar: state.isOpensidebar
  }))
  const {
    setBicycles,
    dispatchBicycle
  } = useBicycleStore(state => ({
    dispatchBicycle: state.dispatchBicycle,
    setBicycles: state.setBicycles
  }), shallow)

  useEffect(() => {
    fetch(`${NEXT_PUBLIC_API_URL_SERVER}/api/bicycles`)
      .then(response => response.json())
      .then(setBicycles)
      .catch(console.error)
  }, [dispatchBicycle])

  return (
    <MainLayout title="Bicicletas">
      {user && (<BicyclePanelSection />)}

      {user && (<LeafletMap />)}

      <BicycleSection />

      {isOpensidebar && <Sidebar />}
    </MainLayout>
  )
}
