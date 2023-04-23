import Head from 'next/head'

export const LoginLayout = ({ children, title }) => {
  return (
    <>
      <Head>
        <title>Bicyrent | {title}</title>
      </Head>
      <main className="h-screen flex justify-center items-center flex-col | after:content-[''] after:absolute after:inset-0 after:backdrop-blur-sm after:bg-opacity-50 after:z-[1] after:h-full after:bg-orange-900"
        style={{ background: 'url(/images/bicy-log.jpeg) no-repeat center center fixed' }}
      >
        <div className='flex flex-col items-center z-10 rounded-md p-12 shadow-md bg-slate-200'>
          {children}
        </div>
      </main>

    </>

  )
}
