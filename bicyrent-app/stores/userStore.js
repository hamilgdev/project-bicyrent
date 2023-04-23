import { create } from 'zustand'

const useUserStore = create((set, get) => ({
  user: null,
  setUser: (user) => set({ user }),
  setCleaningUser: () => {
    const { user } = get()
    if (user) {
      set({ user: null })
    }
  }
}))

export default useUserStore
