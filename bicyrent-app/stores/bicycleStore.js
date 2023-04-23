import { create } from 'zustand'

const useBicycleStore = create((set) => ({
  bicycles: [],
  bicycle: null,
  dispatchBicycle: {},
  bicycleAction: null,

  setBicycle: (bicycle) => set({ bicycle }),
  setBicycles: (bicycles) => set({ bicycles }),
  setBicycleAction: (bicycleAction) => set({ bicycleAction }),
  setDispatchBicycle: (dispatchBicycle) => set({ dispatchBicycle })
}))

export default useBicycleStore
