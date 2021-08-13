import Layout from '@components/Layout/Layout'
import 'semantic-ui-css/semantic.min.css'
import '../global.css'
import { AppProps } from 'next/app'

//import '../style.css'
import CartProvider from '@store/Cart'

function MyApp({ Component, pageProps }: AppProps) {
  //es perfecto para usar providers,  context /  theme, data
  //tambien se usa para crear layouts y pasarlo para que englobe a todo
  // pasar props adicionales
  return (
    <CartProvider>
      <Component {...pageProps} />
    </CartProvider>
  )
}

// Only uncomment this method if you have blocking data requirements for
// every single page in your application. This disables the ability to
// perform automatic static optimization, causing every page in your app to
// be server-side rendered.
//
// MyApp.getInitialProps = async (appContext) => {
//   // calls page's `getInitialProps` and fills `appProps.pageProps`
//   const appProps = await App.getInitialProps(appContext);
//
//   return { ...appProps }
// }

export default MyApp
