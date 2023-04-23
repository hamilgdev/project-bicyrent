
import useUserStore from '@/stores/userStore'
import useBicycleStore from '@/stores/bicycleStore'

import { BicycleCard } from '@/components'

export const BicycleSection = () => {
  const { user } = useUserStore(state => ({ user: state.user }))

  const { bicycles } = useBicycleStore(state => ({
    bicycles: state.bicycles
  }))

  const onTopStyles = user ? '-mt-12 mx-4 rounded-t-xl shadow-xl z-[9999]' : ''

  return (
    <section className={`relative pb-12 l-wrapper bg-slate-50 ${onTopStyles}`}>
      <h2 className="text-2xl font-bold text-gray-700 py-4">Bicicletas</h2>
      <div className='grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4'>
        {bicycles && bicycles.map((
          { uid, color, model, owner, ubication }
        ) => (
          <BicycleCard key={uid}
            color={color}
            model={model}
            ubication={ubication}
            owner={owner}
          />
        ))}
      </div>
    </section>
  )
}
