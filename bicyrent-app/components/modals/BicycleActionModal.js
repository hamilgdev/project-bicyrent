import { shallow } from 'zustand/shallow'

import { BicycleForm, MainModal } from '@/components'

import useUserStore from '@/stores/userStore'
import useBicycleStore from '@/stores/bicycleStore'
import useUiStore from '@/stores/uiStore'

const NEXT_PUBLIC_API_URL_SERVER = process.env.NEXT_PUBLIC_API_URL_SERVER

export const BicycleActionModal = () => {
  const { user } = useUserStore(state => ({ user: state.user }))
  const { setModal, isOpenModal } = useUiStore(state => ({
    isOpenModal: state.isOpenModal,
    setModal: state.setModal
  }), shallow)
  const {
    bicycle,
    setBicycle,
    setDispatchBicycle
  } = useBicycleStore(state => ({
    bicycle: state.bicycle,
    setBicycle: state.setBicycle,
    setDispatchBicycle: state.setDispatchBicycle
  }), shallow)

  const closeModal = () => {
    setModal(false)
    setBicycle(null)
  }

  const handleUpdateBicycle = async () => {
    try {
      const response = await fetch(`${NEXT_PUBLIC_API_URL_SERVER}/api/bicycles/${bicycle.uid}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${user.auth_token}`
        },
        body: JSON.stringify(bicycle)
      })

      if (response.ok) {
        const bicycleUpdated = await response.json()
        setDispatchBicycle(bicycleUpdated)
      }
    } catch (error) {
      console.log(error)
    }

    setBicycle(null)
    setModal(false)
  }

  return (
    <MainModal isOpen={isOpenModal}>
      <BicycleForm
        onUpdateBicycle={handleUpdateBicycle}
        onCancel={closeModal}
      />
    </MainModal>
  )
}
