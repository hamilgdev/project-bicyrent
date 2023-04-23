import { NavBar } from '@/components'
import Head from 'next/head'

export const MainLayout = ({ children, className, title }) => {
  return (
    <>
      <Head>
        <title>Bicyrent | {title}</title>
      </Head>

      <NavBar />

      <main className={className}>{children}</main>
    </>
  )
}
