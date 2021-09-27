//bring in Head component.importing React Head Component
import Head from 'next/head';

//bring in bootstrap css with resposice css media queries
import '../styles/bootstrap.min.css';
import '../styles/globals.css';
//import Head then insert here to get the meta viewport element
//pageProps is being important also the viewport> critical with responsice css
function MyApp({ Component, pageProps }) {
  return (
    <>
    
    <Head>
      <meta name="viewport" contect="width=device-width, initial-scale=1" />
    </Head>
      <Component {...pageProps} />
      
    </>
  );
}

export default MyApp
