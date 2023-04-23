
export const BicycleCard = ({ color, model, owner, ubication }) => {
  const { name } = owner

  return (
    <article className="bg-slate-100 rounded-t-md shadow-lg overflow-hidden">
      <header>
        <figure className="max-w-lg">
          <img src="/images/bici.jpg" alt="" />
        </figure>
      </header>
      <main className="px-4 my-2">
        <h2 className="text-2xl font-bold">{name}</h2>
      </main>
      <footer className="flex justify-between px-4 my-2">
        <span className="inline-flex items-center gap-1 text-md">
          <small>color:</small>{color}
        </span>
        <span className="inline-flex items-center gap-1 text-md">
          <small>modelo:</small>{model}
        </span>
      </footer>
    </article>
  )
}
