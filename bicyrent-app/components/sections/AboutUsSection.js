
import { es } from '@/translations'
import Link from 'next/link'

export const AboutUsSection = () => {
  const { aboutUs } = es

  return (
    <section className='flex items-center lg:justify-center h-screen bg-cover bg-no-repeat bg-right-top text-center'
      style={{ backgroundImage: 'url(\'/images/about-bicycle.jpeg\')' }}
    >

      <div className='relative flex flex-col justify-center flex-1 p-8 h-full bg-cover bg-center lg:max-w-lg'

      >
        <h1 className='text-8xl font-bold text-white'>{aboutUs.title}</h1>
      </div>

      <div className='relative flex flex-col justify-center flex-1 p-8 h-full bg-transparent | after:content-[""] after:absolute after:inset-0 after:backdrop-blur-md after:bg-opacity-50 after:z-[1] after:h-full after:bg-orange-900 lg:max-w-lg'>
        <h2 className='z-10 text-orange-300 text-2xl mb-5 font-semibold'>{aboutUs.subtitle}</h2>
        <p className='z-10 text-md text-white mb-8'>{aboutUs.paragraph}</p>

        <Link href="/bicycles" className='z-10 self-center px-8 py-4 bg-orange-600 rounded-lg text-white'>{aboutUs.button}</Link>
      </div>

    </section>
  )
}
