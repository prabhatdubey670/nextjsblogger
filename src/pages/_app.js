import '@/styles/globals.css';
import Navbar from './navbar';
export default function App({ Component, pageProps }) {
  return (
    <>
      <Navbar />
      <Component {...pageProps} />
    </>
  );
}
