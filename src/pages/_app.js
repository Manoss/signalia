import '@/styles/globals.css'
import '@/styles/GridLayoutStyles.css'
import 'react-resizable/css/styles.css' // Search usage
import { SessionProvider } from "next-auth/react"
import { appWithTranslation } from 'next-i18next'
import { ContextProvider } from '../lib/contexts/displayContext'

function App({ 
  Component, 
  pageProps: {
    session,
    ...pageProps
  } }) {
  return (
  <>
    <SessionProvider session={session}>
      <ContextProvider>  
        <Component {...pageProps} />
      </ContextProvider>
    </SessionProvider>
  </>
  )
} 

export default appWithTranslation(App)