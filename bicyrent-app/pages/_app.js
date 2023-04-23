import { SessionProvider } from 'next-auth/react'

import '@/styles/globals.css'
import 'leaflet/dist/leaflet.css'

export default function App ({
  Component,
  pageProps: { session, ...pageProps }
}) {
  return (
    <SessionProvider session={session}>
      <Component {...pageProps} />
    </SessionProvider>
  )
}
