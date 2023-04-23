import Link from 'next/link'

export const BannerHomeSection = () => {
  return (
    <section className="relative flex p-12 flex-col h-screen bg-cover bg-center after:content-[''] after:absolute after:inset-0 after:backdrop-blur-md after:bg-opacity-50 after:z-[1]"
      style={{ backgroundImage: 'url(\'/images/banner.jpeg\')' }}
    >
      <div className='mt-12 z-10'>
        <div className='mb-8 text-white'>
          <h1 className='text-8xl font-bold'>Red de Bicicletas</h1>
          <p className='text-2xl'>Primera red de Bicicletas Urbanos, Inscribete y Disfruta.</p>
        </div>

        <Link href="/bicycles" className='py-4 px-8 text-lg rounded-md bg-orange-400 text-white'>¡Vamos a empezar!</Link>
      </div>
    </section>
  )
}
