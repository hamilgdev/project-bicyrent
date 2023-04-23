export const MainModal = ({ isOpen, children }) => {
  const modalStyles = { display: isOpen ? 'block' : 'none' }

  return (
    <aside className="fixed top-0 left-0 backdrop-blur-lg w-full h-full z-[9999]"
      style={modalStyles}
    >
      <div className="flex flex-col p-12 items-center justify-center h-full">
        {children}
      </div>
    </aside>
  )
}
