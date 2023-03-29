import '@/styles/globals.css'
import i18n from '../../helpers/i18n'
import { I18nextProvider } from 'react-i18next'
import { SessionProvider } from "next-auth/react"
import { Suspense } from 'react'

export default function App({ 
  Component, 
  pageProps: {
    session,
    ...pageProps
  } }) {
  return (
  <>
    <Suspense fallback="Loadding data...">
    <SessionProvider session={session}>  
    <I18nextProvider i18n={i18n}>
      <Component {...pageProps} />
    </I18nextProvider>
    </SessionProvider>
    </Suspense>
  </>
  )
} 