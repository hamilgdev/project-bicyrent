import { shallow } from 'zustand/shallow'

import useUserStore from '@/stores/userStore'
import useBicycleStore from '@/stores/bicycleStore'
import useUiStore from '@/stores/uiStore'

import { BICYCLE_ACTIONS } from '@/types/bicycle-action.type'
import { BicycleActionModal } from '@/components'

const NEXT_PUBLIC_API_URL_SERVER = process.env.NEXT_PUBLIC_API_URL_SERVER

export const BicyclePanelSection = () => {
  const { user } = useUserStore(state => ({ user: state.user }))

  const {
    bicycles,
    setBicycle,
    setBicycleAction,
    setDispatchBicycle
  } = useBicycleStore(state => ({
    bicycles: state.bicycles,
    setBicycle: state.setBicycle,
    setBicycleAction: state.setBicycleAction,
    setDispatchBicycle: state.setDispatchBicycle
  }), shallow)

  const { setModal } = useUiStore(state => ({ setModal: state.setModal }))

  const onUpdateBicycle = (bicycle) => {
    setBicycleAction(BICYCLE_ACTIONS.UPDATE)
    setModal(true)

    const copyBycicle = {
      uid: bicycle.uid,
      color: bicycle.color,
      model: bicycle.model,
      latitude: bicycle.ubication.lat,
      length: bicycle.ubication.lng
    }

    setBicycle(copyBycicle)
  }

  const handleDeleteBicycle = async (bicycle) => {
    const confirm = window.confirm('¿Estás seguro de eliminar esta bicicleta?')
    if (!confirm) return

    try {
      const response = await fetch(`${NEXT_PUBLIC_API_URL_SERVER}/api/bicycles/${bicycle.uid}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${user.auth_token}`
        }
      })
      if (response.ok) { setDispatchBicycle({}) }
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <>
      <section className="my-8">
        <h2 className="text-center text-2xl font-bold mb-4">Panel de Bicicletas</h2>

        <table className="w-full table-auto border border-slate-400">
          <thead>
            <tr>
              <th className="p-2 border border-slate-300">Color</th>
              <th className="p-2 border border-slate-300">Modelo</th>
              <th className="p-2 border border-slate-300">Ubicación</th>
              <th className="p-2 border border-slate-300">Acciones</th>
            </tr>
          </thead>
          <tbody>
            {bicycles && bicycles.map((bicycle) => {
              const { uid, color, model, ubication } = bicycle
              const { lat, lng } = ubication
              return (
                <tr key={uid} className="hover:bg-slate-50">
                  <td className="p-2 border border-slate-300">{color}</td>
                  <td className="p-2 border border-slate-300">{model}</td>
                  <td className="p-2 border border-slate-300">{lat}, {lng}</td>
                  <td className="flex gap-4 p-2 border border-slate-300">
                    <button onClick={() => onUpdateBicycle(bicycle)} className="flex-1 bg-slate-200 rounded-md text-md text-gray-700">Actualizar</button>
                    <button onClick={() => handleDeleteBicycle(bicycle)} className="flex-1 bg-red-200 rounded-md text-md text-gray-700">Eliminar</button>
                  </td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </section>

      <BicycleActionModal />
    </>
  )
}
