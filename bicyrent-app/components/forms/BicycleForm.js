import { shallow } from 'zustand/shallow'

import useBicycleStore from '@/stores/bicycleStore'
import { BICYCLE_ACTIONS } from '@/types/bicycle-action.type'

export const BicycleForm = ({ onCreateBicycle, onUpdateBicycle, onCancel }) => {
  const {
    bicycle,
    setBicycle,
    bicycleAction
  } = useBicycleStore(state => ({
    bicycle: state.bicycle,
    setBicycle: state.setBicycle,
    bicycleAction: state.bicycleAction,
    setDispatchBicycle: state.setDispatchBicycle
  }), shallow)

  const { color, model, latitude, length } = bicycle || {}

  const handleClose = () => onCancel()

  const handleOnchange = (event) => {
    const { name, value } = event.target
    setBicycle({ ...bicycle, [name]: value })
  }

  const handleOnSubmit = (event) => {
    event.preventDefault()
    event.target.reset()
    switch (bicycleAction) {
    case BICYCLE_ACTIONS.UPDATE:
      onUpdateBicycle()
      break
    case BICYCLE_ACTIONS.CREATE:
      onCreateBicycle()
      break
    }
  }

  console.log({ bicycleAction })

  return (
    <form onSubmit={handleOnSubmit} className="flex flex-col gap-4 p-8 bg-slate-50 rounded-md shadow-lg">
      <div className="flex flex-col">
        <label htmlFor="color" className="font-semibold text-gray-600">Color</label>
        <input
          type="text"
          id="color"
          name="color"
          value={color}
          onChange={handleOnchange}
          className="p-2 border-2 border-gray-400 rounded-md"
        />
      </div>

      <div className="flex flex-col">
        <label htmlFor="model" className="font-semibold text-gray-600">Modelo</label>
        <input
          type="text"
          id="model"
          name="model"
          value={model}
          onChange={handleOnchange}
          className="p-2 border-2 border-gray-400 rounded-md"
        />
      </div>

      <div className="flex flex-col">
        <label htmlFor="latitude" className="font-semibold text-gray-600">Latitud</label>
        <input
          type="text"
          id="latitude"
          name="latitude"
          value={latitude}
          onChange={handleOnchange}
          className="p-2 border-2 border-gray-400 rounded-md"
        />
      </div>

      <div className="flex flex-col">
        <label htmlFor="length" className="font-semibold text-gray-600">Longitud</label>
        <input
          type="text"
          id="length"
          name="length"
          value={length}
          onChange={handleOnchange}
          className="p-2 border-2 border-gray-400 rounded-md"
        />
      </div>

      <div className="flex gap-8 justify-center mt-4">
        <button type='reset' onClick={handleClose} className="px-8 py-1 bg-slate-200 rounded-md text-md text-gray-700">Cancelar</button>
        <button className="px-8 py-1 bg-blue-200 rounded-md text-md text-gray-700" type="submit">
          {bicycleAction === BICYCLE_ACTIONS.UPDATE ? 'Actualizar' : 'Crear'}
        </button>
      </div>
    </form>
  )
}
