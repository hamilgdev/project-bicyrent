import { create } from 'zustand'

const useUiStore = create((set, get) => ({
  isOpenModal: false,
  isOpensidebar: false,

  setModal: (isOpenModal) => set({ isOpenModal }),
  setSidebar: (isOpensidebar) => set({ isOpensidebar })

  // setCleaningModal: () => {
  //   const { isOpenModal, actionModal } = get()
  //   if (isOpenModal && actionModal) {
  //     set({ isOpenModal: false, actionModal: null })
  //   }
  // },
}))

export default useUiStore
