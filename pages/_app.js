import '../styles/globals.css'
import PagesLayout from './layout'

function MyApp({ Component, pageProps }) {
  return <PagesLayout>
    <Component {...pageProps} />
  </PagesLayout>
}

export default MyApp
